<script lang="ts">
  import { page } from "$app/stores"
  import { browser } from "$app/environment"
  import { onMount } from "svelte"
  import Fuse from "fuse.js"
  import { goto } from "$app/navigation"
  import { dev } from "$app/environment"
  import { WebsiteName } from "../../../config"

  const fuseOptions = {
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
      { name: "body", weight: 1 },
    ],
    ignoreLocation: true,
    threshold: 0.3,
  }

  let fuse: Fuse<Result> | undefined = $state()

  let loading = $state(true)
  let error = $state(false)
  let searchStats = $state<{ totalItems: number; categories: any } | null>(null)

  onMount(async () => {
    try {
      const response = await fetch("/search/api.json")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const searchData = await response.json()

      if (searchData.error) {
        throw new Error(searchData.error)
      }

      if (searchData && searchData.index && searchData.indexData) {
        const index = Fuse.parseIndex(searchData.index)
        fuse = new Fuse<Result>(searchData.indexData, fuseOptions, index)
        searchStats = {
          totalItems: searchData.totalItems || 0,
          categories: searchData.categories || {},
        }
        console.log(
          `Search index loaded: ${searchData.totalItems} items across ${Object.keys(searchData.categories).length} categories`,
        )
      } else {
        throw new Error("Invalid search data format")
      }
    } catch (e) {
      console.error("Failed to load search data", e)
      error = true
    } finally {
      loading = false
      document.getElementById("search-input")?.focus()
    }
  })

  type Result = {
    item: {
      title: string
      description: string
      body: string
      path: string
      category: string
    }
    score?: number
  }
  let results: Result[] = $state([])

  // searchQuery is $page.url.hash minus the "#" at the beginning if present
  let searchQuery = $state(decodeURIComponent($page.url.hash.slice(1) ?? ""))
  $effect(() => {
    if (fuse) {
      results = fuse.search(searchQuery)
    }
  })
  // Update the URL hash when searchQuery changes so the browser can bookmark/share the search results
  $effect(() => {
    if (browser && window.location.hash.slice(1) !== searchQuery) {
      goto("#" + searchQuery, { keepFocus: true })
    }
  })

  let focusItem = $state(0)
  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      searchQuery = ""
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      focusItem += event.key === "ArrowDown" ? 1 : -1
      if (focusItem < 0) {
        focusItem = 0
      } else if (focusItem > results.length) {
        focusItem = results.length
      }
      if (focusItem === 0) {
        document.getElementById("search-input")?.focus()
      } else {
        document.getElementById(`search-result-${focusItem}`)?.focus()
      }
    }
  }
</script>

<svelte:window onkeydown={onKeyDown} />

<svelte:head>
  <title>Search - {WebsiteName}</title>
  <meta
    name="description"
    content="Search our website for workouts, recipes, blog posts, and more."
  />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto">
  <!-- Header -->
  <div class="text-center mb-8">
    <h1
      class="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      Search
    </h1>
    <p class="text-xl text-slate-600 mb-8">
      Find workouts, recipes, blog posts, and more across our entire website.
    </p>
  </div>

  <!-- Search Input -->
  <div class="max-w-2xl mx-auto mb-8">
    <div class="relative">
      <input
        id="search-input"
        type="text"
        placeholder="Search for workouts, recipes, blog posts..."
        class="input input-bordered input-lg w-full pr-12"
        bind:value={searchQuery}
        on:keydown={onKeyDown}
      />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          class="w-6 h-6 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  {#if loading}
    <div class="text-center py-12">
      <div class="loading loading-spinner loading-lg mb-4"></div>
      <p class="text-slate-600">Loading search index...</p>
    </div>
  {/if}

  <!-- Error State -->
  {#if error}
    <div class="text-center py-12">
      <div class="text-6xl mb-4">🔍</div>
      <h2 class="text-2xl font-bold mb-4">Search Unavailable</h2>
      <p class="text-slate-600 mb-6">
        We're having trouble loading the search index. Please try again later.
      </p>
      <button
        class="btn btn-primary"
        on:click={() => {
          loading = true
          error = false
          // Reload the page to retry
          window.location.reload()
        }}
      >
        Try Again
      </button>
    </div>
  {/if}

  <!-- No Results -->
  {#if !loading && searchQuery.length > 0 && results.length === 0 && !error}
    <div class="text-center py-12">
      <div class="text-6xl mb-4">🔍</div>
      <h2 class="text-2xl font-bold mb-4">No Results Found</h2>
      <p class="text-slate-600 mb-6">
        We couldn't find anything matching "{searchQuery}". Try different
        keywords or browse our categories.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/workouts" class="btn btn-outline">Browse Workouts</a>
        <a href="/recipes" class="btn btn-outline">Browse Recipes</a>
        <a href="/blog" class="btn btn-outline">Browse Blog</a>
      </div>
      {#if dev}
        <div class="text-center mt-4 font-mono text-sm text-slate-500">
          Development mode: if you're missing content, rebuild your local search
          index with `npm run build`
        </div>
      {/if}
    </div>
  {/if}

  <!-- Search Results -->
  {#if !loading && results.length > 0}
    <div class="mb-6">
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <p class="text-slate-600">
          Found <strong>{results.length}</strong> result{results.length !== 1
            ? "s"
            : ""} for "<strong>{searchQuery}</strong>"
        </p>
        {#if searchStats}
          <div class="text-sm text-slate-500">
            Searching across {searchStats.totalItems} items
          </div>
        {/if}
      </div>
    </div>

    <div class="space-y-4">
      {#each results as result, i}
        <a
          href={result.item.path || "/"}
          id="search-result-{i + 1}"
          class="card bg-white shadow-lg border border-primary/10 hover:shadow-xl transition-shadow block"
        >
          <div class="card-body">
            <div class="flex items-start gap-4">
              <div
                class="flex-none w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
              >
                {#if result.item.category === "workout"}
                  <span class="text-2xl">💪</span>
                {:else if result.item.category === "recipe"}
                  <span class="text-2xl">🍽️</span>
                {:else if result.item.category === "blog"}
                  <span class="text-2xl">📝</span>
                {:else if result.item.category === "recovery"}
                  <span class="text-2xl">🧘‍♀️</span>
                {:else}
                  <span class="text-2xl">📄</span>
                {/if}
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-xl font-bold text-primary">
                    {result.item.title}
                  </h3>
                  <span class="badge badge-outline badge-sm capitalize">
                    {result.item.category}
                  </span>
                </div>
                <p class="text-sm text-slate-500 mb-2">{result.item.path}</p>
                <p class="text-slate-600 line-clamp-2">
                  {result.item.description}
                </p>
                {#if result.score !== undefined}
                  <p class="text-xs text-slate-400 mt-2">
                    Relevance: {Math.round((1 - result.score) * 100)}%
                  </p>
                {/if}
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  {/if}

  <!-- Empty State -->
  {#if !loading && searchQuery.length === 0 && !error}
    <div class="text-center py-12">
      <div class="text-6xl mb-4">🔍</div>
      <h2 class="text-2xl font-bold mb-4">What are you looking for?</h2>
      <p class="text-slate-600 mb-8">
        Search for workouts, recipes, blog posts, or any other content on our
        website.
      </p>

      {#if searchStats}
        <div class="mb-8">
          <div class="stats stats-horizontal shadow">
            <div class="stat">
              <div class="stat-title">Total Items</div>
              <div class="stat-value text-primary">
                {searchStats.totalItems}
              </div>
            </div>
            <div class="stat">
              <div class="stat-title">Workouts</div>
              <div class="stat-value text-secondary">
                {searchStats.categories.workouts || 0}
              </div>
            </div>
            <div class="stat">
              <div class="stat-title">Recipes</div>
              <div class="stat-value text-accent">
                {searchStats.categories.recipes || 0}
              </div>
            </div>
            <div class="stat">
              <div class="stat-title">Blog Posts</div>
              <div class="stat-value">{searchStats.categories.blog || 0}</div>
            </div>
            <div class="stat">
              <div class="stat-title">Recovery</div>
              <div class="stat-value">
                {searchStats.categories.recovery || 0}
              </div>
            </div>
          </div>
        </div>
      {/if}

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div class="text-center">
          <div class="text-3xl mb-2">💪</div>
          <h3 class="font-semibold mb-1">Workouts</h3>
          <p class="text-sm text-slate-600">
            Find training plans and exercises
          </p>
        </div>
        <div class="text-center">
          <div class="text-3xl mb-2">🍽️</div>
          <h3 class="font-semibold mb-1">Recipes</h3>
          <p class="text-sm text-slate-600">Discover healthy meal ideas</p>
        </div>
        <div class="text-center">
          <div class="text-3xl mb-2">🧘‍♀️</div>
          <h3 class="font-semibold mb-1">Recovery</h3>
          <p class="text-sm text-slate-600">
            Recovery techniques and therapies
          </p>
        </div>
        <div class="text-center">
          <div class="text-3xl mb-2">📝</div>
          <h3 class="font-semibold mb-1">Blog</h3>
          <p class="text-sm text-slate-600">Read fitness and nutrition tips</p>
        </div>
      </div>

      <!-- Popular Search Terms -->
      <div class="mt-8">
        <h3 class="text-lg font-semibold mb-4">Popular Searches</h3>
        <div class="flex flex-wrap justify-center gap-2">
          <button
            class="btn btn-outline btn-sm"
            on:click={() => (searchQuery = "squats")}
          >
            Squats
          </button>
          <button
            class="btn btn-outline btn-sm"
            on:click={() => (searchQuery = "protein")}
          >
            Protein
          </button>
          <button
            class="btn btn-outline btn-sm"
            on:click={() => (searchQuery = "cardio")}
          >
            Cardio
          </button>
          <button
            class="btn btn-outline btn-sm"
            on:click={() => (searchQuery = "vegetarian")}
          >
            Vegetarian
          </button>
          <button
            class="btn btn-outline btn-sm"
            on:click={() => (searchQuery = "strength")}
          >
            Strength
          </button>
          <button
            class="btn btn-outline btn-sm"
            on:click={() => (searchQuery = "beginner")}
          >
            Beginner
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>

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
  let animatedStats = {
    totalItems: 0,
    categories: 0,
    searchResults: 0,
  }

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

        // Animate stats
        animateStats(
          searchData.totalItems,
          Object.keys(searchData.categories).length,
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

  function animateStats(totalItems: number, categories: number) {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      animatedStats.totalItems = Math.floor(totalItems * easeOut)
      animatedStats.categories = Math.floor(categories * easeOut)

      if (step >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
  }

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
      animatedStats.searchResults = results.length
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
    } else if (event.key === "Enter") {
      if (focusItem > 0 && results[focusItem - 1]) {
        goto(results[focusItem - 1].item.path)
      }
    }
  }

  function getCategoryIcon(category: string) {
    switch (category.toLowerCase()) {
      case "blog":
        return "📝"
      case "recipes":
        return "🍽️"
      case "workouts":
        return "💪"
      case "recovery":
        return "🧘‍♀️"
      default:
        return "📄"
    }
  }

  function getCategoryColor(category: string) {
    switch (category.toLowerCase()) {
      case "blog":
        return "badge-primary"
      case "recipes":
        return "badge-secondary"
      case "workouts":
        return "badge-accent"
      case "recovery":
        return "badge-info"
      default:
        return "badge-neutral"
    }
  }
</script>

<svelte:head>
  <title>Search - {WebsiteName}</title>
  <meta
    name="description"
    content="Search through our comprehensive collection of fitness, nutrition, and wellness content."
  />
</svelte:head>

<!-- Hero Section -->
<div class="gradient-bg text-white py-20 relative overflow-hidden">
  <!-- Floating Background Elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div
      class="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating"
    ></div>
    <div
      class="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full floating"
      style="animation-delay: -2s;"
    ></div>
    <div
      class="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full floating"
      style="animation-delay: -4s;"
    ></div>
  </div>

  <div class="container mx-auto px-6 relative z-10">
    <div class="text-center max-w-4xl mx-auto">
      <div class="slide-in-left mb-6">
        <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Search Everything
        </h1>
      </div>

      <div class="slide-in-right mb-8">
        <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
          Find exactly what you're looking for across our comprehensive
          collection of fitness, nutrition, and wellness content.
        </p>
      </div>

      <!-- Stats Section -->
      <div class="animate-on-scroll grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.totalItems}
          </div>
          <div class="text-sm opacity-80">Total Items</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.categories}
          </div>
          <div class="text-sm opacity-80">Categories</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.searchResults}
          </div>
          <div class="text-sm opacity-80">Results</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-12 lg:py-16 px-6 max-w-6xl mx-auto">
  <!-- Search Input -->
  <div class="animate-on-scroll mb-12">
    <div class="card bg-white shadow-xl border-0">
      <div class="card-body p-8">
        <div class="relative">
          <input
            id="search-input"
            type="text"
            bind:value={searchQuery}
            placeholder="Search for workouts, recipes, articles, or anything else..."
            class="input input-bordered input-lg w-full pl-12 pr-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 search-input"
            on:keydown={onKeyDown}
          />
          <svg
            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-600"
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
          {#if searchQuery}
            <button
              class="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-ghost btn-sm btn-circle"
              on:click={() => (searchQuery = "")}
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          {/if}
        </div>

        {#if searchQuery}
          <div class="mt-4 text-sm text-gray-600">
            Press <kbd class="kbd kbd-sm">Enter</kbd> to select,
            <kbd class="kbd kbd-sm">↑↓</kbd>
            to navigate, <kbd class="kbd kbd-sm">Esc</kbd> to clear
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- Loading State -->
  {#if loading}
    <div class="animate-on-scroll text-center py-16">
      <div class="loading loading-spinner loading-lg mb-4"></div>
      <h3 class="text-xl font-bold text-gray-800 mb-2">
        Loading search index...
      </h3>
      <p class="text-gray-600">
        Please wait while we prepare your search experience.
      </p>
    </div>
  {:else if error}
    <div class="animate-on-scroll text-center py-16">
      <div class="text-6xl mb-4">⚠️</div>
      <h3 class="text-2xl font-bold text-gray-800 mb-2">
        Search temporarily unavailable
      </h3>
      <p class="text-gray-600 mb-6">
        We're experiencing technical difficulties. Please try again later.
      </p>
      <button class="btn btn-primary" on:click={() => window.location.reload()}>
        Try Again
      </button>
    </div>
  {:else if !searchQuery}
    <!-- Browse Categories -->
    <div class="animate-on-scroll">
      <h2
        class="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        Browse by Category
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div class="text-center group">
          <div
            class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
          >
            💪
          </div>
          <h3 class="font-semibold mb-2 text-lg">Workouts</h3>
          <p class="text-sm text-gray-600 mb-4">
            Find training plans and exercises
          </p>
          <a href="/workouts" class="btn btn-primary btn-sm">Browse Workouts</a>
        </div>
        <div class="text-center group">
          <div
            class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
          >
            🍽️
          </div>
          <h3 class="font-semibold mb-2 text-lg">Recipes</h3>
          <p class="text-sm text-gray-600 mb-4">Discover healthy meal ideas</p>
          <a href="/recipes" class="btn btn-secondary btn-sm">Browse Recipes</a>
        </div>
        <div class="text-center group">
          <div
            class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
          >
            🧘‍♀️
          </div>
          <h3 class="font-semibold mb-2 text-lg">Recovery</h3>
          <p class="text-sm text-gray-600 mb-4">
            Recovery techniques and therapies
          </p>
          <a href="/recovery" class="btn btn-accent btn-sm">Browse Recovery</a>
        </div>
        <div class="text-center group">
          <div
            class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
          >
            📝
          </div>
          <h3 class="font-semibold mb-2 text-lg">Blog</h3>
          <p class="text-sm text-gray-600 mb-4">
            Read fitness and nutrition tips
          </p>
          <a href="/blog" class="btn btn-info btn-sm">Browse Blog</a>
        </div>
      </div>

      <!-- Popular Search Terms -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-center mb-8">Popular Searches</h3>
        <div class="flex flex-wrap justify-center gap-3">
          {#each ["protein", "cardio", "strength training", "meal prep", "yoga", "HIIT", "nutrition", "recovery"] as term}
            <button
              class="btn btn-outline btn-sm hover:btn-primary transition-all duration-300"
              on:click={() => (searchQuery = term)}
            >
              {term}
            </button>
          {/each}
        </div>
      </div>
    </div>
  {:else}
    <!-- Search Results -->
    <div class="animate-on-scroll">
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-2">
          {results.length} Result{results.length !== 1 ? "s" : ""} for "{searchQuery}"
        </h2>
        <p class="text-gray-600">
          {results.length > 0
            ? "Click on any result to view the full content."
            : "Try adjusting your search terms."}
        </p>
      </div>

      {#if results.length > 0}
        <div class="space-y-4">
          {#each results as result, index}
            <a
              id="search-result-{index + 1}"
              href={result.item.path}
              class="block search-result-card"
              tabindex="0"
              on:keydown={(e) => {
                if (e.key === "Enter") {
                  goto(result.item.path)
                }
              }}
            >
              <div
                class="card bg-white shadow-lg hover:shadow-xl border border-gray-100"
              >
                <div class="card-body p-6">
                  <div class="flex items-start gap-4">
                    <div class="text-2xl">
                      {getCategoryIcon(result.item.category)}
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center gap-3 mb-2">
                        <h3
                          class="text-lg font-bold text-gray-800 hover:text-primary transition-colors"
                        >
                          {result.item.title}
                        </h3>
                        <span
                          class="badge {getCategoryColor(
                            result.item.category,
                          )} badge-sm"
                        >
                          {result.item.category}
                        </span>
                      </div>
                      <p class="text-gray-600 text-sm leading-relaxed mb-2">
                        {result.item.description}
                      </p>
                      <div class="text-xs text-gray-500">
                        {result.item.path}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          {/each}
        </div>
      {:else}
        <div class="text-center py-16">
          <div class="text-6xl mb-4">🔍</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">
            No results found
          </h3>
          <p class="text-gray-600 mb-6">
            Try different keywords or browse our categories above.
          </p>
          <button class="btn btn-primary" on:click={() => (searchQuery = "")}>
            Clear Search
          </button>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }

  .animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  .slide-in-left {
    animation: slideInFromLeft 0.8s ease-out;
  }

  .slide-in-right {
    animation: slideInFromRight 0.8s ease-out;
  }

  .scale-in {
    animation: scaleIn 0.6s ease-out;
  }

  .pulse-hover:hover {
    animation: pulse 0.3s ease-in-out;
  }

  .gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .floating {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .search-result-card {
    transition: all 0.3s ease;
  }

  .search-result-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .search-input {
    transition: all 0.3s ease;
  }

  .search-input:focus {
    transform: scale(1.02);
  }
</style>

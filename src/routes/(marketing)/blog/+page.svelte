<script lang="ts">
  import { sortedBlogPosts, blogInfo } from "./posts"

  // Category tabs for filtering
  const categories = [
    "All",
    "Daily Habits",
    "Fitness Fundamentals",
    "Easy Nutrition",
    "Mindset & Motivation",
    "Reviews + Routines",
  ]
  let selectedCategory = "All"

  // Filter posts by category
  $: filteredPosts =
    selectedCategory === "All"
      ? sortedBlogPosts
      : sortedBlogPosts.filter((post) => post.category === selectedCategory)
</script>

<svelte:head>
  <title>{blogInfo.name} - {blogInfo.description}</title>
  <meta
    name="description"
    content="Research-backed wellness content for your daily progress. Fitness, nutrition, and mindset tips that actually work."
  />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto">
  <div
    class="text-3xl lg:text-5xl font-medium text-primary flex gap-3 items-baseline text-center place-content-center"
  >
    <div
      class="text-center leading-relaxed font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent"
    >
      {blogInfo.name}
    </div>
  </div>
  <div class="text-lg text-center text-slate-600 mb-8">
    {blogInfo.description}
  </div>

  <!-- Category Tabs -->
  <div class="flex flex-wrap justify-center gap-2 mb-8">
    {#each categories as category}
      <button
        class="btn btn-sm {selectedCategory === category
          ? 'btn-primary'
          : 'btn-outline'}"
        on:click={() => (selectedCategory = category)}
      >
        {category}
      </button>
    {/each}
  </div>

  <!-- Featured Post -->
  {#if filteredPosts.length > 0}
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6 text-center">Featured</h2>
      <a href={filteredPosts[0].link}>
        <div
          class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl overflow-hidden"
        >
          <div class="card-body">
            <div class="flex items-center gap-2 mb-2">
              <span class="badge badge-secondary"
                >{filteredPosts[0].category}</span
              >
              <span class="text-sm opacity-80">{filteredPosts[0].readTime}</span
              >
            </div>
            <h3 class="text-2xl font-bold">{filteredPosts[0].title}</h3>
            <p class="opacity-90">{filteredPosts[0].description}</p>
            <div class="text-sm opacity-70">
              {filteredPosts[0].parsedDate?.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div class="text-sm opacity-70">
              By {filteredPosts[0].author}
            </div>
          </div>
        </div>
      </a>
    </div>
  {/if}

  <!-- Blog Posts Grid -->
  <div class="grid gap-6 md:grid-cols-2">
    {#each filteredPosts.slice(1) as post}
      <a href={post.link}>
        <div
          class="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <div class="card-body">
            <div class="flex items-center gap-2 mb-2">
              <span class="badge badge-outline badge-primary"
                >{post.category}</span
              >
              <span class="text-sm text-slate-500">{post.readTime}</span>
            </div>
            <h3
              class="text-xl font-bold text-slate-800 hover:text-primary transition-colors"
            >
              {post.title}
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              {post.description}
            </p>
            <div class="text-sm text-slate-400 mt-2">
              {post.parsedDate?.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div class="text-sm text-slate-400">
              By {post.author}
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>

  <!-- Newsletter Signup -->
  <div class="mt-16 text-center">
    <div class="card bg-base-100 shadow-lg border border-primary/20">
      <div class="card-body">
        <h3 class="text-2xl font-bold">Get Driven Daily</h3>
        <p class="text-slate-600 mb-4">
          3x/week health boosts to your inbox. Research-backed tips, quick
          workouts, and meal ideas.
        </p>
        <div class="flex gap-2 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            class="input input-bordered flex-1 max-w-xs"
          />
          <button class="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</div>

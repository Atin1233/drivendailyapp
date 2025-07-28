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

<!-- Hero Section - Blog Focused -->
<div
  class="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden"
>
  <!-- Animated Book and Reading Icons -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 text-6xl animate-bounce">📚</div>
      <div class="absolute top-20 right-20 text-4xl animate-pulse">✍️</div>
      <div
        class="absolute bottom-20 left-1/4 text-5xl animate-spin"
        style="animation-duration: 15s;"
      >
        🔬
      </div>
      <div
        class="absolute bottom-10 right-1/3 text-3xl animate-bounce"
        style="animation-delay: 1s;"
      >
        💡
      </div>
      <div
        class="absolute top-1/2 left-1/4 text-4xl animate-pulse"
        style="animation-delay: 2s;"
      >
        📖
      </div>
    </div>
    <!-- Animated Lines -->
    <div class="absolute inset-0">
      <div
        class="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      ></div>
      <div
        class="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      ></div>
    </div>
  </div>

  <div class="container mx-auto px-6 relative z-10">
    <div class="max-w-6xl mx-auto">
      <!-- Category Badge -->
      <div class="text-center mb-8">
        <div
          class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium"
        >
          <span class="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"
          ></span>
          Expert insights from fitness professionals
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="text-left space-y-8">
          <div class="slide-in-left">
            <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Knowledge is
              <span
                class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                >Power</span
              >
            </h1>
          </div>

          <div class="slide-in-right">
            <p class="text-xl lg:text-2xl opacity-90 leading-relaxed mb-8">
              Discover expert insights, practical tips, and science-backed
              strategies to fuel your wellness journey.
            </p>
          </div>

          <!-- Blog Stats -->
          <div class="grid grid-cols-3 gap-4">
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-3xl font-bold mb-2">150+</div>
              <div class="text-sm opacity-80">Articles</div>
            </div>
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-3xl font-bold mb-2">50+</div>
              <div class="text-sm opacity-80">Categories</div>
            </div>
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-3xl font-bold mb-2">10k+</div>
              <div class="text-sm opacity-80">Readers</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Featured Article Preview -->
        <div class="relative">
          <div
            class="card bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl"
          >
            <div class="card-body p-8">
              <div class="text-center mb-6">
                <div class="text-4xl mb-4">🔥</div>
                <h3 class="text-2xl font-bold text-white mb-2">
                  Featured Article
                </h3>
                <p class="text-white/80">Most popular this week</p>
              </div>

              <!-- Article Preview -->
              {#if sortedBlogPosts.length > 0}
                <div class="space-y-4 mb-6">
                  <div class="p-4 bg-white/10 rounded-lg">
                    <div class="text-sm text-white/70 mb-2">
                      {sortedBlogPosts[0].category} • {sortedBlogPosts[0]
                        .readTime}
                    </div>
                    <div class="text-white font-bold text-lg mb-2">
                      {sortedBlogPosts[0].title}
                    </div>
                    <div class="text-white/80 text-sm">
                      {sortedBlogPosts[0].description}
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between text-sm text-white/70"
                  >
                    <span
                      >📅 {sortedBlogPosts[0].parsedDate?.toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}</span
                    >
                    <span>👁️ Featured</span>
                  </div>
                </div>

                <a
                  href={sortedBlogPosts[0].link}
                  class="btn btn-success btn-lg w-full"
                >
                  Read Article →
                </a>
              {/if}
            </div>
          </div>

          <!-- Floating Elements -->
          <div
            class="absolute -top-6 -right-6 w-12 h-12 bg-emerald-400 rounded-full float-animation"
          ></div>
          <div
            class="absolute -bottom-6 -left-6 w-8 h-8 bg-cyan-400 rounded-full float-animation"
            style="animation-delay: -2s;"
          ></div>
        </div>
      </div>
    </div>
  </div>
</div>

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

<style>
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

  .slide-in-left {
    animation: slideInFromLeft 0.8s ease-out;
  }

  .slide-in-right {
    animation: slideInFromRight 0.8s ease-out;
  }

  .float-animation {
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
</style>

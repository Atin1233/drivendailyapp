<script lang="ts">
  import { onMount } from "svelte"
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
  let isVisible = false
  let animatedStats = {
    posts: 0,
    categories: 0,
    authors: 0,
  }

  // Filter posts by category
  $: filteredPosts =
    selectedCategory === "All"
      ? sortedBlogPosts
      : sortedBlogPosts.filter((post) => post.category === selectedCategory)

  onMount(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            if (entry.target.classList.contains("stats-section")) {
              animateStats()
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe elements for animation
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  })

  function animateStats() {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      animatedStats.posts = Math.floor(sortedBlogPosts.length * easeOut)
      animatedStats.categories = Math.floor(categories.length * easeOut)
      animatedStats.authors = Math.floor(2 * easeOut) // Assuming 2 authors

      if (step >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
  }
</script>

<svelte:head>
  <title>{blogInfo.name} - {blogInfo.description}</title>
  <meta
    name="description"
    content="Research-backed wellness content for your daily progress. Fitness, nutrition, and mindset tips that actually work."
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
          {blogInfo.name}
        </h1>
      </div>

      <div class="slide-in-right mb-8">
        <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
          {blogInfo.description}
        </p>
      </div>

      <!-- Stats Section -->
      <div
        class="stats-section animate-on-scroll grid grid-cols-3 gap-8 max-w-2xl mx-auto"
      >
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.posts}
          </div>
          <div class="text-sm opacity-80">Articles</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.categories}
          </div>
          <div class="text-sm opacity-80">Categories</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.authors}
          </div>
          <div class="text-sm opacity-80">Experts</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-12 lg:py-16 px-6 max-w-7xl mx-auto">
  <!-- Category Tabs -->
  <div class="animate-on-scroll mb-12">
    <div class="flex flex-wrap justify-center gap-3">
      {#each categories as category}
        <button
          class="btn btn-lg {selectedCategory === category
            ? 'btn-primary shadow-lg scale-105'
            : 'btn-outline hover:btn-primary'} transition-all duration-300 pulse-hover"
          on:click={() => (selectedCategory = category)}
        >
          {category}
        </button>
      {/each}
    </div>
  </div>

  <!-- Featured Post -->
  {#if filteredPosts.length > 0}
    <div class="animate-on-scroll mb-16">
      <h2
        class="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        Featured Article
      </h2>
      <a href={filteredPosts[0].link} class="block group">
        <div
          class="card bg-gradient-to-r from-primary to-accent text-white shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
        >
          <div class="card-body p-8">
            <div class="flex items-center gap-3 mb-4">
              <span class="badge badge-secondary badge-lg glass-card">
                {filteredPosts[0].category}
              </span>
              <span class="text-sm opacity-80 flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {filteredPosts[0].readTime}
              </span>
            </div>
            <h3 class="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              {filteredPosts[0].title}
            </h3>
            <p class="text-lg opacity-90 leading-relaxed mb-6">
              {filteredPosts[0].description}
            </p>
            <div class="flex items-center justify-between">
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
        </div>
      </a>
    </div>
  {/if}

  <!-- Blog Posts Grid -->
  <div class="animate-on-scroll">
    <h2
      class="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      Latest Articles
    </h2>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredPosts.slice(1) as post, index}
        <a href={post.link} class="block group">
          <div
            class="card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:scale-105 border border-gray-100"
          >
            <div class="card-body p-6">
              <div class="flex items-center gap-2 mb-4">
                <span class="badge badge-outline badge-primary badge-sm">
                  {post.category}
                </span>
                <span class="text-sm text-slate-500 flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fill-rule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {post.readTime}
                </span>
              </div>
              <h3
                class="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors mb-3 leading-tight"
              >
                {post.title}
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-4">
                {post.description}
              </p>
              <div
                class="flex items-center justify-between text-sm text-slate-400"
              >
                <div>
                  {post.parsedDate?.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div>By {post.author}</div>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>

  <!-- Newsletter Signup -->
  <div class="animate-on-scroll mt-20">
    <div
      class="card bg-gradient-to-r from-primary to-accent text-white shadow-2xl border-0"
    >
      <div class="card-body p-12 text-center">
        <div class="scale-in mb-6">
          <h3 class="text-3xl lg:text-4xl font-bold mb-4">Get Driven Daily</h3>
          <p class="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
            3x/week health boosts to your inbox. Research-backed tips, quick
            workouts, and meal ideas that actually work.
          </p>
        </div>
        <div class="flex gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="input input-bordered flex-1 bg-white/20 border-white/30 text-white placeholder-white/70"
          />
          <button
            class="btn btn-secondary btn-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
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
</style>

<script lang="ts">
  import { onMount } from "svelte"
  import { WebsiteName } from "../../../config"
  import { workouts } from "$lib/workouts"

  let searchTerm = ""
  let selectedCategory: any = "all"
  let selectedDifficulty: any = "all"
  let selectedSplit: any = "all"
  let animatedStats = {
    workouts: 0,
    categories: 0,
    avgDuration: 0,
  }

  // Get unique categories from workouts
  $: uniqueCategories = Array.from(new Set(workouts.map((w) => w.category)))

  $: filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch =
      workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workout.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workout.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      )

    const matchesCategory =
      selectedCategory === "all" || workout.category === selectedCategory
    const matchesDifficulty =
      selectedDifficulty === "all" || workout.difficulty === selectedDifficulty
    const matchesSplit =
      selectedSplit === "all" || workout.split === selectedSplit

    return matchesSearch && matchesCategory && matchesDifficulty && matchesSplit
  })

  function getDifficultyColor(difficulty: any) {
    switch (difficulty) {
      case "beginner":
        return "badge-success"
      case "intermediate":
        return "badge-warning"
      case "advanced":
        return "badge-error"
      default:
        return "badge-neutral"
    }
  }

  function getCategoryColor(category: any) {
    switch (category) {
      case "strength":
        return "badge-primary"
      case "cardio":
        return "badge-secondary"
      case "hiit":
        return "badge-accent"
      case "yoga":
        return "badge-info"
      case "flexibility":
        return "badge-neutral"
      default:
        return "badge-neutral"
    }
  }

  function getSplitColor(split: any) {
    switch (split) {
      case "full-body":
        return "badge-primary"
      case "push-pull-legs":
        return "badge-secondary"
      case "upper-lower":
        return "badge-accent"
      case "bro-split":
        return "badge-info"
      case "arnold-split":
        return "badge-warning"
      case "strength-focused":
        return "badge-warning"
      case "powerlifting":
        return "badge-error"
      case "bodybuilding":
        return "badge-success"
      case "functional":
        return "badge-primary"
      case "cardio-focused":
        return "badge-secondary"
      default:
        return "badge-neutral"
    }
  }

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

      animatedStats.workouts = Math.floor(workouts.length * easeOut)
      animatedStats.categories = Math.floor(uniqueCategories.length * easeOut)
      animatedStats.avgDuration = Math.floor(
        (workouts.reduce((sum, w) => sum + w.duration, 0) / workouts.length) *
          easeOut,
      )

      if (step >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
  }
</script>

<svelte:head>
  <title>Workout Plans - {WebsiteName}</title>
  <meta
    name="description"
    content="Discover effective workout plans and training splits from our fitness experts. Strength, cardio, HIIT, and yoga workouts for every fitness level."
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
          Workout Plans
        </h1>
      </div>

      <div class="slide-in-right mb-8">
        <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
          Discover effective workout plans and training splits from our fitness
          experts. Strength, cardio, HIIT, and yoga workouts for every fitness
          level.
        </p>
      </div>

      <!-- Stats Section -->
      <div
        class="stats-section animate-on-scroll grid grid-cols-3 gap-8 max-w-2xl mx-auto"
      >
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.workouts}
          </div>
          <div class="text-sm opacity-80">Workouts</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.categories}
          </div>
          <div class="text-sm opacity-80">Categories</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.avgDuration} min
          </div>
          <div class="text-sm opacity-80">Avg Duration</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-12 lg:py-16 px-6 max-w-7xl mx-auto">
  <!-- Search and Filters -->
  <div class="animate-on-scroll mb-12">
    <div class="card bg-white shadow-xl border-0">
      <div class="card-body p-8">
        <!-- Search Bar -->
        <div class="mb-6">
          <div class="relative">
            <input
              type="text"
              bind:value={searchTerm}
              placeholder="Search workouts, exercises, or training styles..."
              class="input input-bordered input-lg w-full pl-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <svg
              class="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
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

        <!-- Filter Buttons -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Category Filter -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Category</span>
            </label>
            <select
              bind:value={selectedCategory}
              class="select select-bordered w-full"
            >
              <option value="all">All Categories</option>
              {#each uniqueCategories as category}
                <option value={category}>{category}</option>
              {/each}
            </select>
          </div>

          <!-- Difficulty Filter -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Difficulty</span>
            </label>
            <select
              bind:value={selectedDifficulty}
              class="select select-bordered w-full"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <!-- Split Filter -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Training Split</span>
            </label>
            <select
              bind:value={selectedSplit}
              class="select select-bordered w-full"
            >
              <option value="all">All Splits</option>
              <option value="full-body">Full Body</option>
              <option value="push-pull-legs">Push/Pull/Legs</option>
              <option value="upper-lower">Upper/Lower</option>
              <option value="bro-split">Bro Split</option>
              <option value="arnold-split">Arnold Split</option>
              <option value="strength-focused">Strength Focused</option>
              <option value="powerlifting">Powerlifting</option>
              <option value="bodybuilding">Bodybuilding</option>
              <option value="functional">Functional</option>
              <option value="cardio-focused">Cardio Focused</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Results Count -->
  <div class="animate-on-scroll mb-8">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">
        {filteredWorkouts.length} Workout{filteredWorkouts.length !== 1
          ? "s"
          : ""} Found
      </h2>
      <p class="text-gray-600">
        {searchTerm ? `Searching for "${searchTerm}"` : "All workouts"}
      </p>
    </div>
  </div>

  <!-- Workouts Grid -->
  <div class="animate-on-scroll">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredWorkouts as workout}
        <a href={`/workouts/${workout.id}`} class="block group">
          <div
            class="card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden workout-card border border-gray-100"
          >
            <div class="card-body p-6">
              <!-- Workout Header -->
              <div class="flex items-start justify-between mb-4">
                <div class="flex flex-wrap gap-2">
                  <span
                    class="badge {getCategoryColor(workout.category)} badge-sm"
                  >
                    {workout.category}
                  </span>
                  <span
                    class="badge {getDifficultyColor(
                      workout.difficulty,
                    )} badge-sm"
                  >
                    {workout.difficulty}
                  </span>
                </div>
                <span class="badge badge-outline badge-primary badge-sm">
                  {workout.split}
                </span>
              </div>

              <!-- Workout Title -->
              <h3
                class="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors mb-3 leading-tight"
              >
                {workout.title}
              </h3>

              <!-- Workout Description -->
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                {workout.description}
              </p>

              <!-- Workout Stats -->
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-lg font-bold text-primary">
                    {workout.duration} min
                  </div>
                  <div class="text-xs text-gray-500">Duration</div>
                </div>
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-lg font-bold text-accent">
                    {workout.exercises.length}
                  </div>
                  <div class="text-xs text-gray-500">Exercises</div>
                </div>
              </div>

              <!-- Workout Meta -->
              <div
                class="flex items-center justify-between text-sm text-gray-500"
              >
                <div class="flex items-center gap-4">
                  <span class="flex items-center gap-1">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    {workout.intensity}
                  </span>
                  <span class="flex items-center gap-1">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {workout.frequency}
                  </span>
                </div>
                <div class="text-xs">
                  By {workout.author}
                </div>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>

  <!-- No Results -->
  {#if filteredWorkouts.length === 0}
    <div class="animate-on-scroll text-center py-16">
      <div class="text-6xl mb-4">💪</div>
      <h3 class="text-2xl font-bold text-gray-800 mb-2">No workouts found</h3>
      <p class="text-gray-600 mb-6">
        Try adjusting your search terms or filters to find what you're looking
        for.
      </p>
      <button
        class="btn btn-primary"
        on:click={() => {
          searchTerm = ""
          selectedCategory = "all"
          selectedDifficulty = "all"
          selectedSplit = "all"
        }}
      >
        Clear Filters
      </button>
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
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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

  .workout-card {
    transition: all 0.4s ease;
  }

  .workout-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
</style>

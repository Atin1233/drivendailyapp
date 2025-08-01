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

  function getCategoryIcon(category: any) {
    switch (category) {
      case "strength":
        return "💪"
      case "cardio":
        return "🏃‍♂️"
      case "hiit":
        return "⚡"
      case "yoga":
        return "🧘‍♀️"
      case "flexibility":
        return "🤸‍♀️"
      default:
        return "🏋️‍♂️"
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
    // Initialize stats immediately
    animatedStats.workouts = workouts.length
    animatedStats.categories = uniqueCategories.length
    animatedStats.avgDuration = Math.floor(
      workouts.reduce((sum, w) => sum + w.duration, 0) / workouts.length,
    )

    // Check if mobile device
    const isMobile = window.innerWidth <= 768

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

      // Force visibility on mobile after a short delay
      if (isMobile) {
        setTimeout(() => {
          el.classList.add("animate-in")
        }, 100)
      }
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
<div class="hero-section relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 lg:py-32">
  <!-- Background Elements -->
  <div class="absolute inset-0">
    <div class="absolute top-10 left-10 text-4xl transform rotate-12">
      🏋️‍♂️
    </div>
    <div class="absolute top-20 right-20 text-3xl transform -rotate-6">
      💪
    </div>
    <div class="absolute bottom-10 right-1/3 text-3xl transform -rotate-6">
      🏋️‍♂️
    </div>
  </div>
  
  <!-- Mobile-friendly hero content -->
  <div class="container mx-auto px-6 relative z-10">
    <div class="max-w-6xl mx-auto">
      <!-- Top Badge -->
      <div class="text-center mb-8">
        <div
          class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium"
        >
          <span class="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse"
          ></span>
          New: High-Intensity Workouts Added
        </div>
      </div>

      <!-- Main Content - Centered Single Column -->
      <div class="text-center max-w-4xl mx-auto">
        <!-- Main Heading -->
        <div class="mb-8">
          <h1
            class="text-4xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Workout Plans
          </h1>
        </div>

        <!-- Subtitle -->
        <div class="mb-12">
          <p class="text-lg lg:text-2xl opacity-90 leading-relaxed">
            Transform your body with science-backed workouts designed for real
            results. From strength to cardio, we've got you covered.
          </p>
        </div>

        <!-- Stats Section - Horizontal Layout -->
        <div class="grid grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto">
          <div class="text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <div class="text-2xl lg:text-4xl font-bold mb-2">
              {animatedStats.workouts}+
            </div>
            <div class="text-sm lg:text-lg opacity-80">Workouts</div>
          </div>
          <div class="text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <div class="text-2xl lg:text-4xl font-bold mb-2">
              {animatedStats.categories}
            </div>
            <div class="text-sm lg:text-lg opacity-80">Categories</div>
          </div>
          <div class="text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <div class="text-2xl lg:text-4xl font-bold mb-2">
              {animatedStats.avgDuration}min
            </div>
            <div class="text-sm lg:text-lg opacity-80">Avg Duration</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-16 lg:py-20 px-6 max-w-7xl mx-auto">
  <!-- Search and Filters -->
  <div class="animate-on-scroll mb-16">
    <div class="search-card">
      <!-- Search Bar -->
      <div class="mb-8">
        <div class="relative max-w-2xl mx-auto">
          <input
            type="text"
            bind:value={searchTerm}
            placeholder="Search workouts, exercises, or training styles..."
            class="search-input"
          />
          <svg
            class="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-600"
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
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <!-- Category Filter -->
        <div class="filter-group">
          <label class="filter-label">Category</label>
          <select bind:value={selectedCategory} class="filter-select">
            <option value="all">All Categories</option>
            {#each uniqueCategories as category}
              <option value={category}
                >{getCategoryIcon(category)} {category}</option
              >
            {/each}
          </select>
        </div>

        <!-- Difficulty Filter -->
        <div class="filter-group">
          <label class="filter-label">Difficulty</label>
          <select bind:value={selectedDifficulty} class="filter-select">
            <option value="all">All Levels</option>
            <option value="beginner">🟢 Beginner</option>
            <option value="intermediate">🟡 Intermediate</option>
            <option value="advanced">🔴 Advanced</option>
          </select>
        </div>

        <!-- Split Filter -->
        <div class="filter-group">
          <label class="filter-label">Training Split</label>
          <select bind:value={selectedSplit} class="filter-select">
            <option value="all">All Splits</option>
            <option value="full-body">🏋️‍♂️ Full Body</option>
            <option value="push-pull-legs">🔄 Push/Pull/Legs</option>
            <option value="upper-lower">⚖️ Upper/Lower</option>
            <option value="bro-split">💪 Bro Split</option>
            <option value="arnold-split">🏆 Arnold Split</option>
            <option value="strength-focused">🎯 Strength Focused</option>
            <option value="powerlifting">🏋️ Powerlifting</option>
            <option value="bodybuilding">💪 Bodybuilding</option>
            <option value="functional">⚡ Functional</option>
            <option value="cardio-focused">🏃‍♂️ Cardio Focused</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- Results Count -->
  <div class="animate-on-scroll mb-12">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-3 font-poppins">
        {filteredWorkouts.length} Workout{filteredWorkouts.length !== 1
          ? "s"
          : ""} Found
      </h2>
      <p class="text-gray-600 text-lg">
        {searchTerm ? `Searching for "${searchTerm}"` : "All workouts"}
      </p>
    </div>
  </div>

  <!-- Workouts Grid -->
  <div class="animate-on-scroll">
    <div class="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {#each filteredWorkouts as workout}
        <a href={`/workouts/${workout.id}`} class="block group">
          <div class="workout-card" style="display: block !important; visibility: visible !important; opacity: 1 !important;">
            <!-- Workout Header -->
            <div class="workout-header">
              <div class="flex flex-wrap gap-2">
                <span
                  class="badge {getCategoryColor(workout.category)} badge-sm"
                >
                  {getCategoryIcon(workout.category)}
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
              <div class="split-badge">
                <span class="text-xs">{workout.split}</span>
              </div>
            </div>

            <!-- Workout Title -->
            <h3 class="workout-title" style="color: #1f2937 !important;">
              {workout.title}
            </h3>

            <!-- Workout Description -->
            <p class="workout-description" style="color: #6b7280 !important;">
              {workout.description}
            </p>

            <!-- Workout Stats -->
            <div class="workout-stats">
              <div class="stat-item">
                <div class="stat-value">{workout.duration}</div>
                <div class="stat-label" style="color: #6b7280 !important;">
                  Minutes
                </div>
              </div>
              <div class="stat-item">
                <div class="stat-value">{workout.exercises.length}</div>
                <div class="stat-label" style="color: #6b7280 !important;">
                  Exercises
                </div>
              </div>
              <div class="stat-item">
                <div class="stat-value">{workout.difficulty}</div>
                <div class="stat-label" style="color: #6b7280 !important;">
                  Level
                </div>
              </div>
            </div>

            <!-- Workout Meta -->
            <div class="workout-meta" style="color: #6b7280 !important;">
              <div class="meta-info">
                <span class="meta-item">
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
                  {workout.difficulty}
                </span>
                <span class="meta-item">
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
                  {workout.duration} min
                </span>
              </div>
              <div class="author-info">
                By {workout.author}
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>

  <!-- No Results -->
  {#if filteredWorkouts.length === 0}
    <div class="animate-on-scroll text-center py-20">
      <div class="text-8xl mb-6">💪</div>
      <h3 class="text-3xl font-bold text-gray-800 mb-4 font-poppins">
        No workouts found
      </h3>
      <p class="text-gray-800 mb-8 text-lg max-w-md mx-auto">
        Try adjusting your search terms or filters to find what you're looking
        for.
      </p>
      <button
        class="btn btn-primary btn-lg"
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

  <!-- Featured Categories -->
  <div class="mt-24">
    <h2
      class="text-4xl font-bold text-center mb-12 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
    >
      Training Categories
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        class="category-card bg-gradient-to-br from-blue-500 to-blue-600 text-white"
      >
        <div class="text-4xl mb-4">💪</div>
        <h3 class="text-2xl font-bold mb-3">Strength Training</h3>
        <p class="opacity-90">
          Build muscle and increase strength with proven lifting programs.
        </p>
      </div>
      <div
        class="category-card bg-gradient-to-br from-green-500 to-green-600 text-white"
      >
        <div class="text-4xl mb-4">🏃‍♂️</div>
        <h3 class="text-2xl font-bold mb-3">Cardio</h3>
        <p class="opacity-90">
          Improve endurance and burn calories with effective cardio workouts.
        </p>
      </div>
      <div
        class="category-card bg-gradient-to-br from-purple-500 to-purple-600 text-white"
      >
        <div class="text-4xl mb-4">⚡</div>
        <h3 class="text-2xl font-bold mb-3">HIIT</h3>
        <p class="opacity-90">
          High-intensity interval training for maximum fat burn and
          conditioning.
        </p>
      </div>
      <div
        class="category-card bg-gradient-to-br from-pink-500 to-pink-600 text-white"
      >
        <div class="text-4xl mb-4">🧘‍♀️</div>
        <h3 class="text-2xl font-bold mb-3">Yoga</h3>
        <p class="opacity-90">
          Improve flexibility, balance, and mental wellness with yoga flows.
        </p>
      </div>
      <div
        class="category-card bg-gradient-to-br from-orange-500 to-orange-600 text-white"
      >
        <div class="text-4xl mb-4">🤸‍♀️</div>
        <h3 class="text-2xl font-bold mb-3">Flexibility</h3>
        <p class="opacity-90">
          Enhance mobility and prevent injury with stretching routines.
        </p>
      </div>
      <div
        class="category-card bg-gradient-to-br from-indigo-500 to-indigo-600 text-white"
      >
        <div class="text-4xl mb-4">⚡</div>
        <h3 class="text-2xl font-bold mb-3">Functional</h3>
        <p class="opacity-90">
          Real-world movement patterns for everyday strength and mobility.
        </p>
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

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
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

  /* Mobile fallback - ensure content is visible even if animations don't work */
  @media (max-width: 768px) {
    .animate-on-scroll {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Ensure workout cards are always visible on mobile */
    .workout-card {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      position: relative !important;
      z-index: 10 !important;
    }
    
    /* Ensure the workouts grid is visible */
    .grid {
      display: grid !important;
      visibility: visible !important;
      opacity: 1 !important;
    }
    
    /* Force mobile-friendly layout */
    .container {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
  }

  .slide-in-left {
    animation: slideInFromLeft 0.8s ease-out;
  }

  .slide-in-right {
    animation: slideInFromRight 0.8s ease-out;
  }

  .floating {
    animation: float 6s ease-in-out infinite;
  }

  .hero-section {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #667eea 100%);
  }

  .stat-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }

  .search-card {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  /* Mobile search card optimizations */
  @media (max-width: 768px) {
    .search-card {
      padding: 1.5rem;
      border-radius: 16px;
      margin: 0 -0.5rem;
    }
  }

  .search-input {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    background: #f9fafb;
  }

  /* Mobile input optimizations */
  @media (max-width: 768px) {
    .search-input {
      padding: 0.875rem 0.875rem 0.875rem 2.5rem;
      font-size: 1rem;
      border-radius: 10px;
    }
  }

  .search-input:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
    background: white;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
  }

  .filter-label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #374151;
    font-size: 0.95rem;
  }

  .filter-select {
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    background: white;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  /* Mobile filter optimizations */
  @media (max-width: 768px) {
    .filter-select {
      padding: 0.625rem 0.875rem;
      font-size: 0.95rem;
      border-radius: 8px;
    }
  }

  .filter-select:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
  }

  .workout-card {
    background: white;
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.4s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 300px;
  }

  /* Mobile optimizations */
  @media (max-width: 768px) {
    .workout-card {
      padding: 1rem;
      min-height: 280px;
      border-radius: 16px;
    }
  }

  .workout-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  .workout-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .split-badge {
    display: flex;
    align-items: center;
    background: #f3f4f6;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-size: 0.875rem;
    color: #6b7280;
    text-transform: capitalize;
  }

  .workout-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937 !important;
    margin-bottom: 0.75rem;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  .workout-card:hover .workout-title {
    color: #4facfe !important;
  }

  .workout-description {
    color: #6b7280 !important;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .workout-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  /* Mobile stats optimizations */
  @media (max-width: 768px) {
    .workout-stats {
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  .stat-item {
    text-align: center;
    padding: 0.75rem;
    background: #f9fafb;
    border-radius: 10px;
  }

  /* Mobile stat item optimizations */
  @media (max-width: 768px) {
    .stat-item {
      padding: 0.5rem;
      border-radius: 8px;
    }
  }

  .stat-value {
    font-size: 1.125rem;
    font-weight: 700;
    color: #4facfe;
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: 0.75rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .workout-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: auto;
  }

  .meta-info {
    display: flex;
    gap: 1rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .author-info {
    font-style: italic;
  }

  .category-card {
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .font-poppins {
    font-family: "Poppins", sans-serif;
  }
</style>

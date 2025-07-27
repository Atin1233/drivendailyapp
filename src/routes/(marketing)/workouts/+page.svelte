<script lang="ts">
  import { WebsiteName } from "../../../config"
  import { workouts } from "$lib/workouts"

  let searchTerm = ""
  let selectedCategory: any = "all"
  let selectedDifficulty: any = "all"
  let selectedSplit: any = "all"

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
</script>

<svelte:head>
  <title>Workout Plans - {WebsiteName}</title>
  <meta
    name="description"
    content="Discover effective workout plans and training splits from our fitness experts. Strength, cardio, HIIT, and yoga workouts for every fitness level."
  />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-7xl mx-auto">
  <!-- Header Section -->
  <div class="text-center mb-12">
    <h1
      class="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      Workout Plans
    </h1>
    <p class="text-xl text-slate-600 max-w-3xl mx-auto">
      Discover effective workout plans and training splits designed by our
      fitness experts. From beginner-friendly routines to advanced strength
      programs, we have options for every fitness level and goal.
    </p>
  </div>

  <!-- Search and Filters -->
  <div class="card bg-white shadow-lg border border-primary/10 mb-8">
    <div class="card-body">
      <!-- Search Bar -->
      <div class="form-control mb-6">
        <label class="label">
          <span class="label-text font-semibold">Search Workouts</span>
        </label>
        <input
          type="text"
          placeholder="Search by title, description, or tags..."
          class="input input-bordered w-full"
          bind:value={searchTerm}
        />
      </div>

      <!-- Filters -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Category Filter -->
        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold">Category</span>
          </label>
          <select
            class="select select-bordered w-full"
            bind:value={selectedCategory}
          >
            <option value="all">All Categories</option>
            {#each uniqueCategories as category}
              <option value={category}
                >{category.charAt(0).toUpperCase() + category.slice(1)}</option
              >
            {/each}
          </select>
        </div>

        <!-- Difficulty Filter -->
        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold">Difficulty</span>
          </label>
          <select
            class="select select-bordered w-full"
            bind:value={selectedDifficulty}
          >
            <option value="all">All Difficulties</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <!-- Split Filter -->
        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold">Training Split</span>
          </label>
          <select
            class="select select-bordered w-full"
            bind:value={selectedSplit}
          >
            <option value="all">All Splits</option>
            <option value="full-body">Full Body</option>
            <option value="push-pull-legs">Push-Pull-Legs</option>
            <option value="upper-lower">Upper-Lower</option>
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

  <!-- Results Count -->
  <div class="mb-6">
    <p class="text-slate-600">
      Showing {filteredWorkouts.length} of {workouts.length} workouts
    </p>
  </div>

  <!-- Workouts Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each filteredWorkouts as workout}
      <div
        class="card bg-white shadow-lg border border-primary/10 hover:shadow-xl transition-shadow"
      >
        <div class="card-body">
          <!-- Workout Header -->
          <div class="flex justify-between items-start mb-4">
            <h3 class="card-title text-lg font-bold text-slate-800">
              {workout.title}
            </h3>
            <div class="badge badge-primary">{workout.duration}min</div>
          </div>

          <!-- Description -->
          <p class="text-slate-600 mb-4 line-clamp-3">
            {workout.description}
          </p>

          <!-- Badges -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="badge {getCategoryColor(workout.category)}">
              {workout.category}
            </span>
            <span class="badge {getDifficultyColor(workout.difficulty)}">
              {workout.difficulty}
            </span>
            <span class="badge {getSplitColor(workout.split)}">
              {workout.split.replace("-", " ")}
            </span>
          </div>

          <!-- Exercise Count -->
          <div class="text-sm text-slate-500 mb-4">
            {workout.exercises.length} exercises • {workout.author}
          </div>

          <!-- Action Button -->
          <div class="card-actions justify-end">
            <a href="/workouts/{workout.id}" class="btn btn-primary btn-sm">
              View Workout
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- No Results Message -->
  {#if filteredWorkouts.length === 0}
    <div class="text-center py-12">
      <div class="text-6xl mb-4">🏋️‍♂️</div>
      <h3 class="text-2xl font-bold text-slate-800 mb-2">No workouts found</h3>
      <p class="text-slate-600 mb-6">
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

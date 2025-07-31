<script lang="ts">
  import { page } from "$app/stores"
  import { WebsiteName } from "../../../../config"
  import { workouts } from "$lib/workouts"

  // Get the workout ID from the URL
  $: workoutId = $page.params.id

  // Find the current workout
  $: currentWorkout = workouts.find((workout) => workout.id === workoutId)

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
      case "strength-focused":
        return "badge-warning"
      default:
        return "badge-neutral"
    }
  }
</script>

<svelte:head>
  <title>{currentWorkout?.title || "Workout"} - {WebsiteName}</title>
  <meta
    name="description"
    content={currentWorkout?.description ||
      "Detailed workout plan from Driven Daily."}
  />
</svelte:head>

{#if currentWorkout}
  <div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto">
    <!-- Workout Header -->
    <div class="mb-8">
      <a href="/workouts" class="btn btn-outline btn-sm mb-4">
        ← Back to Workouts
      </a>

      <div class="text-center mb-8">
        <h1
          class="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          {currentWorkout.title}
        </h1>
        <p class="text-xl text-slate-600 mb-6" style="color: #6b7280 !important;">
          {currentWorkout.description}
        </p>

        <!-- Workout Meta -->
        <div class="flex flex-wrap justify-center gap-4 mb-6">
          <div
            class="badge {getCategoryColor(currentWorkout.category)} badge-lg"
          >
            {currentWorkout.category}
          </div>
          <div
            class="badge {getDifficultyColor(
              currentWorkout.difficulty,
            )} badge-lg"
          >
            {currentWorkout.difficulty}
          </div>
          <div class="badge {getSplitColor(currentWorkout.split)} badge-lg">
            {currentWorkout.split.replace("-", " ")}
          </div>
        </div>

        <!-- Workout Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentWorkout.duration}
            </div>
            <div class="text-sm text-slate-600" style="color: #6b7280 !important;">Duration (min)</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentWorkout.exercises.length}
            </div>
            <div class="text-sm text-slate-600" style="color: #6b7280 !important;">Exercises</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentWorkout.exercises.reduce(
                (total, ex) => total + ex.sets,
                0,
              )}
            </div>
            <div class="text-sm text-slate-600" style="color: #6b7280 !important;">Total Sets</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentWorkout.tags.length}
            </div>
            <div class="text-sm text-slate-600" style="color: #6b7280 !important;">Tags</div>
          </div>
        </div>

        <!-- Author -->
        <div class="text-center mb-8">
          <p class="text-slate-600" style="color: #6b7280 !important;">
            Workout by <span class="font-semibold text-primary"
              >{currentWorkout.author}</span
            >
          </p>
        </div>
      </div>
    </div>

    <!-- Exercise List -->
    <div class="card bg-white shadow-lg border border-primary/10 mb-8">
      <div class="card-body">
        <h2 class="text-2xl font-bold mb-6">Exercise List</h2>
        <div class="space-y-4">
          {#each currentWorkout.exercises as exercise, index}
            <div class="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
              <div
                class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
              >
                {index + 1}
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-lg" style="color: #1f2937 !important;">{exercise.name}</h3>
                {#if exercise.notes}
                  <p class="text-sm text-slate-600 mt-1" style="color: #6b7280 !important;">{exercise.notes}</p>
                {/if}
              </div>
              <div class="text-right">
                <div class="font-semibold" style="color: #1f2937 !important;">{exercise.sets} sets</div>
                <div class="text-sm text-slate-600" style="color: #6b7280 !important;">{exercise.reps}</div>
                <div class="text-xs text-slate-500" style="color: #9ca3af !important;">Rest: {exercise.rest}</div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Workout Tips -->
    <div class="card bg-white shadow-lg border border-primary/10 mb-8">
      <div class="card-body">
        <h2 class="text-2xl font-bold mb-6">Workout Tips</h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
            ></div>
            <div style="color: #374151 !important;">
              <strong>Warm Up:</strong> Always start with 5-10 minutes of light cardio
              and dynamic stretching
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
            ></div>
            <div style="color: #374151 !important;">
              <strong>Form First:</strong> Focus on proper form before increasing
              weight or intensity
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
            ></div>
            <div style="color: #374151 !important;">
              <strong>Progressive Overload:</strong> Gradually increase weight or
              reps over time
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
            ></div>
            <div style="color: #374151 !important;">
              <strong>Rest Periods:</strong> Follow the recommended rest times for
              optimal recovery
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
            ></div>
            <div style="color: #374151 !important;">
              <strong>Hydration:</strong> Stay hydrated throughout your workout
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Workout Tags -->
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-4">Workout Tags</h3>
      <div class="flex flex-wrap gap-2">
        {#each currentWorkout.tags as tag}
          <span class="badge badge-outline">{tag}</span>
        {/each}
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-12">
      <div
        class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl"
      >
        <div class="card-body">
          <h3 class="text-2xl font-bold mb-4">Ready for More Workouts?</h3>
          <p class="text-lg opacity-90 mb-6">
            Discover more workout plans and training programs from our fitness
            experts.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/workouts" class="btn btn-secondary btn-lg">
              Browse More Workouts
            </a>
            <a
              href="/blog"
              class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"
            >
              Read Fitness Tips
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <!-- Workout Not Found -->
  <div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto text-center">
    <div class="text-6xl mb-4">💪</div>
    <h1 class="text-4xl font-bold mb-4">Workout Not Found</h1>
    <p class="text-xl text-slate-600 mb-8" style="color: #6b7280 !important;">
      Sorry, we couldn't find the workout you're looking for.
    </p>
    <a href="/workouts" class="btn btn-primary btn-lg"> Browse All Workouts </a>
  </div>
{/if}

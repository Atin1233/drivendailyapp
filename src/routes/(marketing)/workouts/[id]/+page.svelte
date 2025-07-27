<script lang="ts">
  import { page } from "$app/stores"
  import { WebsiteName } from "../../../../config"

  type WorkoutCategory = "strength" | "cardio" | "flexibility" | "hiit" | "yoga"
  type WorkoutDifficulty = "beginner" | "intermediate" | "advanced"
  type WorkoutSplit =
    | "full-body"
    | "push-pull-legs"
    | "upper-lower"
    | "bro-split"
    | "arnold-split"
    | "strength-focused"
    | "powerlifting"
    | "bodybuilding"
    | "functional"
    | "cardio-focused"

  interface Workout {
    id: string
    title: string
    description: string
    category: WorkoutCategory
    difficulty: WorkoutDifficulty
    split: WorkoutSplit
    duration: number // in minutes
    exercises: Exercise[]
    author: "Joel Rivas" | "Atin Jain"
    tags: string[]
    image?: string
  }

  interface Exercise {
    name: string
    sets: number
    reps: string
    rest: string
    notes?: string
  }

  const workouts: Workout[] = [
    // Full Body Workouts
    {
      id: "full-body-beginner",
      title: "Full Body Beginner",
      description:
        "A complete full-body workout perfect for beginners, focusing on fundamental movements and proper form.",
      category: "strength",
      difficulty: "beginner",
      split: "full-body",
      duration: 45,
      author: "Joel Rivas",
      exercises: [
        { name: "Bodyweight Squats", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Push-ups (Knee or Wall)", sets: 3, reps: "8-12", rest: "60s" },
        { name: "Dumbbell Rows", sets: 3, reps: "10-12 each arm", rest: "60s" },
        { name: "Plank", sets: 3, reps: "30-45 seconds", rest: "60s" },
        { name: "Glute Bridges", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Bird Dogs", sets: 3, reps: "10 each side", rest: "60s" },
      ],
      tags: ["full-body", "beginner-friendly", "no-equipment"],
    },
    {
      id: "full-body-advanced",
      title: "Full Body Advanced",
      description:
        "High-intensity full-body workout for advanced lifters focusing on compound movements and strength building.",
      category: "strength",
      difficulty: "advanced",
      split: "full-body",
      duration: 90,
      author: "Joel Rivas",
      exercises: [
        { name: "Deadlifts", sets: 5, reps: "5", rest: "180s" },
        { name: "Bench Press", sets: 4, reps: "6-8", rest: "150s" },
        { name: "Weighted Pull-ups", sets: 4, reps: "6-8", rest: "150s" },
        { name: "Overhead Press", sets: 4, reps: "6-8", rest: "120s" },
        { name: "Front Squats", sets: 3, reps: "8-10", rest: "120s" },
        { name: "Barbell Rows", sets: 3, reps: "8-10", rest: "120s" },
        { name: "Weighted Dips", sets: 3, reps: "8-10", rest: "90s" },
        { name: "Hanging Leg Raises", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["full-body", "advanced", "compound-movements", "strength"],
    },
    {
      id: "full-body-functional",
      title: "Functional Full Body",
      description:
        "Functional movement patterns that translate to real-world strength and mobility.",
      category: "strength",
      difficulty: "intermediate",
      split: "full-body",
      duration: 60,
      author: "Joel Rivas",
      exercises: [
        { name: "Turkish Get-ups", sets: 3, reps: "5 each side", rest: "90s" },
        { name: "Kettlebell Swings", sets: 4, reps: "15-20", rest: "90s" },
        { name: "Renegade Rows", sets: 3, reps: "10 each arm", rest: "90s" },
        {
          name: "Single-leg Deadlifts",
          sets: 3,
          reps: "10 each leg",
          rest: "90s",
        },
        { name: "Bear Crawls", sets: 3, reps: "20 yards", rest: "60s" },
        { name: "Pallof Press", sets: 3, reps: "10 each side", rest: "60s" },
      ],
      tags: ["functional", "full-body", "kettlebells", "mobility"],
    },
    {
      id: "full-body-intermediate",
      title: "Full Body Intermediate",
      description:
        "An intermediate full-body workout that builds strength and muscle with compound movements.",
      category: "strength",
      difficulty: "intermediate",
      split: "full-body",
      duration: 60,
      author: "Joel Rivas",
      exercises: [
        { name: "Barbell Squats", sets: 4, reps: "8-10", rest: "90s" },
        { name: "Bench Press", sets: 4, reps: "8-10", rest: "90s" },
        { name: "Bent Over Rows", sets: 4, reps: "10-12", rest: "90s" },
        { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s" },
        { name: "Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90s" },
        {
          name: "Plank Variations",
          sets: 3,
          reps: "45-60 seconds",
          rest: "60s",
        },
      ],
      tags: ["full-body", "compound-movements", "strength-building"],
    },

    // Push-Pull-Legs Workouts
    {
      id: "push-day",
      title: "Push Day",
      description:
        "Focus on chest, shoulders, and triceps with this comprehensive push workout.",
      category: "strength",
      difficulty: "intermediate",
      split: "push-pull-legs",
      duration: 75,
      author: "Joel Rivas",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "6-8", rest: "120s" },
        { name: "Overhead Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Dips", sets: 3, reps: "8-12", rest: "90s" },
        { name: "Tricep Extensions", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["push", "chest", "shoulders", "triceps"],
    },
    {
      id: "pull-day",
      title: "Pull Day",
      description:
        "Target back and biceps with this effective pull workout focusing on rowing and pulling movements.",
      category: "strength",
      difficulty: "intermediate",
      split: "push-pull-legs",
      duration: 75,
      author: "Joel Rivas",
      exercises: [
        { name: "Deadlifts", sets: 4, reps: "6-8", rest: "120s" },
        { name: "Pull-ups", sets: 4, reps: "6-10", rest: "120s" },
        { name: "Barbell Rows", sets: 4, reps: "8-10", rest: "90s" },
        { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Barbell Curls", sets: 3, reps: "10-12", rest: "60s" },
      ],
      tags: ["pull", "back", "biceps", "deadlifts"],
    },
    {
      id: "legs-day",
      title: "Legs Day",
      description:
        "Build strong, powerful legs with this comprehensive lower body workout.",
      category: "strength",
      difficulty: "intermediate",
      split: "push-pull-legs",
      duration: 75,
      author: "Joel Rivas",
      exercises: [
        { name: "Squats", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Leg Press", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Walking Lunges", sets: 3, reps: "20 steps", rest: "90s" },
        { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60s" },
        { name: "Planks", sets: 3, reps: "60 seconds", rest: "60s" },
      ],
      tags: ["legs", "squats", "deadlifts", "lower-body"],
    },

    // Upper-Lower Split
    {
      id: "upper-body",
      title: "Upper Body",
      description:
        "Comprehensive upper body workout targeting chest, back, shoulders, and arms.",
      category: "strength",
      difficulty: "intermediate",
      split: "upper-lower",
      duration: 70,
      author: "Joel Rivas",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Pull-ups", sets: 4, reps: "6-10", rest: "120s" },
        { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s" },
        { name: "Bent Over Rows", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Dips", sets: 3, reps: "8-12", rest: "90s" },
        { name: "Barbell Curls", sets: 3, reps: "10-12", rest: "60s" },
      ],
      tags: ["upper-body", "push-pull", "compound-movements"],
    },
    {
      id: "lower-body",
      title: "Lower Body",
      description:
        "Build strength and power in your lower body with this comprehensive leg workout.",
      category: "strength",
      difficulty: "intermediate",
      split: "upper-lower",
      duration: 70,
      author: "Joel Rivas",
      exercises: [
        { name: "Squats", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Leg Press", sets: 3, reps: "10-12", rest: "90s" },
        {
          name: "Bulgarian Split Squats",
          sets: 3,
          reps: "10 each leg",
          rest: "90s",
        },
        { name: "Standing Calf Raises", sets: 4, reps: "15-20", rest: "60s" },
        { name: "Core Circuit", sets: 3, reps: "45 seconds each", rest: "60s" },
      ],
      tags: ["lower-body", "squats", "deadlifts", "legs"],
    },

    // Bro Split
    {
      id: "chest-day",
      title: "Chest Day",
      description:
        "Dedicated chest workout focusing on all areas of the pectoral muscles.",
      category: "strength",
      difficulty: "intermediate",
      split: "bro-split",
      duration: 60,
      author: "Joel Rivas",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Decline Push-ups", sets: 3, reps: "12-15", rest: "90s" },
        { name: "Cable Flyes", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Dips", sets: 3, reps: "8-12", rest: "90s" },
        { name: "Push-ups", sets: 3, reps: "To failure", rest: "60s" },
      ],
      tags: ["chest", "push", "bench-press", "dumbbells"],
    },
    {
      id: "back-day",
      title: "Back Day",
      description:
        "Comprehensive back workout targeting all major back muscles for width and thickness.",
      category: "strength",
      difficulty: "intermediate",
      split: "bro-split",
      duration: 65,
      author: "Joel Rivas",
      exercises: [
        { name: "Deadlifts", sets: 4, reps: "6-8", rest: "120s" },
        { name: "Pull-ups", sets: 4, reps: "6-10", rest: "120s" },
        { name: "Barbell Rows", sets: 4, reps: "8-10", rest: "90s" },
        { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Hyperextensions", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["back", "pull", "deadlifts", "pull-ups"],
    },
    {
      id: "shoulders-day",
      title: "Shoulders Day",
      description:
        "Complete shoulder workout targeting all three deltoid heads for balanced development.",
      category: "strength",
      difficulty: "intermediate",
      split: "bro-split",
      duration: 55,
      author: "Joel Rivas",
      exercises: [
        { name: "Overhead Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "90s" },
        { name: "Rear Delt Flyes", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Upright Rows", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Front Raises", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Shrugs", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["shoulders", "deltoids", "overhead-press", "isolation"],
    },

    // Strength Focused
    {
      id: "strength-5x5",
      title: "5x5 Strength Program",
      description:
        "Classic 5x5 strength program focusing on compound movements and progressive overload.",
      category: "strength",
      difficulty: "advanced",
      split: "strength-focused",
      duration: 90,
      author: "Joel Rivas",
      exercises: [
        { name: "Squats", sets: 5, reps: "5", rest: "180s" },
        { name: "Bench Press", sets: 5, reps: "5", rest: "180s" },
        { name: "Barbell Rows", sets: 5, reps: "5", rest: "180s" },
        { name: "Overhead Press", sets: 5, reps: "5", rest: "180s" },
        { name: "Deadlifts", sets: 1, reps: "5", rest: "180s" },
      ],
      tags: ["strength", "5x5", "compound-movements", "progressive-overload"],
    },

    // Cardio Workouts
    {
      id: "hiit-cardio",
      title: "HIIT Cardio",
      description:
        "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
      category: "hiit",
      difficulty: "intermediate",
      split: "full-body",
      duration: 30,
      author: "Joel Rivas",
      exercises: [
        { name: "Burpees", sets: 8, reps: "30 seconds", rest: "30s" },
        { name: "Mountain Climbers", sets: 8, reps: "30 seconds", rest: "30s" },
        { name: "Jump Squats", sets: 8, reps: "30 seconds", rest: "30s" },
        { name: "High Knees", sets: 8, reps: "30 seconds", rest: "30s" },
        { name: "Plank Jacks", sets: 8, reps: "30 seconds", rest: "30s" },
        { name: "Rest", sets: 1, reps: "2 minutes", rest: "0s" },
      ],
      tags: ["hiit", "cardio", "fat-burning", "no-equipment"],
    },

    // Flexibility/Yoga
    {
      id: "yoga-flow",
      title: "Yoga Flow",
      description:
        "Gentle yoga flow for flexibility, mobility, and stress relief.",
      category: "yoga",
      difficulty: "beginner",
      split: "full-body",
      duration: 45,
      author: "Atin Jain",
      exercises: [
        { name: "Sun Salutation A", sets: 3, reps: "5 rounds", rest: "30s" },
        {
          name: "Warrior Sequence",
          sets: 2,
          reps: "Hold 30s each",
          rest: "30s",
        },
        { name: "Balance Poses", sets: 2, reps: "Hold 20s each", rest: "30s" },
        { name: "Hip Openers", sets: 2, reps: "Hold 30s each", rest: "30s" },
        { name: "Forward Folds", sets: 2, reps: "Hold 30s each", rest: "30s" },
        { name: "Savasana", sets: 1, reps: "5 minutes", rest: "0s" },
      ],
      tags: ["yoga", "flexibility", "mobility", "stress-relief"],
    },
  ]

  $: workoutId = $page.params.id
  $: currentWorkout = workouts.find((w) => w.id === workoutId)

  function getDifficultyColor(difficulty: WorkoutDifficulty) {
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

  function getCategoryColor(category: WorkoutCategory) {
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

  function getSplitColor(split: WorkoutSplit) {
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
        <p class="text-xl text-slate-600 mb-6">
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
            {currentWorkout.split}
          </div>
        </div>

        <!-- Workout Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentWorkout.duration}
            </div>
            <div class="text-sm text-slate-600">Duration (min)</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentWorkout.exercises.length}
            </div>
            <div class="text-sm text-slate-600">Exercises</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentWorkout.exercises.reduce(
                (total, ex) => total + ex.sets,
                0,
              )}
            </div>
            <div class="text-sm text-slate-600">Total Sets</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentWorkout.tags.length}
            </div>
            <div class="text-sm text-slate-600">Tags</div>
          </div>
        </div>

        <!-- Author -->
        <div class="text-center mb-8">
          <p class="text-slate-600">
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
                <h3 class="font-semibold text-lg">{exercise.name}</h3>
                {#if exercise.notes}
                  <p class="text-sm text-slate-600 mt-1">{exercise.notes}</p>
                {/if}
              </div>
              <div class="text-right">
                <div class="font-semibold">{exercise.sets} sets</div>
                <div class="text-sm text-slate-600">{exercise.reps}</div>
                <div class="text-sm text-slate-500">Rest: {exercise.rest}</div>
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
            <div>
              <strong>Warm Up:</strong> Always start with 5-10 minutes of light cardio
              and dynamic stretching
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
            ></div>
            <div>
              <strong>Form First:</strong> Focus on proper form before increasing
              weight or intensity
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
            ></div>
            <div>
              <strong>Progressive Overload:</strong> Gradually increase weight or
              reps over time
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
            ></div>
            <div>
              <strong>Rest Periods:</strong> Follow the recommended rest times for
              optimal recovery
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
            ></div>
            <div>
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
    <p class="text-xl text-slate-600 mb-8">
      Sorry, we couldn't find the workout you're looking for.
    </p>
    <a href="/workouts" class="btn btn-primary btn-lg"> Browse All Workouts </a>
  </div>
{/if}

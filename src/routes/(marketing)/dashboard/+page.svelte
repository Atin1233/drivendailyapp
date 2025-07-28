<script lang="ts">
  import { onMount } from "svelte"
  import "../../../app.css"

  // Dashboard data
  let currentUser = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "👤",
    membership: "Beta User",
    joinDate: "September 2024",
  }

  let stats = {
    workoutsCompleted: 0,
    streakDays: 0,
    totalMinutes: 0,
    caloriesBurned: 0,
  }

  let recentWorkouts = [
    {
      id: 1,
      name: "Full Body Strength",
      duration: 45,
      calories: 320,
      date: "Today",
      status: "completed",
    },
    {
      id: 2,
      name: "Cardio HIIT",
      duration: 30,
      calories: 280,
      date: "Yesterday",
      status: "completed",
    },
    {
      id: 3,
      name: "Yoga Flow",
      duration: 25,
      calories: 120,
      date: "2 days ago",
      status: "completed",
    },
  ]

  let upcomingWorkouts = [
    {
      id: 4,
      name: "Upper Body Focus",
      duration: 40,
      difficulty: "Intermediate",
      equipment: "Dumbbells",
    },
    {
      id: 5,
      name: "Core Crusher",
      duration: 20,
      difficulty: "Beginner",
      equipment: "Bodyweight",
    },
  ]

  let nutritionGoals = {
    calories: 2000,
    protein: 150,
    carbs: 200,
    fat: 65,
  }

  let progressData = {
    weight: 75.5,
    bodyFat: 18,
    muscleMass: 65,
    weeklyChange: -0.5,
  }

  onMount(() => {
    // Animate stats on load
    animateStats()
  })

  function animateStats() {
    const targetStats = {
      workoutsCompleted: 12,
      streakDays: 7,
      totalMinutes: 540,
      caloriesBurned: 3200,
    }

    let current = { ...stats }
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const interval = setInterval(() => {
      Object.keys(targetStats).forEach((key) => {
        const target = targetStats[key as keyof typeof targetStats]
        const currentVal = current[key as keyof typeof current]
        const diff = target - currentVal
        const increment = diff / (steps - 1)
        current[key as keyof typeof current] = Math.round(
          currentVal + increment,
        )
      })

      stats = { ...current }

      if (
        Object.values(current).every(
          (val) =>
            val >=
            Object.values(targetStats)[Object.keys(current).indexOf(val)],
        )
      ) {
        clearInterval(interval)
      }
    }, stepDuration)
  }
</script>

<svelte:head>
  <title>Dashboard - {currentUser.name} | Driven Daily</title>
  <meta
    name="description"
    content="Your personalized fitness dashboard - track workouts, nutrition, and progress"
  />
</svelte:head>

<!-- Dashboard Header -->
<div class="bg-gradient-to-r from-primary to-accent text-white py-8">
  <div class="container mx-auto px-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div
          class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl"
        >
          {currentUser.avatar}
        </div>
        <div>
          <h1 class="text-2xl font-bold">Welcome back, {currentUser.name}!</h1>
          <p class="text-white/80">
            {currentUser.membership} • Member since {currentUser.joinDate}
          </p>
        </div>
      </div>
      <a href="/" class="btn btn-white btn-sm"> ← Back to Home </a>
    </div>
  </div>
</div>

<!-- Dashboard Content -->
<div class="py-8 bg-gray-50 min-h-screen">
  <div class="container mx-auto px-6">
    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-600 text-sm font-medium">Workouts</p>
            <p class="text-3xl font-bold text-gray-800">
              {stats.workoutsCompleted}
            </p>
          </div>
          <div
            class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-2xl">💪</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-600 text-sm font-medium">Streak</p>
            <p class="text-3xl font-bold text-gray-800">
              {stats.streakDays} days
            </p>
          </div>
          <div
            class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-2xl">🔥</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-600 text-sm font-medium">Minutes</p>
            <p class="text-3xl font-bold text-gray-800">{stats.totalMinutes}</p>
          </div>
          <div
            class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-2xl">⏱️</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-600 text-sm font-medium">Calories</p>
            <p class="text-3xl font-bold text-gray-800">
              {stats.caloriesBurned}
            </p>
          </div>
          <div
            class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-2xl">🔥</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Dashboard Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Recent Workouts -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-gray-800">Recent Workouts</h2>
            <a
              href="/workouts"
              class="text-primary hover:text-accent font-medium">View All</a
            >
          </div>

          <div class="space-y-4">
            {#each recentWorkouts as workout}
              <div
                class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div class="flex items-center space-x-4">
                  <div
                    class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                  >
                    <span class="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800">{workout.name}</h3>
                    <p class="text-sm text-gray-600">
                      {workout.duration} min • {workout.calories} cal • {workout.date}
                    </p>
                  </div>
                </div>
                <span class="text-green-600 text-sm font-medium">Completed</span
                >
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Quick Actions & Progress -->
      <div class="space-y-6">
        <!-- Quick Actions -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div class="space-y-3">
            <a
              href="/workouts"
              class="block w-full text-left p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
            >
              <div class="flex items-center space-x-3">
                <span class="text-2xl">🏋️</span>
                <div>
                  <p class="font-semibold text-gray-800">Start Workout</p>
                  <p class="text-sm text-gray-600">Choose from 100+ workouts</p>
                </div>
              </div>
            </a>

            <a
              href="/recipes"
              class="block w-full text-left p-3 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
            >
              <div class="flex items-center space-x-3">
                <span class="text-2xl">🥗</span>
                <div>
                  <p class="font-semibold text-gray-800">Meal Planning</p>
                  <p class="text-sm text-gray-600">Plan your nutrition</p>
                </div>
              </div>
            </a>

            <a
              href="/health-quiz"
              class="block w-full text-left p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <div class="flex items-center space-x-3">
                <span class="text-2xl">📊</span>
                <div>
                  <p class="font-semibold text-gray-800">Update Goals</p>
                  <p class="text-sm text-gray-600">Adjust your targets</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Progress Summary -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Progress Summary</h2>
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Current Weight</span>
              <span class="font-semibold">{progressData.weight} kg</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Body Fat %</span>
              <span class="font-semibold">{progressData.bodyFat}%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Muscle Mass</span>
              <span class="font-semibold">{progressData.muscleMass} kg</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Weekly Change</span>
              <span class="font-semibold text-green-600"
                >{progressData.weeklyChange} kg</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Upcoming Workouts -->
    <div class="mt-8">
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-800">Recommended Workouts</h2>
          <a href="/workouts" class="text-primary hover:text-accent font-medium"
            >Browse All</a
          >
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#each upcomingWorkouts as workout}
            <div
              class="p-4 border border-gray-200 rounded-lg hover:border-primary/30 transition-colors"
            >
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-semibold text-gray-800">{workout.name}</h3>
                <span class="text-sm text-gray-500">{workout.duration} min</span
                >
              </div>
              <div class="flex items-center space-x-4 text-sm text-gray-600">
                <span>{workout.difficulty}</span>
                <span>•</span>
                <span>{workout.equipment}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Beta Notice -->
    <div
      class="mt-8 bg-gradient-to-r from-primary to-accent text-white rounded-xl p-6"
    >
      <div class="text-center">
        <h3 class="text-xl font-bold mb-2">
          🎉 Beta Version - All Features Free!
        </h3>
        <p class="text-white/90 mb-4">
          This is a preview of your personalized dashboard. All features are
          free until September 30th, 2024.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/workouts" class="btn btn-white btn-sm">Explore Workouts</a>
          <a href="/recipes" class="btn btn-white btn-sm">Browse Recipes</a>
          <a href="/blog" class="btn btn-white btn-sm">Read Articles</a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.2s;
  }

  .btn-sm {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }

  .btn-primary {
    background-color: var(--color-primary);
    color: white;
  }

  .btn-primary:hover {
    background-color: color-mix(in srgb, var(--color-primary) 90%, transparent);
  }

  .btn-secondary {
    background-color: var(--color-secondary);
    color: white;
  }

  .btn-secondary:hover {
    background-color: color-mix(
      in srgb,
      var(--color-secondary) 90%,
      transparent
    );
  }

  .btn-white {
    background-color: white;
    color: var(--color-primary);
  }

  .btn-white:hover {
    background-color: #f9fafb;
  }
</style>

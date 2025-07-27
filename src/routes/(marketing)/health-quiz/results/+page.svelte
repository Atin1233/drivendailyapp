<script lang="ts">
  import { onMount } from "svelte"
  import { WebsiteName } from "../../../../config"

  let showResults = false
  let currentSection = 0
  let animatedProgress = 0

  // Mock personalized results based on quiz answers
  const personalizedResults = {
    workoutPlan: {
      title: "Your Custom Workout Plan",
      description:
        "Based on your goals and preferences, here's your personalized fitness routine",
      schedule: [
        {
          day: "Monday",
          focus: "Strength Training",
          duration: "45 min",
          intensity: "Moderate",
        },
        {
          day: "Tuesday",
          focus: "Cardio",
          duration: "30 min",
          intensity: "High",
        },
        {
          day: "Wednesday",
          focus: "Recovery",
          duration: "20 min",
          intensity: "Low",
        },
        {
          day: "Thursday",
          focus: "Strength Training",
          duration: "45 min",
          intensity: "Moderate",
        },
        {
          day: "Friday",
          focus: "Cardio",
          duration: "30 min",
          intensity: "High",
        },
        {
          day: "Saturday",
          focus: "Flexibility",
          duration: "25 min",
          intensity: "Low",
        },
        { day: "Sunday", focus: "Rest", duration: "0 min", intensity: "Rest" },
      ],
      recommendations: [
        "Start with 10-minute warm-up sessions",
        "Focus on compound movements for efficiency",
        "Gradually increase intensity over 4 weeks",
        "Listen to your body and adjust as needed",
      ],
    },
    nutritionPlan: {
      title: "Your Personalized Nutrition Guide",
      description:
        "Tailored meal suggestions and nutrition strategies for your lifestyle",
      dailyTargets: {
        calories: "2,100",
        protein: "150g",
        carbs: "200g",
        fat: "70g",
      },
      mealSuggestions: [
        {
          meal: "Breakfast",
          suggestions: [
            "Protein smoothie with berries",
            "Greek yogurt with granola",
            "Eggs with whole grain toast",
          ],
        },
        {
          meal: "Lunch",
          suggestions: [
            "Grilled chicken salad",
            "Quinoa bowl with vegetables",
            "Turkey wrap with avocado",
          ],
        },
        {
          meal: "Dinner",
          suggestions: [
            "Salmon with roasted vegetables",
            "Lean beef stir-fry",
            "Vegetarian lentil curry",
          ],
        },
        {
          meal: "Snacks",
          suggestions: [
            "Mixed nuts",
            "Apple with peanut butter",
            "Protein bar",
            "Greek yogurt",
          ],
        },
      ],
      tips: [
        "Eat protein with every meal",
        "Stay hydrated throughout the day",
        "Plan meals in advance",
        "Listen to hunger cues",
      ],
    },
    recoveryPlan: {
      title: "Your Recovery & Wellness Strategy",
      description:
        "Optimize your recovery and overall wellness with these personalized recommendations",
      sleep: {
        target: "7-8 hours",
        tips: [
          "Create a consistent bedtime routine",
          "Avoid screens 1 hour before bed",
          "Keep your bedroom cool and dark",
          "Limit caffeine after 2 PM",
        ],
      },
      stress: {
        techniques: [
          "Daily 10-minute meditation",
          "Deep breathing exercises",
          "Regular nature walks",
          "Journaling before bed",
        ],
      },
      mobility: {
        routine: [
          "Morning stretching (5 minutes)",
          "Foam rolling after workouts",
          "Yoga sessions 2x per week",
          "Regular mobility breaks during work",
        ],
      },
    },
  }

  const sections = [
    {
      id: "workout",
      title: "Workout Plan",
      icon: "💪",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: "nutrition",
      title: "Nutrition Guide",
      icon: "🥗",
      color: "from-green-500 to-teal-600",
    },
    {
      id: "recovery",
      title: "Recovery Strategy",
      icon: "🧘‍♀️",
      color: "from-orange-500 to-red-600",
    },
  ]

  onMount(() => {
    // Animate the results appearance
    setTimeout(() => {
      showResults = true
    }, 500)

    // Animate progress
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      animatedProgress = Math.floor(100 * easeOut)

      if (step >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
  })

  function nextSection() {
    if (currentSection < sections.length - 1) {
      currentSection++
    }
  }

  function prevSection() {
    if (currentSection > 0) {
      currentSection--
    }
  }

  function getCurrentSectionData() {
    const section = sections[currentSection]
    switch (section.id) {
      case "workout":
        return personalizedResults.workoutPlan
      case "nutrition":
        return personalizedResults.nutritionPlan
      case "recovery":
        return personalizedResults.recoveryPlan
      default:
        return personalizedResults.workoutPlan
    }
  }
</script>

<svelte:head>
  <title>Your Personalized Health Plan - {WebsiteName}</title>
  <meta
    name="description"
    content="Your personalized diet, workout, and recovery plan based on your health quiz answers."
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
          Your Personalized Plan
        </h1>
      </div>

      <div class="slide-in-right mb-8">
        <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
          Based on your quiz answers, we've created a comprehensive health plan
          tailored specifically for your goals and lifestyle.
        </p>
      </div>

      <!-- Progress Indicator -->
      <div class="mb-8">
        <div class="flex items-center justify-center gap-4 mb-4">
          {#each sections as section, index}
            <div class="flex items-center gap-2">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold {index <=
                currentSection
                  ? 'bg-white text-primary'
                  : 'bg-white/20 text-white'}"
              >
                {index + 1}
              </div>
              <span
                class="text-sm {index <= currentSection
                  ? 'text-white font-medium'
                  : 'text-white/60'}">{section.title}</span
              >
            </div>
            {#if index < sections.length - 1}
              <div
                class="w-16 h-0.5 {index < currentSection
                  ? 'bg-white'
                  : 'bg-white/20'}"
              ></div>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-12 lg:py-16 px-6 max-w-6xl mx-auto">
  {#if showResults}
    <!-- Section Navigation -->
    <div class="mb-12">
      <div class="flex justify-center gap-4">
        {#each sections as section, index}
          <button
            class="btn {index === currentSection
              ? 'btn-primary'
              : 'btn-outline'} btn-lg"
            on:click={() => (currentSection = index)}
          >
            <span class="text-2xl mr-2">{section.icon}</span>
            {section.title}
          </button>
        {/each}
      </div>
    </div>

    <!-- Current Section Content -->
    <div class="card bg-white shadow-2xl border-0 overflow-hidden">
      <div class="card-body p-8">
        <!-- Section Header -->
        <div class="text-center mb-8">
          <div class="text-6xl mb-4">{sections[currentSection].icon}</div>
          <h2
            class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r {sections[
              currentSection
            ].color}"
          >
            {getCurrentSectionData().title}
          </h2>
          <p class="text-xl text-slate-600">
            {getCurrentSectionData().description}
          </p>
        </div>

        <!-- Section Specific Content -->
        {#if sections[currentSection].id === "workout"}
          <!-- Workout Plan -->
          <div class="space-y-8">
            <!-- Weekly Schedule -->
            <div>
              <h3 class="text-2xl font-bold mb-6 text-center">
                Your Weekly Schedule
              </h3>
              <div class="grid gap-4">
                {#each getCurrentSectionData().schedule as day}
                  <div
                    class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div class="flex items-center gap-4">
                      <div
                        class="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold"
                      >
                        {day.day.slice(0, 3)}
                      </div>
                      <div>
                        <div class="font-semibold text-lg">{day.focus}</div>
                        <div class="text-slate-600">
                          {day.duration} • {day.intensity}
                        </div>
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-primary">{day.intensity}</div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Recommendations -->
            <div>
              <h3 class="text-2xl font-bold mb-6 text-center">
                Key Recommendations
              </h3>
              <div class="grid md:grid-cols-2 gap-4">
                {#each getCurrentSectionData().recommendations as rec}
                  <div class="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <span class="text-primary text-xl">✓</span>
                    <span class="text-slate-700">{rec}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {:else if sections[currentSection].id === "nutrition"}
          <!-- Nutrition Plan -->
          <div class="space-y-8">
            <!-- Daily Targets -->
            <div>
              <h3 class="text-2xl font-bold mb-6 text-center">
                Daily Nutrition Targets
              </h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center p-4 bg-green-50 rounded-lg">
                  <div class="text-2xl font-bold text-green-600">
                    {getCurrentSectionData().dailyTargets.calories}
                  </div>
                  <div class="text-sm text-slate-600">Calories</div>
                </div>
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <div class="text-2xl font-bold text-blue-600">
                    {getCurrentSectionData().dailyTargets.protein}
                  </div>
                  <div class="text-sm text-slate-600">Protein</div>
                </div>
                <div class="text-center p-4 bg-orange-50 rounded-lg">
                  <div class="text-2xl font-bold text-orange-600">
                    {getCurrentSectionData().dailyTargets.carbs}
                  </div>
                  <div class="text-sm text-slate-600">Carbs</div>
                </div>
                <div class="text-center p-4 bg-purple-50 rounded-lg">
                  <div class="text-2xl font-bold text-purple-600">
                    {getCurrentSectionData().dailyTargets.fat}
                  </div>
                  <div class="text-sm text-slate-600">Fat</div>
                </div>
              </div>
            </div>

            <!-- Meal Suggestions -->
            <div>
              <h3 class="text-2xl font-bold mb-6 text-center">
                Meal Suggestions
              </h3>
              <div class="grid md:grid-cols-2 gap-6">
                {#each getCurrentSectionData().mealSuggestions as meal}
                  <div class="p-6 bg-gray-50 rounded-lg">
                    <h4 class="text-xl font-bold mb-4 text-primary">
                      {meal.meal}
                    </h4>
                    <ul class="space-y-2">
                      {#each meal.suggestions as suggestion}
                        <li class="flex items-start gap-2">
                          <span class="text-green-500 mt-1">•</span>
                          <span class="text-slate-700">{suggestion}</span>
                        </li>
                      {/each}
                    </ul>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Tips -->
            <div>
              <h3 class="text-2xl font-bold mb-6 text-center">
                Nutrition Tips
              </h3>
              <div class="grid md:grid-cols-2 gap-4">
                {#each getCurrentSectionData().tips as tip}
                  <div
                    class="flex items-start gap-3 p-4 bg-green-50 rounded-lg"
                  >
                    <span class="text-green-500 text-xl">💡</span>
                    <span class="text-slate-700">{tip}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {:else if sections[currentSection].id === "recovery"}
          <!-- Recovery Plan -->
          <div class="space-y-8">
            <!-- Sleep -->
            <div>
              <h3 class="text-2xl font-bold mb-6 text-center">
                Sleep Optimization
              </h3>
              <div class="text-center mb-6">
                <div class="text-4xl mb-2">😴</div>
                <div class="text-2xl font-bold text-primary">
                  Target: {getCurrentSectionData().sleep.target}
                </div>
              </div>
              <div class="grid md:grid-cols-2 gap-4">
                {#each getCurrentSectionData().sleep.tips as tip}
                  <div class="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <span class="text-blue-500 text-xl">🌙</span>
                    <span class="text-slate-700">{tip}</span>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Stress Management -->
            <div>
              <h3 class="text-2xl font-bold mb-6 text-center">
                Stress Management
              </h3>
              <div class="grid md:grid-cols-2 gap-4">
                {#each getCurrentSectionData().stress.techniques as technique}
                  <div
                    class="flex items-start gap-3 p-4 bg-purple-50 rounded-lg"
                  >
                    <span class="text-purple-500 text-xl">🧘‍♀️</span>
                    <span class="text-slate-700">{technique}</span>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Mobility -->
            <div>
              <h3 class="text-2xl font-bold mb-6 text-center">
                Mobility & Recovery
              </h3>
              <div class="grid md:grid-cols-2 gap-4">
                {#each getCurrentSectionData().mobility.routine as routine}
                  <div
                    class="flex items-start gap-3 p-4 bg-orange-50 rounded-lg"
                  >
                    <span class="text-orange-500 text-xl">🤸‍♀️</span>
                    <span class="text-slate-700">{routine}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex justify-between mt-12">
      <button
        class="btn btn-outline btn-lg"
        on:click={prevSection}
        disabled={currentSection === 0}
      >
        ← Previous
      </button>

      {#if currentSection < sections.length - 1}
        <button class="btn btn-primary btn-lg" on:click={nextSection}>
          Next →
        </button>
      {:else}
        <div class="flex gap-4">
          <a href="/blog">
            <button class="btn btn-secondary btn-lg">
              📚 Read More Tips
            </button>
          </a>
          <a href="/pricing">
            <button class="btn btn-primary btn-lg"> 💎 Get Full Access </button>
          </a>
        </div>
      {/if}
    </div>

    <!-- Call to Action -->
    <div class="mt-16 text-center">
      <div
        class="card bg-gradient-to-r from-primary to-accent text-white shadow-2xl border-0"
      >
        <div class="card-body p-12">
          <h3 class="text-3xl font-bold mb-6">Ready to Take Action?</h3>
          <p class="text-xl opacity-90 mb-8 leading-relaxed">
            Get access to our complete library of workouts, meal plans, and
            wellness resources to supercharge your health journey.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pricing">
              <button
                class="btn btn-secondary btn-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🚀 Start Your Free Trial
              </button>
            </a>
            <a href="/blog">
              <button
                class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                📖 Explore Our Blog
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  {:else}
    <!-- Loading State -->
    <div class="text-center py-20">
      <div class="loading loading-spinner loading-lg mb-4"></div>
      <p class="text-lg text-slate-600">Creating your personalized plan...</p>
    </div>
  {/if}
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

  .gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

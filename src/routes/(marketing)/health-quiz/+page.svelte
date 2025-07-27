<script lang="ts">
  import { onMount } from "svelte"
  import { WebsiteName } from "../../../config"

  // Quiz state
  let currentStep = 0
  let showQuiz = false
  let isSubmitting = false
  let progress = 0

  // Quiz answers
  let answers = {
    // Section 1: About You
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",

    // Section 2: Fitness Goals
    primaryGoal: "",
    timeline: "",

    // Section 3: Workout Preferences
    workoutLocation: "",
    daysPerWeek: "",
    workoutType: "",
    equipment: [],
    injuries: "",

    // Section 4: Nutrition & Diet
    dietaryStyle: "",
    allergies: [],
    dietStruggle: "",
    cookingPreference: "",

    // Section 5: Lifestyle & Recovery
    sleepHours: "",
    stressLevel: "",
    currentRecovery: "",
    recoveryRecommendations: [],

    // Final: Personalization & Contact
    intensityLevel: "",
    email: "",
    trialInterest: false,
  }

  // Quiz questions structure
  const quizSections = [
    {
      id: "about-you",
      title: "About You",
      subtitle: "Let's get to know you better",
      icon: "👤",
      questions: [
        {
          id: "age",
          type: "select",
          label: "What's your age?",
          options: [
            { value: "18-25", label: "18-25" },
            { value: "26-35", label: "26-35" },
            { value: "36-45", label: "36-45" },
            { value: "46-55", label: "46-55" },
            { value: "56-65", label: "56-65" },
            { value: "65+", label: "65+" },
          ],
        },
        {
          id: "gender",
          type: "select",
          label: "What's your gender?",
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "non-binary", label: "Non-binary" },
            { value: "prefer-not-to-say", label: "Prefer not to say" },
          ],
        },
        {
          id: "height",
          type: "select",
          label: "What's your height?",
          options: [
            { value: "under-5-0", label: "Under 5'0\"" },
            { value: "5-0-to-5-3", label: "5'0\" - 5'3\"" },
            { value: "5-4-to-5-7", label: "5'4\" - 5'7\"" },
            { value: "5-8-to-5-11", label: "5'8\" - 5'11\"" },
            { value: "6-0-to-6-3", label: "6'0\" - 6'3\"" },
            { value: "over-6-3", label: "Over 6'3\"" },
          ],
        },
        {
          id: "weight",
          type: "select",
          label: "What's your weight?",
          options: [
            { value: "under-120", label: "Under 120 lbs" },
            { value: "120-140", label: "120-140 lbs" },
            { value: "141-160", label: "141-160 lbs" },
            { value: "161-180", label: "161-180 lbs" },
            { value: "181-200", label: "181-200 lbs" },
            { value: "201-220", label: "201-220 lbs" },
            { value: "over-220", label: "Over 220 lbs" },
          ],
        },
        {
          id: "activityLevel",
          type: "select",
          label: "What's your activity level currently?",
          options: [
            { value: "sedentary", label: "Sedentary (little to no exercise)" },
            {
              value: "lightly-active",
              label: "Lightly active (light exercise 1-3 days/week)",
            },
            {
              value: "moderately-active",
              label: "Moderately active (moderate exercise 3-5 days/week)",
            },
            {
              value: "very-active",
              label: "Very active (hard exercise 6-7 days/week)",
            },
            {
              value: "athlete",
              label: "Athlete (very hard exercise, physical job)",
            },
          ],
        },
      ],
    },
    {
      id: "fitness-goals",
      title: "Fitness Goals",
      subtitle: "What do you want to achieve?",
      icon: "🎯",
      questions: [
        {
          id: "primaryGoal",
          type: "select",
          label: "What's your primary health goal?",
          options: [
            { value: "lose-fat", label: "Lose fat" },
            { value: "build-muscle", label: "Build muscle" },
            { value: "get-toned", label: "Get toned" },
            { value: "improve-endurance", label: "Improve endurance" },
            { value: "boost-wellness", label: "Boost overall wellness" },
          ],
        },
        {
          id: "timeline",
          type: "select",
          label: "How quickly are you looking to see results?",
          options: [
            { value: "no-rush", label: "No rush, sustainable progress" },
            { value: "1-2-months", label: "1-2 months" },
            { value: "asap", label: "ASAP" },
          ],
        },
      ],
    },
    {
      id: "workout-preferences",
      title: "Workout Preferences",
      subtitle: "How do you like to exercise?",
      icon: "💪",
      questions: [
        {
          id: "workoutLocation",
          type: "select",
          label: "Do you prefer at-home or gym workouts?",
          options: [
            { value: "at-home", label: "At home" },
            { value: "gym", label: "Gym" },
            { value: "both", label: "Both" },
            { value: "outdoors", label: "Outdoors" },
          ],
        },
        {
          id: "daysPerWeek",
          type: "select",
          label: "How many days per week can you realistically commit?",
          options: [
            { value: "1-2", label: "1-2 days" },
            { value: "3-4", label: "3-4 days" },
            { value: "5-6", label: "5-6 days" },
            { value: "7", label: "7 days" },
          ],
        },
        {
          id: "workoutType",
          type: "select",
          label: "Do you enjoy cardio, strength, or both?",
          options: [
            { value: "cardio", label: "Cardio" },
            { value: "strength", label: "Strength training" },
            { value: "both", label: "Both" },
            { value: "flexibility", label: "Flexibility/mobility" },
          ],
        },
        {
          id: "equipment",
          type: "multiselect",
          label: "Do you have access to equipment? (select all that apply)",
          options: [
            { value: "dumbbells", label: "Dumbbells" },
            { value: "resistance-bands", label: "Resistance bands" },
            { value: "treadmill", label: "Treadmill" },
            { value: "bike", label: "Bike" },
            { value: "gym", label: "Gym membership" },
            { value: "none", label: "None" },
          ],
        },
        {
          id: "injuries",
          type: "text",
          label: "Any injuries or areas to avoid?",
          placeholder: "e.g., knee pain, back issues, etc.",
        },
      ],
    },
    {
      id: "nutrition-diet",
      title: "Nutrition & Diet",
      subtitle: "What's your eating style?",
      icon: "🥗",
      questions: [
        {
          id: "dietaryStyle",
          type: "select",
          label: "Do you follow any specific dietary style?",
          options: [
            { value: "none", label: "No specific diet" },
            { value: "vegan", label: "Vegan" },
            { value: "vegetarian", label: "Vegetarian" },
            { value: "keto", label: "Keto" },
            { value: "mediterranean", label: "Mediterranean" },
            { value: "high-protein", label: "High-protein" },
            { value: "paleo", label: "Paleo" },
          ],
        },
        {
          id: "allergies",
          type: "multiselect",
          label: "Any food allergies or restrictions?",
          options: [
            { value: "gluten", label: "Gluten" },
            { value: "dairy", label: "Dairy" },
            { value: "soy", label: "Soy" },
            { value: "nuts", label: "Nuts" },
            { value: "eggs", label: "Eggs" },
            { value: "shellfish", label: "Shellfish" },
            { value: "none", label: "None" },
          ],
        },
        {
          id: "dietStruggle",
          type: "select",
          label: "What's your biggest diet struggle?",
          options: [
            { value: "snacking", label: "Snacking" },
            { value: "late-night-eating", label: "Late-night eating" },
            { value: "meal-prep", label: "Meal prep" },
            { value: "cravings", label: "Cravings" },
            { value: "portion-control", label: "Portion control" },
            { value: "none", label: "No major struggles" },
          ],
        },
        {
          id: "cookingPreference",
          type: "select",
          label: "Do you cook at home or prefer simple meal prep?",
          options: [
            { value: "love-cooking", label: "Love cooking elaborate meals" },
            { value: "simple-cooking", label: "Simple cooking" },
            { value: "meal-prep", label: "Meal prep in advance" },
            { value: "minimal-cooking", label: "Minimal cooking" },
          ],
        },
      ],
    },
    {
      id: "lifestyle-recovery",
      title: "Lifestyle & Recovery",
      subtitle: "How do you take care of yourself?",
      icon: "🧘‍♀️",
      questions: [
        {
          id: "sleepHours",
          type: "select",
          label: "How many hours of sleep do you get on average?",
          options: [
            { value: "under-6", label: "Under 6 hours" },
            { value: "6-7", label: "6-7 hours" },
            { value: "7-8", label: "7-8 hours" },
            { value: "8-9", label: "8-9 hours" },
            { value: "over-9", label: "Over 9 hours" },
          ],
        },
        {
          id: "stressLevel",
          type: "select",
          label: "How stressed are you on a typical day?",
          options: [
            { value: "not-at-all", label: "Not at all" },
            { value: "slightly", label: "Slightly" },
            { value: "often", label: "Often" },
            { value: "all-the-time", label: "All the time" },
          ],
        },
        {
          id: "currentRecovery",
          type: "select",
          label: "Do you currently stretch, meditate, or do yoga?",
          options: [
            { value: "yes-regularly", label: "Yes, regularly" },
            { value: "sometimes", label: "Sometimes" },
            { value: "rarely", label: "Rarely" },
            { value: "never", label: "Never" },
          ],
        },
        {
          id: "recoveryRecommendations",
          type: "multiselect",
          label: "Would you like recommendations for:",
          options: [
            { value: "recovery-routines", label: "Recovery routines" },
            { value: "sleep-tips", label: "Sleep tips" },
            { value: "mobility-stretch", label: "Mobility/stretch sessions" },
            { value: "supplements", label: "Supplements (optional)" },
            { value: "stress-management", label: "Stress management" },
          ],
        },
      ],
    },
    {
      id: "personalization-contact",
      title: "Personalization & Contact",
      subtitle: "Final touches to customize your plan",
      icon: "📧",
      questions: [
        {
          id: "intensityLevel",
          type: "select",
          label: "What's your preferred intensity level?",
          options: [
            { value: "beginner", label: "Beginner" },
            { value: "intermediate", label: "Intermediate" },
            { value: "advanced", label: "Advanced" },
          ],
        },
        {
          id: "email",
          type: "email",
          label: "Would you like us to send your custom plan to your email?",
          placeholder: "Enter your email address",
        },
        {
          id: "trialInterest",
          type: "boolean",
          label:
            "Would you be open to a 7-day free trial of our personalized assistant tool?",
        },
      ],
    },
  ]

  onMount(() => {
    // Start the quiz with a delay for dramatic effect
    setTimeout(() => {
      showQuiz = true
    }, 500)
  })

  function nextStep() {
    if (currentStep < quizSections.length - 1) {
      currentStep++
      progress = ((currentStep + 1) / quizSections.length) * 100
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--
      progress = ((currentStep + 1) / quizSections.length) * 100
    }
  }

  function handleMultiSelect(questionId: string, value: string) {
    if (!answers[questionId]) {
      answers[questionId] = []
    }

    const index = answers[questionId].indexOf(value)
    if (index > -1) {
      answers[questionId].splice(index, 1)
    } else {
      answers[questionId].push(value)
    }
  }

  function isMultiSelectSelected(questionId: string, value: string) {
    return answers[questionId] && answers[questionId].includes(value)
  }

  function canProceed() {
    const currentSection = quizSections[currentStep]
    return currentSection.questions.every((question) => {
      if (question.type === "multiselect") {
        return answers[question.id] && answers[question.id].length > 0
      } else if (question.type === "boolean") {
        return answers[question.id] !== undefined
      } else {
        return (
          answers[question.id] && answers[question.id].toString().trim() !== ""
        )
      }
    })
  }

  function submitQuiz() {
    isSubmitting = true
    // Here you would typically send the data to your backend
    console.log("Quiz answers:", answers)

    // Simulate API call
    setTimeout(() => {
      isSubmitting = false
      // Redirect to results or thank you page
      window.location.href = "/health-quiz/results"
    }, 2000)
  }

  function getCurrentSection() {
    return quizSections[currentStep]
  }
</script>

<svelte:head>
  <title>Personalized Health Assistant Quiz - {WebsiteName}</title>
  <meta
    name="description"
    content="Take our comprehensive health quiz to get personalized diet, workout, and recovery plans tailored just for you."
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
          Your Personalized Health Plan
        </h1>
      </div>

      <div class="slide-in-right mb-8">
        <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
          Answer a few questions and get a customized diet, workout, and
          recovery plan designed specifically for your goals and lifestyle.
        </p>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">5</div>
          <div class="text-sm opacity-80">Sections</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">3</div>
          <div class="text-sm opacity-80">Plans</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">100%</div>
          <div class="text-sm opacity-80">Personalized</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-12 lg:py-16 px-6 max-w-4xl mx-auto">
  {#if showQuiz}
    <!-- Progress Bar -->
    <div class="mb-12">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm font-medium text-slate-600">
          Step {currentStep + 1} of {quizSections.length}
        </span>
        <span class="text-sm font-medium text-slate-600">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-3">
        <div
          class="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
          style="width: {progress}%"
        ></div>
      </div>
    </div>

    <!-- Quiz Section -->
    <div class="card bg-white shadow-2xl border-0 overflow-hidden">
      <div class="card-body p-8">
        <!-- Section Header -->
        <div class="text-center mb-8">
          <div class="text-6xl mb-4">{getCurrentSection().icon}</div>
          <h2
            class="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
          >
            {getCurrentSection().title}
          </h2>
          <p class="text-lg text-slate-600">{getCurrentSection().subtitle}</p>
        </div>

        <!-- Questions -->
        <div class="space-y-8">
          {#each getCurrentSection().questions as question}
            <div class="space-y-4">
              <label class="label">
                <span class="label-text font-bold text-lg"
                  >{question.label}</span
                >
              </label>

              {#if question.type === "select"}
                <select
                  bind:value={answers[question.id]}
                  class="select select-bordered select-lg w-full bg-gray-50 border-2 hover:border-primary transition-all duration-300"
                >
                  <option value="">Choose an option...</option>
                  {#each question.options as option}
                    <option value={option.value}>{option.label}</option>
                  {/each}
                </select>
              {:else if question.type === "multiselect"}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {#each question.options as option}
                    <label
                      class="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-all duration-300 cursor-pointer {isMultiSelectSelected(
                        question.id,
                        option.value,
                      )
                        ? 'border-primary bg-primary/5'
                        : ''}"
                    >
                      <input
                        type="checkbox"
                        class="checkbox checkbox-primary mr-3"
                        checked={isMultiSelectSelected(
                          question.id,
                          option.value,
                        )}
                        on:change={() =>
                          handleMultiSelect(question.id, option.value)}
                      />
                      <span class="font-medium">{option.label}</span>
                    </label>
                  {/each}
                </div>
              {:else if question.type === "text"}
                <input
                  type="text"
                  bind:value={answers[question.id]}
                  placeholder={question.placeholder}
                  class="input input-bordered input-lg w-full bg-gray-50 border-2 hover:border-primary transition-all duration-300"
                />
              {:else if question.type === "email"}
                <input
                  type="email"
                  bind:value={answers[question.id]}
                  placeholder={question.placeholder}
                  class="input input-bordered input-lg w-full bg-gray-50 border-2 hover:border-primary transition-all duration-300"
                />
              {:else if question.type === "boolean"}
                <div class="flex gap-4">
                  <label
                    class="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-all duration-300 cursor-pointer {answers[
                      question.id
                    ] === true
                      ? 'border-primary bg-primary/5'
                      : ''}"
                  >
                    <input
                      type="radio"
                      name={question.id}
                      class="radio radio-primary mr-3"
                      checked={answers[question.id] === true}
                      on:change={() => (answers[question.id] = true)}
                    />
                    <span class="font-medium">Yes</span>
                  </label>
                  <label
                    class="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-all duration-300 cursor-pointer {answers[
                      question.id
                    ] === false
                      ? 'border-primary bg-primary/5'
                      : ''}"
                  >
                    <input
                      type="radio"
                      name={question.id}
                      class="radio radio-primary mr-3"
                      checked={answers[question.id] === false}
                      on:change={() => (answers[question.id] = false)}
                    />
                    <span class="font-medium">No</span>
                  </label>
                </div>
              {/if}
            </div>
          {/each}
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-between mt-12">
          <button
            class="btn btn-outline btn-lg"
            on:click={prevStep}
            disabled={currentStep === 0}
          >
            ← Previous
          </button>

          {#if currentStep < quizSections.length - 1}
            <button
              class="btn btn-primary btn-lg"
              on:click={nextStep}
              disabled={!canProceed()}
            >
              Next →
            </button>
          {:else}
            <button
              class="btn btn-primary btn-lg"
              on:click={submitQuiz}
              disabled={!canProceed() || isSubmitting}
            >
              {#if isSubmitting}
                <span class="loading loading-spinner loading-md"></span>
                Creating Your Plan...
              {:else}
                🚀 Get My Personalized Plan
              {/if}
            </button>
          {/if}
        </div>
      </div>
    </div>
  {:else}
    <!-- Loading State -->
    <div class="text-center py-20">
      <div class="loading loading-spinner loading-lg mb-4"></div>
      <p class="text-lg text-slate-600">Preparing your personalized quiz...</p>
    </div>
  {/if}

  <!-- Benefits Section -->
  <div class="mt-20">
    <h2
      class="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      What You'll Get
    </h2>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="card bg-white shadow-xl border-0 text-center">
        <div class="card-body p-8">
          <div class="text-4xl mb-4">💪</div>
          <h3 class="text-xl font-bold mb-4">Custom Workout Plan</h3>
          <p class="text-slate-600">
            Tailored exercises based on your goals, equipment, and schedule
          </p>
        </div>
      </div>

      <div class="card bg-white shadow-xl border-0 text-center">
        <div class="card-body p-8">
          <div class="text-4xl mb-4">🥗</div>
          <h3 class="text-xl font-bold mb-4">Personalized Nutrition</h3>
          <p class="text-slate-600">
            Meal plans and nutrition advice that fit your lifestyle and
            preferences
          </p>
        </div>
      </div>

      <div class="card bg-white shadow-xl border-0 text-center">
        <div class="card-body p-8">
          <div class="text-4xl mb-4">🧘‍♀️</div>
          <h3 class="text-xl font-bold mb-4">Recovery Strategy</h3>
          <p class="text-slate-600">
            Sleep, stress management, and recovery techniques for optimal
            results
          </p>
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

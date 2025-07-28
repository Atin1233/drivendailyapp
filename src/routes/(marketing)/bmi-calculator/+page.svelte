<script lang="ts">
  import { WebsiteName } from "../../../config"
  import { onMount } from "svelte"

  let heightFeet = 5
  let heightInches = 8
  let weight = 150
  let bmi = 0
  let bmiCategory = ""
  let showResults = false
  let isCalculating = false
  let animatedBMI = 0
  let progressValue = 0
  let currentStep = 1

  function calculateBMI() {
    isCalculating = true
    currentStep = 2

    // Convert height to inches
    const totalHeightInches = heightFeet * 12 + heightInches

    // Convert to meters (1 inch = 0.0254 meters)
    const heightMeters = totalHeightInches * 0.0254

    // Convert weight to kg (1 pound = 0.453592 kg)
    const weightKg = weight * 0.453592

    // Calculate BMI: weight (kg) / height (m)²
    bmi = weightKg / (heightMeters * heightMeters)

    // Determine BMI category
    if (bmi < 18.5) {
      bmiCategory = "Underweight"
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiCategory = "Normal weight"
    } else if (bmi >= 25 && bmi < 30) {
      bmiCategory = "Overweight"
    } else {
      bmiCategory = "Obese"
    }

    // Animate the BMI result
    animateBMI()

    setTimeout(() => {
      showResults = true
      currentStep = 3
      isCalculating = false
    }, 2000)
  }

  function animateBMI() {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      animatedBMI = bmi * easeOut
      progressValue = progress * 100

      if (step >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
  }

  function resetCalculator() {
    heightFeet = 5
    heightInches = 8
    weight = 150
    bmi = 0
    bmiCategory = ""
    showResults = false
    animatedBMI = 0
    progressValue = 0
    currentStep = 1
  }

  function getBMIColor() {
    if (bmi < 18.5) return "text-amber-500"
    if (bmi < 25) return "text-green-500"
    if (bmi < 30) return "text-orange-500"
    return "text-red-500"
  }

  function getBMIBgColor() {
    if (bmi < 18.5) return "bg-amber-500"
    if (bmi < 25) return "bg-green-500"
    if (bmi < 30) return "bg-orange-500"
    return "bg-red-500"
  }

  function getBMIGradient() {
    if (bmi < 18.5) return "from-amber-400 to-amber-600"
    if (bmi < 25) return "from-green-400 to-green-600"
    if (bmi < 30) return "from-orange-400 to-orange-600"
    return "from-red-400 to-red-600"
  }

  onMount(() => {
    // Add some initial animation
    setTimeout(() => {
      currentStep = 1
    }, 500)
  })
</script>

<svelte:head>
  <title>BMI Calculator - {WebsiteName}</title>
  <meta
    name="description"
    content="Calculate your Body Mass Index (BMI) with our simple, accurate BMI calculator. Get instant results and understand what your BMI means for your health."
  />
</svelte:head>

<!-- Hero Section - BMI Calculator Focused -->
<div
  class="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden"
>
  <!-- Animated Health and Scale Icons -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 text-6xl animate-bounce">⚖️</div>
      <div class="absolute top-20 right-20 text-4xl animate-pulse">📊</div>
      <div
        class="absolute bottom-20 left-1/4 text-5xl animate-spin"
        style="animation-duration: 12s;"
      >
        🏥
      </div>
      <div
        class="absolute bottom-10 right-1/3 text-3xl animate-bounce"
        style="animation-delay: 1s;"
      >
        💪
      </div>
      <div
        class="absolute top-1/2 left-1/4 text-4xl animate-pulse"
        style="animation-delay: 2s;"
      >
        📈
      </div>
    </div>
    <!-- Animated Grid Pattern -->
    <div
      class="absolute inset-0"
      style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 40px 40px;"
    ></div>
  </div>

  <div class="container mx-auto px-6 relative z-10">
    <div class="max-w-6xl mx-auto">
      <!-- Tool Badge -->
      <div class="text-center mb-8">
        <div
          class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium"
        >
          <span class="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"
          ></span>
          Professional BMI Calculator Tool
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="text-left space-y-8">
          <div class="slide-in-left">
            <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Calculate Your
              <span
                class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >BMI</span
              >
            </h1>
          </div>

          <div class="slide-in-right">
            <p class="text-xl lg:text-2xl opacity-90 leading-relaxed mb-8">
              Calculate your Body Mass Index with our modern, interactive
              calculator. Get instant insights into your health status with
              beautiful visualizations.
            </p>
          </div>

          <!-- Tool Stats -->
          <div class="grid grid-cols-3 gap-4">
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-3xl font-bold mb-2">Instant</div>
              <div class="text-sm opacity-80">Results</div>
            </div>
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-3xl font-bold mb-2">Accurate</div>
              <div class="text-sm opacity-80">Calculations</div>
            </div>
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-3xl font-bold mb-2">Free</div>
              <div class="text-sm opacity-80">Tool</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Calculator Preview -->
        <div class="relative">
          <div
            class="card bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl"
          >
            <div class="card-body p-8">
              <div class="text-center mb-6">
                <div class="text-4xl mb-4">⚖️</div>
                <h3 class="text-2xl font-bold text-white mb-2">
                  Quick Calculator
                </h3>
                <p class="text-white/80">Get your BMI in seconds</p>
              </div>

              <!-- Calculator Preview -->
              <div class="space-y-4 mb-6">
                <div class="p-3 bg-white/10 rounded-lg">
                  <div class="text-sm text-white/70 mb-1">Height</div>
                  <div class="text-white font-medium">5' 8" (173 cm)</div>
                </div>
                <div class="p-3 bg-white/10 rounded-lg">
                  <div class="text-sm text-white/70 mb-1">Weight</div>
                  <div class="text-white font-medium">150 lbs (68 kg)</div>
                </div>
                <div
                  class="p-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg text-center"
                >
                  <div class="text-sm text-white/90 mb-1">Your BMI</div>
                  <div class="text-2xl font-bold text-white">22.8</div>
                  <div class="text-sm text-white/90">Normal Weight</div>
                </div>
              </div>

              <button
                class="btn btn-info btn-lg w-full"
                on:click={calculateBMI}
              >
                Calculate Your BMI →
              </button>
            </div>
          </div>

          <!-- Floating Elements -->
          <div
            class="absolute -top-6 -right-6 w-12 h-12 bg-blue-400 rounded-full float-animation"
          ></div>
          <div
            class="absolute -bottom-6 -left-6 w-8 h-8 bg-purple-400 rounded-full float-animation"
            style="animation-delay: -2s;"
          ></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-12 lg:py-16 px-6 max-w-6xl mx-auto">
  <!-- Progress Steps -->
  <div class="mb-12">
    <div class="flex items-center justify-center gap-4">
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold {currentStep >=
          1
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-gray-500'}"
        >
          1
        </div>
        <span
          class="text-sm {currentStep >= 1
            ? 'text-primary font-medium'
            : 'text-gray-500'}">Enter Data</span
        >
      </div>
      <div
        class="w-16 h-0.5 {currentStep >= 2 ? 'bg-primary' : 'bg-gray-200'}"
      ></div>
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold {currentStep >=
          2
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-gray-500'}"
        >
          2
        </div>
        <span
          class="text-sm {currentStep >= 2
            ? 'text-primary font-medium'
            : 'text-gray-500'}">Calculating</span
        >
      </div>
      <div
        class="w-16 h-0.5 {currentStep >= 3 ? 'bg-primary' : 'bg-gray-200'}"
      ></div>
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold {currentStep >=
          3
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-gray-500'}"
        >
          3
        </div>
        <span
          class="text-sm {currentStep >= 3
            ? 'text-primary font-medium'
            : 'text-gray-500'}">Results</span
        >
      </div>
    </div>
  </div>

  <div class="grid lg:grid-cols-2 gap-12">
    <!-- Calculator Section -->
    <div class="card bg-white shadow-2xl border-0 overflow-hidden">
      <div class="card-body p-8">
        <div class="text-center mb-8">
          <div class="text-4xl mb-4">📏</div>
          <h2
            class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
          >
            Enter Your Measurements
          </h2>
        </div>

        <form on:submit|preventDefault={calculateBMI} class="space-y-8">
          <!-- Height Input -->
          <div class="space-y-4">
            <label class="label">
              <span class="label-text font-bold text-lg">Height</span>
            </label>
            <div class="flex gap-4">
              <div class="flex-1">
                <label class="label">
                  <span class="label-text text-sm opacity-70">Feet</span>
                </label>
                <select
                  bind:value={heightFeet}
                  class="select select-bordered select-lg w-full bg-gray-50 border-2 hover:border-primary transition-all duration-300"
                >
                  {#each Array(8) as _, i}
                    <option value={i + 4}>{i + 4}</option>
                  {/each}
                </select>
              </div>
              <div class="flex-1">
                <label class="label">
                  <span class="label-text text-sm opacity-70">Inches</span>
                </label>
                <select
                  bind:value={heightInches}
                  class="select select-bordered select-lg w-full bg-gray-50 border-2 hover:border-primary transition-all duration-300"
                >
                  {#each Array(12) as _, i}
                    <option value={i}>{i}</option>
                  {/each}
                </select>
              </div>
            </div>
          </div>

          <!-- Weight Input -->
          <div class="space-y-4">
            <label class="label">
              <span class="label-text font-bold text-lg">Weight (pounds)</span>
            </label>
            <input
              type="number"
              bind:value={weight}
              min="50"
              max="500"
              class="input input-bordered input-lg w-full bg-gray-50 border-2 hover:border-primary transition-all duration-300"
              placeholder="Enter your weight"
            />
          </div>

          <!-- Calculate Button -->
          <button
            type="submit"
            class="btn btn-primary btn-lg w-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            disabled={isCalculating}
          >
            {#if isCalculating}
              <span class="loading loading-spinner loading-md"></span>
              Calculating...
            {:else}
              Calculate BMI
            {/if}
          </button>
        </form>

        <!-- Reset Button -->
        <button
          on:click={resetCalculator}
          class="btn btn-outline btn-sm w-full mt-6 hover:btn-error transition-all duration-300"
        >
          🔄 Reset Calculator
        </button>
      </div>
    </div>

    <!-- Results Section -->
    <div class="space-y-6">
      {#if isCalculating}
        <!-- Loading Animation -->
        <div
          class="card bg-gradient-to-br from-primary to-accent text-white shadow-2xl border-0"
        >
          <div class="card-body p-8 text-center">
            <div class="text-6xl mb-6">⚡</div>
            <h3 class="text-2xl font-bold mb-4">Calculating Your BMI...</h3>
            <div class="w-full bg-white/20 rounded-full h-3 mb-4">
              <div
                class="bg-white h-3 rounded-full transition-all duration-300"
                style="width: {progressValue}%"
              ></div>
            </div>
            <div class="text-4xl font-bold mb-2">{animatedBMI.toFixed(1)}</div>
            <div class="text-lg opacity-90">Processing your data...</div>
          </div>
        </div>
      {:else if showResults}
        <!-- BMI Results -->
        <div
          class="card bg-gradient-to-br {getBMIGradient()} text-white shadow-2xl border-0 transform hover:scale-105 transition-all duration-500"
        >
          <div class="card-body p-8 text-center">
            <div class="text-6xl mb-6">🎯</div>
            <h3 class="text-3xl font-bold mb-6">Your BMI Results</h3>
            <div class="text-8xl font-bold mb-4 drop-shadow-lg">
              {bmi.toFixed(1)}
            </div>
            <div class="text-2xl mb-6 font-semibold">{bmiCategory}</div>
            <div class="text-lg opacity-90 mb-6">
              Based on your height of <strong
                >{heightFeet}'{heightInches}"</strong
              >
              and weight of <strong>{weight} lbs</strong>
            </div>

            <!-- BMI Scale Visualization -->
            <div class="w-full bg-white/20 rounded-full h-4 mb-4">
              <div
                class="bg-white h-4 rounded-full transition-all duration-1000"
                style="width: {Math.min(
                  Math.max(((bmi - 15) / 20) * 100, 0),
                  100,
                )}%"
              ></div>
            </div>
            <div class="flex justify-between text-sm opacity-80">
              <span>15</span>
              <span>25</span>
              <span>35</span>
            </div>
          </div>
        </div>

        <!-- BMI Category Explanation -->
        <div
          class="card bg-white shadow-xl border-0 transform hover:scale-105 transition-all duration-300"
        >
          <div class="card-body p-8">
            <h3 class="text-2xl font-bold mb-6 text-center">What This Means</h3>
            <div class="space-y-4">
              {#if bmiCategory === "Underweight"}
                <div
                  class="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-lg"
                >
                  <div class="flex items-center gap-3 mb-3">
                    <span class="text-2xl">⚠️</span>
                    <h4 class="text-lg font-bold text-amber-700">
                      Underweight (BMI &lt; 18.5)
                    </h4>
                  </div>
                  <p class="text-amber-800 leading-relaxed">
                    You may be below a healthy weight range. Consider consulting
                    with a healthcare provider about healthy ways to gain weight
                    through proper nutrition and exercise.
                  </p>
                </div>
              {:else if bmiCategory === "Normal weight"}
                <div
                  class="p-6 bg-green-50 border-l-4 border-green-500 rounded-lg"
                >
                  <div class="flex items-center gap-3 mb-3">
                    <span class="text-2xl">✅</span>
                    <h4 class="text-lg font-bold text-green-700">
                      Normal weight (BMI 18.5-24.9)
                    </h4>
                  </div>
                  <p class="text-green-800 leading-relaxed">
                    Congratulations! You're within a healthy weight range. Focus
                    on maintaining a balanced diet and regular exercise to stay
                    healthy and strong.
                  </p>
                </div>
              {:else if bmiCategory === "Overweight"}
                <div
                  class="p-6 bg-orange-50 border-l-4 border-orange-500 rounded-lg"
                >
                  <div class="flex items-center gap-3 mb-3">
                    <span class="text-2xl">📈</span>
                    <h4 class="text-lg font-bold text-orange-700">
                      Overweight (BMI 25-29.9)
                    </h4>
                  </div>
                  <p class="text-orange-800 leading-relaxed">
                    You're above the healthy weight range. Consider lifestyle
                    changes like improved nutrition and increased physical
                    activity to reach a healthier weight.
                  </p>
                </div>
              {:else}
                <div class="p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="text-2xl">💪</span>
                    <h4 class="text-lg font-bold text-red-700">
                      Obese (BMI ≥ 30)
                    </h4>
                  </div>
                  <p class="text-red-800 leading-relaxed">
                    You're significantly above the healthy weight range.
                    Consider consulting with a healthcare provider for
                    personalized guidance on weight management and health
                    improvement.
                  </p>
                </div>
              {/if}
            </div>
          </div>
        </div>
      {:else}
        <!-- Placeholder -->
        <div
          class="card bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 shadow-lg"
        >
          <div class="card-body p-8 text-center">
            <div class="text-8xl mb-6">📊</div>
            <h3 class="text-2xl font-bold mb-4 text-gray-700">
              Ready to Calculate
            </h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Enter your height and weight above to see your BMI results and
              what they mean for your health journey.
            </p>
            <div class="mt-6 text-4xl">🎯</div>
          </div>
        </div>
      {/if}
    </div>
  </div>

  <!-- Educational Content -->
  <div class="mt-20 space-y-12">
    <div class="text-center">
      <h2
        class="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        Understanding BMI
      </h2>
      <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Body Mass Index (BMI) is a simple calculation that uses your height and
        weight to estimate body fat. While it's a useful screening tool, it's
        important to understand its limitations and use it as part of a
        comprehensive health assessment.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- BMI Categories -->
      <div
        class="card bg-white shadow-xl border-0 transform hover:scale-105 transition-all duration-300"
      >
        <div class="card-body p-8">
          <h3 class="text-2xl font-bold mb-6 text-center">BMI Categories</h3>
          <div class="space-y-4">
            <div
              class="flex justify-between items-center p-4 bg-amber-50 rounded-xl border border-amber-200"
            >
              <div class="flex items-center gap-3">
                <span class="text-2xl">⚠️</span>
                <span class="font-semibold text-amber-800">Underweight</span>
              </div>
              <span class="text-amber-600 font-bold text-lg">&lt; 18.5</span>
            </div>
            <div
              class="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200"
            >
              <div class="flex items-center gap-3">
                <span class="text-2xl">✅</span>
                <span class="font-semibold text-green-800">Normal weight</span>
              </div>
              <span class="text-green-600 font-bold text-lg">18.5 - 24.9</span>
            </div>
            <div
              class="flex justify-between items-center p-4 bg-orange-50 rounded-xl border border-orange-200"
            >
              <div class="flex items-center gap-3">
                <span class="text-2xl">📈</span>
                <span class="font-semibold text-orange-800">Overweight</span>
              </div>
              <span class="text-orange-600 font-bold text-lg">25.0 - 29.9</span>
            </div>
            <div
              class="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200"
            >
              <div class="flex items-center gap-3">
                <span class="text-2xl">💪</span>
                <span class="font-semibold text-red-800">Obese</span>
              </div>
              <span class="text-red-600 font-bold text-lg">≥ 30.0</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Limitations -->
      <div
        class="card bg-white shadow-xl border-0 transform hover:scale-105 transition-all duration-300"
      >
        <div class="card-body p-8">
          <h3 class="text-2xl font-bold mb-6 text-center">
            Important Limitations
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-4 p-3 bg-blue-50 rounded-lg">
              <span class="text-primary text-xl mt-1">💪</span>
              <span class="text-blue-800"
                >BMI doesn't distinguish between muscle and fat mass</span
              >
            </li>
            <li class="flex items-start gap-4 p-3 bg-purple-50 rounded-lg">
              <span class="text-primary text-xl mt-1">🏃‍♂️</span>
              <span class="text-purple-800"
                >May not be accurate for athletes with high muscle mass</span
              >
            </li>
            <li class="flex items-start gap-4 p-3 bg-indigo-50 rounded-lg">
              <span class="text-primary text-xl mt-1">👥</span>
              <span class="text-indigo-800"
                >Doesn't account for age, sex, or body composition</span
              >
            </li>
            <li class="flex items-start gap-4 p-3 bg-cyan-50 rounded-lg">
              <span class="text-primary text-xl mt-1">🔍</span>
              <span class="text-cyan-800"
                >Should be used as one of many health indicators</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16">
      <div
        class="card bg-gradient-to-r from-primary to-accent text-white shadow-2xl border-0"
      >
        <div class="card-body p-12">
          <h3 class="text-4xl font-bold mb-6">Take Your Health Further</h3>
          <p class="text-xl opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
            BMI is just one piece of the health puzzle. Explore our
            comprehensive guides to nutrition, fitness, and wellness for a
            complete health transformation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog"
              class="btn btn-secondary btn-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              📚 Read Our Blog
            </a>
            <a
              href="/testimonials"
              class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              🌟 Success Stories
            </a>
          </div>
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

<script lang="ts">
  import { WebsiteName } from "../../../config"

  let heightFeet = 5
  let heightInches = 8
  let weight = 150
  let bmi = 0
  let bmiCategory = ""
  let showResults = false

  function calculateBMI() {
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

    showResults = true
  }

  function resetCalculator() {
    heightFeet = 5
    heightInches = 8
    weight = 150
    bmi = 0
    bmiCategory = ""
    showResults = false
  }
</script>

<svelte:head>
  <title>BMI Calculator - {WebsiteName}</title>
  <meta
    name="description"
    content="Calculate your Body Mass Index (BMI) with our simple, accurate BMI calculator. Get instant results and understand what your BMI means for your health."
  />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto">
  <!-- Header Section -->
  <div class="text-center mb-12">
    <h1
      class="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      BMI Calculator
    </h1>
    <p class="text-xl text-slate-600 max-w-2xl mx-auto">
      Calculate your Body Mass Index (BMI) to understand your weight status and
      get insights into your health.
    </p>
  </div>

  <div class="grid lg:grid-cols-2 gap-12">
    <!-- Calculator Section -->
    <div class="card bg-white shadow-lg border border-primary/10">
      <div class="card-body">
        <h2 class="text-2xl font-bold mb-6 text-center">Calculate Your BMI</h2>

        <form on:submit|preventDefault={calculateBMI} class="space-y-6">
          <!-- Height Input -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Height</span>
            </label>
            <div class="flex gap-4">
              <div class="flex-1">
                <label class="label">
                  <span class="label-text text-sm">Feet</span>
                </label>
                <select
                  bind:value={heightFeet}
                  class="select select-bordered w-full"
                >
                  {#each Array(8) as _, i}
                    <option value={i + 4}>{i + 4}</option>
                  {/each}
                </select>
              </div>
              <div class="flex-1">
                <label class="label">
                  <span class="label-text text-sm">Inches</span>
                </label>
                <select
                  bind:value={heightInches}
                  class="select select-bordered w-full"
                >
                  {#each Array(12) as _, i}
                    <option value={i}>{i}</option>
                  {/each}
                </select>
              </div>
            </div>
          </div>

          <!-- Weight Input -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Weight (pounds)</span>
            </label>
            <input
              type="number"
              bind:value={weight}
              min="50"
              max="500"
              class="input input-bordered w-full"
              placeholder="Enter your weight"
            />
          </div>

          <!-- Calculate Button -->
          <button type="submit" class="btn btn-primary w-full">
            Calculate BMI
          </button>
        </form>

        <!-- Reset Button -->
        <button
          on:click={resetCalculator}
          class="btn btn-outline btn-sm w-full mt-4"
        >
          Reset Calculator
        </button>
      </div>
    </div>

    <!-- Results Section -->
    <div class="space-y-6">
      {#if showResults}
        <!-- BMI Results -->
        <div
          class="card bg-gradient-to-r from-primary to-accent text-white shadow-lg"
        >
          <div class="card-body text-center">
            <h3 class="text-2xl font-bold mb-4">Your BMI Results</h3>
            <div class="text-6xl font-bold mb-2">{bmi.toFixed(1)}</div>
            <div class="text-xl mb-4">{bmiCategory}</div>
            <div class="text-sm opacity-90">
              Based on your height of {heightFeet}'{heightInches}" and weight of {weight}
              lbs
            </div>
          </div>
        </div>

        <!-- BMI Category Explanation -->
        <div class="card bg-white shadow-lg border border-primary/10">
          <div class="card-body">
            <h3 class="text-xl font-bold mb-4">What This Means</h3>
            <div class="space-y-3">
              {#if bmiCategory === "Underweight"}
                <p class="text-amber-600">
                  <strong>Underweight (BMI &lt; 18.5):</strong> You may be below
                  a healthy weight range. Consider consulting with a healthcare provider
                  about healthy ways to gain weight.
                </p>
              {:else if bmiCategory === "Normal weight"}
                <p class="text-green-600">
                  <strong>Normal weight (BMI 18.5-24.9):</strong> Congratulations!
                  You're within a healthy weight range. Focus on maintaining a balanced
                  diet and regular exercise.
                </p>
              {:else if bmiCategory === "Overweight"}
                <p class="text-orange-600">
                  <strong>Overweight (BMI 25-29.9):</strong> You're above the healthy
                  weight range. Consider lifestyle changes like improved nutrition
                  and increased physical activity.
                </p>
              {:else}
                <p class="text-red-600">
                  <strong>Obese (BMI ≥ 30):</strong> You're significantly above the
                  healthy weight range. Consider consulting with a healthcare provider
                  for personalized guidance.
                </p>
              {/if}
            </div>
          </div>
        </div>
      {:else}
        <!-- Placeholder -->
        <div class="card bg-gray-50 border-2 border-dashed border-gray-300">
          <div class="card-body text-center">
            <div class="text-6xl mb-4">📊</div>
            <h3 class="text-xl font-bold mb-2">Ready to Calculate</h3>
            <p class="text-gray-600">
              Enter your height and weight above to see your BMI results and
              what they mean for your health.
            </p>
          </div>
        </div>
      {/if}
    </div>
  </div>

  <!-- Educational Content -->
  <div class="mt-16 space-y-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-6">Understanding BMI</h2>
      <p class="text-lg text-slate-600 max-w-3xl mx-auto">
        Body Mass Index (BMI) is a simple calculation that uses your height and
        weight to estimate body fat. While it's a useful screening tool, it's
        important to understand its limitations.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- BMI Categories -->
      <div class="card bg-white shadow-lg border border-primary/10">
        <div class="card-body">
          <h3 class="text-xl font-bold mb-4">BMI Categories</h3>
          <div class="space-y-3">
            <div
              class="flex justify-between items-center p-3 bg-amber-50 rounded-lg"
            >
              <span class="font-semibold">Underweight</span>
              <span class="text-amber-600 font-bold">&lt; 18.5</span>
            </div>
            <div
              class="flex justify-between items-center p-3 bg-green-50 rounded-lg"
            >
              <span class="font-semibold">Normal weight</span>
              <span class="text-green-600 font-bold">18.5 - 24.9</span>
            </div>
            <div
              class="flex justify-between items-center p-3 bg-orange-50 rounded-lg"
            >
              <span class="font-semibold">Overweight</span>
              <span class="text-orange-600 font-bold">25.0 - 29.9</span>
            </div>
            <div
              class="flex justify-between items-center p-3 bg-red-50 rounded-lg"
            >
              <span class="font-semibold">Obese</span>
              <span class="text-red-600 font-bold">≥ 30.0</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Limitations -->
      <div class="card bg-white shadow-lg border border-primary/10">
        <div class="card-body">
          <h3 class="text-xl font-bold mb-4">Important Limitations</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
              <span class="text-primary mt-1">•</span>
              <span>BMI doesn't distinguish between muscle and fat mass</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary mt-1">•</span>
              <span>May not be accurate for athletes with high muscle mass</span
              >
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary mt-1">•</span>
              <span>Doesn't account for age, sex, or body composition</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary mt-1">•</span>
              <span>Should be used as one of many health indicators</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-12">
      <div
        class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl"
      >
        <div class="card-body">
          <h3 class="text-2xl font-bold mb-4">Take Your Health Further</h3>
          <p class="text-lg opacity-90 mb-6">
            BMI is just one piece of the health puzzle. Explore our
            comprehensive guides to nutrition, fitness, and wellness.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/blog" class="btn btn-secondary btn-lg"> Read Our Blog </a>
            <a
              href="/testimonials"
              class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"
            >
              Success Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

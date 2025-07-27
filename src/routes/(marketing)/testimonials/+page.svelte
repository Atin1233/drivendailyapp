<script lang="ts">
  import { WebsiteName } from "../../../config"
  import { onMount } from "svelte"

  let animatedStats = {
    members: 0,
    success: 0,
    rating: 0,
  }

  onMount(() => {
    // Animate stats
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      animatedStats.members = Math.floor(10000 * easeOut)
      animatedStats.success = Math.floor(95 * easeOut)
      animatedStats.rating = Math.floor(49 * easeOut) / 10 // 4.9

      if (step >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
  })
</script>

<svelte:head>
  <title>Testimonials - {WebsiteName}</title>
  <meta
    name="description"
    content="See what our community says about their transformation journey with Driven Daily."
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
          Real Results, Real Stories
        </h1>
      </div>

      <div class="slide-in-right mb-8">
        <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
          Join thousands of people who have transformed their health and fitness
          with our research-backed approach.
        </p>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.members.toLocaleString()}+
          </div>
          <div class="text-sm opacity-80">Active Members</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.success}%
          </div>
          <div class="text-sm opacity-80">Success Rate</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.rating}/5
          </div>
          <div class="text-sm opacity-80">Average Rating</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-12 lg:py-16 px-6 max-w-6xl mx-auto">
  <!-- Featured Testimonials -->
  <div class="mb-20">
    <h2
      class="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      Featured Stories
    </h2>
    <div class="grid gap-8 lg:grid-cols-2">
      <!-- Testimonial 1 -->
      <div
        class="card bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
      >
        <div class="card-body p-8">
          <div class="flex items-center mb-6">
            <div class="avatar placeholder mr-6">
              <div
                class="bg-gradient-to-r from-primary to-accent text-white rounded-full w-16 h-16 flex items-center justify-center"
              >
                <span class="text-2xl font-bold">S</span>
              </div>
            </div>
            <div>
              <div class="font-bold text-xl text-slate-800">Sarah M.</div>
              <div class="text-slate-500">Lost 25 lbs in 6 months</div>
            </div>
          </div>
          <div class="flex mb-6">
            {#each Array(5) as _, i}
              <span class="text-yellow-400 text-xl">★</span>
            {/each}
          </div>
          <blockquote class="text-slate-700 italic text-lg leading-relaxed">
            "Driven Daily completely changed my relationship with fitness. The
            20-minute workouts fit perfectly into my busy schedule, and the
            nutrition tips are actually practical. I've never felt better!"
          </blockquote>
          <div class="mt-6 pt-6 border-t border-gray-100">
            <div class="flex items-center gap-4 text-sm text-slate-500">
              <span>🏃‍♀️ Consistent workouts</span>
              <span>🥗 Better nutrition</span>
              <span>⚡ More energy</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial 2 -->
      <div
        class="card bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
      >
        <div class="card-body p-8">
          <div class="flex items-center mb-6">
            <div class="avatar placeholder mr-6">
              <div
                class="bg-gradient-to-r from-secondary to-accent text-white rounded-full w-16 h-16 flex items-center justify-center"
              >
                <span class="text-2xl font-bold">M</span>
              </div>
            </div>
            <div>
              <div class="font-bold text-xl text-slate-800">Mike R.</div>
              <div class="text-slate-500">Gained 15 lbs muscle</div>
            </div>
          </div>
          <div class="flex mb-6">
            {#each Array(5) as _, i}
              <span class="text-yellow-400 text-xl">★</span>
            {/each}
          </div>
          <blockquote class="text-slate-700 italic text-lg leading-relaxed">
            "The protein guide and meal prep tips were game-changers. I finally
            understand what my body needs and how to fuel it properly. The
            results speak for themselves!"
          </blockquote>
          <div class="mt-6 pt-6 border-t border-gray-100">
            <div class="flex items-center gap-4 text-sm text-slate-500">
              <span>💪 Muscle gain</span>
              <span>🍗 Better nutrition</span>
              <span>📈 Strength increase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- More Testimonials Grid -->
  <div class="mb-20">
    <h2
      class="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      More Success Stories
    </h2>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <!-- Testimonial 3 -->
      <div
        class="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
      >
        <div class="card-body p-6">
          <div class="flex items-center mb-4">
            <div class="avatar placeholder mr-4">
              <div
                class="bg-gradient-to-r from-primary to-primary/80 text-white rounded-full w-12 h-12 flex items-center justify-center"
              >
                <span class="text-lg font-bold">J</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-lg text-slate-800">Jessica L.</div>
              <div class="text-sm text-slate-500">Improved energy levels</div>
            </div>
          </div>
          <div class="flex mb-4">
            {#each Array(5) as _, i}
              <span class="text-yellow-400">★</span>
            {/each}
          </div>
          <p class="text-slate-600 leading-relaxed">
            "The morning habits article literally changed my life. I have so
            much more energy throughout the day now."
          </p>
          <div class="mt-4 pt-4 border-t border-gray-100">
            <span class="text-sm text-primary font-medium"
              >🌅 Morning routine</span
            >
          </div>
        </div>
      </div>

      <!-- Testimonial 4 -->
      <div
        class="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
      >
        <div class="card-body p-6">
          <div class="flex items-center mb-4">
            <div class="avatar placeholder mr-4">
              <div
                class="bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-full w-12 h-12 flex items-center justify-center"
              >
                <span class="text-lg font-bold">D</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-lg text-slate-800">David K.</div>
              <div class="text-sm text-slate-500">
                Consistent workout routine
              </div>
            </div>
          </div>
          <div class="flex mb-4">
            {#each Array(5) as _, i}
              <span class="text-yellow-400">★</span>
            {/each}
          </div>
          <p class="text-slate-600 leading-relaxed">
            "Finally found a workout routine I can stick to. The no-equipment
            workouts are perfect for my apartment."
          </p>
          <div class="mt-4 pt-4 border-t border-gray-100">
            <span class="text-sm text-secondary font-medium"
              >🏠 Home workouts</span
            >
          </div>
        </div>
      </div>

      <!-- Testimonial 5 -->
      <div
        class="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
      >
        <div class="card-body p-6">
          <div class="flex items-center mb-4">
            <div class="avatar placeholder mr-4">
              <div
                class="bg-gradient-to-r from-accent to-accent/80 text-white rounded-full w-12 h-12 flex items-center justify-center"
              >
                <span class="text-lg font-bold">A</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-lg text-slate-800">Alex P.</div>
              <div class="text-sm text-slate-500">Better mindset</div>
            </div>
          </div>
          <div class="flex mb-4">
            {#each Array(5) as _, i}
              <span class="text-yellow-400">★</span>
            {/each}
          </div>
          <p class="text-slate-600 leading-relaxed">
            "The mindset articles helped me break through my mental barriers.
            I'm finally making progress!"
          </p>
          <div class="mt-4 pt-4 border-t border-gray-100">
            <span class="text-sm text-accent font-medium">🧠 Mindset shift</span
            >
          </div>
        </div>
      </div>

      <!-- Testimonial 6 -->
      <div
        class="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
      >
        <div class="card-body p-6">
          <div class="flex items-center mb-4">
            <div class="avatar placeholder mr-4">
              <div
                class="bg-gradient-to-r from-success to-success/80 text-white rounded-full w-12 h-12 flex items-center justify-center"
              >
                <span class="text-lg font-bold">R</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-lg text-slate-800">Rachel T.</div>
              <div class="text-sm text-slate-500">Weight loss success</div>
            </div>
          </div>
          <div class="flex mb-4">
            {#each Array(5) as _, i}
              <span class="text-yellow-400">★</span>
            {/each}
          </div>
          <p class="text-slate-600 leading-relaxed">
            "Lost 30 pounds following the nutrition advice. The meal prep tips
            saved me so much time and money."
          </p>
          <div class="mt-4 pt-4 border-t border-gray-100">
            <span class="text-sm text-success font-medium">🥗 Meal prep</span>
          </div>
        </div>
      </div>

      <!-- Testimonial 7 -->
      <div
        class="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
      >
        <div class="card-body p-6">
          <div class="flex items-center mb-4">
            <div class="avatar placeholder mr-4">
              <div
                class="bg-gradient-to-r from-warning to-warning/80 text-white rounded-full w-12 h-12 flex items-center justify-center"
              >
                <span class="text-lg font-bold">T</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-lg text-slate-800">Tom B.</div>
              <div class="text-sm text-slate-500">Improved strength</div>
            </div>
          </div>
          <div class="flex mb-4">
            {#each Array(5) as _, i}
              <span class="text-yellow-400">★</span>
            {/each}
          </div>
          <p class="text-slate-600 leading-relaxed">
            "The consistency articles motivated me to stick with it. I'm
            stronger than I've ever been at 45!"
          </p>
          <div class="mt-4 pt-4 border-t border-gray-100">
            <span class="text-sm text-warning font-medium"
              >💪 Strength gains</span
            >
          </div>
        </div>
      </div>

      <!-- Testimonial 8 -->
      <div
        class="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
      >
        <div class="card-body p-6">
          <div class="flex items-center mb-4">
            <div class="avatar placeholder mr-4">
              <div
                class="bg-gradient-to-r from-info to-info/80 text-white rounded-full w-12 h-12 flex items-center justify-center"
              >
                <span class="text-lg font-bold">L</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-lg text-slate-800">Lisa M.</div>
              <div class="text-sm text-slate-500">Better sleep</div>
            </div>
          </div>
          <div class="flex mb-4">
            {#each Array(5) as _, i}
              <span class="text-yellow-400">★</span>
            {/each}
          </div>
          <p class="text-slate-600 leading-relaxed">
            "The morning routine tips improved my sleep quality dramatically. I
            wake up feeling refreshed every day."
          </p>
          <div class="mt-4 pt-4 border-t border-gray-100">
            <span class="text-sm text-info font-medium">😴 Better sleep</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Success Metrics -->
  <div class="mb-20">
    <h2
      class="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      Community Impact
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="text-5xl font-bold text-primary mb-4">25 lbs</div>
        <div class="text-slate-600">Average Weight Loss</div>
      </div>
      <div class="text-center">
        <div class="text-5xl font-bold text-secondary mb-4">15 lbs</div>
        <div class="text-slate-600">Average Muscle Gain</div>
      </div>
      <div class="text-center">
        <div class="text-5xl font-bold text-accent mb-4">85%</div>
        <div class="text-slate-600">Energy Improvement</div>
      </div>
      <div class="text-center">
        <div class="text-5xl font-bold text-success mb-4">92%</div>
        <div class="text-slate-600">Sleep Quality</div>
      </div>
    </div>
  </div>

  <!-- Call to Action -->
  <div class="text-center">
    <div
      class="card bg-gradient-to-r from-primary to-accent text-white shadow-2xl border-0"
    >
      <div class="card-body p-12">
        <h3 class="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Start Your Journey?
        </h3>
        <p class="text-xl opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Join thousands of others who have transformed their health with Driven
          Daily. Your success story starts today.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/pricing"
            class="btn btn-secondary btn-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Plans
          </a>
          <a
            href="/blog"
            class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            Read Our Blog
          </a>
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

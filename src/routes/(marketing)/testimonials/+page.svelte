<script lang="ts">
  import { WebsiteName } from "../../../config"
</script>

<svelte:head>
  <title>Testimonials - {WebsiteName}</title>
  <meta
    name="description"
    content="See what our community says about their transformation journey with Driven Daily."
  />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-6xl mx-auto">
  <!-- Header Section -->
  <div class="text-center mb-16">
    <h1
      class="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      Real Results, Real Stories
    </h1>
    <p class="text-xl text-slate-600 max-w-3xl mx-auto">
      Join thousands of people who have transformed their health and fitness
      with our research-backed approach.
    </p>
  </div>

  <!-- Statistics Section -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <div class="text-center">
      <div class="text-4xl font-bold text-primary mb-2">10,000+</div>
      <div class="text-slate-600">Active Members</div>
    </div>
    <div class="text-center">
      <div class="text-4xl font-bold text-primary mb-2">95%</div>
      <div class="text-slate-600">Success Rate</div>
    </div>
    <div class="text-center">
      <div class="text-4xl font-bold text-primary mb-2">4.9/5</div>
      <div class="text-slate-600">Average Rating</div>
    </div>
  </div>

  <!-- Featured Testimonials -->
  <div class="mb-16">
    <h2 class="text-3xl font-bold text-center mb-12">Featured Stories</h2>
    <div class="grid gap-8 lg:grid-cols-2">
      <!-- Testimonial 1 -->
      <div class="card bg-white shadow-lg border border-primary/10">
        <div class="card-body">
          <div class="flex items-center mb-4">
            <div class="avatar placeholder mr-4">
              <div class="bg-primary text-white rounded-full w-12">
                <span class="text-lg">S</span>
              </div>
            </div>
            <div>
              <div class="font-semibold">Sarah M.</div>
              <div class="text-sm text-slate-500">Lost 25 lbs in 6 months</div>
            </div>
          </div>
          <div class="flex mb-4">
            {#each Array(5) as _, i}
              <span class="text-yellow-400">★</span>
            {/each}
          </div>
          <blockquote class="text-slate-700 italic">
            "Driven Daily completely changed my relationship with fitness. The
            20-minute workouts fit perfectly into my busy schedule, and the
            nutrition tips are actually practical. I've never felt better!"
          </blockquote>
        </div>
      </div>

      <!-- Testimonial 2 -->
      <div class="card bg-white shadow-lg border border-primary/10">
        <div class="card-body">
          <div class="flex items-center mb-4">
            <div class="avatar placeholder mr-4">
              <div class="bg-accent text-white rounded-full w-12">
                <span class="text-lg">M</span>
              </div>
            </div>
            <div>
              <div class="font-semibold">Mike R.</div>
              <div class="text-sm text-slate-500">Gained 15 lbs muscle</div>
            </div>
          </div>
          <div class="flex mb-4">
            {#each Array(5) as _, i}
              <span class="text-yellow-400">★</span>
            {/each}
          </div>
          <blockquote class="text-slate-700 italic">
            "The protein guide and meal prep tips were game-changers. I finally
            understand what my body needs and how to fuel it properly. The
            results speak for themselves!"
          </blockquote>
        </div>
      </div>
    </div>
  </div>

  <!-- More Testimonials Grid -->
  <div class="mb-16">
    <h2 class="text-3xl font-bold text-center mb-12">More Success Stories</h2>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- Testimonial 3 -->
      <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
        <div class="card-body">
          <div class="flex items-center mb-3">
            <div class="avatar placeholder mr-3">
              <div class="bg-primary text-white rounded-full w-10">
                <span class="text-sm">J</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-sm">Jessica L.</div>
              <div class="text-xs text-slate-500">Improved energy levels</div>
            </div>
          </div>
          <div class="flex mb-3">
            {#each Array(5) as _, i}
              <span class="text-yellow-400 text-sm">★</span>
            {/each}
          </div>
          <p class="text-sm text-slate-600">
            "The morning habits article literally changed my life. I have so
            much more energy throughout the day now."
          </p>
        </div>
      </div>

      <!-- Testimonial 4 -->
      <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
        <div class="card-body">
          <div class="flex items-center mb-3">
            <div class="avatar placeholder mr-3">
              <div class="bg-accent text-white rounded-full w-10">
                <span class="text-sm">D</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-sm">David K.</div>
              <div class="text-xs text-slate-500">
                Consistent workout routine
              </div>
            </div>
          </div>
          <div class="flex mb-3">
            {#each Array(5) as _, i}
              <span class="text-yellow-400 text-sm">★</span>
            {/each}
          </div>
          <p class="text-sm text-slate-600">
            "Finally found a workout routine I can stick to. The no-equipment
            workouts are perfect for my apartment."
          </p>
        </div>
      </div>

      <!-- Testimonial 5 -->
      <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
        <div class="card-body">
          <div class="flex items-center mb-3">
            <div class="avatar placeholder mr-3">
              <div class="bg-primary text-white rounded-full w-10">
                <span class="text-sm">A</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-sm">Alex P.</div>
              <div class="text-xs text-slate-500">Better mindset</div>
            </div>
          </div>
          <div class="flex mb-3">
            {#each Array(5) as _, i}
              <span class="text-yellow-400 text-sm">★</span>
            {/each}
          </div>
          <p class="text-sm text-slate-600">
            "The mindset articles helped me break through my mental barriers.
            I'm finally making progress!"
          </p>
        </div>
      </div>

      <!-- Testimonial 6 -->
      <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
        <div class="card-body">
          <div class="flex items-center mb-3">
            <div class="avatar placeholder mr-3">
              <div class="bg-accent text-white rounded-full w-10">
                <span class="text-sm">R</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-sm">Rachel T.</div>
              <div class="text-xs text-slate-500">Weight loss success</div>
            </div>
          </div>
          <div class="flex mb-3">
            {#each Array(5) as _, i}
              <span class="text-yellow-400 text-sm">★</span>
            {/each}
          </div>
          <p class="text-sm text-slate-600">
            "Lost 30 pounds following the nutrition advice. The meal prep tips
            saved me so much time and money."
          </p>
        </div>
      </div>

      <!-- Testimonial 7 -->
      <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
        <div class="card-body">
          <div class="flex items-center mb-3">
            <div class="avatar placeholder mr-3">
              <div class="bg-primary text-white rounded-full w-10">
                <span class="text-sm">T</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-sm">Tom B.</div>
              <div class="text-xs text-slate-500">Improved strength</div>
            </div>
          </div>
          <div class="flex mb-3">
            {#each Array(5) as _, i}
              <span class="text-yellow-400 text-sm">★</span>
            {/each}
          </div>
          <p class="text-sm text-slate-600">
            "The consistency articles motivated me to stick with it. I'm
            stronger than I've ever been at 45!"
          </p>
        </div>
      </div>

      <!-- Testimonial 8 -->
      <div class="card bg-white shadow-md hover:shadow-lg transition-shadow">
        <div class="card-body">
          <div class="flex items-center mb-3">
            <div class="avatar placeholder mr-3">
              <div class="bg-accent text-white rounded-full w-10">
                <span class="text-sm">L</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-sm">Lisa M.</div>
              <div class="text-xs text-slate-500">Better sleep</div>
            </div>
          </div>
          <div class="flex mb-3">
            {#each Array(5) as _, i}
              <span class="text-yellow-400 text-sm">★</span>
            {/each}
          </div>
          <p class="text-sm text-slate-600">
            "The morning routine tips improved my sleep quality dramatically. I
            wake up feeling refreshed every day."
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Call to Action -->
  <div class="text-center">
    <div
      class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl"
    >
      <div class="card-body">
        <h3 class="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
        <p class="text-xl opacity-90 mb-6">
          Join thousands of others who have transformed their health with Driven
          Daily.
        </p>
        <div class="flex gap-4 justify-center">
          <a href="/pricing" class="btn btn-secondary btn-lg"> View Plans </a>
          <a
            href="/blog"
            class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"
          >
            Read Our Blog
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

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
<div class="hero-section text-white py-24 relative overflow-hidden">
  <!-- Background Pattern -->
  <div
    class="absolute inset-0 bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500"
  ></div>
  <div class="absolute inset-0 bg-black/20"></div>

  <!-- Floating Elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div
      class="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full floating"
    ></div>
    <div
      class="absolute top-40 right-20 w-20 h-20 bg-white/10 rounded-full floating"
      style="animation-delay: -2s;"
    ></div>
    <div
      class="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full floating"
      style="animation-delay: -4s;"
    ></div>
    <div
      class="absolute top-1/2 left-1/3 w-12 h-12 bg-white/10 rounded-full floating"
      style="animation-delay: -1s;"
    ></div>
  </div>

  <div class="container mx-auto px-6 relative z-10">
    <div class="text-center max-w-5xl mx-auto">
      <div class="slide-in-left mb-8">
        <div class="text-6xl mb-6">⭐</div>
        <h1
          class="text-5xl lg:text-7xl font-bold mb-8 leading-tight font-poppins"
        >
          Real Results, Real Stories
        </h1>
      </div>

      <div class="slide-in-right mb-12">
        <p
          class="text-xl lg:text-2xl opacity-95 leading-relaxed max-w-3xl mx-auto"
        >
          Join thousands of people who have transformed their health and fitness
          with our research-backed approach.
        </p>
      </div>

      <!-- Stats Section -->
      <div
        class="stats-section animate-on-scroll grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
      >
        <div class="stat-card">
          <div class="text-4xl lg:text-5xl font-bold mb-3">
            {animatedStats.members.toLocaleString()}+
          </div>
          <div class="text-lg opacity-90">Active Members</div>
        </div>
        <div class="stat-card">
          <div class="text-4xl lg:text-5xl font-bold mb-3">
            {animatedStats.success}%
          </div>
          <div class="text-lg opacity-90">Success Rate</div>
        </div>
        <div class="stat-card">
          <div class="text-4xl lg:text-5xl font-bold mb-3">
            {animatedStats.rating}/5
          </div>
          <div class="text-lg opacity-90">Average Rating</div>
        </div>
      </div>

      <!-- Gallery Button -->
      <div class="text-center mt-1 mb-8">
        <a
          href="/gallery"
          class="btn bg-purple-600 hover:bg-purple-700 text-white btn-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          📸 View Before & After Gallery
        </a>
        <p class="text-white/80 mt-4 text-lg">
          See real transformations from our community members
        </p>
      </div>
    </div>
  </div>
</div>

<div class="py-16 lg:py-20 px-6 max-w-6xl mx-auto">
  <!-- Featured Testimonials -->
  <div class="mb-20">
    <h2
      class="text-4xl font-bold text-center mb-12 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500"
    >
      Featured Stories
    </h2>
    <div class="grid gap-8 lg:grid-cols-2">
      <!-- Testimonial 1 -->
      <div class="featured-testimonial">
        <div class="testimonial-header">
          <div class="avatar-placeholder">
            <span class="avatar-text">S</span>
          </div>
          <div class="testimonial-info">
            <div class="testimonial-name">Sarah M.</div>
            <div class="testimonial-achievement">Lost 25 lbs in 6 months</div>
          </div>
        </div>
        <div class="rating-stars">
          {#each Array(5) as _, i}
            <span class="star">★</span>
          {/each}
        </div>
        <blockquote class="testimonial-quote">
          "Driven Daily completely changed my relationship with fitness. The
          20-minute workouts fit perfectly into my busy schedule, and the
          nutrition tips are actually practical. I've never felt better!"
        </blockquote>
        <div class="testimonial-tags">
          <span class="tag">🏃‍♀️ Consistent workouts</span>
          <span class="tag">🥗 Better nutrition</span>
          <span class="tag">⚡ More energy</span>
        </div>
      </div>

      <!-- Testimonial 2 -->
      <div class="featured-testimonial">
        <div class="testimonial-header">
          <div class="avatar-placeholder secondary">
            <span class="avatar-text">M</span>
          </div>
          <div class="testimonial-info">
            <div class="testimonial-name">Mike R.</div>
            <div class="testimonial-achievement">Gained 15 lbs muscle</div>
          </div>
        </div>
        <div class="rating-stars">
          {#each Array(5) as _, i}
            <span class="star">★</span>
          {/each}
        </div>
        <blockquote class="testimonial-quote">
          "The protein guide and meal prep tips were game-changers. I finally
          understand what my body needs and how to fuel it properly. The results
          speak for themselves!"
        </blockquote>
        <div class="testimonial-tags">
          <span class="tag">💪 Muscle gain</span>
          <span class="tag">🍗 Better nutrition</span>
          <span class="tag">📈 Strength increase</span>
        </div>
      </div>
    </div>
  </div>

  <!-- More Testimonials Grid -->
  <div class="mb-20">
    <h2
      class="text-4xl font-bold text-center mb-12 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500"
    >
      More Success Stories
    </h2>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <!-- Testimonial 3 -->
      <div class="testimonial-card">
        <div class="testimonial-header-small">
          <div class="avatar-placeholder-small primary">
            <span class="avatar-text-small">J</span>
          </div>
          <div class="testimonial-info-small">
            <div class="testimonial-name-small">Jessica L.</div>
            <div class="testimonial-achievement-small">
              Improved energy levels
            </div>
          </div>
        </div>
        <div class="rating-stars-small">
          {#each Array(5) as _, i}
            <span class="star-small">★</span>
          {/each}
        </div>
        <p class="testimonial-text">
          "The morning habits article literally changed my life. I have so much
          more energy throughout the day now."
        </p>
        <div class="testimonial-tag-single">
          <span class="tag-single">🌅 Morning routine</span>
        </div>
      </div>

      <!-- Testimonial 4 -->
      <div class="testimonial-card">
        <div class="testimonial-header-small">
          <div class="avatar-placeholder-small secondary">
            <span class="avatar-text-small">D</span>
          </div>
          <div class="testimonial-info-small">
            <div class="testimonial-name-small">David K.</div>
            <div class="testimonial-achievement-small">
              Consistent workout routine
            </div>
          </div>
        </div>
        <div class="rating-stars-small">
          {#each Array(5) as _, i}
            <span class="star-small">★</span>
          {/each}
        </div>
        <p class="testimonial-text">
          "Finally found a workout routine I can stick to. The no-equipment
          workouts are perfect for my apartment."
        </p>
        <div class="testimonial-tag-single">
          <span class="tag-single">🏠 Home workouts</span>
        </div>
      </div>

      <!-- Testimonial 5 -->
      <div class="testimonial-card">
        <div class="testimonial-header-small">
          <div class="avatar-placeholder-small accent">
            <span class="avatar-text-small">A</span>
          </div>
          <div class="testimonial-info-small">
            <div class="testimonial-name-small">Alex P.</div>
            <div class="testimonial-achievement-small">Better mindset</div>
          </div>
        </div>
        <div class="rating-stars-small">
          {#each Array(5) as _, i}
            <span class="star-small">★</span>
          {/each}
        </div>
        <p class="testimonial-text">
          "The mindset articles helped me break through my mental barriers. I'm
          finally making progress!"
        </p>
        <div class="testimonial-tag-single">
          <span class="tag-single">🧠 Mindset shift</span>
        </div>
      </div>

      <!-- Testimonial 6 -->
      <div class="testimonial-card">
        <div class="testimonial-header-small">
          <div class="avatar-placeholder-small success">
            <span class="avatar-text-small">R</span>
          </div>
          <div class="testimonial-info-small">
            <div class="testimonial-name-small">Rachel T.</div>
            <div class="testimonial-achievement-small">Weight loss success</div>
          </div>
        </div>
        <div class="rating-stars-small">
          {#each Array(5) as _, i}
            <span class="star-small">★</span>
          {/each}
        </div>
        <p class="testimonial-text">
          "Lost 30 pounds following the nutrition advice. The meal prep tips
          saved me so much time and money."
        </p>
        <div class="testimonial-tag-single">
          <span class="tag-single">🥗 Meal prep</span>
        </div>
      </div>

      <!-- Testimonial 7 -->
      <div class="testimonial-card">
        <div class="testimonial-header-small">
          <div class="avatar-placeholder-small warning">
            <span class="avatar-text-small">T</span>
          </div>
          <div class="testimonial-info-small">
            <div class="testimonial-name-small">Tom B.</div>
            <div class="testimonial-achievement-small">Improved strength</div>
          </div>
        </div>
        <div class="rating-stars-small">
          {#each Array(5) as _, i}
            <span class="star-small">★</span>
          {/each}
        </div>
        <p class="testimonial-text">
          "The consistency articles motivated me to stick with it. I'm stronger
          than I've ever been at 45!"
        </p>
        <div class="testimonial-tag-single">
          <span class="tag-single">💪 Strength gains</span>
        </div>
      </div>

      <!-- Testimonial 8 -->
      <div class="testimonial-card">
        <div class="testimonial-header-small">
          <div class="avatar-placeholder-small info">
            <span class="avatar-text-small">L</span>
          </div>
          <div class="testimonial-info-small">
            <div class="testimonial-name-small">Lisa M.</div>
            <div class="testimonial-achievement-small">Better sleep</div>
          </div>
        </div>
        <div class="rating-stars-small">
          {#each Array(5) as _, i}
            <span class="star-small">★</span>
          {/each}
        </div>
        <p class="testimonial-text">
          "The morning routine tips improved my sleep quality dramatically. I
          wake up feeling refreshed every day."
        </p>
        <div class="testimonial-tag-single">
          <span class="tag-single">😴 Better sleep</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Success Metrics -->
  <div class="mb-20">
    <h2
      class="text-4xl font-bold text-center mb-12 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500"
    >
      Community Impact
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="metric-card">
        <div class="metric-value">25 lbs</div>
        <div class="metric-label">Average Weight Loss</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">15 lbs</div>
        <div class="metric-label">Average Muscle Gain</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">85%</div>
        <div class="metric-label">Energy Improvement</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">92%</div>
        <div class="metric-label">Sleep Quality</div>
      </div>
    </div>
  </div>

  <!-- Transformation Timeline - Unique to Testimonials Page -->
  <div class="mb-20">
    <h2
      class="text-4xl font-bold text-center mb-12 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500"
    >
      Your Transformation Journey
    </h2>
    <div class="timeline-container">
      <div class="timeline">
        <!-- Week 1-2 -->
        <div class="timeline-item">
          <div class="timeline-marker">
            <div class="timeline-icon">⭐</div>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-title">Weeks 1-2: Getting Started</h3>
            <p class="timeline-description">
              Build foundational habits with our beginner-friendly workouts and
              nutrition guidance. Most members report feeling more energized and
              motivated.
            </p>
            <div class="timeline-stats">
              <span class="timeline-stat">
                <span class="stat-emoji">📈</span>
                <span class="stat-text">78% feel more energized</span>
              </span>
              <span class="timeline-stat">
                <span class="stat-emoji">💪</span>
                <span class="stat-text">3-5 workouts completed</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Month 1 -->
        <div class="timeline-item">
          <div class="timeline-marker">
            <div class="timeline-icon">💪</div>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-title">Month 1: Building Momentum</h3>
            <p class="timeline-description">
              Establish consistent routines and see your first real results.
              Improved sleep, better energy, and noticeable strength gains.
            </p>
            <div class="timeline-stats">
              <span class="timeline-stat">
                <span class="stat-emoji">😴</span>
                <span class="stat-text">85% report better sleep</span>
              </span>
              <span class="timeline-stat">
                <span class="stat-emoji">⚡</span>
                <span class="stat-text">2-4 lbs weight loss/gain</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Month 3 -->
        <div class="timeline-item">
          <div class="timeline-marker">
            <div class="timeline-icon">🔥</div>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-title">Month 3: Real Transformation</h3>
            <p class="timeline-description">
              Significant changes become visible. Clothes fit differently,
              confidence increases, and fitness becomes a lifestyle.
            </p>
            <div class="timeline-stats">
              <span class="timeline-stat">
                <span class="stat-emoji">👕</span>
                <span class="stat-text">92% notice body changes</span>
              </span>
              <span class="timeline-stat">
                <span class="stat-emoji">💪</span>
                <span class="stat-text">8-12 lbs total progress</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Month 6 -->
        <div class="timeline-item">
          <div class="timeline-marker">
            <div class="timeline-icon">🏆</div>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-title">Month 6: Life-Changing Results</h3>
            <p class="timeline-description">
              Complete transformation achieved. Sustainable habits, improved
              health markers, and a new relationship with fitness.
            </p>
            <div class="timeline-stats">
              <span class="timeline-stat">
                <span class="stat-emoji">🎯</span>
                <span class="stat-text">95% reach their goals</span>
              </span>
              <span class="timeline-stat">
                <span class="stat-emoji">💚</span>
                <span class="stat-text">15-25 lbs total transformation</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Call to Action -->
  <div class="text-center">
    <div class="cta-card">
      <h3 class="text-4xl lg:text-5xl font-bold mb-6">
        Ready to Start Your Journey?
      </h3>
      <p class="text-xl opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
        Join thousands of others who have transformed their health with Driven
        Daily. Your success story starts today.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/pricing" class="btn btn-secondary btn-lg"> View Plans </a>
        <a href="/blog" class="btn btn-outline btn-lg"> Read Our Blog </a>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

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

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }

  .animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  .slide-in-left {
    animation: slideInFromLeft 0.8s ease-out;
  }

  .slide-in-right {
    animation: slideInFromRight 0.8s ease-out;
  }

  .floating {
    animation: float 6s ease-in-out infinite;
  }

  .hero-section {
    background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
  }

  .stat-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }

  .featured-testimonial {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.4s ease;
  }

  .featured-testimonial:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  .testimonial-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .avatar-placeholder {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
  }

  .avatar-placeholder.secondary {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  }

  .avatar-text {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .testimonial-info {
    flex: 1;
  }

  .testimonial-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }

  .testimonial-achievement {
    color: #6b7280;
    font-size: 0.95rem;
  }

  .rating-stars {
    display: flex;
    margin-bottom: 1.5rem;
  }

  .star {
    color: #fbbf24;
    font-size: 1.25rem;
  }

  .testimonial-quote {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #374151;
    font-style: italic;
    margin-bottom: 1.5rem;
  }

  .testimonial-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .tag {
    background: #f3f4f6;
    color: #6b7280;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.875rem;
  }

  .testimonial-card {
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .testimonial-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  .testimonial-header-small {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .avatar-placeholder-small {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }

  .avatar-placeholder-small.primary {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  }

  .avatar-placeholder-small.secondary {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  }

  .avatar-placeholder-small.accent {
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  }

  .avatar-placeholder-small.success {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  }

  .avatar-placeholder-small.warning {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  }

  .avatar-placeholder-small.info {
    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  }

  .avatar-text-small {
    color: white;
    font-size: 1.125rem;
    font-weight: bold;
  }

  .testimonial-info-small {
    flex: 1;
  }

  .testimonial-name-small {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }

  .testimonial-achievement-small {
    color: #6b7280;
    font-size: 0.875rem;
  }

  .rating-stars-small {
    display: flex;
    margin-bottom: 1rem;
  }

  .star-small {
    color: #fbbf24;
    font-size: 1rem;
  }

  .testimonial-text {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .testimonial-tag-single {
    margin-top: auto;
  }

  .tag-single {
    background: #f3f4f6;
    color: #6b7280;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .metric-card {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .metric-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  .metric-value {
    font-size: 3rem;
    font-weight: 700;
    color: #10b981;
    margin-bottom: 0.5rem;
  }

  .metric-label {
    color: #6b7280;
    font-size: 1rem;
  }

  .cta-card {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .font-poppins {
    font-family: "Poppins", sans-serif;
  }

  /* Timeline Styles - Unique to Testimonials Page */
  .timeline-container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .timeline {
    position: relative;
    padding: 3rem 0;
  }

  .timeline::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    transform: translateX(-50%);
    border-radius: 2px;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 5rem;
    display: flex;
    align-items: center;
    min-height: 120px;
  }

  .timeline-item:last-child {
    margin-bottom: 0;
  }

  .timeline-marker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  .timeline-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    color: white;
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
    border: 5px solid white;
    transition: all 0.3s ease;
  }

  .timeline-item:hover .timeline-icon {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 15px 40px rgba(16, 185, 129, 0.6);
  }

  .timeline-content {
    width: 42%;
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.4s ease;
    position: relative;
  }

  .timeline-item:nth-child(odd) .timeline-content {
    margin-right: 58%;
  }

  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 58%;
  }

  .timeline-content:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  .timeline-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1.25rem;
    line-height: 1.3;
  }

  .timeline-description {
    color: #6b7280;
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 1.05rem;
  }

  .timeline-stats {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .timeline-stat {
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    color: #374151;
    padding: 0.75rem 1.25rem;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 600;
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .timeline-stat:hover {
    background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
    transform: translateX(5px);
  }

  .stat-emoji {
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  .stat-text {
    flex: 1;
  }

  /* Responsive Timeline */
  @media (max-width: 1024px) {
    .timeline-container {
      max-width: 900px;
    }

    .timeline-content {
      width: 40%;
      padding: 2rem;
    }

    .timeline-item:nth-child(odd) .timeline-content {
      margin-right: 60%;
    }

    .timeline-item:nth-child(even) .timeline-content {
      margin-left: 60%;
    }
  }

  @media (max-width: 768px) {
    .timeline-container {
      padding: 0 1rem;
    }

    .timeline::before {
      left: 2rem;
    }

    .timeline-item {
      flex-direction: row !important;
      margin-left: 2rem;
      margin-bottom: 3rem;
    }

    .timeline-marker {
      left: 2rem;
      transform: translate(-50%, -50%);
    }

    .timeline-content {
      width: calc(100% - 4rem);
      margin-left: 2rem !important;
      margin-right: 0 !important;
      padding: 1.5rem;
    }

    .timeline-title {
      font-size: 1.5rem;
    }

    .timeline-description {
      font-size: 1rem;
    }
  }
</style>

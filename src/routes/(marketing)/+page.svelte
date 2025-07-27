<script lang="ts">
  import { onMount } from "svelte"
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  let scrollY = 0
  let isVisible = false
  let animatedCounters = {
    users: 0,
    articles: 0,
    workouts: 0,
  }
  let targetCounters = {
    users: 5000,
    articles: 150,
    workouts: 200,
  }

  const features = [
    {
      name: "Daily Habits & Mindset",
      description:
        "Build lasting wellness routines and develop the mental framework for sustainable progress. From morning habits that actually stick to mindset strategies that keep you motivated long-term.",
      link: "/blog",
      linkText: "Read More",
      icon: "🌅",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      name: "Fitness & Workouts",
      description:
        "Simple, effective workouts that work with your schedule and fitness level. From no-equipment home workouts to complete routines you can trust, designed for real people with real lives.",
      icon: "💪",
      gradient: "from-green-500 to-blue-600",
    },
    {
      name: "Nutrition & Meal Planning",
      description:
        "Simple meal ideas and nutrition tips that don't require a culinary degree. From protein guides to meal prep strategies that save time and fuel your progress.",
      icon: "🥗",
      gradient: "from-orange-500 to-red-600",
    },
    {
      name: "Personal Dashboard & Community",
      description:
        "Track your progress, save favorite articles, and access your personalized wellness plans. Plus, join our community and get the Driven Daily newsletter with weekly health boosts.",
      icon: "📊",
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Fitness Enthusiast",
      content:
        "Driven Daily transformed my approach to wellness. The daily habits section helped me build a morning routine that actually sticks!",
      avatar: "👩‍💼",
    },
    {
      name: "Mike R.",
      role: "Busy Professional",
      content:
        "The no-equipment workouts are perfect for my schedule. I've never felt stronger or more consistent with my fitness routine.",
      avatar: "👨‍💻",
    },
    {
      name: "Emma L.",
      role: "Nutrition Focused",
      content:
        "The meal planning guides are so practical. I've learned to prep healthy meals that actually taste amazing and fuel my workouts.",
      avatar: "👩‍🍳",
    },
  ]

  onMount(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Parallax effect
    const handleScroll = () => {
      scrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            if (entry.target.classList.contains("counter-section")) {
              animateCounters()
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe elements for animation
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  })

  function animateCounters() {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      animatedCounters.users = Math.floor(targetCounters.users * easeOut)
      animatedCounters.articles = Math.floor(targetCounters.articles * easeOut)
      animatedCounters.workouts = Math.floor(targetCounters.workouts * easeOut)

      if (step >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
  }

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}

  <style>
    @keyframes float {
      0%,
      100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes pulse-glow {
      0%,
      100% {
        box-shadow: 0 0 20px rgba(219, 39, 119, 0.3);
      }
      50% {
        box-shadow: 0 0 40px rgba(219, 39, 119, 0.6);
      }
    }

    @keyframes slideInFromLeft {
      from {
        transform: translateX(-100px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideInFromRight {
      from {
        transform: translateX(100px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeInUp {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .animate-on-scroll {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease-out;
    }

    .animate-on-scroll.animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    .float-animation {
      animation: float 6s ease-in-out infinite;
    }

    .pulse-glow {
      animation: pulse-glow 2s ease-in-out infinite;
    }

    .slide-in-left {
      animation: slideInFromLeft 1s ease-out;
    }

    .slide-in-right {
      animation: slideInFromRight 1s ease-out;
    }

    .fade-in-up {
      animation: fadeInUp 1s ease-out;
    }

    .parallax {
      transform: translateY({scrollY * 0.5}px);
    }

    .gradient-text {
      background: linear-gradient(135deg, #180042 0%, #db2777 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .glass-effect {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .feature-card {
      transition: all 0.3s ease;
      transform: translateY(0);
    }

    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .testimonial-card {
      transition: all 0.3s ease;
    }

    .testimonial-card:hover {
      transform: scale(1.05);
    }
  </style>
</svelte:head>

<!-- Hero Section with Parallax -->
<div
  class="hero min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-purple-900 to-accent"
>
  <!-- Animated Background Elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div
      class="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full float-animation"
    ></div>
    <div
      class="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full float-animation"
      style="animation-delay: -2s;"
    ></div>
    <div
      class="absolute bottom-20 left-1/4 w-24 h-24 bg-secondary/30 rounded-full float-animation"
      style="animation-delay: -4s;"
    ></div>
    <div
      class="absolute bottom-40 right-1/3 w-12 h-12 bg-white/15 rounded-full float-animation"
      style="animation-delay: -1s;"
    ></div>
  </div>

  <div class="hero-content text-center py-12 relative z-10">
    <div class="max-w-4xl">
      <!-- Animated Tagline -->
      <div class="slide-in-left mb-6">
        <div class="text-xl md:text-3xl font-bold text-white/90 mb-3">
          Transform Your Life, One Day at a Time
        </div>
      </div>

      <!-- Main Headline -->
      <div class="fade-in-up mb-8">
        <div
          class="text-5xl md:text-8xl font-bold px-2 text-white mb-4"
          style="line-height: 1.1;"
        >
          Become the
          <span class="gradient-text">Best You.</span>
        </div>
        <div class="text-3xl md:text-5xl font-bold text-white/80">
          <span
            class="underline decoration-accent decoration-4 md:decoration-8 underline-offset-8"
          >
            Driven Daily.
          </span>
        </div>
      </div>

      <!-- Subtitle -->
      <div class="slide-in-right mb-12">
        <p
          class="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          Join thousands of motivated individuals making daily progress in their
          wellness journey. Simple, effective, and sustainable.
        </p>
      </div>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
      >
        <button
          class="btn btn-primary btn-lg px-8 py-4 text-lg pulse-glow"
          on:click={() => scrollToSection("features")}
        >
          🎯 Start Your Journey
        </button>
        <button
          class="btn btn-outline btn-lg px-8 py-4 text-lg glass-effect text-white border-white/30 hover:bg-white/10"
          on:click={() => scrollToSection("testimonials")}
        >
          👥 See Success Stories
        </button>
      </div>

      <!-- Stats Preview -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-white mb-2">
            5,000+
          </div>
          <div class="text-white/70">Active Members</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
          <div class="text-white/70">Expert Articles</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
          <div class="text-white/70">Workout Plans</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Features Section -->
<div id="features" class="py-20 bg-gradient-to-b from-white to-gray-50">
  <div class="container mx-auto px-6">
    <!-- Section Header -->
    <div class="text-center mb-20 animate-on-scroll">
      <div class="text-4xl md:text-6xl font-bold gradient-text mb-6">
        Everything You Need
      </div>
      <div class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
        Complete wellness resources designed for <span
          class="font-bold text-primary">real people</span
        >
        with <span class="font-bold text-primary">real lives</span>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {#each features as feature, index}
        <div
          class="feature-card animate-on-scroll"
          style="animation-delay: {index * 0.2}s;"
        >
          <div
            class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full"
          >
            <!-- Icon -->
            <div
              class="w-20 h-20 rounded-2xl bg-gradient-to-br {feature.gradient} flex items-center justify-center mb-6 text-4xl"
            >
              {feature.icon}
            </div>

            <!-- Content -->
            <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {feature.name}
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              {feature.description}
            </p>

            {#if feature.link}
              <a
                href={feature.link}
                class="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
              >
                {feature.linkText}
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Counter Section -->
<div class="py-20 bg-gradient-to-r from-primary to-accent text-white">
  <div class="container mx-auto px-6">
    <div class="text-center counter-section animate-on-scroll">
      <div class="text-3xl md:text-5xl font-bold mb-12">
        Join Our Growing Community
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
        <div class="text-center">
          <div class="text-5xl md:text-7xl font-bold mb-4">
            {animatedCounters.users.toLocaleString()}+
          </div>
          <div class="text-xl text-white/80">Active Members</div>
        </div>
        <div class="text-center">
          <div class="text-5xl md:text-7xl font-bold mb-4">
            {animatedCounters.articles}+
          </div>
          <div class="text-xl text-white/80">Expert Articles</div>
        </div>
        <div class="text-center">
          <div class="text-5xl md:text-7xl font-bold mb-4">
            {animatedCounters.workouts}+
          </div>
          <div class="text-xl text-white/80">Workout Plans</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Testimonials Section -->
<div id="testimonials" class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16 animate-on-scroll">
      <div class="text-4xl md:text-6xl font-bold gradient-text mb-6">
        Real Results, Real Stories
      </div>
      <div class="text-xl text-gray-600">
        See how Driven Daily is transforming lives every day
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {#each testimonials as testimonial, index}
        <div
          class="testimonial-card animate-on-scroll"
          style="animation-delay: {index * 0.2}s;"
        >
          <div
            class="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full"
          >
            <div class="text-4xl mb-4">{testimonial.avatar}</div>
            <p class="text-gray-700 leading-relaxed mb-6 italic">
              "{testimonial.content}"
            </p>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold"
              >
                {testimonial.name.charAt(0)}
              </div>
              <div class="ml-4">
                <div class="font-semibold text-gray-800">
                  {testimonial.name}
                </div>
                <div class="text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Final CTA Section -->
<div
  class="py-20 bg-gradient-to-br from-gray-900 via-primary to-accent text-white"
>
  <div class="container mx-auto px-6 text-center">
    <div class="max-w-4xl mx-auto animate-on-scroll">
      <div class="text-4xl md:text-6xl font-bold mb-6">
        Ready to Transform Your Life?
      </div>
      <div class="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
        Join thousands of motivated individuals who are already making daily
        progress. Start your wellness journey today.
      </div>

      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a href="/blog">
          <button class="btn btn-primary btn-lg px-8 py-4 text-lg pulse-glow">
            🚀 Start Reading Now
          </button>
        </a>
        <a href="/pricing">
          <button
            class="btn btn-outline btn-lg px-8 py-4 text-lg glass-effect text-white border-white/30 hover:bg-white/10"
          >
            💎 Choose Your Plan
          </button>
        </a>
      </div>

      <div class="mt-12 text-white/60">
        <p class="text-lg">
          ✨ Free to start • No commitment required • Cancel anytime
        </p>
      </div>
    </div>
  </div>
</div>

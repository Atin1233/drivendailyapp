<script lang="ts">
  import { onMount } from "svelte"
  import { WebsiteName } from "./../../../config"

  let isAnnual = false
  let animatedCounters = {
    users: 0,
    satisfaction: 0,
    support: 0,
  }

  type PlanFeatureRow = {
    name: string
    starterIncluded?: boolean
    proIncluded?: boolean
    ultimateIncluded?: boolean
    starterString?: string
    proString?: string
    ultimateString?: string
    header?: boolean
  }

  const planFeatures: PlanFeatureRow[] = [
    {
      name: "Content Access",
      header: true,
    },
    {
      name: "Blog Content",
      starterIncluded: true,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Newsletter",
      starterString: "Weekly",
      proString: "3x Weekly",
      ultimateString: "3x Weekly",
    },
    {
      name: "Early Access",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Tools & Resources",
      header: true,
    },
    {
      name: "Meal Planner",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Workout Tracker",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Goal Setting",
      starterIncluded: false,
      proIncluded: false,
      ultimateIncluded: true,
    },
    {
      name: "Downloads",
      starterString: "Basic",
      proString: "Advanced",
      ultimateString: "All + Reports",
    },
    {
      name: "Support",
      header: true,
    },
    {
      name: "Community Access",
      starterIncluded: true,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Priority Support",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "1-on-1 Consultation",
      starterIncluded: false,
      proIncluded: false,
      ultimateIncluded: true,
    },
  ]

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely! Cancel anytime, zero hassle. We believe in earning your business every day.",
    },
    {
      question: "What's included in the newsletter?",
      answer:
        "Our newsletter delivers research-backed wellness tips, quick workouts, meal ideas, and mindset strategies—all designed to fit your busy lifestyle.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes! If you're not satisfied within 30 days, we'll give you a full refund. No questions asked.",
    },
    {
      question: "How do the meal and workout planners work?",
      answer:
        "Our planners are designed for real life. Drag and drop meals to your calendar, track workouts with sets and reps, and see your progress over time. Everything syncs across your devices.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! Start with our 3-day free trial, then our Starter plan is just $5/month. No credit card required to get started.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Absolutely! Upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
  ]

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

      animatedCounters.users = Math.floor(5000 * easeOut)
      animatedCounters.satisfaction = Math.floor(98 * easeOut)
      animatedCounters.support = Math.floor(24 * easeOut)

      if (step >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
  })
</script>

<svelte:head>
  <title>Choose Your Plan - {WebsiteName}</title>
  <meta
    name="description"
    content="Fuel Your Progress — Choose Your Plan. Small steps, real results. Built for your daily grind."
  />
</svelte:head>

<!-- Hero Section - Business/Financial Focused -->
<div
  class="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white relative overflow-hidden"
>
  <!-- Business/Financial Background Elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 text-6xl transform rotate-12">💰</div>
      <div class="absolute top-20 right-20 text-4xl transform -rotate-12">
        📈
      </div>
      <div class="absolute bottom-20 left-1/4 text-5xl transform rotate-6">
        🎯
      </div>
      <div class="absolute bottom-10 right-1/3 text-3xl transform -rotate-6">
        ⭐
      </div>
    </div>
    <!-- Business Grid Pattern -->
    <div class="absolute inset-0">
      <div
        class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      ></div>
      <div
        class="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      ></div>
      <div
        class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
      ></div>
      <div
        class="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
      ></div>
    </div>
  </div>

  <div class="container mx-auto px-6 relative z-10">
    <div class="max-w-6xl mx-auto">
      <!-- Top Badge -->
      <div class="text-center mb-8 space-y-4">
        <!-- Beta Version Notice -->
        <div
          class="inline-flex items-center px-6 py-3 bg-green-500/20 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium border border-green-400/30"
        >
          <span class="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"
          ></span>
          BETA VERSION - FREE until September 30th!
        </div>

        <div
          class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium"
        >
          <span class="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse"
          ></span>
          Limited Time: Save 15% on Annual Plans
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="text-left space-y-8">
          <div class="slide-in-left">
            <h1
              class="text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
            >
              Choose Your Plan
            </h1>
          </div>

          <div class="slide-in-right">
            <p class="text-xl lg:text-2xl opacity-90 leading-relaxed mb-8">
              Invest in your health and fitness journey. Choose the perfect plan
              that fits your goals and budget.
            </p>
          </div>

          <!-- Business Stats -->
          <div class="grid grid-cols-3 gap-6">
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-3xl font-bold mb-2">
                {animatedCounters.users.toLocaleString()}+
              </div>
              <div class="text-sm opacity-80">Active Members</div>
            </div>
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-3xl font-bold mb-2">
                {animatedCounters.satisfaction}%
              </div>
              <div class="text-sm opacity-80">Satisfaction</div>
            </div>
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-3xl font-bold mb-2">
                {animatedCounters.support}h
              </div>
              <div class="text-sm opacity-80">Support</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Business Card Style -->
        <div class="relative">
          <div
            class="card bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
          >
            <div class="card-body p-8">
              <div class="text-center mb-6">
                <div class="text-4xl mb-4">💎</div>
                <h3 class="text-2xl font-bold text-white mb-2">Most Popular</h3>
                <div class="text-4xl font-bold text-purple-400 mb-2">$15</div>
                <div class="text-white/80">Pro Plan</div>
              </div>

              <ul class="space-y-3 mb-6 text-sm">
                <li class="flex items-center text-white/90">
                  <span class="text-green-400 mr-2">✓</span>
                  Meal & workout planner
                </li>
                <li class="flex items-center text-white/90">
                  <span class="text-green-400 mr-2">✓</span>
                  3x weekly tips
                </li>
                <li class="flex items-center text-white/90">
                  <span class="text-green-400 mr-2">✓</span>
                  Priority support
                </li>
              </ul>

              <a
                href="/contact_us"
                class="btn bg-blue-600 hover:bg-blue-700 text-white btn-lg w-full"
              >
                Contact Us →
              </a>
            </div>
          </div>

          <!-- Floating Business Elements -->
          <div
            class="absolute -top-6 -right-6 w-12 h-12 bg-purple-400 rounded-full float-animation"
          ></div>
          <div
            class="absolute -bottom-6 -left-6 w-8 h-8 bg-violet-400 rounded-full float-animation"
            style="animation-delay: -2s;"
          ></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Pricing Plans Section -->
<div class="py-20 bg-gradient-to-b from-white to-gray-50">
  <div class="container mx-auto px-6">
    <!-- Billing Toggle -->
    <div class="text-center mb-12">
      <div
        class="inline-flex items-center bg-white rounded-full p-2 shadow-lg border border-gray-200"
      >
        <button
          class="px-4 py-2 rounded-full transition-all duration-300 {!isAnnual
            ? 'bg-primary text-white font-semibold'
            : 'text-gray-600'}"
          on:click={() => (isAnnual = false)}
        >
          Monthly
        </button>
        <button
          class="px-4 py-2 rounded-full transition-all duration-300 {isAnnual
            ? 'bg-primary text-white font-semibold'
            : 'text-gray-600'}"
          on:click={() => (isAnnual = true)}
        >
          Annual
          <span class="ml-2 badge badge-accent badge-sm">Save 15%</span>
        </button>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
      <!-- Starter Plan -->
      <div
        class="card bg-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      >
        <div class="card-body p-8">
          <div class="text-center mb-6">
            <div class="text-4xl mb-4">🚀</div>
            <h3 class="text-2xl font-bold mb-2">Starter</h3>
            <p class="text-gray-800">
              Perfect for beginners starting their wellness journey
            </p>
          </div>

          <div class="text-center mb-8">
            <div class="text-4xl font-bold mb-2">
              {isAnnual ? "$51" : "$5"}
              <span class="text-lg text-gray-500"
                >{isAnnual ? "/year" : "/month"}</span
              >
            </div>
            {#if isAnnual}
              <div class="text-sm text-success font-semibold">Save $9/year</div>
            {/if}
          </div>

          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <span class="text-success mr-3">✓</span>
              All blog content access
            </li>
            <li class="flex items-center">
              <span class="text-success mr-3">✓</span>
              Weekly newsletter
            </li>
            <li class="flex items-center">
              <span class="text-success mr-3">✓</span>
              Bookmark posts
            </li>
            <li class="flex items-center">
              <span class="text-success mr-3">✓</span>
              Basic downloads
            </li>
            <li class="flex items-center">
              <span class="text-success mr-3">✓</span>
              Community access
            </li>
          </ul>

          <a
            href="/contact_us"
            class="btn btn-outline btn-primary btn-lg w-full"
          >
            Contact Us
          </a>
        </div>
      </div>

      <!-- Pro Plan -->
      <div
        class="card bg-gradient-to-br from-primary to-accent text-white shadow-2xl border-0 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative"
      >
        <div class="absolute top-4 right-4">
          <span class="badge badge-secondary">Most Popular</span>
        </div>
        <div class="card-body p-8">
          <div class="text-center mb-6">
            <div class="text-4xl mb-4">💪</div>
            <h3 class="text-2xl font-bold mb-2">Pro</h3>
            <p class="text-gray-800">
              Take your progress to the next level with personalized tools
            </p>
          </div>

          <div class="text-center mb-8">
            <div class="text-4xl font-bold mb-2">
              {isAnnual ? "$153" : "$15"}
              <span class="text-lg opacity-80"
                >{isAnnual ? "/year" : "/month"}</span
              >
            </div>
            {#if isAnnual}
              <div class="text-sm opacity-90 font-semibold">Save $27/year</div>
            {/if}
          </div>

          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <span class="opacity-90 mr-3">✓</span>
              Everything in Starter
            </li>
            <li class="flex items-center">
              <span class="opacity-90 mr-3">✓</span>
              Meal & workout planner
            </li>
            <li class="flex items-center">
              <span class="opacity-90 mr-3">✓</span>
              3x weekly tips
            </li>
            <li class="flex items-center">
              <span class="opacity-90 mr-3">✓</span>
              Early content access
            </li>
            <li class="flex items-center">
              <span class="opacity-90 mr-3">✓</span>
              Priority support
            </li>
            <li class="flex items-center">
              <span class="opacity-90 mr-3">✓</span>
              Advanced downloads
            </li>
          </ul>

          <a href="/contact_us" class="btn btn-secondary btn-lg w-full">
            Contact Us
          </a>
        </div>
      </div>

      <!-- Ultimate Plan -->
      <div
        class="card bg-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      >
        <div class="card-body p-8">
          <div class="text-center mb-6">
            <div class="text-4xl mb-4">👑</div>
            <h3 class="text-2xl font-bold mb-2">Ultimate</h3>
            <p class="text-gray-800">
              Complete wellness transformation with exclusive resources
            </p>
          </div>

          <div class="text-center mb-8">
            <div class="text-4xl font-bold mb-2">
              {isAnnual ? "$306" : "$30"}
              <span class="text-lg text-gray-500"
                >{isAnnual ? "/year" : "/month"}</span
              >
            </div>
            {#if isAnnual}
              <div class="text-sm text-success font-semibold">
                Save $54/year
              </div>
            {/if}
          </div>

          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <span class="text-success mr-3">✓</span>
              Everything in Pro
            </li>
            <li class="flex items-center">
              <span class="text-success mr-3">✓</span>
              Custom goal setting
            </li>
            <li class="flex items-center">
              <span class="text-success mr-3">✓</span>
              Exclusive web courses
            </li>
            <li class="flex items-center">
              <span class="text-success mr-3">✓</span>
              Content requests
            </li>
            <li class="flex items-center">
              <span class="text-success mr-3">✓</span>
              Personal PDF reports
            </li>
            <li class="flex items-center">
              <span class="text-success mr-3">✓</span>
              1-on-1 consultation
            </li>
          </ul>

          <a
            href="/contact_us"
            class="btn btn-outline btn-primary btn-lg w-full"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>

    <!-- Trust Indicators -->
    <div class="text-center mb-20">
      <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div class="card bg-white shadow-lg border-0">
          <div class="card-body p-6">
            <div class="text-3xl mb-3">🔒</div>
            <h4 class="font-bold mb-2">Secure & Private</h4>
            <p class="text-sm text-gray-800">
              Your data is protected with bank-level security
            </p>
          </div>
        </div>
        <div class="card bg-white shadow-lg border-0">
          <div class="card-body p-6">
            <div class="text-3xl mb-3">💰</div>
            <h4 class="font-bold mb-2">30-Day Guarantee</h4>
            <p class="text-sm text-gray-800">
              Full refund if you're not satisfied
            </p>
          </div>
        </div>
        <div class="card bg-white shadow-lg border-0">
          <div class="card-body p-6">
            <div class="text-3xl mb-3">🚀</div>
            <h4 class="font-bold mb-2">Cancel Anytime</h4>
            <p class="text-sm text-gray-800">
              No long-term commitments required
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- FAQ Section -->
<div class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2
        class="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        Frequently Asked Questions
      </h2>
      <p class="text-xl text-gray-800 max-w-2xl mx-auto">
        Get answers to common questions about our pricing and services
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <div class="space-y-4">
        {#each faqs as faq, index}
          <div class="collapse collapse-arrow bg-gray-50 rounded-lg">
            <input type="radio" name="faq-accordion" checked={index === 0} />
            <div class="collapse-title text-lg font-semibold">
              {faq.question}
            </div>
            <div class="collapse-content">
              <p class="text-gray-800 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<!-- CTA Section -->
<div
  class="py-20 bg-gradient-to-br from-gray-900 via-primary to-accent text-white"
>
  <div class="container mx-auto px-6 text-center">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl lg:text-6xl font-bold mb-6">
        Ready to Transform Your Life?
      </h2>
      <p class="text-xl lg:text-2xl opacity-90 mb-12 leading-relaxed">
        Join thousands of motivated individuals who are already making daily
        progress. Start your wellness journey today.
      </p>

      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a href="/health-quiz">
          <button class="btn btn-secondary btn-lg px-8 py-4 text-lg pulse-glow">
            🧠 Take Health Quiz
          </button>
        </a>
        <a href="/contact_us">
          <button
            class="btn btn-outline btn-lg px-8 py-4 text-lg glass-effect text-white border-white/30 hover:bg-white/10"
          >
            💎 Contact Us
          </button>
        </a>
      </div>

      <div class="mt-12 opacity-60">
        <p class="text-lg">
          ✨ Free to start • No commitment required • Cancel anytime
        </p>
        <p class="text-lg mt-2 text-green-400 font-semibold">
          Currently in BETA - FREE until September 30th, 2024!
        </p>
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

  .gradient-text {
    background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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

  .pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
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

  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
</style>

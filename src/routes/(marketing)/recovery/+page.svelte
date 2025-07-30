<script lang="ts">
  import { WebsiteName } from "../../../config"
  import { onMount } from "svelte"

  type RecoveryCategory =
    | "physical-therapy"
    | "mobility"
    | "recovery-tools"
    | "wellness"
    | "nutrition"
    | "sleep"
  type RecoveryDifficulty = "beginner" | "intermediate" | "advanced"

  interface RecoveryTechnique {
    id: string
    title: string
    description: string
    category: RecoveryCategory
    difficulty: RecoveryDifficulty
    duration: number // in minutes
    benefits: string[]
    instructions: string[]
    equipment?: string[]
    author: "Joel Rivas" | "Atin Jain"
    tags: string[]
    image?: string
  }

  const recoveryTechniques: RecoveryTechnique[] = [
    // Physical Therapy
    {
      id: "foam-rolling-basics",
      title: "Foam Rolling Basics",
      description:
        "Essential foam rolling techniques to release muscle tension and improve recovery.",
      category: "physical-therapy",
      difficulty: "beginner",
      duration: 15,
      benefits: [
        "Releases muscle tension",
        "Improves blood flow",
        "Reduces muscle soreness",
        "Enhances flexibility",
        "Speeds up recovery",
      ],
      instructions: [
        "Start with major muscle groups: calves, hamstrings, quads, glutes",
        "Roll slowly and pause on tender spots for 30-60 seconds",
        "Breathe deeply and relax into the pressure",
        "Spend 2-3 minutes per muscle group",
        "Avoid rolling over bones or joints",
      ],
      equipment: ["Foam roller"],
      author: "Joel Rivas",
      tags: [
        "foam-rolling",
        "myofascial-release",
        "recovery",
        "beginner-friendly",
      ],
    },
    {
      id: "advanced-foam-rolling",
      title: "Advanced Foam Rolling",
      description:
        "Advanced foam rolling techniques for deeper muscle release and targeted therapy.",
      category: "physical-therapy",
      difficulty: "advanced",
      duration: 25,
      benefits: [
        "Deep tissue release",
        "Targets specific trigger points",
        "Improves range of motion",
        "Reduces chronic pain",
        "Enhances athletic performance",
      ],
      instructions: [
        "Use targeted pressure on specific muscle knots",
        "Incorporate movement while rolling (active release)",
        "Focus on problem areas identified during assessment",
        "Use different roller densities for various muscle groups",
        "Combine with stretching for maximum benefit",
      ],
      equipment: ["Foam roller", "Lacrosse ball", "Massage stick"],
      author: "Atin Jain",
      tags: ["advanced", "deep-tissue", "trigger-points", "performance"],
    },
    {
      id: "stretching-routine",
      title: "Dynamic Stretching Routine",
      description:
        "Comprehensive dynamic stretching routine to improve mobility and prevent injury.",
      category: "mobility",
      difficulty: "beginner",
      duration: 20,
      benefits: [
        "Improves joint mobility",
        "Increases muscle flexibility",
        "Enhances athletic performance",
        "Reduces injury risk",
        "Improves posture",
      ],
      instructions: [
        "Start with light cardio to warm up muscles",
        "Perform each stretch for 10-15 repetitions",
        "Move slowly and controlled through each movement",
        "Focus on major muscle groups and joints",
        "End with static stretches for tight areas",
      ],
      equipment: [],
      author: "Joel Rivas",
      tags: ["stretching", "mobility", "flexibility", "injury-prevention"],
    },
    {
      id: "yoga-recovery",
      title: "Recovery Yoga Flow",
      description:
        "Gentle yoga sequence designed specifically for post-workout recovery and relaxation.",
      category: "wellness",
      difficulty: "beginner",
      duration: 30,
      benefits: [
        "Promotes relaxation",
        "Improves flexibility",
        "Reduces stress hormones",
        "Enhances mind-body connection",
        "Speeds up recovery process",
      ],
      instructions: [
        "Start in a comfortable seated position",
        "Focus on deep, controlled breathing",
        "Move slowly and mindfully through poses",
        "Hold poses for 5-10 breaths",
        "End with 5 minutes of meditation",
      ],
      equipment: ["Yoga mat"],
      author: "Atin Jain",
      tags: ["yoga", "recovery", "relaxation", "mindfulness"],
    },
    {
      id: "percussion-therapy",
      title: "Percussion Therapy",
      description:
        "Use of percussion massagers to break up muscle knots and improve blood flow.",
      category: "recovery-tools",
      difficulty: "intermediate",
      duration: 15,
      benefits: [
        "Breaks up muscle adhesions",
        "Improves blood circulation",
        "Reduces muscle tension",
        "Speeds up recovery",
        "Relieves muscle soreness",
      ],
      instructions: [
        "Start with low intensity and gradually increase",
        "Focus on major muscle groups for 2-3 minutes each",
        "Move slowly and systematically",
        "Avoid bony areas and joints",
        "Use different attachments for various muscle groups",
      ],
      equipment: ["Percussion massager"],
      author: "Joel Rivas",
      tags: [
        "percussion-therapy",
        "muscle-recovery",
        "blood-flow",
        "tension-relief",
      ],
    },
    {
      id: "breathing-techniques",
      title: "Recovery Breathing Techniques",
      description:
        "Breathing exercises to activate the parasympathetic nervous system and promote recovery.",
      category: "wellness",
      difficulty: "beginner",
      duration: 10,
      benefits: [
        "Activates recovery mode",
        "Reduces stress hormones",
        "Improves oxygen delivery",
        "Enhances relaxation",
        "Speeds up recovery",
      ],
      instructions: [
        "Find a comfortable seated position",
        "Inhale deeply through nose for 4 counts",
        "Hold breath for 4 counts",
        "Exhale slowly through mouth for 6 counts",
        "Repeat for 5-10 minutes",
      ],
      equipment: [],
      author: "Atin Jain",
      tags: ["breathing", "recovery", "stress-reduction", "relaxation"],
    },
    {
      id: "post-workout-nutrition",
      title: "Post-Workout Nutrition",
      description:
        "Optimal nutrition timing and choices for maximum recovery and muscle repair.",
      category: "nutrition",
      difficulty: "beginner",
      duration: 5,
      benefits: [
        "Speeds up muscle repair",
        "Replenishes glycogen stores",
        "Reduces muscle soreness",
        "Improves recovery",
        "Enhances performance",
      ],
      instructions: [
        "Consume protein within 30 minutes post-workout",
        "Include carbohydrates to replenish glycogen",
        "Stay hydrated with water and electrolytes",
        "Eat a balanced meal within 2 hours",
        "Consider supplements like BCAAs or creatine",
      ],
      equipment: [],
      author: "Atin Jain",
      tags: ["nutrition", "post-workout", "muscle-repair", "recovery"],
    },
    {
      id: "sleep-optimization",
      title: "Sleep Optimization for Recovery",
      description:
        "Sleep strategies to maximize recovery and athletic performance.",
      category: "sleep",
      difficulty: "beginner",
      duration: 480, // 8 hours
      benefits: [
        "Maximizes muscle repair",
        "Improves hormone balance",
        "Enhances cognitive function",
        "Reduces injury risk",
        "Speeds up recovery",
      ],
      instructions: [
        "Aim for 7-9 hours of quality sleep",
        "Maintain consistent sleep schedule",
        "Create a relaxing bedtime routine",
        "Optimize sleep environment (dark, cool, quiet)",
        "Avoid screens 1 hour before bed",
      ],
      equipment: [],
      author: "Atin Jain",
      tags: ["sleep", "recovery", "hormones", "performance"],
    },
  ]

  // Filtering and search
  let selectedCategory: RecoveryCategory | "all" = "all"
  let selectedDifficulty: RecoveryDifficulty | "all" = "all"
  let searchQuery = ""

  $: filteredTechniques = recoveryTechniques.filter((technique) => {
    const matchesCategory =
      selectedCategory === "all" || technique.category === selectedCategory
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      technique.difficulty === selectedDifficulty
    const matchesSearch =
      technique.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      technique.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      technique.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      )

    return matchesCategory && matchesDifficulty && matchesSearch
  })

  function getCategoryColor(category: RecoveryCategory) {
    switch (category) {
      case "physical-therapy":
        return "badge-primary"
      case "mobility":
        return "badge-secondary"
      case "recovery-tools":
        return "badge-accent"
      case "wellness":
        return "badge-success"
      case "nutrition":
        return "badge-warning"
      case "sleep":
        return "badge-info"
      default:
        return "badge-outline"
    }
  }

  function getCategoryIcon(category: RecoveryCategory) {
    switch (category) {
      case "physical-therapy":
        return "🛠️"
      case "mobility":
        return "🤸‍♀️"
      case "recovery-tools":
        return "⚡"
      case "wellness":
        return "🧘‍♀️"
      case "nutrition":
        return "🥗"
      case "sleep":
        return "😴"
      default:
        return "💆‍♂️"
    }
  }

  function getDifficultyColor(difficulty: RecoveryDifficulty) {
    switch (difficulty) {
      case "beginner":
        return "badge-success"
      case "intermediate":
        return "badge-warning"
      case "advanced":
        return "badge-error"
      default:
        return "badge-outline"
    }
  }

  let animatedStats = {
    techniques: 0,
    categories: 0,
    benefits: 0,
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

      animatedStats.techniques = Math.floor(recoveryTechniques.length * easeOut)
      animatedStats.categories = Math.floor(6 * easeOut)
      animatedStats.benefits = Math.floor(60 * easeOut) // Total benefits across all techniques

      if (step >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
  })
</script>

<svelte:head>
  <title>Recovery - {WebsiteName}</title>
  <meta
    name="description"
    content="Comprehensive recovery techniques, physical therapies, and wellness practices for active people."
  />
</svelte:head>

<!-- Hero Section -->
<div
  class="py-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-500 text-white relative overflow-hidden"
>
  <!-- Animated Background Elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 text-6xl transform rotate-12">🧘‍♀️</div>
      <div class="absolute top-20 right-20 text-4xl transform -rotate-12">
        💆‍♂️
      </div>
      <div class="absolute bottom-20 left-1/4 text-5xl transform rotate-6">
        ⚡
      </div>
      <div class="absolute bottom-10 right-1/3 text-3xl transform -rotate-6">
        🛠️
      </div>
    </div>
    <!-- Animated Lines -->
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
      <!-- Main Content -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="text-left space-y-8">
          <div class="slide-in-left">
            <h1
              class="text-5xl lg:text-7xl font-bold mb-6 leading-tight font-poppins"
            >
              Recovery &
              <span
                class="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
                >Wellness</span
              >
            </h1>
          </div>

          <div class="slide-in-right">
            <p class="text-xl lg:text-2xl opacity-90 leading-relaxed mb-8">
              Essential recovery techniques, physical therapies, and wellness
              practices to help active people recover faster, prevent injury,
              and optimize performance.
            </p>
          </div>

          <!-- Stats Section -->
          <div class="grid grid-cols-3 gap-6">
            <div class="stat-card">
              <div class="text-3xl font-bold mb-2">
                {animatedStats.techniques}
              </div>
              <div class="text-sm opacity-80">Techniques</div>
            </div>
            <div class="stat-card">
              <div class="text-3xl font-bold mb-2">
                {animatedStats.categories}
              </div>
              <div class="text-sm opacity-80">Categories</div>
            </div>
            <div class="stat-card">
              <div class="text-3xl font-bold mb-2">
                {animatedStats.benefits}
              </div>
              <div class="text-sm opacity-80">Benefits</div>
            </div>
          </div>
        </div>

        <!-- Right Content -->
        <div class="relative">
          <div
            class="card bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
          >
            <div class="card-body p-8">
              <div class="text-center mb-6">
                <div class="text-4xl mb-4">⚡</div>
                <h3 class="text-2xl font-bold text-white mb-2">Most Popular</h3>
                <div class="text-4xl font-bold text-purple-400 mb-2">
                  15 min
                </div>
                <div class="text-white/80">Foam Rolling Basics</div>
              </div>

              <ul class="space-y-3 mb-6 text-sm">
                <li class="flex items-center text-white/90">
                  <span class="text-green-400 mr-2">✓</span>
                  Release muscle tension
                </li>
                <li class="flex items-center text-white/90">
                  <span class="text-green-400 mr-2">✓</span>
                  Improve blood flow
                </li>
                <li class="flex items-center text-white/90">
                  <span class="text-green-400 mr-2">✓</span>
                  Speed up recovery
                </li>
              </ul>

              <a
                href="/recovery/foam-rolling-basics"
                class="btn btn-primary btn-lg w-full"
              >
                Learn Technique →
              </a>
            </div>
          </div>

          <!-- Floating Elements -->
          <div
            class="absolute -top-6 -right-6 w-12 h-12 bg-purple-400 rounded-full float-animation"
          ></div>
          <div
            class="absolute -bottom-6 -left-6 w-8 h-8 bg-indigo-400 rounded-full float-animation"
            style="animation-delay: -2s;"
          ></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Search and Filters Section -->
<div class="py-16 lg:py-20 px-6 max-w-7xl mx-auto">
  <!-- Search and Filters -->
  <div class="mb-16">
    <div class="search-card">
      <!-- Search Bar -->
      <div class="mb-8">
        <div class="relative max-w-2xl mx-auto">
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search recovery techniques..."
            class="search-input"
          />
          <svg
            class="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <!-- Filter Buttons -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Category Filter -->
        <div class="filter-group">
          <label class="filter-label">Category</label>
          <select bind:value={selectedCategory} class="filter-select">
            <option value="all">All Categories</option>
            <option value="physical-therapy">🛠️ Physical Therapy</option>
            <option value="mobility">🤸‍♀️ Mobility</option>
            <option value="recovery-tools">⚡ Recovery Tools</option>
            <option value="wellness">🧘‍♀️ Wellness</option>
            <option value="nutrition">🥗 Nutrition</option>
            <option value="sleep">😴 Sleep</option>
          </select>
        </div>

        <!-- Difficulty Filter -->
        <div class="filter-group">
          <label class="filter-label">Difficulty</label>
          <select bind:value={selectedDifficulty} class="filter-select">
            <option value="all">All Levels</option>
            <option value="beginner">🟢 Beginner</option>
            <option value="intermediate">🟡 Intermediate</option>
            <option value="advanced">🔴 Advanced</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- Results Count -->
  <div class="mb-12">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-3 font-poppins">
        {filteredTechniques.length} Technique{filteredTechniques.length !== 1
          ? "s"
          : ""} Found
      </h2>
      <p class="text-gray-600 text-lg">
        {searchQuery
          ? `Searching for "${searchQuery}"`
          : "All recovery techniques"}
      </p>
    </div>
  </div>

  <!-- Recovery Techniques Grid -->
  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#each filteredTechniques as technique}
      <a href={`/recovery/${technique.id}`} class="block group">
        <div class="recovery-card">
          <!-- Recovery Header -->
          <div class="recovery-header">
            <div class="flex flex-wrap gap-2">
              <span
                class="badge {getCategoryColor(technique.category)} badge-sm"
              >
                {getCategoryIcon(technique.category)}
                {technique.category.replace("-", " ")}
              </span>
              <span
                class="badge {getDifficultyColor(
                  technique.difficulty,
                )} badge-sm"
              >
                {technique.difficulty}
              </span>
            </div>
            <div class="duration-badge">
              <span class="text-xs">{technique.duration} min</span>
            </div>
          </div>

          <!-- Recovery Title -->
          <h3 class="recovery-title">
            {technique.title}
          </h3>

          <!-- Recovery Description -->
          <p class="recovery-description">
            {technique.description}
          </p>

          <!-- Recovery Stats -->
          <div class="recovery-stats">
            <div class="stat-item">
              <div class="stat-value">{technique.duration}</div>
              <div class="stat-label">Minutes</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{technique.benefits.length}</div>
              <div class="stat-label">Benefits</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{technique.difficulty}</div>
              <div class="stat-label">Level</div>
            </div>
          </div>

          <!-- Recovery Meta -->
          <div class="recovery-meta">
            <div class="meta-info">
              <span class="meta-item">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                {technique.difficulty}
              </span>
              <span class="meta-item">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {technique.duration} min
              </span>
            </div>
            <div class="author-info">
              By {technique.author}
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>

  <!-- No Results -->
  {#if filteredTechniques.length === 0}
    <div class="text-center py-16">
      <div class="text-6xl mb-4">🧘‍♀️</div>
      <h3 class="text-2xl font-bold text-gray-800 mb-4">
        No Recovery Techniques Found
      </h3>
      <p class="text-gray-600 mb-8">
        Try adjusting your search terms or filters to find what you're looking
        for.
      </p>
      <button
        class="btn btn-primary btn-lg"
        on:click={() => {
          searchQuery = ""
          selectedCategory = "all"
          selectedDifficulty = "all"
        }}
      >
        Clear Filters
      </button>
    </div>
  {/if}

  <!-- Recovery Categories Section -->
  <div class="mt-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-800 mb-4 font-poppins">
        Recovery Categories
      </h2>
      <p class="text-gray-600 text-lg">
        Explore different types of recovery techniques
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div class="category-card">
        <div class="text-4xl mb-4">🛠️</div>
        <h3 class="text-xl font-bold mb-2">Physical Therapy</h3>
        <p class="text-gray-600">
          Hands-on techniques for muscle recovery and injury prevention
        </p>
      </div>
      <div class="category-card">
        <div class="text-4xl mb-4">🤸‍♀️</div>
        <h3 class="text-xl font-bold mb-2">Mobility</h3>
        <p class="text-gray-600">
          Stretching and flexibility exercises for better movement
        </p>
      </div>
      <div class="category-card">
        <div class="text-4xl mb-4">⚡</div>
        <h3 class="text-xl font-bold mb-2">Recovery Tools</h3>
        <p class="text-gray-600">
          Equipment-based recovery methods and techniques
        </p>
      </div>
      <div class="category-card">
        <div class="text-4xl mb-4">🧘‍♀️</div>
        <h3 class="text-xl font-bold mb-2">Wellness</h3>
        <p class="text-gray-600">Mind-body practices for holistic recovery</p>
      </div>
      <div class="category-card">
        <div class="text-4xl mb-4">🥗</div>
        <h3 class="text-xl font-bold mb-2">Nutrition</h3>
        <p class="text-gray-600">Nutritional strategies to support recovery</p>
      </div>
      <div class="category-card">
        <div class="text-4xl mb-4">😴</div>
        <h3 class="text-xl font-bold mb-2">Sleep</h3>
        <p class="text-gray-600">Sleep optimization for maximum recovery</p>
      </div>
    </div>
  </div>
</div>

<style>
  /* Hero Section */
  .slide-in-left {
    animation: slideInLeft 1s ease-out;
  }

  .slide-in-right {
    animation: slideInRight 1s ease-out 0.3s both;
  }

  .float-animation {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
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
      transform: translateY(-20px);
    }
  }

  /* Stats Cards */
  .stat-card {
    text-align: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
  }

  /* Search and Filters */
  .search-card {
    background: #fff;
    border-radius: 1rem;
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    border: 1px solid #f3f4f6;
  }

  .search-input {
    width: 100%;
    padding-left: 3rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1.125rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.75rem;
    outline: none;
    transition: all 0.3s;
    background: #f9fafb;
  }

  .search-input:focus {
    border-color: #3b82f6;
  }

  .filter-group {
    margin-bottom: 0.5rem;
  }

  .filter-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
  }

  .filter-select {
    width: 100%;
    padding: 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.75rem;
    outline: none;
    transition: all 0.3s;
    background: #f9fafb;
  }

  .filter-select:focus {
    border-color: #3b82f6;
  }

  /* Recovery Cards */
  .recovery-card {
    background: #fff;
    border-radius: 1rem;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    border: 1px solid #f3f4f6;
    padding: 1.5rem;
    transition: all 0.3s;
    transform: translateY(0);
  }

  .recovery-card:hover {
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
    transform: translateY(-0.5rem);
    border-color: rgba(59, 130, 246, 0.2);
  }

  .recovery-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .duration-badge {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .recovery-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.75rem;
    transition: color 0.3s;
  }

  .recovery-card:hover .recovery-title {
    color: #3b82f6;
  }

  .recovery-description {
    color: #6b7280;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .recovery-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .stat-item {
    text-align: center;
  }

  .stat-value {
    font-size: 1.125rem;
    font-weight: 700;
    color: #3b82f6;
  }

  .stat-label {
    font-size: 0.75rem;
    color: #6b7280;
  }

  .recovery-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    border-top: 1px solid #f3f4f6;
  }

  .meta-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: #6b7280;
  }

  .author-info {
    font-size: 0.875rem;
    color: #9ca3af;
  }

  /* Category Cards */
  .category-card {
    background: #fff;
    border-radius: 1rem;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    border: 1px solid #f3f4f6;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s;
    transform: translateY(0);
  }

  .category-card:hover {
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
    transform: translateY(-0.5rem);
    border-color: rgba(59, 130, 246, 0.2);
  }

  /* Font */
  .font-poppins {
    font-family: "Poppins", sans-serif;
  }
</style>

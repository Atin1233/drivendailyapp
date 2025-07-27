<script lang="ts">
  import { WebsiteName } from "../../../config"

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
        "Prepares body for activity",
      ],
      instructions: [
        "Start with light cardio (5 minutes walking/jogging)",
        "Perform each stretch for 10-15 repetitions",
        "Move through full range of motion",
        "Focus on major muscle groups",
        "Hold end positions briefly",
      ],
      equipment: [],
      author: "Joel Rivas",
      tags: ["dynamic-stretching", "mobility", "warm-up", "injury-prevention"],
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

    // Recovery Tools
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
      id: "compression-therapy",
      title: "Compression Therapy",
      description:
        "Using compression garments and techniques to improve circulation and reduce swelling.",
      category: "recovery-tools",
      difficulty: "beginner",
      duration: 30,
      benefits: [
        "Improves blood circulation",
        "Reduces muscle swelling",
        "Speeds up recovery",
        "Reduces muscle soreness",
        "Enhances performance",
      ],
      instructions: [
        "Wear compression garments during or after exercise",
        "Use graduated compression (tighter at extremities)",
        "Wear for 2-4 hours post-workout",
        "Ensure proper fit - snug but not restrictive",
        "Remove if you experience discomfort",
      ],
      equipment: [
        "Compression socks",
        "Compression sleeves",
        "Compression tights",
      ],
      author: "Atin Jain",
      tags: ["compression", "circulation", "recovery", "swelling-reduction"],
    },
    {
      id: "ice-bath-therapy",
      title: "Ice Bath Therapy",
      description:
        "Cold water immersion therapy to reduce inflammation and speed up recovery.",
      category: "recovery-tools",
      difficulty: "advanced",
      duration: 10,
      benefits: [
        "Reduces inflammation",
        "Speeds up recovery",
        "Reduces muscle soreness",
        "Improves circulation",
        "Enhances immune function",
      ],
      instructions: [
        "Fill tub with cold water (50-60°F/10-15°C)",
        "Add ice to reach desired temperature",
        "Immerse body for 10-15 minutes",
        "Focus on breathing and staying relaxed",
        "Warm up gradually after exiting",
      ],
      equipment: ["Ice bath", "Thermometer", "Timer"],
      author: "Joel Rivas",
      tags: ["ice-bath", "cold-therapy", "inflammation", "recovery"],
    },

    // Wellness
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
      id: "meditation-recovery",
      title: "Recovery Meditation",
      description:
        "Guided meditation specifically designed for post-workout recovery and mental restoration.",
      category: "wellness",
      difficulty: "beginner",
      duration: 15,
      benefits: [
        "Reduces stress hormones",
        "Improves mental recovery",
        "Enhances focus",
        "Promotes relaxation",
        "Speeds up overall recovery",
      ],
      instructions: [
        "Find a quiet, comfortable space",
        "Close your eyes and focus on breathing",
        "Scan body for tension and release it",
        "Visualize recovery and healing",
        "Practice gratitude for your body's work",
      ],
      equipment: [],
      author: "Joel Rivas",
      tags: [
        "meditation",
        "mental-recovery",
        "stress-reduction",
        "mindfulness",
      ],
    },

    // Nutrition Recovery
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
      id: "hydration-recovery",
      title: "Hydration for Recovery",
      description:
        "Proper hydration strategies to support recovery and performance.",
      category: "nutrition",
      difficulty: "beginner",
      duration: 1,
      benefits: [
        "Improves recovery",
        "Reduces muscle cramps",
        "Enhances performance",
        "Supports digestion",
        "Maintains energy levels",
      ],
      instructions: [
        "Drink 16-20 oz of water 2-3 hours before exercise",
        "Consume 8-10 oz every 15 minutes during exercise",
        "Replace fluids lost during workout",
        "Include electrolytes for longer sessions",
        "Monitor urine color for hydration status",
      ],
      equipment: ["Water bottle", "Electrolyte supplements"],
      author: "Joel Rivas",
      tags: ["hydration", "electrolytes", "recovery", "performance"],
    },

    // Sleep Recovery
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
    {
      id: "sleep-hygiene",
      title: "Sleep Hygiene Practices",
      description: "Best practices for improving sleep quality and recovery.",
      category: "sleep",
      difficulty: "beginner",
      duration: 30,
      benefits: [
        "Improves sleep quality",
        "Enhances recovery",
        "Reduces stress",
        "Improves mood",
        "Increases energy levels",
      ],
      instructions: [
        "Establish a consistent bedtime routine",
        "Create a sleep-conducive environment",
        "Limit caffeine after 2 PM",
        "Exercise regularly but not close to bedtime",
        "Practice relaxation techniques before bed",
      ],
      equipment: [],
      author: "Joel Rivas",
      tags: ["sleep-hygiene", "recovery", "stress-reduction", "wellness"],
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
</script>

<svelte:head>
  <title>Recovery - {WebsiteName}</title>
  <meta
    name="description"
    content="Comprehensive recovery techniques, physical therapies, and wellness practices for active people."
  />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-7xl mx-auto">
  <!-- Header -->
  <div class="text-center mb-12">
    <h1
      class="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      Recovery & Wellness
    </h1>
    <p class="text-xl text-slate-600 max-w-3xl mx-auto">
      Essential recovery techniques, physical therapies, and wellness practices
      to help active people recover faster, prevent injury, and optimize
      performance.
    </p>
  </div>

  <!-- Search and Filters -->
  <div class="mb-8">
    <div class="flex flex-col lg:flex-row gap-4 mb-6">
      <!-- Search -->
      <div class="flex-1">
        <input
          type="text"
          placeholder="Search recovery techniques..."
          class="input input-bordered w-full"
          bind:value={searchQuery}
        />
      </div>

      <!-- Category Filter -->
      <select class="select select-bordered" bind:value={selectedCategory}>
        <option value="all">All Categories</option>
        <option value="physical-therapy">Physical Therapy</option>
        <option value="mobility">Mobility</option>
        <option value="recovery-tools">Recovery Tools</option>
        <option value="wellness">Wellness</option>
        <option value="nutrition">Nutrition</option>
        <option value="sleep">Sleep</option>
      </select>

      <!-- Difficulty Filter -->
      <select class="select select-bordered" bind:value={selectedDifficulty}>
        <option value="all">All Levels</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>

    <!-- Results Count -->
    <p class="text-slate-600">
      Showing {filteredTechniques.length} of {recoveryTechniques.length} recovery
      techniques
    </p>
  </div>

  <!-- Recovery Techniques Grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each filteredTechniques as technique}
      <div
        class="card bg-white shadow-lg border border-primary/10 hover:shadow-xl transition-shadow"
      >
        <div class="card-body">
          <!-- Header -->
          <div class="flex items-start justify-between mb-4">
            <h3 class="text-xl font-bold text-primary">{technique.title}</h3>
            <div class="flex gap-2">
              <span
                class="badge badge-sm {getDifficultyColor(
                  technique.difficulty,
                )}"
              >
                {technique.difficulty}
              </span>
              <span
                class="badge badge-sm {getCategoryColor(technique.category)}"
              >
                {technique.category.replace("-", " ")}
              </span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-slate-600 mb-4">{technique.description}</p>

          <!-- Stats -->
          <div class="flex items-center gap-4 mb-4 text-sm text-slate-500">
            <div class="flex items-center gap-1">
              <span>⏱️</span>
              <span>{technique.duration} min</span>
            </div>
            <div class="flex items-center gap-1">
              <span>👤</span>
              <span>{technique.author}</span>
            </div>
          </div>

          <!-- Benefits -->
          <div class="mb-4">
            <h4 class="font-semibold mb-2">Benefits:</h4>
            <ul class="text-sm text-slate-600 space-y-1">
              {#each technique.benefits.slice(0, 3) as benefit}
                <li class="flex items-start gap-2">
                  <span class="text-primary">✓</span>
                  <span>{benefit}</span>
                </li>
              {/each}
              {#if technique.benefits.length > 3}
                <li class="text-slate-500">
                  +{technique.benefits.length - 3} more benefits
                </li>
              {/if}
            </ul>
          </div>

          <!-- Equipment -->
          {#if technique.equipment && technique.equipment.length > 0}
            <div class="mb-4">
              <h4 class="font-semibold mb-2">Equipment:</h4>
              <div class="flex flex-wrap gap-1">
                {#each technique.equipment as item}
                  <span class="badge badge-outline badge-sm">{item}</span>
                {/each}
              </div>
            </div>
          {/if}

          <!-- Tags -->
          <div class="mb-4">
            <div class="flex flex-wrap gap-1">
              {#each technique.tags.slice(0, 3) as tag}
                <span class="badge badge-outline badge-xs">{tag}</span>
              {/each}
            </div>
          </div>

          <!-- View Details Button -->
          <div class="card-actions justify-end">
            <a href="/recovery/{technique.id}" class="btn btn-primary btn-sm">
              View Details
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- No Results -->
  {#if filteredTechniques.length === 0}
    <div class="text-center py-12">
      <div class="text-6xl mb-4">🧘‍♀️</div>
      <h2 class="text-2xl font-bold mb-4">No Recovery Techniques Found</h2>
      <p class="text-slate-600 mb-6">
        Try adjusting your search terms or filters to find what you're looking
        for.
      </p>
      <button
        class="btn btn-primary"
        on:click={() => {
          selectedCategory = "all"
          selectedDifficulty = "all"
          searchQuery = ""
        }}
      >
        Clear Filters
      </button>
    </div>
  {/if}

  <!-- Recovery Tips Section -->
  <div class="mt-16">
    <h2 class="text-3xl font-bold text-center mb-8">
      Recovery Tips & Best Practices
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="card bg-gradient-to-br from-primary to-primary/80 text-white">
        <div class="card-body">
          <h3 class="text-xl font-bold mb-3">Listen to Your Body</h3>
          <p class="opacity-90">
            Pay attention to signs of overtraining and adjust your recovery
            accordingly. Rest when needed and don't push through pain.
          </p>
        </div>
      </div>

      <div
        class="card bg-gradient-to-br from-secondary to-secondary/80 text-white"
      >
        <div class="card-body">
          <h3 class="text-xl font-bold mb-3">Consistency is Key</h3>
          <p class="opacity-90">
            Make recovery a regular part of your routine, not just when you're
            sore. Consistent recovery practices lead to better long-term
            results.
          </p>
        </div>
      </div>

      <div class="card bg-gradient-to-br from-accent to-accent/80 text-white">
        <div class="card-body">
          <h3 class="text-xl font-bold mb-3">Quality Over Quantity</h3>
          <p class="opacity-90">
            Focus on the quality of your recovery techniques rather than
            spending hours on them. Even 10-15 minutes of focused recovery can
            be highly effective.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Call to Action -->
  <div class="text-center mt-16">
    <div
      class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl"
    >
      <div class="card-body">
        <h3 class="text-2xl font-bold mb-4">
          Ready to Optimize Your Recovery?
        </h3>
        <p class="text-lg opacity-90 mb-6">
          Explore our comprehensive recovery techniques and start implementing
          them into your routine.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/workouts" class="btn btn-secondary btn-lg">
            Browse Workouts
          </a>
          <a
            href="/blog"
            class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"
          >
            Read Recovery Tips
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

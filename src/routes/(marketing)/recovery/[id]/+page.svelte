<script lang="ts">
  import { page } from "$app/stores"
  import { WebsiteName } from "../../../../config"

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
      author: "Joel Rivas",
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
      author: "Joel Rivas",
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
      author: "Joel Rivas",
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
      author: "Joel Rivas",
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
      author: "Joel Rivas",
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
      author: "Joel Rivas",
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

  // Get current technique
  $: techniqueId = $page.params.id
  $: currentTechnique = recoveryTechniques.find((t) => t.id === techniqueId)

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
  <title
    >{currentTechnique?.title || "Recovery Technique"} - {WebsiteName}</title
  >
  <meta
    name="description"
    content={currentTechnique?.description ||
      "Recovery technique details and instructions."}
  />
</svelte:head>

{#if currentTechnique}
  <div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-2 mb-4">
        <a href="/recovery" class="btn btn-outline btn-sm">
          ← Back to Recovery
        </a>
      </div>

      <div class="flex items-start justify-between mb-6">
        <div>
          <h1 class="text-3xl lg:text-4xl font-bold mb-4">
            {currentTechnique.title}
          </h1>
          <p class="text-xl text-slate-600 mb-4">
            {currentTechnique.description}
          </p>
        </div>
        <div class="flex gap-2">
          <span class="badge {getDifficultyColor(currentTechnique.difficulty)}">
            {currentTechnique.difficulty}
          </span>
          <span class="badge {getCategoryColor(currentTechnique.category)}">
            {currentTechnique.category.replace("-", " ")}
          </span>
        </div>
      </div>
    </div>

    <!-- Technique Details -->
    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Instructions -->
        <div class="card bg-white shadow-lg border border-primary/10">
          <div class="card-body">
            <h2 class="text-2xl font-bold mb-6">Step-by-Step Instructions</h2>
            <div class="space-y-4">
              {#each currentTechnique.instructions as instruction, i}
                <div class="flex items-start gap-4">
                  <div
                    class="flex-none w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold"
                  >
                    {i + 1}
                  </div>
                  <p class="text-slate-700">{instruction}</p>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Benefits -->
        <div class="card bg-white shadow-lg border border-primary/10">
          <div class="card-body">
            <h2 class="text-2xl font-bold mb-6">Benefits</h2>
            <div class="grid md:grid-cols-2 gap-4">
              {#each currentTechnique.benefits as benefit}
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                  <span class="text-slate-700">{benefit}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Tips and Warnings -->
        <div class="card bg-white shadow-lg border border-primary/10">
          <div class="card-body">
            <h2 class="text-2xl font-bold mb-6">Tips & Best Practices</h2>
            <div class="space-y-4">
              <div class="alert alert-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-current shrink-0 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span
                  >Start slowly and gradually increase intensity or duration as
                  your body adapts.</span
                >
              </div>
              <div class="alert alert-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-current shrink-0 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  ></path>
                </svg>
                <span
                  >Stop immediately if you experience pain or discomfort beyond
                  normal muscle tension.</span
                >
              </div>
              <div class="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-current shrink-0 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span
                  >Consistency is key - practice this technique regularly for
                  best results.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Quick Info -->
        <div class="card bg-white shadow-lg border border-primary/10">
          <div class="card-body">
            <h3 class="text-xl font-bold mb-4">Quick Info</h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <span class="text-primary">⏱️</span>
                <span
                  ><strong>Duration:</strong>
                  {currentTechnique.duration} minutes</span
                >
              </div>
              <div class="flex items-center gap-3">
                <span class="text-primary">👤</span>
                <span><strong>Author:</strong> {currentTechnique.author}</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-primary">📊</span>
                <span
                  ><strong>Difficulty:</strong>
                  {currentTechnique.difficulty}</span
                >
              </div>
              <div class="flex items-center gap-3">
                <span class="text-primary">🏷️</span>
                <span
                  ><strong>Category:</strong>
                  {currentTechnique.category.replace("-", " ")}</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Equipment -->
        {#if currentTechnique.equipment && currentTechnique.equipment.length > 0}
          <div class="card bg-white shadow-lg border border-primary/10">
            <div class="card-body">
              <h3 class="text-xl font-bold mb-4">Required Equipment</h3>
              <div class="space-y-2">
                {#each currentTechnique.equipment as item}
                  <div class="flex items-center gap-2">
                    <span class="text-primary">✓</span>
                    <span>{item}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/if}

        <!-- Tags -->
        <div class="card bg-white shadow-lg border border-primary/10">
          <div class="card-body">
            <h3 class="text-xl font-bold mb-4">Tags</h3>
            <div class="flex flex-wrap gap-2">
              {#each currentTechnique.tags as tag}
                <span class="badge badge-outline">{tag}</span>
              {/each}
            </div>
          </div>
        </div>

        <!-- Related Techniques -->
        <div class="card bg-white shadow-lg border border-primary/10">
          <div class="card-body">
            <h3 class="text-xl font-bold mb-4">Related Recovery Techniques</h3>
            <div class="space-y-2">
              {#each recoveryTechniques
                .filter((t) => t.category === currentTechnique.category && t.id !== currentTechnique.id)
                .slice(0, 3) as technique}
                <a
                  href="/recovery/{technique.id}"
                  class="block p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <div class="font-semibold text-primary">
                    {technique.title}
                  </div>
                  <div class="text-sm text-slate-600">
                    {technique.duration} min • {technique.difficulty}
                  </div>
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-12">
      <div
        class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl"
      >
        <div class="card-body">
          <h3 class="text-2xl font-bold mb-4">
            Ready to Try This Recovery Technique?
          </h3>
          <p class="text-lg opacity-90 mb-6">
            Start incorporating this into your recovery routine and experience
            the benefits.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/recovery" class="btn btn-secondary btn-lg">
              Browse More Techniques
            </a>
            <a
              href="/workouts"
              class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"
            >
              Find Workouts
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <!-- Technique Not Found -->
  <div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto text-center">
    <div class="text-6xl mb-4">🧘‍♀️</div>
    <h1 class="text-4xl font-bold mb-4">Recovery Technique Not Found</h1>
    <p class="text-xl text-slate-600 mb-8">
      Sorry, we couldn't find the recovery technique you're looking for.
    </p>
    <a href="/recovery" class="btn btn-primary btn-lg"
      >Browse All Recovery Techniques</a
    >
  </div>
{/if}

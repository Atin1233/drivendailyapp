<script lang="ts">
  import { onMount } from "svelte"
  import { WebsiteName } from "./../../../config"

  let selectedCategory = "all"
  let selectedTransformation = null

  const categories = [
    { id: "all", name: "All Transformations", count: 12 },
    { id: "weight-loss", name: "Weight Loss", count: 6 },
    { id: "muscle-gain", name: "Muscle Gain", count: 4 },
    { id: "fitness", name: "Fitness", count: 2 },
  ]

  const transformations = [
    {
      id: 1,
      name: "Sarah M.",
      category: "weight-loss",
      beforeImage: "/images/transformations/sarah-before.jpg",
      afterImage: "/images/transformations/sarah-after.jpg",
      timeFrame: "6 months",
      stats: "Lost 25 lbs",
      description:
        "Sarah transformed her lifestyle with our 20-minute workouts and nutrition guidance.",
      tags: ["Consistent workouts", "Better nutrition", "More energy"],
    },
    {
      id: 2,
      name: "Mike R.",
      category: "muscle-gain",
      beforeImage: "/images/transformations/mike-before.jpg",
      afterImage: "/images/transformations/mike-after.jpg",
      timeFrame: "8 months",
      stats: "Gained 15 lbs muscle",
      description:
        "Mike focused on strength training and proper protein intake for muscle growth.",
      tags: ["Muscle gain", "Strength training", "Protein focus"],
    },
    {
      id: 3,
      name: "Jessica L.",
      category: "weight-loss",
      beforeImage: "/images/transformations/jessica-before.jpg",
      afterImage: "/images/transformations/jessica-after.jpg",
      timeFrame: "4 months",
      stats: "Lost 18 lbs",
      description:
        "Jessica combined HIIT workouts with meal prep for sustainable results.",
      tags: ["HIIT workouts", "Meal prep", "Consistency"],
    },
    {
      id: 4,
      name: "David K.",
      category: "fitness",
      beforeImage: "/images/transformations/david-before.jpg",
      afterImage: "/images/transformations/david-after.jpg",
      timeFrame: "12 months",
      stats: "Improved endurance",
      description:
        "David went from sedentary to running 5Ks with our progressive training plans.",
      tags: ["Endurance", "Running", "Progressive training"],
    },
    {
      id: 5,
      name: "Emma T.",
      category: "weight-loss",
      beforeImage: "/images/transformations/emma-before.jpg",
      afterImage: "/images/transformations/emma-after.jpg",
      timeFrame: "5 months",
      stats: "Lost 22 lbs",
      description:
        "Emma found her groove with home workouts and mindful eating habits.",
      tags: ["Home workouts", "Mindful eating", "Lifestyle change"],
    },
    {
      id: 6,
      name: "Alex P.",
      category: "muscle-gain",
      beforeImage: "/images/transformations/alex-before.jpg",
      afterImage: "/images/transformations/alex-after.jpg",
      timeFrame: "10 months",
      stats: "Gained 20 lbs muscle",
      description:
        "Alex built strength and muscle with compound movements and proper recovery.",
      tags: ["Compound movements", "Recovery", "Strength building"],
    },
    {
      id: 7,
      name: "Maria S.",
      category: "weight-loss",
      beforeImage: "/images/transformations/maria-before.jpg",
      afterImage: "/images/transformations/maria-after.jpg",
      timeFrame: "7 months",
      stats: "Lost 30 lbs",
      description:
        "Maria achieved her goals through consistent cardio and portion control.",
      tags: ["Cardio", "Portion control", "Consistency"],
    },
    {
      id: 8,
      name: "Chris W.",
      category: "muscle-gain",
      beforeImage: "/images/transformations/chris-before.jpg",
      afterImage: "/images/transformations/chris-after.jpg",
      timeFrame: "9 months",
      stats: "Gained 18 lbs muscle",
      description:
        "Chris focused on progressive overload and protein timing for optimal gains.",
      tags: ["Progressive overload", "Protein timing", "Muscle building"],
    },
    {
      id: 9,
      name: "Lisa H.",
      category: "weight-loss",
      beforeImage: "/images/transformations/lisa-before.jpg",
      afterImage: "/images/transformations/lisa-after.jpg",
      timeFrame: "6 months",
      stats: "Lost 20 lbs",
      description:
        "Lisa transformed her body with yoga and clean eating principles.",
      tags: ["Yoga", "Clean eating", "Mind-body connection"],
    },
    {
      id: 10,
      name: "Tom B.",
      category: "fitness",
      beforeImage: "/images/transformations/tom-before.jpg",
      afterImage: "/images/transformations/tom-after.jpg",
      timeFrame: "8 months",
      stats: "Improved overall fitness",
      description:
        "Tom went from couch to completing his first triathlon with our training plans.",
      tags: ["Triathlon", "Endurance", "Goal achievement"],
    },
    {
      id: 11,
      name: "Rachel G.",
      category: "weight-loss",
      beforeImage: "/images/transformations/rachel-before.jpg",
      afterImage: "/images/transformations/rachel-after.jpg",
      timeFrame: "5 months",
      stats: "Lost 16 lbs",
      description:
        "Rachel found success with dance workouts and intuitive eating.",
      tags: ["Dance workouts", "Intuitive eating", "Joyful movement"],
    },
    {
      id: 12,
      name: "Kevin M.",
      category: "muscle-gain",
      beforeImage: "/images/transformations/kevin-before.jpg",
      afterImage: "/images/transformations/kevin-after.jpg",
      timeFrame: "11 months",
      stats: "Gained 22 lbs muscle",
      description:
        "Kevin built impressive strength with powerlifting and nutrition optimization.",
      tags: ["Powerlifting", "Nutrition optimization", "Strength gains"],
    },
  ]

  $: filteredTransformations =
    selectedCategory === "all"
      ? transformations
      : transformations.filter((t) => t.category === selectedCategory)

  function openModal(transformation) {
    selectedTransformation = transformation
  }

  function closeModal() {
    selectedTransformation = null
  }
</script>

<svelte:head>
  <title>Before & After Gallery - {WebsiteName}</title>
  <meta
    name="description"
    content="See real transformations from our community members. Before and after photos showing incredible health and fitness results."
  />
</svelte:head>

<!-- Hero Section -->
<div
  class="py-20 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 text-white relative overflow-hidden"
>
  <!-- Background Elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 text-6xl transform rotate-12">📸</div>
      <div class="absolute top-20 right-20 text-4xl transform -rotate-12">
        💪
      </div>
      <div class="absolute bottom-20 left-1/4 text-5xl transform rotate-6">
        🎯
      </div>
      <div class="absolute bottom-10 right-1/3 text-3xl transform -rotate-6">
        ⭐
      </div>
    </div>
  </div>

  <div class="container mx-auto px-6 relative z-10">
    <div class="max-w-4xl mx-auto text-center">
      <div class="slide-in-left mb-8">
        <h1
          class="text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
        >
          Transformation Gallery
        </h1>
      </div>

      <div class="slide-in-right mb-12">
        <p
          class="text-xl lg:text-2xl opacity-95 leading-relaxed max-w-3xl mx-auto"
        >
          See the incredible before and after results from our community
          members. Real people, real results, real inspiration.
        </p>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <div class="stat-card">
          <div class="text-4xl lg:text-5xl font-bold mb-3">12+</div>
          <div class="text-lg opacity-90">Transformations</div>
        </div>
        <div class="stat-card">
          <div class="text-4xl lg:text-5xl font-bold mb-3">6-12</div>
          <div class="text-lg opacity-90">Months Average</div>
        </div>
        <div class="stat-card">
          <div class="text-4xl lg:text-5xl font-bold mb-3">100%</div>
          <div class="text-lg opacity-90">Real Results</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Gallery Section -->
<div class="py-16 lg:py-20 px-6 max-w-7xl mx-auto">
  <!-- Category Filter -->
  <div class="text-center mb-12">
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      {#each categories as category}
        <button
          class="btn btn-sm {selectedCategory === category.id
            ? 'bg-purple-600 hover:bg-purple-700 text-white'
            : 'btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'}"
          on:click={() => (selectedCategory = category.id)}
        >
          {category.name}
          <span class="ml-2 badge badge-sm">{category.count}</span>
        </button>
      {/each}
    </div>
  </div>

  <!-- Transformations Grid -->
  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#each filteredTransformations as transformation}
      <div
        class="transformation-card cursor-pointer"
        on:click={() => openModal(transformation)}
      >
        <div class="before-after-container">
          <div class="before-image">
            <img
              src={transformation.beforeImage}
              alt="Before transformation"
              class="w-full h-64 object-cover rounded-t-lg"
            />
            <div class="before-label">Before</div>
          </div>
          <div class="after-image">
            <img
              src={transformation.afterImage}
              alt="After transformation"
              class="w-full h-64 object-cover rounded-b-lg"
            />
            <div class="after-label">After</div>
          </div>
        </div>

        <div class="transformation-info p-6">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold text-gray-800">
              {transformation.name}
            </h3>
            <span class="badge badge-primary">{transformation.timeFrame}</span>
          </div>
          <div class="text-2xl font-bold text-purple-600 mb-2">
            {transformation.stats}
          </div>
          <p class="text-white mb-4">{transformation.description}</p>
          <div class="flex flex-wrap gap-2">
            {#each transformation.tags as tag}
              <span class="badge badge-outline text-sm">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Call to Action -->
  <div class="text-center mt-16">
    <h2 class="text-3xl font-bold mb-6 text-gray-800">
      Ready to Start Your Transformation?
    </h2>
    <p class="text-xl text-white mb-8 max-w-2xl mx-auto">
      Real transformations from real people. Get inspired by their journeys.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/contact_us"
        class="btn bg-purple-600 hover:bg-purple-700 text-white btn-lg px-8"
      >
        Start Your Journey
      </a>
      <a
        href="/testimonials"
        class="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white btn-lg px-8"
      >
        Read More Stories
      </a>
    </div>
  </div>
</div>

<!-- Modal for detailed view -->
{#if selectedTransformation}
  <div class="modal modal-open">
    <div class="modal-box max-w-4xl">
      <div class="flex justify-between items-start mb-6">
        <h3 class="text-2xl font-bold">{selectedTransformation.name}</h3>
        <button class="btn btn-sm btn-circle btn-ghost" on:click={closeModal}>
          ✕
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="before-after-detail">
          <img
            src={selectedTransformation.beforeImage}
            alt="Before transformation"
            class="w-full h-80 object-cover rounded-lg"
          />
          <div class="text-center mt-2">
            <span class="badge badge-lg">Before</span>
          </div>
        </div>
        <div class="before-after-detail">
          <img
            src={selectedTransformation.afterImage}
            alt="After transformation"
            class="w-full h-80 object-cover rounded-lg"
          />
          <div class="text-center mt-2">
            <span class="badge badge-lg badge-success">After</span>
          </div>
        </div>
      </div>

      <div class="transformation-details">
        <div class="stats-grid grid grid-cols-2 gap-4 mb-6">
          <div class="stat-item text-center p-4 bg-gray-50 rounded-lg">
            <div class="text-2xl font-bold text-purple-600">
              {selectedTransformation.stats}
            </div>
            <div class="text-sm text-white">Achievement</div>
          </div>
          <div class="stat-item text-center p-4 bg-gray-50 rounded-lg">
            <div class="text-2xl font-bold text-purple-600">
              {selectedTransformation.timeFrame}
            </div>
            <div class="text-sm text-white">Time Frame</div>
          </div>
        </div>

        <p class="text-white mb-4">{selectedTransformation.description}</p>

        <div class="flex flex-wrap gap-2">
          {#each selectedTransformation.tags as tag}
            <span class="badge badge-outline">{tag}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .stat-card {
    @apply text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20;
  }

  .transformation-card {
    @apply bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100;
  }

  .before-after-container {
    @apply relative;
  }

  .before-label,
  .after-label {
    @apply absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold;
  }

  .after-label {
    @apply top-auto bottom-2;
  }

  .transformation-info {
    @apply bg-white;
  }

  .before-after-detail {
    @apply relative;
  }

  .stats-grid {
    @apply grid-cols-2 gap-4;
  }

  .stat-item {
    @apply text-center p-4 bg-gray-50 rounded-lg;
  }

  .modal {
    @apply fixed inset-0 z-50 flex items-center justify-center p-4;
  }

  .modal-box {
    @apply bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto;
  }

  /* Animation classes */
  .slide-in-left {
    animation: slideInLeft 0.8s ease-out;
  }

  .slide-in-right {
    animation: slideInRight 0.8s ease-out 0.2s both;
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
</style>

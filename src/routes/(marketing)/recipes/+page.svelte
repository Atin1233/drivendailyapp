<script lang="ts">
  import { onMount } from "svelte"
  import { WebsiteName } from "../../../config"
  import { recipes } from "$lib/recipes"

  type RecipeCategory = "vegan" | "vegetarian" | "non-vegetarian"
  type RecipeDifficulty = "easy" | "medium" | "hard"
  type RecipeMeal = "breakfast" | "lunch" | "dinner" | "snack" | "dessert"

  interface Recipe {
    id: string
    title: string
    description: string
    category: RecipeCategory
    difficulty: RecipeDifficulty
    meal: RecipeMeal
    prepTime: number // in minutes
    cookTime: number // in minutes
    servings: number
    calories: number
    protein: number // in grams
    author: "Joel Rivas" | "Atin Jain"
    ingredients: string[]
    instructions: string[]
    tags: string[]
    image?: string
  }

  let searchTerm = ""
  let selectedCategory: RecipeCategory | "all" = "all"
  let selectedDifficulty: RecipeDifficulty | "all" = "all"
  let selectedMeal: RecipeMeal | "all" = "all"
  let animatedStats = {
    recipes: 0,
    categories: 0,
    avgProtein: 0,
  }

  $: filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      )

    const matchesCategory =
      selectedCategory === "all" || recipe.category === selectedCategory
    const matchesDifficulty =
      selectedDifficulty === "all" || recipe.difficulty === selectedDifficulty
    const matchesMeal = selectedMeal === "all" || recipe.meal === selectedMeal

    return matchesSearch && matchesCategory && matchesDifficulty && matchesMeal
  })

  function getDifficultyColor(difficulty: RecipeDifficulty) {
    switch (difficulty) {
      case "easy":
        return "badge-success"
      case "medium":
        return "badge-warning"
      case "hard":
        return "badge-error"
      default:
        return "badge-neutral"
    }
  }

  function getCategoryColor(category: RecipeCategory) {
    switch (category) {
      case "vegan":
        return "badge-primary"
      case "vegetarian":
        return "badge-secondary"
      case "non-vegetarian":
        return "badge-accent"
      default:
        return "badge-neutral"
    }
  }

  onMount(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            if (entry.target.classList.contains("stats-section")) {
              animateStats()
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
      observer.disconnect()
    }
  })

  function animateStats() {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      animatedStats.recipes = Math.floor(recipes.length * easeOut)
      animatedStats.categories = Math.floor(3 * easeOut) // 3 categories
      animatedStats.avgProtein = Math.floor(
        (recipes.reduce((sum, r) => sum + r.protein, 0) / recipes.length) *
          easeOut,
      )

      if (step >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
  }
</script>

<svelte:head>
  <title>Healthy Recipes - {WebsiteName}</title>
  <meta
    name="description"
    content="Discover delicious, healthy recipes from our nutrition experts. Vegan, vegetarian, and non-vegetarian options for every meal and dietary preference."
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
          Healthy Recipes
        </h1>
      </div>

      <div class="slide-in-right mb-8">
        <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
          Discover delicious, nutritious recipes created by our nutrition
          experts. From quick breakfasts to elegant dinners, we have options for
          every dietary preference and skill level.
        </p>
      </div>

      <!-- Stats Section -->
      <div
        class="stats-section animate-on-scroll grid grid-cols-3 gap-8 max-w-2xl mx-auto"
      >
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.recipes}
          </div>
          <div class="text-sm opacity-80">Recipes</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.categories}
          </div>
          <div class="text-sm opacity-80">Categories</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold mb-2">
            {animatedStats.avgProtein}g
          </div>
          <div class="text-sm opacity-80">Avg Protein</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-12 lg:py-16 px-6 max-w-7xl mx-auto">
  <!-- Search and Filters -->
  <div class="animate-on-scroll mb-12">
    <div class="card bg-white shadow-xl border-0">
      <div class="card-body p-8">
        <!-- Search Bar -->
        <div class="mb-6">
          <div class="relative">
            <input
              type="text"
              bind:value={searchTerm}
              placeholder="Search recipes, ingredients, or tags..."
              class="input input-bordered input-lg w-full pl-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <svg
              class="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Category Filter -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Category</span>
            </label>
            <select
              bind:value={selectedCategory}
              class="select select-bordered w-full"
            >
              <option value="all">All Categories</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
            </select>
          </div>

          <!-- Difficulty Filter -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Difficulty</span>
            </label>
            <select
              bind:value={selectedDifficulty}
              class="select select-bordered w-full"
            >
              <option value="all">All Levels</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <!-- Meal Filter -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Meal Type</span>
            </label>
            <select
              bind:value={selectedMeal}
              class="select select-bordered w-full"
            >
              <option value="all">All Meals</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Results Count -->
  <div class="animate-on-scroll mb-8">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">
        {filteredRecipes.length} Recipe{filteredRecipes.length !== 1 ? "s" : ""}
        Found
      </h2>
      <p class="text-gray-600">
        {searchTerm ? `Searching for "${searchTerm}"` : "All recipes"}
      </p>
    </div>
  </div>

  <!-- Recipes Grid -->
  <div class="animate-on-scroll">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredRecipes as recipe}
        <a href={`/recipes/${recipe.id}`} class="block group">
          <div
            class="card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden recipe-card border border-gray-100"
          >
            <div class="card-body p-6">
              <!-- Recipe Header -->
              <div class="flex items-start justify-between mb-4">
                <div class="flex flex-wrap gap-2">
                  <span
                    class="badge {getCategoryColor(recipe.category)} badge-sm"
                  >
                    {recipe.category}
                  </span>
                  <span
                    class="badge {getDifficultyColor(
                      recipe.difficulty,
                    )} badge-sm"
                  >
                    {recipe.difficulty}
                  </span>
                </div>
                <span class="badge badge-outline badge-primary badge-sm">
                  {recipe.meal}
                </span>
              </div>

              <!-- Recipe Title -->
              <h3
                class="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors mb-3 leading-tight"
              >
                {recipe.title}
              </h3>

              <!-- Recipe Description -->
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                {recipe.description}
              </p>

              <!-- Recipe Stats -->
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-lg font-bold text-primary">
                    {recipe.calories}
                  </div>
                  <div class="text-xs text-gray-500">Calories</div>
                </div>
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-lg font-bold text-accent">
                    {recipe.protein}g
                  </div>
                  <div class="text-xs text-gray-500">Protein</div>
                </div>
              </div>

              <!-- Recipe Meta -->
              <div
                class="flex items-center justify-between text-sm text-gray-500"
              >
                <div class="flex items-center gap-4">
                  <span class="flex items-center gap-1">
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
                    {recipe.prepTime + recipe.cookTime} min
                  </span>
                  <span class="flex items-center gap-1">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {recipe.servings} servings
                  </span>
                </div>
                <div class="text-xs">
                  By {recipe.author}
                </div>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>

  <!-- No Results -->
  {#if filteredRecipes.length === 0}
    <div class="animate-on-scroll text-center py-16">
      <div class="text-6xl mb-4">🍽️</div>
      <h3 class="text-2xl font-bold text-gray-800 mb-2">No recipes found</h3>
      <p class="text-gray-600 mb-6">
        Try adjusting your search terms or filters to find what you're looking
        for.
      </p>
      <button
        class="btn btn-primary"
        on:click={() => {
          searchTerm = ""
          selectedCategory = "all"
          selectedDifficulty = "all"
          selectedMeal = "all"
        }}
      >
        Clear Filters
      </button>
    </div>
  {/if}
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

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
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

  .scale-in {
    animation: scaleIn 0.6s ease-out;
  }

  .pulse-hover:hover {
    animation: pulse 0.3s ease-in-out;
  }

  .gradient-bg {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
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

  .recipe-card {
    transition: all 0.4s ease;
  }

  .recipe-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
</style>

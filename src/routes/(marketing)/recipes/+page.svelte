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

  function getMealIcon(meal: RecipeMeal) {
    switch (meal) {
      case "breakfast":
        return "🌅"
      case "lunch":
        return "☀️"
      case "dinner":
        return "🌙"
      case "snack":
        return "🍎"
      case "dessert":
        return "🍰"
      default:
        return "🍽️"
    }
  }

  onMount(() => {
    // Initialize stats immediately
    animatedStats.recipes = recipes.length
    animatedStats.categories = 3 // vegan, vegetarian, non-vegetarian
    animatedStats.avgProtein = Math.floor(
      recipes.reduce((sum, r) => sum + r.protein, 0) / recipes.length,
    )

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

<!-- Hero Section - Culinary/Food Focused -->
<div
  class="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden"
>
  <!-- Culinary Background Elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 text-6xl transform rotate-12">🍳</div>
      <div class="absolute top-20 right-20 text-4xl transform -rotate-12">
        🥗
      </div>
      <div class="absolute bottom-20 left-1/4 text-5xl transform rotate-6">
        🍎
      </div>
      <div class="absolute bottom-10 right-1/3 text-3xl transform -rotate-6">
        🌶️
      </div>
    </div>
    <!-- Culinary Pattern -->
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
    <div class="max-w-7xl mx-auto">
      <!-- Top Badge -->
      <div class="text-center mb-8">
        <div
          class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium"
        >
          <span class="w-3 h-3 bg-violet-400 rounded-full mr-3 animate-pulse"
          ></span>
          Fresh: Seasonal Recipes Added
        </div>
      </div>

      <!-- Main Content - Split Screen Layout -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Side - Culinary Elements -->
        <div class="relative">
          <!-- Recipe Ingredients Display -->
          <div class="space-y-6">
            <!-- Top Row -->
            <div class="flex justify-center space-x-4">
              <div
                class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm"
              >
                🥑
              </div>
              <div
                class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm"
              >
                🍅
              </div>
              <div
                class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm"
              >
                🧀
              </div>
            </div>

            <!-- Middle Row -->
            <div class="flex justify-center space-x-4">
              <div
                class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm"
              >
                🥬
              </div>
              <div
                class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm border-2 border-violet-300"
              >
                🥘
              </div>
              <div
                class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm"
              >
                🥕
              </div>
            </div>

            <!-- Bottom Row -->
            <div class="flex justify-center space-x-4">
              <div
                class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm"
              >
                🧂
              </div>
              <div
                class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm"
              >
                🌿
              </div>
              <div
                class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm"
              >
                🧄
              </div>
            </div>
          </div>

          <!-- Floating Utensils -->
          <div class="absolute -top-4 -left-4 text-3xl transform rotate-12">
            🥄
          </div>
          <div
            class="absolute -bottom-4 -right-4 text-3xl transform -rotate-12"
          >
            🔪
          </div>
          <div class="absolute top-1/2 -left-8 text-2xl transform rotate-45">
            🥣
          </div>
          <div class="absolute top-1/2 -right-8 text-2xl transform -rotate-45">
            🍴
          </div>
        </div>

        <!-- Right Side - Content -->
        <div class="space-y-8">
          <!-- Main Heading -->
          <div class="slide-in-right">
            <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Fuel Your
              <span
                class="bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent"
                >Journey</span
              >
            </h1>
          </div>

          <!-- Subtitle -->
          <div class="slide-in-right" style="animation-delay: 0.2s;">
            <p class="text-xl lg:text-2xl opacity-90 leading-relaxed mb-8">
              Discover delicious, nutritious recipes that fuel your fitness
              goals. From quick breakfasts to gourmet dinners, every meal
              matters.
            </p>
          </div>

          <!-- Featured Recipe Card -->
          <div class="slide-in-right" style="animation-delay: 0.4s;">
            <div
              class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
            >
              <div class="flex items-center justify-between mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-white">Chef's Pick</h3>
                  <p class="text-violet-300 font-semibold">
                    Grilled Chicken Breast
                  </p>
                </div>
                <div class="text-4xl">🍗</div>
              </div>

              <div class="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div class="text-2xl font-bold text-violet-400">42g</div>
                  <div class="text-sm text-white/80">Protein</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-violet-400">10min</div>
                  <div class="text-sm text-white/80">Prep Time</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-violet-400">280</div>
                  <div class="text-sm text-white/80">Calories</div>
                </div>
              </div>

              <a
                href="/recipes/nonveg-grilled-chicken-breast"
                class="btn bg-violet-600 hover:bg-violet-700 text-white btn-lg w-full"
              >
                View Recipe →
              </a>
            </div>
          </div>

          <!-- Stats Row -->
          <div
            class="grid grid-cols-3 gap-4 slide-in-right"
            style="animation-delay: 0.6s;"
          >
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-2xl font-bold mb-1">
                {animatedStats.recipes}+
              </div>
              <div class="text-sm opacity-80">Recipes</div>
            </div>
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-2xl font-bold mb-1">
                {animatedStats.categories}
              </div>
              <div class="text-sm opacity-80">Categories</div>
            </div>
            <div
              class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div class="text-2xl font-bold mb-1">
                {animatedStats.avgProtein}g
              </div>
              <div class="text-sm opacity-80">Avg Protein</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-16 lg:py-20 px-6 max-w-7xl mx-auto">
  <!-- Search and Filters -->
  <div class="animate-on-scroll mb-16">
    <div class="search-card">
      <!-- Search Bar -->
      <div class="mb-8">
        <div class="relative max-w-2xl mx-auto">
          <input
            type="text"
            bind:value={searchTerm}
            placeholder="Search recipes, ingredients, or tags..."
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
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Category Filter -->
        <div class="filter-group">
          <label class="filter-label">Category</label>
          <select bind:value={selectedCategory} class="filter-select">
            <option value="all">All Categories</option>
            <option value="vegan">🌱 Vegan</option>
            <option value="vegetarian">🥬 Vegetarian</option>
            <option value="non-vegetarian">🍗 Non-Vegetarian</option>
          </select>
        </div>

        <!-- Difficulty Filter -->
        <div class="filter-group">
          <label class="filter-label">Difficulty</label>
          <select bind:value={selectedDifficulty} class="filter-select">
            <option value="all">All Levels</option>
            <option value="easy">🟢 Easy</option>
            <option value="medium">🟡 Medium</option>
            <option value="hard">🔴 Hard</option>
          </select>
        </div>

        <!-- Meal Filter -->
        <div class="filter-group">
          <label class="filter-label">Meal Type</label>
          <select bind:value={selectedMeal} class="filter-select">
            <option value="all">All Meals</option>
            <option value="breakfast">🌅 Breakfast</option>
            <option value="lunch">☀️ Lunch</option>
            <option value="dinner">🌙 Dinner</option>
            <option value="snack">🍎 Snack</option>
            <option value="dessert">🍰 Dessert</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- Results Count -->
  <div class="animate-on-scroll mb-12">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-3 font-poppins">
        {filteredRecipes.length} Recipe{filteredRecipes.length !== 1 ? "s" : ""}
        Found
      </h2>
      <p class="text-gray-600 text-lg">
        {searchTerm ? `Searching for "${searchTerm}"` : "All recipes"}
      </p>
    </div>
  </div>

  <!-- Recipes Grid -->
  <div class="animate-on-scroll">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredRecipes as recipe}
        <a href={`/recipes/${recipe.id}`} class="block group">
          <div class="recipe-card">
            <!-- Recipe Header -->
            <div class="recipe-header">
              <div class="flex flex-wrap gap-2">
                <span
                  class="badge {getCategoryColor(recipe.category)} badge-sm"
                >
                  {recipe.category}
                </span>
                <span
                  class="badge {getDifficultyColor(recipe.difficulty)} badge-sm"
                >
                  {recipe.difficulty}
                </span>
              </div>
              <div class="meal-badge">
                <span class="text-lg">{getMealIcon(recipe.meal)}</span>
                <span class="text-xs ml-1">{recipe.meal}</span>
              </div>
            </div>

            <!-- Recipe Title -->
            <h3 class="recipe-title">
              {recipe.title}
            </h3>

            <!-- Recipe Description -->
            <p class="recipe-description">
              {recipe.description}
            </p>

            <!-- Recipe Stats -->
            <div class="recipe-stats">
              <div class="stat-item">
                <div class="stat-value">{recipe.calories}</div>
                <div class="stat-label">Calories</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">{recipe.protein}g</div>
                <div class="stat-label">Protein</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">
                  {recipe.prepTime + recipe.cookTime}
                </div>
                <div class="stat-label">Minutes</div>
              </div>
            </div>

            <!-- Recipe Meta -->
            <div class="recipe-meta">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {recipe.prepTime + recipe.cookTime} min
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {recipe.servings} servings
                </span>
              </div>
              <div class="author-info">
                By {recipe.author}
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>

  <!-- No Results -->
  {#if filteredRecipes.length === 0}
    <div class="animate-on-scroll text-center py-20">
      <div class="text-8xl mb-6">🍽️</div>
      <h3 class="text-3xl font-bold text-gray-800 mb-4 font-poppins">
        No recipes found
      </h3>
      <p class="text-gray-600 mb-8 text-lg max-w-md mx-auto">
        Try adjusting your search terms or filters to find what you're looking
        for.
      </p>
      <button
        class="btn btn-primary btn-lg"
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

  <!-- Featured Categories -->
  <div class="mt-24">
    <h2
      class="text-4xl font-bold text-center mb-12 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500"
    >
      Popular Categories
    </h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div
        class="category-card bg-gradient-to-br from-green-500 to-green-600 text-white"
      >
        <div class="text-4xl mb-4">🌱</div>
        <h3 class="text-2xl font-bold mb-3">Vegan</h3>
        <p class="opacity-90">
          Plant-based recipes that are both nutritious and delicious.
        </p>
      </div>
      <div
        class="category-card bg-gradient-to-br from-blue-500 to-blue-600 text-white"
      >
        <div class="text-4xl mb-4">🥬</div>
        <h3 class="text-2xl font-bold mb-3">Vegetarian</h3>
        <p class="opacity-90">
          Meat-free dishes packed with protein and flavor.
        </p>
      </div>
      <div
        class="category-card bg-gradient-to-br from-orange-500 to-orange-600 text-white"
      >
        <div class="text-4xl mb-4">🍗</div>
        <h3 class="text-2xl font-bold mb-3">Non-Vegetarian</h3>
        <p class="opacity-90">
          Protein-rich meals with lean meats and seafood.
        </p>
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
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #ff6348 100%);
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

  .search-card {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .search-input {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    background: #f9fafb;
  }

  .search-input:focus {
    outline: none;
    border-color: #ff6b6b;
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
    background: white;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
  }

  .filter-label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #374151;
    font-size: 0.95rem;
  }

  .filter-select {
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    background: white;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .filter-select:focus {
    outline: none;
    border-color: #ff6b6b;
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
  }

  .recipe-card {
    background: white;
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.4s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .recipe-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  .recipe-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .meal-badge {
    display: flex;
    align-items: center;
    background: #f3f4f6;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-size: 0.875rem;
    color: #6b7280;
  }

  .recipe-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.75rem;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  .recipe-card:hover .recipe-title {
    color: #ff6b6b;
  }

  .recipe-description {
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .recipe-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .stat-item {
    text-align: center;
    padding: 0.75rem;
    background: #f9fafb;
    border-radius: 10px;
  }

  .stat-value {
    font-size: 1.125rem;
    font-weight: 700;
    color: #ff6b6b;
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: 0.75rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .recipe-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: auto;
  }

  .meta-info {
    display: flex;
    gap: 1rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .author-info {
    font-style: italic;
  }

  .category-card {
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .font-poppins {
    font-family: "Poppins", sans-serif;
  }
</style>

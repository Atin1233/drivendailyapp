<script lang="ts">
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
</script>

<svelte:head>
  <title>Healthy Recipes - {WebsiteName}</title>
  <meta
    name="description"
    content="Discover delicious, healthy recipes from our nutrition experts. Vegan, vegetarian, and non-vegetarian options for every meal and dietary preference."
  />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-7xl mx-auto">
  <!-- Header Section -->
  <div class="text-center mb-12">
    <h1
      class="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      Healthy Recipes
    </h1>
    <p class="text-xl text-slate-600 max-w-3xl mx-auto">
      Discover delicious, nutritious recipes created by our nutrition experts.
      From quick breakfasts to elegant dinners, we have options for every
      dietary preference and skill level.
    </p>
  </div>

  <!-- Search and Filters -->
  <div class="card bg-white shadow-lg border border-primary/10 mb-8">
    <div class="card-body">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Search -->
        <div class="lg:col-span-2">
          <label class="label">
            <span class="label-text font-semibold">Search Recipes</span>
          </label>
          <input
            type="text"
            bind:value={searchTerm}
            placeholder="Search by title, ingredients, or tags..."
            class="input input-bordered w-full"
          />
        </div>

        <!-- Category Filter -->
        <div>
          <label class="label">
            <span class="label-text font-semibold">Diet Type</span>
          </label>
          <select
            bind:value={selectedCategory}
            class="select select-bordered w-full"
          >
            <option value="all">All Types</option>
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
      </div>

      <!-- Meal Type Filter -->
      <div class="mt-4">
        <label class="label">
          <span class="label-text font-semibold">Meal Type</span>
        </label>
        <div class="flex flex-wrap gap-2">
          <button
            class="btn btn-sm {selectedMeal === 'all'
              ? 'btn-primary'
              : 'btn-outline'}"
            on:click={() => (selectedMeal = "all")}
          >
            All Meals
          </button>
          <button
            class="btn btn-sm {selectedMeal === 'breakfast'
              ? 'btn-primary'
              : 'btn-outline'}"
            on:click={() => (selectedMeal = "breakfast")}
          >
            Breakfast
          </button>
          <button
            class="btn btn-sm {selectedMeal === 'lunch'
              ? 'btn-primary'
              : 'btn-outline'}"
            on:click={() => (selectedMeal = "lunch")}
          >
            Lunch
          </button>
          <button
            class="btn btn-sm {selectedMeal === 'dinner'
              ? 'btn-primary'
              : 'btn-outline'}"
            on:click={() => (selectedMeal = "dinner")}
          >
            Dinner
          </button>
          <button
            class="btn btn-sm {selectedMeal === 'snack'
              ? 'btn-primary'
              : 'btn-outline'}"
            on:click={() => (selectedMeal = "snack")}
          >
            Snacks
          </button>
          <button
            class="btn btn-sm {selectedMeal === 'dessert'
              ? 'btn-primary'
              : 'btn-outline'}"
            on:click={() => (selectedMeal = "dessert")}
          >
            Desserts
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Results Count -->
  <div class="mb-6">
    <p class="text-slate-600">
      Showing {filteredRecipes.length} of {recipes.length} recipes
    </p>
  </div>

  <!-- Recipes Grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each filteredRecipes as recipe}
      <div
        class="card bg-white shadow-lg border border-primary/10 hover:shadow-xl transition-shadow"
      >
        <div class="card-body">
          <!-- Recipe Header -->
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-bold">{recipe.title}</h3>
            <div class="badge badge-primary badge-sm">
              {recipe.calories} cal
            </div>
          </div>

          <!-- Recipe Description -->
          <p class="text-slate-600 mb-4">{recipe.description}</p>

          <!-- Recipe Meta -->
          <div class="flex flex-wrap gap-2 mb-4">
            <div class="badge {getCategoryColor(recipe.category)}">
              {recipe.category}
            </div>
            <div class="badge {getDifficultyColor(recipe.difficulty)}">
              {recipe.difficulty}
            </div>
            <div class="badge badge-neutral">
              {recipe.meal}
            </div>
          </div>

          <!-- Recipe Details -->
          <div class="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <span class="font-semibold">Prep:</span>
              {recipe.prepTime} min
            </div>
            <div>
              <span class="font-semibold">Cook:</span>
              {recipe.cookTime} min
            </div>
            <div>
              <span class="font-semibold">Servings:</span>
              {recipe.servings}
            </div>
            <div>
              <span class="font-semibold">Calories:</span>
              {recipe.calories}
            </div>
            <div>
              <span class="font-semibold">Protein:</span>
              {recipe.protein}g
            </div>
            <div>
              <span class="font-semibold">Author:</span>
              {recipe.author}
            </div>
          </div>

          <!-- Recipe Tags -->
          <div class="flex flex-wrap gap-1 mb-4">
            {#each recipe.tags as tag}
              <span class="badge badge-outline badge-xs">{tag}</span>
            {/each}
          </div>

          <!-- View Recipe Button -->
          <a href="/recipes/{recipe.id}" class="btn btn-primary btn-sm w-full">
            View Recipe
          </a>
        </div>
      </div>
    {/each}
  </div>

  <!-- No Results Message -->
  {#if filteredRecipes.length === 0}
    <div class="text-center py-12">
      <div class="text-6xl mb-4">🍽️</div>
      <h3 class="text-xl font-bold mb-2">No recipes found</h3>
      <p class="text-slate-600 mb-4">
        Try adjusting your search terms or filters to find what you're looking
        for.
      </p>
      <button
        class="btn btn-outline"
        on:click={() => {
          searchTerm = ""
          selectedCategory = "all"
          selectedDifficulty = "all"
          selectedMeal = "all"
        }}
      >
        Clear All Filters
      </button>
    </div>
  {/if}

  <!-- Call to Action -->
  <div class="text-center mt-16">
    <div
      class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl"
    >
      <div class="card-body">
        <h3 class="text-2xl font-bold mb-4">Want More Recipe Ideas?</h3>
        <p class="text-lg opacity-90 mb-6">
          Get weekly recipe inspiration, nutrition tips, and meal planning
          advice delivered to your inbox.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/blog" class="btn btn-secondary btn-lg"> Read Our Blog </a>
          <a
            href="/pricing"
            class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  import { page } from "$app/stores"
  import { WebsiteName } from "../../../../config"
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
    prepTime: number
    cookTime: number
    servings: number
    calories: number
    protein: number // in grams
    author: "Joel Rivas" | "Atin Jain"
    ingredients: string[]
    instructions: string[]
    tags: string[]
    image?: string
  }

  $: recipeId = $page.params.id
  $: currentRecipe = recipes.find((r) => r.id === recipeId)

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
  <title>{currentRecipe?.title || "Recipe"} - {WebsiteName}</title>
  <meta
    name="description"
    content={currentRecipe?.description ||
      "Delicious healthy recipe from Driven Daily."}
  />
</svelte:head>

{#if currentRecipe}
  <div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto">
    <!-- Recipe Header -->
    <div class="mb-8">
      <a href="/recipes" class="btn btn-outline btn-sm mb-4">
        ← Back to Recipes
      </a>

      <div class="text-center mb-8">
        <h1
          class="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          {currentRecipe.title}
        </h1>
        <p class="text-xl text-slate-600 mb-6">
          {currentRecipe.description}
        </p>

        <!-- Recipe Meta -->
        <div class="flex flex-wrap justify-center gap-4 mb-6">
          <div
            class="badge {getCategoryColor(currentRecipe.category)} badge-lg"
          >
            {currentRecipe.category}
          </div>
          <div
            class="badge {getDifficultyColor(
              currentRecipe.difficulty,
            )} badge-lg"
          >
            {currentRecipe.difficulty}
          </div>
          <div class="badge badge-neutral badge-lg">
            {currentRecipe.meal}
          </div>
        </div>

        <!-- Recipe Stats -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentRecipe.prepTime}
            </div>
            <div class="text-sm text-slate-600">Prep Time (min)</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentRecipe.cookTime}
            </div>
            <div class="text-sm text-slate-600">Cook Time (min)</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentRecipe.servings}
            </div>
            <div class="text-sm text-slate-600">Servings</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentRecipe.calories}
            </div>
            <div class="text-sm text-slate-600">Calories</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentRecipe.protein}
            </div>
            <div class="text-sm text-slate-600">Protein (g)</div>
          </div>
        </div>

        <!-- Author -->
        <div class="text-center mb-8">
          <p class="text-slate-600">
            Recipe by <span class="font-semibold text-primary"
              >{currentRecipe.author}</span
            >
          </p>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Ingredients -->
      <div class="card bg-white shadow-lg border border-primary/10">
        <div class="card-body">
          <h2 class="text-2xl font-bold mb-6">Ingredients</h2>
          <ul class="space-y-3">
            {#each currentRecipe.ingredients as ingredient}
              <li class="flex items-start gap-3">
                <div
                  class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                ></div>
                <span>{ingredient}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Instructions -->
      <div class="card bg-white shadow-lg border border-primary/10">
        <div class="card-body">
          <h2 class="text-2xl font-bold mb-6">Instructions</h2>
          <ol class="space-y-4">
            {#each currentRecipe.instructions as instruction, index}
              <li class="flex gap-4">
                <div
                  class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                >
                  {index + 1}
                </div>
                <span>{instruction}</span>
              </li>
            {/each}
          </ol>
        </div>
      </div>
    </div>

    <!-- Recipe Tags -->
    <div class="mt-8">
      <h3 class="text-xl font-bold mb-4">Recipe Tags</h3>
      <div class="flex flex-wrap gap-2">
        {#each currentRecipe.tags as tag}
          <span class="badge badge-outline">{tag}</span>
        {/each}
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-12">
      <div
        class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl"
      >
        <div class="card-body">
          <h3 class="text-2xl font-bold mb-4">Love This Recipe?</h3>
          <p class="text-lg opacity-90 mb-6">
            Discover more healthy recipes and nutrition tips from our experts.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/recipes" class="btn btn-secondary btn-lg">
              Browse More Recipes
            </a>
            <a
              href="/blog"
              class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"
            >
              Read Our Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <!-- Recipe Not Found -->
  <div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto text-center">
    <div class="text-6xl mb-4">🍽️</div>
    <h1 class="text-4xl font-bold mb-4">Recipe Not Found</h1>
    <p class="text-xl text-slate-600 mb-8">
      Sorry, we couldn't find the recipe you're looking for.
    </p>
    <a href="/recipes" class="btn btn-primary btn-lg"> Browse All Recipes </a>
  </div>
{/if}

import { Y as ensure_array_like, X as head, W as stringify, S as pop, Q as push } from "../../../../chunks/index.js";
import { a as WebsiteName } from "../../../../chunks/config.js";
import { r as recipes } from "../../../../chunks/recipes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { a as attr } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let filteredRecipes;
  let searchTerm = "";
  let selectedCategory = "all";
  let selectedDifficulty = "all";
  let selectedMeal = "all";
  let animatedStats = { recipes: 0, categories: 0, avgProtein: 0 };
  function getDifficultyColor(difficulty) {
    switch (difficulty) {
      case "easy":
        return "badge-success";
      case "medium":
        return "badge-warning";
      case "hard":
        return "badge-error";
      default:
        return "badge-neutral";
    }
  }
  function getCategoryColor(category) {
    switch (category) {
      case "vegan":
        return "badge-primary";
      case "vegetarian":
        return "badge-secondary";
      case "non-vegetarian":
        return "badge-accent";
      default:
        return "badge-neutral";
    }
  }
  function getMealIcon(meal) {
    switch (meal) {
      case "breakfast":
        return "🌅";
      case "lunch":
        return "☀️";
      case "dinner":
        return "🌙";
      case "snack":
        return "🍎";
      case "dessert":
        return "🍰";
      default:
        return "🍽️";
    }
  }
  filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) || recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all";
    const matchesDifficulty = selectedDifficulty === "all";
    const matchesMeal = selectedMeal === "all";
    return matchesSearch && matchesCategory && matchesDifficulty && matchesMeal;
  });
  const each_array = ensure_array_like(filteredRecipes);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Healthy Recipes - ${escape_html(WebsiteName)}</title>`;
    $$payload2.out += `<meta name="description" content="Discover delicious, healthy recipes from our nutrition experts. Vegan, vegetarian, and non-vegetarian options for every meal and dietary preference." class="svelte-nrf2wa">`;
  });
  $$payload.out += `<div class="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-600 text-white relative overflow-hidden svelte-nrf2wa"><div class="absolute inset-0 overflow-hidden svelte-nrf2wa"><div class="absolute inset-0 opacity-5 svelte-nrf2wa"><div class="absolute top-10 left-10 text-6xl transform rotate-12 svelte-nrf2wa">🍳</div> <div class="absolute top-20 right-20 text-4xl transform -rotate-12 svelte-nrf2wa">🥗</div> <div class="absolute bottom-20 left-1/4 text-5xl transform rotate-6 svelte-nrf2wa">🍎</div> <div class="absolute bottom-10 right-1/3 text-3xl transform -rotate-6 svelte-nrf2wa">🌶️</div></div> <div class="absolute inset-0 svelte-nrf2wa"><div class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent svelte-nrf2wa"></div> <div class="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent svelte-nrf2wa"></div> <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent svelte-nrf2wa"></div> <div class="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent svelte-nrf2wa"></div></div></div> <div class="container mx-auto px-6 relative z-10 svelte-nrf2wa"><div class="max-w-7xl mx-auto svelte-nrf2wa"><div class="text-center mb-8 svelte-nrf2wa"><div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium svelte-nrf2wa"><span class="w-3 h-3 bg-violet-400 rounded-full mr-3 animate-pulse svelte-nrf2wa"></span> Fresh: Seasonal Recipes Added</div></div> <div class="grid lg:grid-cols-2 gap-16 items-center svelte-nrf2wa"><div class="relative svelte-nrf2wa"><div class="space-y-6 svelte-nrf2wa"><div class="flex justify-center space-x-4 svelte-nrf2wa"><div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-nrf2wa">🥑</div> <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-nrf2wa">🍅</div> <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-nrf2wa">🧀</div></div> <div class="flex justify-center space-x-4 svelte-nrf2wa"><div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-nrf2wa">🥬</div> <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm border-2 border-violet-300 svelte-nrf2wa">🥘</div> <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-nrf2wa">🥕</div></div> <div class="flex justify-center space-x-4 svelte-nrf2wa"><div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-nrf2wa">🧂</div> <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-nrf2wa">🌿</div> <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-nrf2wa">🧄</div></div></div> <div class="absolute -top-4 -left-4 text-3xl transform rotate-12 svelte-nrf2wa">🥄</div> <div class="absolute -bottom-4 -right-4 text-3xl transform -rotate-12 svelte-nrf2wa">🔪</div> <div class="absolute top-1/2 -left-8 text-2xl transform rotate-45 svelte-nrf2wa">🥣</div> <div class="absolute top-1/2 -right-8 text-2xl transform -rotate-45 svelte-nrf2wa">🍴</div></div> <div class="space-y-8 svelte-nrf2wa"><div class="slide-in-right svelte-nrf2wa"><h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight svelte-nrf2wa">Fuel Your <span class="bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent svelte-nrf2wa">Journey</span></h1></div> <div class="slide-in-right svelte-nrf2wa" style="animation-delay: 0.2s;"><p class="text-xl lg:text-2xl opacity-90 leading-relaxed mb-8 svelte-nrf2wa">Discover delicious, nutritious recipes that fuel your fitness
              goals. From quick breakfasts to gourmet dinners, every meal
              matters.</p></div> <div class="slide-in-right svelte-nrf2wa" style="animation-delay: 0.4s;"><div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 svelte-nrf2wa"><div class="flex items-center justify-between mb-4 svelte-nrf2wa"><div class="svelte-nrf2wa"><h3 class="text-2xl font-bold text-white svelte-nrf2wa">Chef's Pick</h3> <p class="text-violet-300 font-semibold svelte-nrf2wa">Grilled Chicken Breast</p></div> <div class="text-4xl svelte-nrf2wa">🍗</div></div> <div class="grid grid-cols-3 gap-4 mb-4 text-center svelte-nrf2wa"><div class="svelte-nrf2wa"><div class="text-2xl font-bold text-violet-400 svelte-nrf2wa">42g</div> <div class="text-sm text-white/80 svelte-nrf2wa">Protein</div></div> <div class="svelte-nrf2wa"><div class="text-2xl font-bold text-violet-400 svelte-nrf2wa">10min</div> <div class="text-sm text-white/80 svelte-nrf2wa">Prep Time</div></div> <div class="svelte-nrf2wa"><div class="text-2xl font-bold text-violet-400 svelte-nrf2wa">280</div> <div class="text-sm text-white/80 svelte-nrf2wa">Calories</div></div></div> <a href="/recipes/nonveg-grilled-chicken-breast" class="btn bg-violet-600 hover:bg-violet-700 text-white btn-lg w-full svelte-nrf2wa">View Recipe →</a></div></div> <div class="grid grid-cols-3 gap-4 slide-in-right svelte-nrf2wa" style="animation-delay: 0.6s;"><div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg svelte-nrf2wa"><div class="text-2xl font-bold mb-1 svelte-nrf2wa">${escape_html(animatedStats.recipes)}+</div> <div class="text-sm opacity-80 svelte-nrf2wa">Recipes</div></div> <div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg svelte-nrf2wa"><div class="text-2xl font-bold mb-1 svelte-nrf2wa">${escape_html(animatedStats.categories)}</div> <div class="text-sm opacity-80 svelte-nrf2wa">Categories</div></div> <div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg svelte-nrf2wa"><div class="text-2xl font-bold mb-1 svelte-nrf2wa">${escape_html(animatedStats.avgProtein)}g</div> <div class="text-sm opacity-80 svelte-nrf2wa">Avg Protein</div></div></div></div></div></div></div></div> <div class="py-16 lg:py-20 px-6 max-w-7xl mx-auto svelte-nrf2wa"><div class="animate-on-scroll mb-16 svelte-nrf2wa"><div class="search-card svelte-nrf2wa"><div class="mb-8 svelte-nrf2wa"><div class="relative max-w-2xl mx-auto svelte-nrf2wa"><input type="text"${attr("value", searchTerm)} placeholder="Search recipes, ingredients, or tags..." class="search-input svelte-nrf2wa"> <svg class="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 svelte-nrf2wa" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" class="svelte-nrf2wa"></path></svg></div></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 svelte-nrf2wa"><div class="filter-group svelte-nrf2wa"><label class="filter-label svelte-nrf2wa">Category</label> <select class="filter-select svelte-nrf2wa"><option value="all" class="svelte-nrf2wa">All Categories</option><option value="vegan" class="svelte-nrf2wa">🌱 Vegan</option><option value="vegetarian" class="svelte-nrf2wa">🥬 Vegetarian</option><option value="non-vegetarian" class="svelte-nrf2wa">🍗 Non-Vegetarian</option></select></div> <div class="filter-group svelte-nrf2wa"><label class="filter-label svelte-nrf2wa">Difficulty</label> <select class="filter-select svelte-nrf2wa"><option value="all" class="svelte-nrf2wa">All Levels</option><option value="easy" class="svelte-nrf2wa">🟢 Easy</option><option value="medium" class="svelte-nrf2wa">🟡 Medium</option><option value="hard" class="svelte-nrf2wa">🔴 Hard</option></select></div> <div class="filter-group svelte-nrf2wa"><label class="filter-label svelte-nrf2wa">Meal Type</label> <select class="filter-select svelte-nrf2wa"><option value="all" class="svelte-nrf2wa">All Meals</option><option value="breakfast" class="svelte-nrf2wa">🌅 Breakfast</option><option value="lunch" class="svelte-nrf2wa">☀️ Lunch</option><option value="dinner" class="svelte-nrf2wa">🌙 Dinner</option><option value="snack" class="svelte-nrf2wa">🍎 Snack</option><option value="dessert" class="svelte-nrf2wa">🍰 Dessert</option></select></div></div></div></div> <div class="animate-on-scroll mb-12 svelte-nrf2wa"><div class="text-center svelte-nrf2wa"><h2 class="text-3xl font-bold text-gray-800 mb-3 font-poppins svelte-nrf2wa">${escape_html(filteredRecipes.length)} Recipe${escape_html(filteredRecipes.length !== 1 ? "s" : "")}
        Found</h2> <p class="text-gray-600 text-lg svelte-nrf2wa">${escape_html("All recipes")}</p></div></div> <div class="animate-on-scroll svelte-nrf2wa"><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 svelte-nrf2wa"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let recipe = each_array[$$index];
    $$payload.out += `<a${attr("href", `/recipes/${recipe.id}`)} class="block group svelte-nrf2wa"><div class="recipe-card svelte-nrf2wa"><div class="recipe-header svelte-nrf2wa"><div class="flex flex-wrap gap-2 svelte-nrf2wa"><span${attr("class", `badge ${stringify(getCategoryColor(recipe.category))} badge-sm svelte-nrf2wa`)}>${escape_html(recipe.category)}</span> <span${attr("class", `badge ${stringify(getDifficultyColor(recipe.difficulty))} badge-sm svelte-nrf2wa`)}>${escape_html(recipe.difficulty)}</span></div> <div class="meal-badge svelte-nrf2wa"><span class="text-lg svelte-nrf2wa">${escape_html(getMealIcon(recipe.meal))}</span> <span class="text-xs ml-1 svelte-nrf2wa">${escape_html(recipe.meal)}</span></div></div> <h3 class="recipe-title svelte-nrf2wa">${escape_html(recipe.title)}</h3> <p class="recipe-description svelte-nrf2wa">${escape_html(recipe.description)}</p> <div class="recipe-stats svelte-nrf2wa"><div class="stat-item svelte-nrf2wa"><div class="stat-value svelte-nrf2wa">${escape_html(recipe.calories)}</div> <div class="stat-label svelte-nrf2wa">Calories</div></div> <div class="stat-item svelte-nrf2wa"><div class="stat-value svelte-nrf2wa">${escape_html(recipe.protein)}g</div> <div class="stat-label svelte-nrf2wa">Protein</div></div> <div class="stat-item svelte-nrf2wa"><div class="stat-value svelte-nrf2wa">${escape_html(recipe.prepTime + recipe.cookTime)}</div> <div class="stat-label svelte-nrf2wa">Minutes</div></div></div> <div class="recipe-meta svelte-nrf2wa"><div class="meta-info svelte-nrf2wa"><span class="meta-item svelte-nrf2wa"><svg class="w-4 h-4 svelte-nrf2wa" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-nrf2wa"></path></svg> ${escape_html(recipe.prepTime + recipe.cookTime)} min</span> <span class="meta-item svelte-nrf2wa"><svg class="w-4 h-4 svelte-nrf2wa" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" class="svelte-nrf2wa"></path></svg> ${escape_html(recipe.servings)} servings</span></div> <div class="author-info svelte-nrf2wa">By ${escape_html(recipe.author)}</div></div></div></a>`;
  }
  $$payload.out += `<!--]--></div></div> `;
  if (filteredRecipes.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="animate-on-scroll text-center py-20 svelte-nrf2wa"><div class="text-8xl mb-6 svelte-nrf2wa">🍽️</div> <h3 class="text-3xl font-bold text-gray-800 mb-4 font-poppins svelte-nrf2wa">No recipes found</h3> <p class="text-gray-600 mb-8 text-lg max-w-md mx-auto svelte-nrf2wa">Try adjusting your search terms or filters to find what you're looking
        for.</p> <button class="btn btn-primary btn-lg svelte-nrf2wa">Clear Filters</button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mt-24 svelte-nrf2wa"><h2 class="text-4xl font-bold text-center mb-12 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 svelte-nrf2wa">Popular Categories</h2> <div class="grid md:grid-cols-3 gap-8 svelte-nrf2wa"><div class="category-card bg-gradient-to-br from-green-500 to-green-600 text-white svelte-nrf2wa"><div class="text-4xl mb-4 svelte-nrf2wa">🌱</div> <h3 class="text-2xl font-bold mb-3 svelte-nrf2wa">Vegan</h3> <p class="opacity-90 svelte-nrf2wa">Plant-based recipes that are both nutritious and delicious.</p></div> <div class="category-card bg-gradient-to-br from-blue-500 to-blue-600 text-white svelte-nrf2wa"><div class="text-4xl mb-4 svelte-nrf2wa">🥬</div> <h3 class="text-2xl font-bold mb-3 svelte-nrf2wa">Vegetarian</h3> <p class="opacity-90 svelte-nrf2wa">Meat-free dishes packed with protein and flavor.</p></div> <div class="category-card bg-gradient-to-br from-orange-500 to-orange-600 text-white svelte-nrf2wa"><div class="text-4xl mb-4 svelte-nrf2wa">🍗</div> <h3 class="text-2xl font-bold mb-3 svelte-nrf2wa">Non-Vegetarian</h3> <p class="opacity-90 svelte-nrf2wa">Protein-rich meals with lean meats and seafood.</p></div></div></div></div>`;
  pop();
}
export {
  _page as default
};

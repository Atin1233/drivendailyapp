import { a0 as ensure_array_like, _ as head, W as escape_html, X as attr, Y as stringify, S as pop, Q as push } from "../../../../chunks/index.js";
import { a as WebsiteName } from "../../../../chunks/config.js";
import { r as recipes } from "../../../../chunks/recipes.js";
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
    $$payload2.out += `<meta name="description" content="Discover delicious, healthy recipes from our nutrition experts. Vegan, vegetarian, and non-vegetarian options for every meal and dietary preference." class="svelte-z2aw7">`;
  });
  $$payload.out += `<div class="py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 text-white relative overflow-hidden svelte-z2aw7"><div class="absolute inset-0 overflow-hidden svelte-z2aw7"><div class="absolute inset-0 opacity-5 svelte-z2aw7"><div class="absolute top-10 left-10 text-6xl transform rotate-12 svelte-z2aw7">🍳</div> <div class="absolute top-20 right-20 text-4xl transform -rotate-12 svelte-z2aw7">🥗</div> <div class="absolute bottom-20 left-1/4 text-5xl transform rotate-6 svelte-z2aw7">🍎</div> <div class="absolute bottom-10 right-1/3 text-3xl transform -rotate-6 svelte-z2aw7">🌶️</div></div> <div class="absolute inset-0 svelte-z2aw7"><div class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent svelte-z2aw7"></div> <div class="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent svelte-z2aw7"></div> <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent svelte-z2aw7"></div> <div class="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent svelte-z2aw7"></div></div></div> <div class="container mx-auto px-6 relative z-10 svelte-z2aw7"><div class="max-w-7xl mx-auto svelte-z2aw7"><div class="text-center mb-8 svelte-z2aw7"><div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium svelte-z2aw7"><span class="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse svelte-z2aw7"></span> Fresh: Seasonal Recipes Added</div></div> <div class="grid lg:grid-cols-2 gap-16 items-center svelte-z2aw7"><div class="relative svelte-z2aw7"><div class="space-y-6 svelte-z2aw7"><div class="flex justify-center space-x-4 svelte-z2aw7"><div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-z2aw7">🥑</div> <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-z2aw7">🍅</div> <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-z2aw7">🧀</div></div> <div class="flex justify-center space-x-4 svelte-z2aw7"><div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-z2aw7">🥬</div> <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm border-2 border-orange-300 svelte-z2aw7">🥘</div> <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-z2aw7">🥕</div></div> <div class="flex justify-center space-x-4 svelte-z2aw7"><div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-z2aw7">🧂</div> <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-z2aw7">🌿</div> <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm svelte-z2aw7">🧄</div></div></div> <div class="absolute -top-4 -left-4 text-3xl transform rotate-12 svelte-z2aw7">🥄</div> <div class="absolute -bottom-4 -right-4 text-3xl transform -rotate-12 svelte-z2aw7">🔪</div> <div class="absolute top-1/2 -left-8 text-2xl transform rotate-45 svelte-z2aw7">🥣</div> <div class="absolute top-1/2 -right-8 text-2xl transform -rotate-45 svelte-z2aw7">🍴</div></div> <div class="space-y-8 svelte-z2aw7"><div class="slide-in-right svelte-z2aw7"><h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight svelte-z2aw7">Fuel Your <span class="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent svelte-z2aw7">Journey</span></h1></div> <div class="slide-in-right svelte-z2aw7" style="animation-delay: 0.2s;"><p class="text-xl lg:text-2xl opacity-90 leading-relaxed mb-8 svelte-z2aw7">Discover delicious, nutritious recipes that fuel your fitness
              goals. From quick breakfasts to gourmet dinners, every meal
              matters.</p></div> <div class="slide-in-right svelte-z2aw7" style="animation-delay: 0.4s;"><div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 svelte-z2aw7"><div class="flex items-center justify-between mb-4 svelte-z2aw7"><div class="svelte-z2aw7"><h3 class="text-2xl font-bold text-white svelte-z2aw7">Chef's Pick</h3> <p class="text-orange-300 font-semibold svelte-z2aw7">Grilled Chicken Breast</p></div> <div class="text-4xl svelte-z2aw7">🍗</div></div> <div class="grid grid-cols-3 gap-4 mb-4 text-center svelte-z2aw7"><div class="svelte-z2aw7"><div class="text-2xl font-bold text-orange-400 svelte-z2aw7">42g</div> <div class="text-sm text-white/80 svelte-z2aw7">Protein</div></div> <div class="svelte-z2aw7"><div class="text-2xl font-bold text-orange-400 svelte-z2aw7">10min</div> <div class="text-sm text-white/80 svelte-z2aw7">Prep Time</div></div> <div class="svelte-z2aw7"><div class="text-2xl font-bold text-orange-400 svelte-z2aw7">280</div> <div class="text-sm text-white/80 svelte-z2aw7">Calories</div></div></div> <a href="/recipes/nonveg-grilled-chicken-breast" class="btn btn-warning btn-lg w-full svelte-z2aw7">View Recipe →</a></div></div> <div class="grid grid-cols-3 gap-4 slide-in-right svelte-z2aw7" style="animation-delay: 0.6s;"><div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg svelte-z2aw7"><div class="text-2xl font-bold mb-1 svelte-z2aw7">${escape_html(animatedStats.recipes)}+</div> <div class="text-sm opacity-80 svelte-z2aw7">Recipes</div></div> <div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg svelte-z2aw7"><div class="text-2xl font-bold mb-1 svelte-z2aw7">${escape_html(animatedStats.categories)}</div> <div class="text-sm opacity-80 svelte-z2aw7">Categories</div></div> <div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg svelte-z2aw7"><div class="text-2xl font-bold mb-1 svelte-z2aw7">${escape_html(animatedStats.avgProtein)}g</div> <div class="text-sm opacity-80 svelte-z2aw7">Avg Protein</div></div></div></div></div></div></div></div> <div class="py-16 lg:py-20 px-6 max-w-7xl mx-auto svelte-z2aw7"><div class="animate-on-scroll mb-16 svelte-z2aw7"><div class="search-card svelte-z2aw7"><div class="mb-8 svelte-z2aw7"><div class="relative max-w-2xl mx-auto svelte-z2aw7"><input type="text"${attr("value", searchTerm)} placeholder="Search recipes, ingredients, or tags..." class="search-input svelte-z2aw7"> <svg class="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 svelte-z2aw7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" class="svelte-z2aw7"></path></svg></div></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 svelte-z2aw7"><div class="filter-group svelte-z2aw7"><label class="filter-label svelte-z2aw7">Category</label> <select class="filter-select svelte-z2aw7"><option value="all" class="svelte-z2aw7">All Categories</option><option value="vegan" class="svelte-z2aw7">🌱 Vegan</option><option value="vegetarian" class="svelte-z2aw7">🥬 Vegetarian</option><option value="non-vegetarian" class="svelte-z2aw7">🍗 Non-Vegetarian</option></select></div> <div class="filter-group svelte-z2aw7"><label class="filter-label svelte-z2aw7">Difficulty</label> <select class="filter-select svelte-z2aw7"><option value="all" class="svelte-z2aw7">All Levels</option><option value="easy" class="svelte-z2aw7">🟢 Easy</option><option value="medium" class="svelte-z2aw7">🟡 Medium</option><option value="hard" class="svelte-z2aw7">🔴 Hard</option></select></div> <div class="filter-group svelte-z2aw7"><label class="filter-label svelte-z2aw7">Meal Type</label> <select class="filter-select svelte-z2aw7"><option value="all" class="svelte-z2aw7">All Meals</option><option value="breakfast" class="svelte-z2aw7">🌅 Breakfast</option><option value="lunch" class="svelte-z2aw7">☀️ Lunch</option><option value="dinner" class="svelte-z2aw7">🌙 Dinner</option><option value="snack" class="svelte-z2aw7">🍎 Snack</option><option value="dessert" class="svelte-z2aw7">🍰 Dessert</option></select></div></div></div></div> <div class="animate-on-scroll mb-12 svelte-z2aw7"><div class="text-center svelte-z2aw7"><h2 class="text-3xl font-bold text-gray-800 mb-3 font-poppins svelte-z2aw7">${escape_html(filteredRecipes.length)} Recipe${escape_html(filteredRecipes.length !== 1 ? "s" : "")}
        Found</h2> <p class="text-gray-600 text-lg svelte-z2aw7">${escape_html("All recipes")}</p></div></div> <div class="animate-on-scroll svelte-z2aw7"><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 svelte-z2aw7"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let recipe = each_array[$$index];
    $$payload.out += `<a${attr("href", `/recipes/${recipe.id}`)} class="block group svelte-z2aw7"><div class="recipe-card svelte-z2aw7"><div class="recipe-header svelte-z2aw7"><div class="flex flex-wrap gap-2 svelte-z2aw7"><span${attr("class", `badge ${stringify(getCategoryColor(recipe.category))} badge-sm svelte-z2aw7`)}>${escape_html(recipe.category)}</span> <span${attr("class", `badge ${stringify(getDifficultyColor(recipe.difficulty))} badge-sm svelte-z2aw7`)}>${escape_html(recipe.difficulty)}</span></div> <div class="meal-badge svelte-z2aw7"><span class="text-lg svelte-z2aw7">${escape_html(getMealIcon(recipe.meal))}</span> <span class="text-xs ml-1 svelte-z2aw7">${escape_html(recipe.meal)}</span></div></div> <h3 class="recipe-title svelte-z2aw7">${escape_html(recipe.title)}</h3> <p class="recipe-description svelte-z2aw7">${escape_html(recipe.description)}</p> <div class="recipe-stats svelte-z2aw7"><div class="stat-item svelte-z2aw7"><div class="stat-value svelte-z2aw7">${escape_html(recipe.calories)}</div> <div class="stat-label svelte-z2aw7">Calories</div></div> <div class="stat-item svelte-z2aw7"><div class="stat-value svelte-z2aw7">${escape_html(recipe.protein)}g</div> <div class="stat-label svelte-z2aw7">Protein</div></div> <div class="stat-item svelte-z2aw7"><div class="stat-value svelte-z2aw7">${escape_html(recipe.prepTime + recipe.cookTime)}</div> <div class="stat-label svelte-z2aw7">Minutes</div></div></div> <div class="recipe-meta svelte-z2aw7"><div class="meta-info svelte-z2aw7"><span class="meta-item svelte-z2aw7"><svg class="w-4 h-4 svelte-z2aw7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-z2aw7"></path></svg> ${escape_html(recipe.prepTime + recipe.cookTime)} min</span> <span class="meta-item svelte-z2aw7"><svg class="w-4 h-4 svelte-z2aw7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" class="svelte-z2aw7"></path></svg> ${escape_html(recipe.servings)} servings</span></div> <div class="author-info svelte-z2aw7">By ${escape_html(recipe.author)}</div></div></div></a>`;
  }
  $$payload.out += `<!--]--></div></div> `;
  if (filteredRecipes.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="animate-on-scroll text-center py-20 svelte-z2aw7"><div class="text-8xl mb-6 svelte-z2aw7">🍽️</div> <h3 class="text-3xl font-bold text-gray-800 mb-4 font-poppins svelte-z2aw7">No recipes found</h3> <p class="text-gray-600 mb-8 text-lg max-w-md mx-auto svelte-z2aw7">Try adjusting your search terms or filters to find what you're looking
        for.</p> <button class="btn btn-primary btn-lg svelte-z2aw7">Clear Filters</button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mt-24 svelte-z2aw7"><h2 class="text-4xl font-bold text-center mb-12 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 svelte-z2aw7">Popular Categories</h2> <div class="grid md:grid-cols-3 gap-8 svelte-z2aw7"><div class="category-card bg-gradient-to-br from-green-500 to-green-600 text-white svelte-z2aw7"><div class="text-4xl mb-4 svelte-z2aw7">🌱</div> <h3 class="text-2xl font-bold mb-3 svelte-z2aw7">Vegan</h3> <p class="opacity-90 svelte-z2aw7">Plant-based recipes that are both nutritious and delicious.</p></div> <div class="category-card bg-gradient-to-br from-blue-500 to-blue-600 text-white svelte-z2aw7"><div class="text-4xl mb-4 svelte-z2aw7">🥬</div> <h3 class="text-2xl font-bold mb-3 svelte-z2aw7">Vegetarian</h3> <p class="opacity-90 svelte-z2aw7">Meat-free dishes packed with protein and flavor.</p></div> <div class="category-card bg-gradient-to-br from-orange-500 to-orange-600 text-white svelte-z2aw7"><div class="text-4xl mb-4 svelte-z2aw7">🍗</div> <h3 class="text-2xl font-bold mb-3 svelte-z2aw7">Non-Vegetarian</h3> <p class="opacity-90 svelte-z2aw7">Protein-rich meals with lean meats and seafood.</p></div></div></div></div>`;
  pop();
}
export {
  _page as default
};

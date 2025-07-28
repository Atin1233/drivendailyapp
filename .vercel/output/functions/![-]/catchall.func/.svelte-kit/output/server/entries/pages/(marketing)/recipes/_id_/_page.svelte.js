import { T as store_get, X as head, Y as ensure_array_like, W as stringify, V as unsubscribe_stores, S as pop, Q as push } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { a as WebsiteName } from "../../../../../chunks/config.js";
import { r as recipes } from "../../../../../chunks/recipes.js";
import { e as escape_html } from "../../../../../chunks/escaping.js";
import { a as attr } from "../../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let recipeId, currentRecipe;
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
  recipeId = store_get($$store_subs ??= {}, "$page", page).params.id;
  currentRecipe = recipes.find((r) => r.id === recipeId);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(currentRecipe?.title || "Recipe")} - ${escape_html(WebsiteName)}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", currentRecipe?.description || "Delicious healthy recipe from Driven Daily.")}>`;
  });
  if (currentRecipe) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(currentRecipe.ingredients);
    const each_array_1 = ensure_array_like(currentRecipe.instructions);
    const each_array_2 = ensure_array_like(currentRecipe.tags);
    $$payload.out += `<div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto"><div class="mb-8"><a href="/recipes" class="btn btn-outline btn-sm mb-4">← Back to Recipes</a> <div class="text-center mb-8"><h1 class="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">${escape_html(currentRecipe.title)}</h1> <p class="text-xl text-slate-600 mb-6">${escape_html(currentRecipe.description)}</p> <div class="flex flex-wrap justify-center gap-4 mb-6"><div${attr("class", `badge ${stringify(getCategoryColor(currentRecipe.category))} badge-lg`)}>${escape_html(currentRecipe.category)}</div> <div${attr("class", `badge ${stringify(getDifficultyColor(currentRecipe.difficulty))} badge-lg`)}>${escape_html(currentRecipe.difficulty)}</div> <div class="badge badge-neutral badge-lg">${escape_html(currentRecipe.meal)}</div></div> <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"><div class="text-center"><div class="text-2xl font-bold text-primary">${escape_html(currentRecipe.prepTime)}</div> <div class="text-sm text-slate-600">Prep Time (min)</div></div> <div class="text-center"><div class="text-2xl font-bold text-primary">${escape_html(currentRecipe.cookTime)}</div> <div class="text-sm text-slate-600">Cook Time (min)</div></div> <div class="text-center"><div class="text-2xl font-bold text-primary">${escape_html(currentRecipe.servings)}</div> <div class="text-sm text-slate-600">Servings</div></div> <div class="text-center"><div class="text-2xl font-bold text-primary">${escape_html(currentRecipe.calories)}</div> <div class="text-sm text-slate-600">Calories</div></div> <div class="text-center"><div class="text-2xl font-bold text-primary">${escape_html(currentRecipe.protein)}</div> <div class="text-sm text-slate-600">Protein (g)</div></div></div> <div class="text-center mb-8"><p class="text-slate-600">Recipe by <span class="font-semibold text-primary">${escape_html(currentRecipe.author)}</span></p></div></div></div> <div class="grid lg:grid-cols-2 gap-12"><div class="card bg-white shadow-lg border border-primary/10"><div class="card-body"><h2 class="text-2xl font-bold mb-6">Ingredients</h2> <ul class="space-y-3"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let ingredient = each_array[$$index];
      $$payload.out += `<li class="flex items-start gap-3"><div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div> <span>${escape_html(ingredient)}</span></li>`;
    }
    $$payload.out += `<!--]--></ul></div></div> <div class="card bg-white shadow-lg border border-primary/10"><div class="card-body"><h2 class="text-2xl font-bold mb-6">Instructions</h2> <ol class="space-y-4"><!--[-->`;
    for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
      let instruction = each_array_1[index];
      $$payload.out += `<li class="flex gap-4"><div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">${escape_html(index + 1)}</div> <span>${escape_html(instruction)}</span></li>`;
    }
    $$payload.out += `<!--]--></ol></div></div></div> <div class="mt-8"><h3 class="text-xl font-bold mb-4">Recipe Tags</h3> <div class="flex flex-wrap gap-2"><!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let tag = each_array_2[$$index_2];
      $$payload.out += `<span class="badge badge-outline">${escape_html(tag)}</span>`;
    }
    $$payload.out += `<!--]--></div></div> <div class="text-center mt-12"><div class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl"><div class="card-body"><h3 class="text-2xl font-bold mb-4">Love This Recipe?</h3> <p class="text-lg opacity-90 mb-6">Discover more healthy recipes and nutrition tips from our experts.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/recipes" class="btn btn-secondary btn-lg">Browse More Recipes</a> <a href="/blog" class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">Read Our Blog</a></div></div></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto text-center"><div class="text-6xl mb-4">🍽️</div> <h1 class="text-4xl font-bold mb-4">Recipe Not Found</h1> <p class="text-xl text-slate-600 mb-8">Sorry, we couldn't find the recipe you're looking for.</p> <a href="/recipes" class="btn btn-primary btn-lg">Browse All Recipes</a></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};

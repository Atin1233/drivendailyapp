import { Y as ensure_array_like, X as head, W as stringify, S as pop, Q as push } from "../../../../chunks/index.js";
import { a as WebsiteName } from "../../../../chunks/config.js";
import { w as workouts } from "../../../../chunks/workouts.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { a as attr } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let uniqueCategories, filteredWorkouts;
  let searchTerm = "";
  let selectedCategory = "all";
  let selectedDifficulty = "all";
  let selectedSplit = "all";
  let animatedStats = { workouts: 0, categories: 0, avgDuration: 0 };
  function getDifficultyColor(difficulty) {
    switch (difficulty) {
      case "beginner":
        return "badge-success";
      case "intermediate":
        return "badge-warning";
      case "advanced":
        return "badge-error";
      default:
        return "badge-neutral";
    }
  }
  function getCategoryColor(category) {
    switch (category) {
      case "strength":
        return "badge-primary";
      case "cardio":
        return "badge-secondary";
      case "hiit":
        return "badge-accent";
      case "yoga":
        return "badge-info";
      case "flexibility":
        return "badge-neutral";
      default:
        return "badge-neutral";
    }
  }
  function getCategoryIcon(category) {
    switch (category) {
      case "strength":
        return "💪";
      case "cardio":
        return "🏃‍♂️";
      case "hiit":
        return "⚡";
      case "yoga":
        return "🧘‍♀️";
      case "flexibility":
        return "🤸‍♀️";
      default:
        return "🏋️‍♂️";
    }
  }
  uniqueCategories = Array.from(new Set(workouts.map((w) => w.category)));
  filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch = workout.title.toLowerCase().includes(searchTerm.toLowerCase()) || workout.description.toLowerCase().includes(searchTerm.toLowerCase()) || workout.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all";
    const matchesDifficulty = selectedDifficulty === "all";
    const matchesSplit = selectedSplit === "all";
    return matchesSearch && matchesCategory && matchesDifficulty && matchesSplit;
  });
  const each_array = ensure_array_like(uniqueCategories);
  const each_array_1 = ensure_array_like(filteredWorkouts);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Workout Plans - ${escape_html(WebsiteName)}</title>`;
    $$payload2.out += `<meta name="description" content="Discover effective workout plans and training splits from our fitness experts. Strength, cardio, HIIT, and yoga workouts for every fitness level." class="svelte-13bgwx1">`;
  });
  $$payload.out += `<div class="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden svelte-13bgwx1"><div class="absolute inset-0 overflow-hidden svelte-13bgwx1"><div class="absolute inset-0 opacity-5 svelte-13bgwx1"><div class="absolute top-10 left-10 text-6xl transform rotate-12 svelte-13bgwx1">💪</div> <div class="absolute top-20 right-20 text-4xl transform -rotate-12 svelte-13bgwx1">🏃‍♂️</div> <div class="absolute bottom-20 left-1/4 text-5xl transform rotate-6 svelte-13bgwx1">⚡</div> <div class="absolute bottom-10 right-1/3 text-3xl transform -rotate-6 svelte-13bgwx1">🏋️‍♂️</div></div> <div class="absolute inset-0 svelte-13bgwx1"><div class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse svelte-13bgwx1"></div> <div class="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse svelte-13bgwx1" style="animation-delay: -1s;"></div> <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse svelte-13bgwx1" style="animation-delay: -0.5s;"></div> <div class="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse svelte-13bgwx1" style="animation-delay: -1.5s;"></div></div></div> <div class="container mx-auto px-6 relative z-10 svelte-13bgwx1"><div class="max-w-6xl mx-auto svelte-13bgwx1"><div class="text-center mb-8 svelte-13bgwx1"><div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium svelte-13bgwx1"><span class="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse svelte-13bgwx1"></span> New: High-Intensity Workouts Added</div></div> <div class="text-center max-w-4xl mx-auto svelte-13bgwx1"><div class="slide-in-left mb-8 svelte-13bgwx1"><h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight svelte-13bgwx1">Power Your <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent svelte-13bgwx1">Performance</span></h1></div> <div class="slide-in-right mb-12 svelte-13bgwx1"><p class="text-xl lg:text-2xl opacity-90 leading-relaxed svelte-13bgwx1">Transform your body with science-backed workouts designed for real
            results. From strength to cardio, we've got you covered.</p></div> <div class="relative mb-12 svelte-13bgwx1"><div class="card bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl p-8 max-w-2xl mx-auto svelte-13bgwx1"><div class="text-center mb-6 svelte-13bgwx1"><div class="text-6xl mb-4 svelte-13bgwx1">⚡</div> <h3 class="text-3xl font-bold text-white mb-2 svelte-13bgwx1">Featured Workout</h3> <div class="text-5xl font-bold text-purple-400 mb-2 svelte-13bgwx1">HIIT Cardio</div> <div class="text-white/80 text-lg svelte-13bgwx1">High-intensity interval training for maximum calorie burn</div></div> <div class="grid grid-cols-3 gap-4 mb-6 svelte-13bgwx1"><div class="text-center svelte-13bgwx1"><div class="text-2xl font-bold text-purple-400 svelte-13bgwx1">30</div> <div class="text-sm text-white/80 svelte-13bgwx1">Minutes</div></div> <div class="text-center svelte-13bgwx1"><div class="text-2xl font-bold text-purple-400 svelte-13bgwx1">6</div> <div class="text-sm text-white/80 svelte-13bgwx1">Exercises</div></div> <div class="text-center svelte-13bgwx1"><div class="text-2xl font-bold text-purple-400 svelte-13bgwx1">Advanced</div> <div class="text-sm text-white/80 svelte-13bgwx1">Difficulty</div></div></div> <a href="/workouts/hiit-cardio" class="btn bg-blue-600 hover:bg-blue-700 text-white btn-lg w-full svelte-13bgwx1">Start Workout →</a></div> <div class="absolute -top-6 -right-6 w-12 h-12 bg-emerald-400 rounded-full float-animation svelte-13bgwx1"></div> <div class="absolute -bottom-6 -left-6 w-8 h-8 bg-green-400 rounded-full float-animation svelte-13bgwx1" style="animation-delay: -2s;"></div></div> <div class="grid grid-cols-3 gap-8 max-w-3xl mx-auto svelte-13bgwx1"><div class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg svelte-13bgwx1"><div class="text-4xl font-bold mb-2 svelte-13bgwx1">${escape_html(animatedStats.workouts)}+</div> <div class="text-lg opacity-80 svelte-13bgwx1">Workouts</div></div> <div class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg svelte-13bgwx1"><div class="text-4xl font-bold mb-2 svelte-13bgwx1">${escape_html(animatedStats.categories)}</div> <div class="text-lg opacity-80 svelte-13bgwx1">Categories</div></div> <div class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg svelte-13bgwx1"><div class="text-4xl font-bold mb-2 svelte-13bgwx1">${escape_html(animatedStats.avgDuration)}min</div> <div class="text-lg opacity-80 svelte-13bgwx1">Avg Duration</div></div></div></div></div></div></div> <div class="py-16 lg:py-20 px-6 max-w-7xl mx-auto svelte-13bgwx1"><div class="animate-on-scroll mb-16 svelte-13bgwx1"><div class="search-card svelte-13bgwx1"><div class="mb-8 svelte-13bgwx1"><div class="relative max-w-2xl mx-auto svelte-13bgwx1"><input type="text"${attr("value", searchTerm)} placeholder="Search workouts, exercises, or training styles..." class="search-input svelte-13bgwx1"> <svg class="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 svelte-13bgwx1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" class="svelte-13bgwx1"></path></svg></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 svelte-13bgwx1"><div class="filter-group svelte-13bgwx1"><label class="filter-label svelte-13bgwx1">Category</label> <select class="filter-select svelte-13bgwx1"><option value="all" class="svelte-13bgwx1">All Categories</option><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out += `<option${attr("value", category)} class="svelte-13bgwx1">${escape_html(getCategoryIcon(category))} ${escape_html(category)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div class="filter-group svelte-13bgwx1"><label class="filter-label svelte-13bgwx1">Difficulty</label> <select class="filter-select svelte-13bgwx1"><option value="all" class="svelte-13bgwx1">All Levels</option><option value="beginner" class="svelte-13bgwx1">🟢 Beginner</option><option value="intermediate" class="svelte-13bgwx1">🟡 Intermediate</option><option value="advanced" class="svelte-13bgwx1">🔴 Advanced</option></select></div> <div class="filter-group svelte-13bgwx1"><label class="filter-label svelte-13bgwx1">Training Split</label> <select class="filter-select svelte-13bgwx1"><option value="all" class="svelte-13bgwx1">All Splits</option><option value="full-body" class="svelte-13bgwx1">🏋️‍♂️ Full Body</option><option value="push-pull-legs" class="svelte-13bgwx1">🔄 Push/Pull/Legs</option><option value="upper-lower" class="svelte-13bgwx1">⚖️ Upper/Lower</option><option value="bro-split" class="svelte-13bgwx1">💪 Bro Split</option><option value="arnold-split" class="svelte-13bgwx1">🏆 Arnold Split</option><option value="strength-focused" class="svelte-13bgwx1">🎯 Strength Focused</option><option value="powerlifting" class="svelte-13bgwx1">🏋️ Powerlifting</option><option value="bodybuilding" class="svelte-13bgwx1">💪 Bodybuilding</option><option value="functional" class="svelte-13bgwx1">⚡ Functional</option><option value="cardio-focused" class="svelte-13bgwx1">🏃‍♂️ Cardio Focused</option></select></div></div></div></div> <div class="animate-on-scroll mb-12 svelte-13bgwx1"><div class="text-center svelte-13bgwx1"><h2 class="text-3xl font-bold text-gray-800 mb-3 font-poppins svelte-13bgwx1">${escape_html(filteredWorkouts.length)} Workout${escape_html(filteredWorkouts.length !== 1 ? "s" : "")} Found</h2> <p class="text-gray-600 text-lg svelte-13bgwx1">${escape_html("All workouts")}</p></div></div> <div class="animate-on-scroll svelte-13bgwx1"><div class="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 svelte-13bgwx1"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let workout = each_array_1[$$index_1];
    $$payload.out += `<a${attr("href", `/workouts/${workout.id}`)} class="block group svelte-13bgwx1"><div class="workout-card svelte-13bgwx1"><div class="workout-header svelte-13bgwx1"><div class="flex flex-wrap gap-2 svelte-13bgwx1"><span${attr("class", `badge ${stringify(getCategoryColor(workout.category))} badge-sm svelte-13bgwx1`)}>${escape_html(getCategoryIcon(workout.category))}
                  ${escape_html(workout.category)}</span> <span${attr("class", `badge ${stringify(getDifficultyColor(workout.difficulty))} badge-sm svelte-13bgwx1`)}>${escape_html(workout.difficulty)}</span></div> <div class="split-badge svelte-13bgwx1"><span class="text-xs svelte-13bgwx1">${escape_html(workout.split)}</span></div></div> <h3 class="workout-title svelte-13bgwx1">${escape_html(workout.title)}</h3> <p class="workout-description svelte-13bgwx1">${escape_html(workout.description)}</p> <div class="workout-stats svelte-13bgwx1"><div class="stat-item svelte-13bgwx1"><div class="stat-value svelte-13bgwx1">${escape_html(workout.duration)}</div> <div class="stat-label svelte-13bgwx1">Minutes</div></div> <div class="stat-item svelte-13bgwx1"><div class="stat-value svelte-13bgwx1">${escape_html(workout.exercises.length)}</div> <div class="stat-label svelte-13bgwx1">Exercises</div></div> <div class="stat-item svelte-13bgwx1"><div class="stat-value svelte-13bgwx1">${escape_html(workout.difficulty)}</div> <div class="stat-label svelte-13bgwx1">Level</div></div></div> <div class="workout-meta svelte-13bgwx1"><div class="meta-info svelte-13bgwx1"><span class="meta-item svelte-13bgwx1"><svg class="w-4 h-4 svelte-13bgwx1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" class="svelte-13bgwx1"></path></svg> ${escape_html(workout.difficulty)}</span> <span class="meta-item svelte-13bgwx1"><svg class="w-4 h-4 svelte-13bgwx1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-13bgwx1"></path></svg> ${escape_html(workout.duration)} min</span></div> <div class="author-info svelte-13bgwx1">By ${escape_html(workout.author)}</div></div></div></a>`;
  }
  $$payload.out += `<!--]--></div></div> `;
  if (filteredWorkouts.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="animate-on-scroll text-center py-20 svelte-13bgwx1"><div class="text-8xl mb-6 svelte-13bgwx1">💪</div> <h3 class="text-3xl font-bold text-gray-800 mb-4 font-poppins svelte-13bgwx1">No workouts found</h3> <p class="text-gray-600 mb-8 text-lg max-w-md mx-auto svelte-13bgwx1">Try adjusting your search terms or filters to find what you're looking
        for.</p> <button class="btn btn-primary btn-lg svelte-13bgwx1">Clear Filters</button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mt-24 svelte-13bgwx1"><h2 class="text-4xl font-bold text-center mb-12 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 svelte-13bgwx1">Training Categories</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 svelte-13bgwx1"><div class="category-card bg-gradient-to-br from-blue-500 to-blue-600 text-white svelte-13bgwx1"><div class="text-4xl mb-4 svelte-13bgwx1">💪</div> <h3 class="text-2xl font-bold mb-3 svelte-13bgwx1">Strength Training</h3> <p class="opacity-90 svelte-13bgwx1">Build muscle and increase strength with proven lifting programs.</p></div> <div class="category-card bg-gradient-to-br from-green-500 to-green-600 text-white svelte-13bgwx1"><div class="text-4xl mb-4 svelte-13bgwx1">🏃‍♂️</div> <h3 class="text-2xl font-bold mb-3 svelte-13bgwx1">Cardio</h3> <p class="opacity-90 svelte-13bgwx1">Improve endurance and burn calories with effective cardio workouts.</p></div> <div class="category-card bg-gradient-to-br from-purple-500 to-purple-600 text-white svelte-13bgwx1"><div class="text-4xl mb-4 svelte-13bgwx1">⚡</div> <h3 class="text-2xl font-bold mb-3 svelte-13bgwx1">HIIT</h3> <p class="opacity-90 svelte-13bgwx1">High-intensity interval training for maximum fat burn and
          conditioning.</p></div> <div class="category-card bg-gradient-to-br from-pink-500 to-pink-600 text-white svelte-13bgwx1"><div class="text-4xl mb-4 svelte-13bgwx1">🧘‍♀️</div> <h3 class="text-2xl font-bold mb-3 svelte-13bgwx1">Yoga</h3> <p class="opacity-90 svelte-13bgwx1">Improve flexibility, balance, and mental wellness with yoga flows.</p></div> <div class="category-card bg-gradient-to-br from-orange-500 to-orange-600 text-white svelte-13bgwx1"><div class="text-4xl mb-4 svelte-13bgwx1">🤸‍♀️</div> <h3 class="text-2xl font-bold mb-3 svelte-13bgwx1">Flexibility</h3> <p class="opacity-90 svelte-13bgwx1">Enhance mobility and prevent injury with stretching routines.</p></div> <div class="category-card bg-gradient-to-br from-indigo-500 to-indigo-600 text-white svelte-13bgwx1"><div class="text-4xl mb-4 svelte-13bgwx1">⚡</div> <h3 class="text-2xl font-bold mb-3 svelte-13bgwx1">Functional</h3> <p class="opacity-90 svelte-13bgwx1">Real-world movement patterns for everyday strength and mobility.</p></div></div></div></div>`;
  pop();
}
export {
  _page as default
};

import { T as store_get, _ as head, a0 as ensure_array_like, W as escape_html, X as attr, Y as stringify, V as unsubscribe_stores, S as pop, Q as push } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { a as WebsiteName } from "../../../../../chunks/config.js";
import { w as workouts } from "../../../../../chunks/workouts.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let workoutId, currentWorkout;
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
  function getSplitColor(split) {
    switch (split) {
      case "full-body":
        return "badge-primary";
      case "push-pull-legs":
        return "badge-secondary";
      case "upper-lower":
        return "badge-accent";
      case "bro-split":
        return "badge-info";
      case "strength-focused":
        return "badge-warning";
      default:
        return "badge-neutral";
    }
  }
  workoutId = store_get($$store_subs ??= {}, "$page", page).params.id;
  currentWorkout = workouts.find((workout) => workout.id === workoutId);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(currentWorkout?.title || "Workout")} - ${escape_html(WebsiteName)}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", currentWorkout?.description || "Detailed workout plan from Driven Daily.")}>`;
  });
  if (currentWorkout) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(currentWorkout.exercises);
    const each_array_1 = ensure_array_like(currentWorkout.tags);
    $$payload.out += `<div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto"><div class="mb-8"><a href="/workouts" class="btn btn-outline btn-sm mb-4">← Back to Workouts</a> <div class="text-center mb-8"><h1 class="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">${escape_html(currentWorkout.title)}</h1> <p class="text-xl text-slate-600 mb-6">${escape_html(currentWorkout.description)}</p> <div class="flex flex-wrap justify-center gap-4 mb-6"><div${attr("class", `badge ${stringify(getCategoryColor(currentWorkout.category))} badge-lg`)}>${escape_html(currentWorkout.category)}</div> <div${attr("class", `badge ${stringify(getDifficultyColor(currentWorkout.difficulty))} badge-lg`)}>${escape_html(currentWorkout.difficulty)}</div> <div${attr("class", `badge ${stringify(getSplitColor(currentWorkout.split))} badge-lg`)}>${escape_html(currentWorkout.split.replace("-", " "))}</div></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"><div class="text-center"><div class="text-2xl font-bold text-primary">${escape_html(currentWorkout.duration)}</div> <div class="text-sm text-slate-600">Duration (min)</div></div> <div class="text-center"><div class="text-2xl font-bold text-primary">${escape_html(currentWorkout.exercises.length)}</div> <div class="text-sm text-slate-600">Exercises</div></div> <div class="text-center"><div class="text-2xl font-bold text-primary">${escape_html(currentWorkout.exercises.reduce((total, ex) => total + ex.sets, 0))}</div> <div class="text-sm text-slate-600">Total Sets</div></div> <div class="text-center"><div class="text-2xl font-bold text-primary">${escape_html(currentWorkout.tags.length)}</div> <div class="text-sm text-slate-600">Tags</div></div></div> <div class="text-center mb-8"><p class="text-slate-600">Workout by <span class="font-semibold text-primary">${escape_html(currentWorkout.author)}</span></p></div></div></div> <div class="card bg-white shadow-lg border border-primary/10 mb-8"><div class="card-body"><h2 class="text-2xl font-bold mb-6">Exercise List</h2> <div class="space-y-4"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let exercise = each_array[index];
      $$payload.out += `<div class="flex items-center gap-4 p-4 bg-slate-50 rounded-lg"><div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">${escape_html(index + 1)}</div> <div class="flex-1"><h3 class="font-semibold text-lg">${escape_html(exercise.name)}</h3> `;
      if (exercise.notes) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<p class="text-sm text-slate-600 mt-1">${escape_html(exercise.notes)}</p>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div> <div class="text-right"><div class="font-semibold">${escape_html(exercise.sets)} sets</div> <div class="text-sm text-slate-600">${escape_html(exercise.reps)}</div> <div class="text-xs text-slate-500">Rest: ${escape_html(exercise.rest)}</div></div></div>`;
    }
    $$payload.out += `<!--]--></div></div></div> <div class="card bg-white shadow-lg border border-primary/10 mb-8"><div class="card-body"><h2 class="text-2xl font-bold mb-6">Workout Tips</h2> <div class="space-y-4"><div class="flex items-start gap-3"><div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div> <div><strong>Warm Up:</strong> Always start with 5-10 minutes of light cardio
              and dynamic stretching</div></div> <div class="flex items-start gap-3"><div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div> <div><strong>Form First:</strong> Focus on proper form before increasing
              weight or intensity</div></div> <div class="flex items-start gap-3"><div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div> <div><strong>Progressive Overload:</strong> Gradually increase weight or
              reps over time</div></div> <div class="flex items-start gap-3"><div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div> <div><strong>Rest Periods:</strong> Follow the recommended rest times for
              optimal recovery</div></div> <div class="flex items-start gap-3"><div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div> <div><strong>Hydration:</strong> Stay hydrated throughout your workout</div></div></div></div></div> <div class="mb-8"><h3 class="text-xl font-bold mb-4">Workout Tags</h3> <div class="flex flex-wrap gap-2"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let tag = each_array_1[$$index_1];
      $$payload.out += `<span class="badge badge-outline">${escape_html(tag)}</span>`;
    }
    $$payload.out += `<!--]--></div></div> <div class="text-center mt-12"><div class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl"><div class="card-body"><h3 class="text-2xl font-bold mb-4">Ready for More Workouts?</h3> <p class="text-lg opacity-90 mb-6">Discover more workout plans and training programs from our fitness
            experts.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/workouts" class="btn btn-secondary btn-lg">Browse More Workouts</a> <a href="/blog" class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">Read Fitness Tips</a></div></div></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto text-center"><div class="text-6xl mb-4">💪</div> <h1 class="text-4xl font-bold mb-4">Workout Not Found</h1> <p class="text-xl text-slate-600 mb-8">Sorry, we couldn't find the workout you're looking for.</p> <a href="/workouts" class="btn btn-primary btn-lg">Browse All Workouts</a></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};

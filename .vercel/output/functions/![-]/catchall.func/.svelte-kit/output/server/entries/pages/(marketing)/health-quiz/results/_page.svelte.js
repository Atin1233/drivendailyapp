import { Y as ensure_array_like, X as head, S as pop, Q as push, W as stringify } from "../../../../../chunks/index.js";
import { a as WebsiteName } from "../../../../../chunks/config.js";
import { a as attr } from "../../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let currentSection = 0;
  const sections = [
    {
      id: "workout",
      title: "Workout Plan",
      icon: "💪",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "nutrition",
      title: "Nutrition Guide",
      icon: "🥗",
      color: "from-green-500 to-teal-600"
    },
    {
      id: "recovery",
      title: "Recovery Strategy",
      icon: "🧘‍♀️",
      color: "from-orange-500 to-red-600"
    }
  ];
  const each_array = ensure_array_like(sections);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Your Personalized Health Plan - ${escape_html(WebsiteName)}</title>`;
    $$payload2.out += `<meta name="description" content="Your personalized diet, workout, and recovery plan based on your health quiz answers." class="svelte-1yo0m66">`;
  });
  $$payload.out += `<div class="gradient-bg text-white py-20 relative overflow-hidden svelte-1yo0m66"><div class="absolute inset-0 overflow-hidden svelte-1yo0m66"><div class="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating svelte-1yo0m66"></div> <div class="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full floating svelte-1yo0m66" style="animation-delay: -2s;"></div> <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full floating svelte-1yo0m66" style="animation-delay: -4s;"></div></div> <div class="container mx-auto px-6 relative z-10 svelte-1yo0m66"><div class="text-center max-w-4xl mx-auto svelte-1yo0m66"><div class="slide-in-left mb-6 svelte-1yo0m66"><h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight svelte-1yo0m66">Your Personalized Plan</h1></div> <div class="slide-in-right mb-8 svelte-1yo0m66"><p class="text-xl lg:text-2xl opacity-90 leading-relaxed svelte-1yo0m66">Based on your quiz answers, we've created a comprehensive health plan
          tailored specifically for your goals and lifestyle.</p></div> <div class="mb-8 svelte-1yo0m66"><div class="flex items-center justify-center gap-4 mb-4 svelte-1yo0m66"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let section = each_array[index];
    $$payload.out += `<div class="flex items-center gap-2 svelte-1yo0m66"><div${attr("class", `w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${stringify(index <= currentSection ? "bg-white text-primary" : "bg-white/20 text-white")} svelte-1yo0m66`)}>${escape_html(index + 1)}</div> <span${attr("class", `text-sm ${stringify(index <= currentSection ? "text-white font-medium" : "text-white/60")} svelte-1yo0m66`)}>${escape_html(section.title)}</span></div> `;
    if (index < sections.length - 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", `w-16 h-0.5 ${stringify(index < currentSection ? "bg-white" : "bg-white/20")} svelte-1yo0m66`)}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></div></div></div> <div class="py-12 lg:py-16 px-6 max-w-6xl mx-auto svelte-1yo0m66">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="text-center py-20 svelte-1yo0m66"><div class="loading loading-spinner loading-lg mb-4 svelte-1yo0m66"></div> <p class="text-lg text-slate-600 svelte-1yo0m66">Creating your personalized plan...</p></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};

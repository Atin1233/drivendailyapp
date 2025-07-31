import { T as store_get, V as unsubscribe_stores, S as pop, Q as push, W as stringify } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { a as WebsiteName } from "../../../chunks/config.js";
/* empty css                  */
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  let isMobileMenuOpen = false;
  let currentPage = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  $$payload.out += `<div${attr("class", `navbar navbar-glass fixed top-0 z-50 w-full ${stringify("")} ${stringify(currentPage === "/" ? "page-home" : "")} ${stringify(currentPage === "/blog" ? "page-blog" : "")} ${stringify(currentPage === "/recipes" ? "page-recipes" : "")} ${stringify(currentPage === "/workouts" ? "page-workouts" : "")} ${stringify(currentPage === "/recovery" ? "page-recovery" : "")} ${stringify(currentPage === "/testimonials" ? "page-testimonials" : "")} ${stringify(currentPage === "/pricing" ? "page-pricing" : "")} svelte-n74t6`)}><div class="container mx-auto flex justify-between items-center"><div class="flex-shrink-0"><a class="btn btn-ghost normal-case text-xl flex items-center gap-2 logo-hover svelte-n74t6" href="/"><img src="/images/driven-daily-logo.svg"${attr("alt", `${stringify(WebsiteName)} Logo`)} class="h-16 w-16"></a></div> <div class="hidden lg:flex justify-center flex-1"><ul class="menu menu-horizontal px-1 font-bold text-lg"><li class="mx-3"><a href="/blog" class="nav-link svelte-n74t6">Blog</a></li> <li class="mx-3"><a href="/recipes" class="nav-link svelte-n74t6">Recipes</a></li> <li class="mx-3"><a href="/workouts" class="nav-link svelte-n74t6">Workouts</a></li> <li class="mx-3"><a href="/recovery" class="nav-link svelte-n74t6">Recovery</a></li> <li class="mx-3"><a href="/testimonials" class="nav-link svelte-n74t6">Testimonials</a></li> <li class="mx-3"><a href="/bmi-calculator" class="nav-link svelte-n74t6">BMI Calculator</a></li> <li class="mx-3"><a href="/pricing" class="nav-link svelte-n74t6">Pricing</a></li></ul></div> <div class="flex items-center gap-4"><a href="/search" aria-label="Search" class="nav-link hidden sm:block svelte-n74t6"><svg fill="currentColor" class="w-6 h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z" fill="currentColor"></path></svg></a> <button class="btn btn-ghost btn-circle lg:hidden" aria-label="Toggle mobile menu"${attr("aria-expanded", isMobileMenuOpen)} aria-controls="mobile-sidebar"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg></button></div></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button class="fixed top-4 left-4 z-[200] bg-red-500 text-white px-2 py-1 text-xs rounded" style="display: none;">Test Popup</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div>`;
  children?.($$payload);
  $$payload.out += `<!----></div> <div class="grow"></div> <div class="footer-glass svelte-n74t6"><div class="border-t max-w-[1000px] mx-auto"></div> <footer class="footer p-6 place-content-center text-base"><div class="flex flex-col items-center gap-4"><div class="flex flex-col items-center gap-2"><img src="/images/driven-daily-logo.svg"${attr("alt", `${stringify(WebsiteName)} Logo`)} class="h-12 w-12 logo-hover svelte-n74t6"> <span class="text-sm text-slate-600">© 2024 ${escape_html(WebsiteName)}. All rights reserved.</span></div> <nav class="flex flex-wrap justify-center gap-6"><a class="link link-hover nav-link svelte-n74t6" href="/">Overview</a> <a class="link link-hover nav-link svelte-n74t6" href="/pricing">Pricing</a> <a class="link link-hover nav-link svelte-n74t6" href="/blog">Blog</a> <a class="link link-hover nav-link svelte-n74t6" href="/testimonials">Testimonials</a> <a class="link link-hover nav-link svelte-n74t6" href="/contact_us">Contact Us</a></nav></div></footer></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};

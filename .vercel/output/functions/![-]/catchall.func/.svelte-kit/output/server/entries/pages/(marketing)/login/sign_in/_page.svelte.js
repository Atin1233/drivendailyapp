import { _ as head, T as store_get, V as unsubscribe_stores, S as pop, Q as push, W as escape_html } from "../../../../../chunks/index.js";
import { A as Auth, o as oauthProviders, s as sharedAppearance } from "../../../../../chunks/login_config.js";
import "../../../../../chunks/client.js";
import { p as page } from "../../../../../chunks/stores.js";
import { a as WebsiteName } from "../../../../../chunks/config.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let { data } = $$props;
  let { supabase, url } = data;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Sign In - ${escape_html(WebsiteName)}</title>`;
    $$payload2.out += `<meta name="description" content="Sign in to your account to access your personalized fitness dashboard.">`;
  });
  $$payload.out += `<div class="py-8 lg:py-12 px-6 max-w-2xl mx-auto"><div class="text-center mb-8"><h1 class="text-3xl lg:text-4xl font-bold mb-4">Welcome Back</h1> <p class="text-slate-600">Sign in to continue your fitness journey</p></div> `;
  if (store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("verified") == "true") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div role="alert" class="alert alert-success mb-6"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Email verified! Please sign in.</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("error")) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div role="alert" class="alert alert-error mb-6"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Authentication error. Please try again.</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="card bg-white shadow-lg border border-primary/10"><div class="card-body">`;
  Auth($$payload, {
    supabaseClient: supabase,
    view: "sign_in",
    redirectTo: `${url}/auth/callback`,
    providers: oauthProviders,
    socialLayout: "horizontal",
    showLinks: false,
    appearance: sharedAppearance,
    additionalData: void 0
  });
  $$payload.out += `<!----></div></div> <div class="text-center mt-6 space-y-2"><div class="text-slate-600"><a class="link link-hover" href="/login/forgot_password">Forgot password?</a></div> <div class="text-slate-600">Don't have an account? <a class="link link-hover" href="/login/sign_up">Sign up</a>.</div></div> <div class="text-center mt-8"><a href="/login" class="btn btn-outline btn-sm">← Back to Account</a></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};

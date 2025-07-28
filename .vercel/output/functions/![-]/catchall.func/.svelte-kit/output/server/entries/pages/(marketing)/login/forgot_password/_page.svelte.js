import { _ as head, T as store_get, W as escape_html, V as unsubscribe_stores, S as pop, Q as push } from "../../../../../chunks/index.js";
import { A as Auth, s as sharedAppearance, o as oauthProviders } from "../../../../../chunks/login_config.js";
import { p as page } from "../../../../../chunks/stores.js";
import { a as WebsiteName } from "../../../../../chunks/config.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let { data } = $$props;
  let { supabase, url } = data;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Forgot Password - ${escape_html(WebsiteName)}</title>`;
    $$payload2.out += `<meta name="description" content="Reset your password to regain access to your account.">`;
  });
  $$payload.out += `<div class="py-8 lg:py-12 px-6 max-w-2xl mx-auto"><div class="text-center mb-8"><h1 class="text-3xl lg:text-4xl font-bold mb-4">Reset Your Password</h1> <p class="text-slate-600">Enter your email address and we'll send you a link to reset your password.</p></div> `;
  if (store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("message") === "Check your email for the password reset link") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div role="alert" class="alert alert-success mb-6"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Check your email for the password reset link</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("error")) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div role="alert" class="alert alert-error mb-6"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("error"))}</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="card bg-white shadow-lg border border-primary/10"><div class="card-body">`;
  Auth($$payload, {
    supabaseClient: supabase,
    view: "forgotten_password",
    redirectTo: `${url}/auth/callback?next=%2Faccount%2Fsettings%2Freset_password`,
    providers: oauthProviders,
    socialLayout: "horizontal",
    showLinks: false,
    appearance: sharedAppearance,
    additionalData: void 0
  });
  $$payload.out += `<!----></div></div> <div class="text-center mt-6"><div class="text-slate-600">Remember your password? <a class="link link-hover" href="/login/sign_in">Sign in</a>.</div></div> <div class="text-center mt-8"><a href="/login" class="btn btn-outline btn-sm">← Back to Account</a></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};

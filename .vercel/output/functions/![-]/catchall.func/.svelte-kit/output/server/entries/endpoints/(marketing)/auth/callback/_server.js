import { r as redirect } from "../../../../../chunks/index2.js";
import { isAuthApiError } from "@supabase/supabase-js";
const GET = async ({ url, locals: { supabase } }) => {
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  const errorDescription = url.searchParams.get("error_description");
  if (error) {
    console.error("OAuth error:", error, errorDescription);
    redirect(303, `/login/sign_in?error=${encodeURIComponent(errorDescription || error)}`);
  }
  if (code) {
    try {
      const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
      if (exchangeError) {
        console.error("Code exchange error:", exchangeError);
        redirect(303, `/login/sign_in?error=${encodeURIComponent(exchangeError.message)}`);
      }
      if (data.session) {
        const next = url.searchParams.get("next");
        if (next) {
          redirect(303, next);
        }
        redirect(303, "/account");
      }
    } catch (error2) {
      console.error("Auth callback error:", error2);
      if (isAuthApiError(error2)) {
        redirect(303, "/login/sign_in?verified=true");
      } else {
        redirect(303, `/login/sign_in?error=${encodeURIComponent("Authentication failed. Please try again.")}`);
      }
    }
  }
  redirect(303, "/login/sign_in");
};
export {
  GET
};

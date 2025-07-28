// src/routes/auth/callback/+server.js
import { redirect } from "@sveltejs/kit"
import { isAuthApiError } from "@supabase/supabase-js"

export const GET = async ({ url, locals: { supabase } }) => {
  const code = url.searchParams.get("code")
  const error = url.searchParams.get("error")
  const errorDescription = url.searchParams.get("error_description")

  // Handle OAuth errors
  if (error) {
    console.error("OAuth error:", error, errorDescription)
    redirect(303, `/login/sign_in?error=${encodeURIComponent(errorDescription || error)}`)
  }

  if (code) {
    try {
      const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
      
      if (exchangeError) {
        console.error("Code exchange error:", exchangeError)
        redirect(303, `/login/sign_in?error=${encodeURIComponent(exchangeError.message)}`)
      }

      if (data.session) {
        // Successfully authenticated
        const next = url.searchParams.get("next")
        if (next) {
          redirect(303, next)
        }
        redirect(303, "/account")
      }
    } catch (error) {
      console.error("Auth callback error:", error)
      // If you open in another browser, need to redirect to login.
      // Should not display error
      if (isAuthApiError(error)) {
        redirect(303, "/login/sign_in?verified=true")
      } else {
        redirect(303, `/login/sign_in?error=${encodeURIComponent("Authentication failed. Please try again.")}`)
      }
    }
  }

  // No code provided, redirect to login
  redirect(303, "/login/sign_in")
}

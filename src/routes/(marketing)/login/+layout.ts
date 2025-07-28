import {
  createBrowserClient,
  createServerClient,
  isBrowser,
} from "@supabase/ssr"
import { redirect } from "@sveltejs/kit"
import { load_helper } from "$lib/load_helpers.js"

// Get environment variables with fallbacks
const PUBLIC_SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL || "https://fake_test_url.supabase.co"
const PUBLIC_SUPABASE_ANON_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY || "fake_anon_key"

export const load = async ({ fetch, data, depends }) => {
  depends("supabase:auth")

  const supabase = isBrowser()
    ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
      })
    : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
        cookies: {
          getAll() {
            return data.cookies
          },
        },
      })

  // Check if user is already authenticated
  const { session, user } = await load_helper(data.session, supabase)
  
  // If user is already logged in, redirect to account
  if (session && user) {
    redirect(303, "/account")
  }

  const url = data.url

  return { supabase, url, session, user }
}

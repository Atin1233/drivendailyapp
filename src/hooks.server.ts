// src/hooks.server.ts
import { createServerClient } from "@supabase/ssr"
import { createClient } from "@supabase/supabase-js"
import type { Handle } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks"

// Get environment variables with fallbacks
const PUBLIC_SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL
const PUBLIC_SUPABASE_ANON_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY
const PRIVATE_SUPABASE_SERVICE_ROLE = process.env.PRIVATE_SUPABASE_SERVICE_ROLE

export const supabase: Handle = async ({ event, resolve }) => {
  // Check if Supabase credentials are available
  if (PUBLIC_SUPABASE_URL && PUBLIC_SUPABASE_ANON_KEY && PRIVATE_SUPABASE_SERVICE_ROLE) {
    event.locals.supabase = createServerClient(
      PUBLIC_SUPABASE_URL,
      PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll: () => event.cookies.getAll(),
          /**
           * SvelteKit's cookies API requires `path` to be explicitly set in
           * the cookie options. Setting `path` to `/` replicates previous/
           * standard behavior.
           */
          setAll: (cookiesToSet) => {
            cookiesToSet.forEach(({ name, value, options }) => {
              event.cookies.set(name, value, { ...options, path: "/" })
            })
          },
        },
      },
    )

    event.locals.supabaseServiceRole = createClient(
      PUBLIC_SUPABASE_URL,
      PRIVATE_SUPABASE_SERVICE_ROLE,
      { auth: { persistSession: false } },
    )
  } else {
    // Mock Supabase client when credentials are not available
    console.warn('Supabase credentials not found. Running in demo mode.')
    event.locals.supabase = {
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        getUser: async () => ({ data: { user: null }, error: null }),
        mfa: {
          getAuthenticatorAssuranceLevel: async () => ({ data: null, error: null })
        }
      }
    } as any
    event.locals.supabaseServiceRole = undefined as any
  }

  // https://github.com/supabase/auth-js/issues/888#issuecomment-2189298518
  if ("suppressGetSessionWarning" in event.locals.supabase.auth) {
    // @ts-expect-error - suppressGetSessionWarning is not part of the official API
    event.locals.supabase.auth.suppressGetSessionWarning = true
  } else {
    console.warn(
      "SupabaseAuthClient#suppressGetSessionWarning was removed. See https://github.com/supabase/auth-js/issues/888.",
    )
  }

  /**
   * Unlike `supabase.auth.getSession()`, which returns the session _without_
   * validating the JWT, this function also calls `getUser()` to validate the
   * JWT before returning the session.
   */
  event.locals.safeGetSession = async () => {
    // If Supabase is not available, return null session
    if (!event.locals.supabase) {
      return { session: null, user: null, amr: null }
    }

    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    if (!session) {
      return { session: null, user: null, amr: null }
    }

    const {
      data: { user },
      error: userError,
    } = await event.locals.supabase.auth.getUser()
    if (userError) {
      // JWT validation has failed
      return { session: null, user: null, amr: null }
    }

    const { data: aal, error: amrError } =
      await event.locals.supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    if (amrError) {
      return { session, user, amr: null }
    }

    return { session, user, amr: aal.currentAuthenticationMethods }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range" || name === "x-supabase-api-version"
    },
  })
}

// Not called for prerendered marketing pages so generally okay to call on ever server request
// Next-page CSR will mean relatively minimal calls to this hook
const authGuard: Handle = async ({ event, resolve }) => {
  const { session, user } = await event.locals.safeGetSession()
  event.locals.session = session
  event.locals.user = user

  return resolve(event)
}

export const handle: Handle = sequence(supabase, authGuard)

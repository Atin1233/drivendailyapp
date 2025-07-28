import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
function sequence(...handlers) {
  const length = handlers.length;
  if (!length) return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const PUBLIC_SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL;
const PUBLIC_SUPABASE_ANON_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY;
const PRIVATE_SUPABASE_SERVICE_ROLE = process.env.PRIVATE_SUPABASE_SERVICE_ROLE;
const supabase = async ({ event, resolve }) => {
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
              event.cookies.set(name, value, { ...options, path: "/" });
            });
          }
        }
      }
    );
    event.locals.supabaseServiceRole = createClient(
      PUBLIC_SUPABASE_URL,
      PRIVATE_SUPABASE_SERVICE_ROLE,
      { auth: { persistSession: false } }
    );
  } else {
    console.warn("Supabase credentials not found. Running in demo mode.");
    event.locals.supabase = {
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        getUser: async () => ({ data: { user: null }, error: null }),
        mfa: {
          getAuthenticatorAssuranceLevel: async () => ({ data: null, error: null })
        }
      }
    };
    event.locals.supabaseServiceRole = void 0;
  }
  if ("suppressGetSessionWarning" in event.locals.supabase.auth) {
    event.locals.supabase.auth.suppressGetSessionWarning = true;
  } else {
    console.warn(
      "SupabaseAuthClient#suppressGetSessionWarning was removed. See https://github.com/supabase/auth-js/issues/888."
    );
  }
  event.locals.safeGetSession = async () => {
    if (!event.locals.supabase) {
      return { session: null, user: null, amr: null };
    }
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession();
    if (!session) {
      return { session: null, user: null, amr: null };
    }
    const {
      data: { user },
      error: userError
    } = await event.locals.supabase.auth.getUser();
    if (userError) {
      return { session: null, user: null, amr: null };
    }
    const { data: aal, error: amrError } = await event.locals.supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    if (amrError) {
      return { session, user, amr: null };
    }
    return { session, user, amr: aal.currentAuthenticationMethods };
  };
  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range" || name === "x-supabase-api-version";
    }
  });
};
const authGuard = async ({ event, resolve }) => {
  const { session, user } = await event.locals.safeGetSession();
  event.locals.session = session;
  event.locals.user = user;
  return resolve(event);
};
const handle = sequence(supabase, authGuard);
export {
  handle,
  supabase
};

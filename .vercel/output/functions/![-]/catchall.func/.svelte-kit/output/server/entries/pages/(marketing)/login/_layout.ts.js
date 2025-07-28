import { isBrowser, createBrowserClient, createServerClient } from "@supabase/ssr";
import { r as redirect } from "../../../../chunks/index2.js";
import { l as load_helper } from "../../../../chunks/load_helpers.js";
const PUBLIC_SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL || "https://fake_test_url.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY || "fake_anon_key";
const load = async ({ fetch, data, depends }) => {
  depends("supabase:auth");
  const supabase = isBrowser() ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    global: {
      fetch
    }
  }) : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    global: {
      fetch
    },
    cookies: {
      getAll() {
        return data.cookies;
      }
    }
  });
  const { session, user } = await load_helper(data.session, supabase);
  if (session && user) {
    redirect(303, "/account");
  }
  const url = data.url;
  return { supabase, url, session, user };
};
export {
  load
};

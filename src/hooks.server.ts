import type { Handle } from '@sveltejs/kit';
import { supabase, supabaseAdmin } from '$lib/supabase';

export const handle: Handle = async ({ event, resolve }) => {
  // Use the configured Supabase clients (real or mock)
  event.locals.supabase = supabase;
  event.locals.supabaseServiceRole = supabaseAdmin;

  // Try to get user session if using real Supabase
  if (supabase.auth) {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      event.locals.user = session?.user ?? null;
    } catch (error) {
      console.error('Error getting session:', error);
      event.locals.user = null;
    }
  } else {
    // No session in mock mode
    event.locals.user = null;
  }
  
  return resolve(event);
}; 
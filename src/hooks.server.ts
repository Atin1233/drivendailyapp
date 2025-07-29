import type { Handle } from '@sveltejs/kit';

// Mock Supabase client for development
const mockSupabaseClient = {
  auth: {
    getSession: async () => ({ data: { session: null } }),
    // Add other auth methods you might need
    signInWithPassword: async () => ({ data: {}, error: { message: 'Mock: Auth disabled in dev mode' } }),
    signUp: async () => ({ data: {}, error: { message: 'Mock: Auth disabled in dev mode' } })
  },
  from: (table: string) => ({
    select: () => ({
      eq: () => ({ data: [], error: null }),
      order: () => ({ limit: () => ({ data: [], error: null }) }),
      data: [],
      error: null
    }),
    insert: () => ({ data: {}, error: null }),
    update: () => ({ eq: () => ({ data: {}, error: null }) }),
    delete: () => ({ eq: () => ({ data: {}, error: null }) })
  })
};

export const handle: Handle = async ({ event, resolve }) => {
  // Use mock clients instead of real ones
  event.locals.supabase = mockSupabaseClient as any;
  event.locals.supabaseServiceRole = mockSupabaseClient as any;

  // No session in dev mode
  event.locals.user = null;

  console.log('⚠️ DEVELOPMENT MODE: Using mock Supabase client');
  
  return resolve(event);
}; 
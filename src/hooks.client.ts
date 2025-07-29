import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = ({ error, event }) => {
  console.error('Client error:', error);
  return {
    message: 'An unexpected error occurred.',
    code: (error as any)?.code ?? 'UNKNOWN'
  };
};

// Mock Supabase client for development
const mockSupabaseClient = {
  auth: {
    getSession: async () => ({ data: { session: null } }),
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

console.log('⚠️ DEVELOPMENT MODE: Using mock Supabase client in hooks.client.ts');

// Export mock client
export const supabase = mockSupabaseClient as any; 
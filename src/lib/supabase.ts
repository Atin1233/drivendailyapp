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

console.log('⚠️ DEVELOPMENT MODE: Using mock Supabase client in supabase.ts');

// Export mock clients
export const supabase = mockSupabaseClient as any;
export const supabaseAdmin = mockSupabaseClient as any; 
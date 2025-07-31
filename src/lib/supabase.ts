import { createClient } from '@supabase/supabase-js'

// Mock Supabase client for development when no config is available
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
}

// Create client-side Supabase client
let supabase: any

// Check if environment variables are available
const hasPublicEnv = typeof process !== 'undefined' && process.env.PUBLIC_SUPABASE_URL && process.env.PUBLIC_SUPABASE_ANON_KEY

if (hasPublicEnv) {
  // Use real Supabase client
  supabase = createClient(process.env.PUBLIC_SUPABASE_URL!, process.env.PUBLIC_SUPABASE_ANON_KEY!)
  console.log('✅ Using real Supabase client')
} else {
  // Use mock client for development
  supabase = mockSupabaseClient
  console.log('⚠️ ENVIRONMENT VARIABLES NOT AVAILABLE: Using mock Supabase client')
}

export { supabase } 
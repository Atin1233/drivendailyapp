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

// Create server-side Supabase clients
let supabase: any
let supabaseAdmin: any

// Check if environment variables are available
const hasPublicEnv = typeof process !== 'undefined' && process.env.PUBLIC_SUPABASE_URL && process.env.PUBLIC_SUPABASE_ANON_KEY
const hasPrivateEnv = typeof process !== 'undefined' && process.env.PRIVATE_SUPABASE_SERVICE_ROLE

if (hasPublicEnv && hasPrivateEnv) {
  // Use real Supabase clients
  supabase = createClient(process.env.PUBLIC_SUPABASE_URL!, process.env.PUBLIC_SUPABASE_ANON_KEY!)
  supabaseAdmin = createClient(process.env.PUBLIC_SUPABASE_URL!, process.env.PRIVATE_SUPABASE_SERVICE_ROLE!)
  console.log('✅ Using real Supabase clients (server)')
} else {
  // Use mock clients for development
  supabase = mockSupabaseClient
  supabaseAdmin = mockSupabaseClient
  console.log('⚠️ ENVIRONMENT VARIABLES NOT AVAILABLE: Using mock Supabase clients (server)')
}

export { supabase, supabaseAdmin } 
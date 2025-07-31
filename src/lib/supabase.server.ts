import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { PRIVATE_SUPABASE_SERVICE_ROLE } from '$env/static/private'

// Check if we have the required environment variables
const hasSupabaseConfig = PUBLIC_SUPABASE_URL && PUBLIC_SUPABASE_ANON_KEY && PRIVATE_SUPABASE_SERVICE_ROLE

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

if (hasSupabaseConfig) {
  // Use real Supabase clients
  supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY)
  supabaseAdmin = createClient(PUBLIC_SUPABASE_URL, PRIVATE_SUPABASE_SERVICE_ROLE)
  console.log('✅ Using real Supabase clients (server)')
} else {
  // Use mock clients for development
  supabase = mockSupabaseClient
  supabaseAdmin = mockSupabaseClient
  console.log('⚠️ DEVELOPMENT MODE: Using mock Supabase clients (server)')
}

export { supabase, supabaseAdmin } 
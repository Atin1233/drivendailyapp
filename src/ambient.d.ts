declare global {
  type FormAccountUpdateResult = {
    errorMessage?: string
    errorFields?: string[]
    fullName?: string
    companyName?: string
    website?: string
    email?: string
  }

  namespace App {
    interface Locals {
      supabase: any
      supabaseServiceRole: any
      user: any | null
    }
  }
}

export {}

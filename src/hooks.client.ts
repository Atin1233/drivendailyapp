import type { HandleClientError } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export const handleError: HandleClientError = ({ error, event }) => {
  console.error('Client error:', error);
  return {
    message: 'An unexpected error occurred.',
    code: (error as any)?.code ?? 'UNKNOWN'
  };
};

// Export the configured Supabase client (real or mock)
export { supabase }; 
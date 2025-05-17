import { createClient } from '@supabase/supabase-js';

// Retrieve environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Basic validation to ensure environment variables are set
if (!supabaseUrl) {
  console.error('Error: VITE_SUPABASE_URL is not set in the environment variables.');
  // You might want to throw an error here or handle it more gracefully depending on your app's needs
}

if (!supabaseAnonKey) {
  console.error('Error: VITE_SUPABASE_ANON_KEY is not set in the environment variables.');
  // You might want to throw an error here or handle it more gracefully
}

// Initialize and export the Supabase client
// The client will be null if the environment variables are not set, preventing runtime errors on initialization.
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Optional: Log a message to confirm client initialization status
if (supabase) {
  console.log('Supabase client initialized successfully.');
} else {
  console.error('Supabase client initialization failed due to missing environment variables.');
} 
// app/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// ✅ Load environment variables safely
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// ✅ Handle missing env vars clearly (helps during build/deployment)
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
}

// ✅ Export a single Supabase client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://gidcbpqeqwgmuihpfmus.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_WSZ8DuIF9gyzxy-I79M85w_1KVwrmjK";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

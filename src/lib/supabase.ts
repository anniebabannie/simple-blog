import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env ? process.env.SUPABASE_URL : import.meta.env.SUPABASE_URL;
const supabaseAnonKey = process.env ? process.env.SUPABASE_ANON_KEY : import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient(
  supabaseUrl as string,
  supabaseAnonKey as string,
  {
    auth: {
      flowType: "pkce",
    },
  },
);
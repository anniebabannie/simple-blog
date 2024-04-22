import { createClient } from "@supabase/supabase-js";

console.log("process.env", process.env.SUPABASE_URL);

const supabaseUrl = process.env.SUPABASE_URL ? process.env.SUPABASE_URL : import.meta.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ? process.env.SUPABASE_ANON_KEY : import.meta.env.SUPABASE_ANON_KEY;
// const supabaseUrl = import.meta.env.SUPABASE_URL ? import.meta.env.SUPABASE_URL : process.env.SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY ? import.meta.env.SUPABASE_ANON_KEY : process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(
  supabaseUrl as string,
  supabaseAnonKey as string,
  {
    auth: {
      flowType: "pkce",
    },
  },
);
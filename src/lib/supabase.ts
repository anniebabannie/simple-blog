import { createClient } from "@supabase/supabase-js";
console.log("process.env.SUPABASE_URL", import.meta.env.SUPABASE_URL);

export const supabase = createClient(
  import.meta.env.SUPABASE_URL as string,
  import.meta.env.SUPABASE_ANON_KEY as string,
  {
    auth: {
      flowType: "pkce",
    },
  },
);
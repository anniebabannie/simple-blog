import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  console.log('saldkfjaskdfjas;ldjfasd;ljf')
  // add new Style to supabase styles table
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const body = formData.get("body")?.toString();

  const { data } = await supabase.from("posts").insert({
    title,
    body
  });

  console.log(data);

  return redirect("/");
};
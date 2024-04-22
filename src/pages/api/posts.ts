import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  // add new Style to supabase styles table
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const body = formData.get("body")?.toString();

  const { data, error } = await supabase.from("posts").insert({
    title,
    body
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }
  console.log(data);

  return redirect("/");
};
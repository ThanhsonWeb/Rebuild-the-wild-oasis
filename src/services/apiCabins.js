import { supabase } from "./supabase";

export async function getCabins() {
   // read all cabins table from supabase
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) throw new Error("Could not fetch cabins");

   return data
}

import { createClient } from "@supabase/supabase-js";


export const supabaseUrl = "https://cmzzfqlehqfrztjvsxrk.supabase.co";
const supabaseAnonKey = "sb_publishable_Kr-FxUtoLNnyN7pM23J2kA_Sr_10FOb";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

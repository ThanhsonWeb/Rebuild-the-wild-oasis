import { creatClient } from "@supabase/supabase-js";


const supabaseUrl = "https://cmzzfqlehqfrztjvsxrk.supabase.co";
const supabaseAnonKey = "sb_publishable_Kr-FxUtoLNnyN7pM23J2kA_Sr_10FOb";

export const supabase = creatClient(supabaseUrl, supabaseAnonKey);

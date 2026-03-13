import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://skpkcsfiuohgrfozxcky.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable__gqylowVfM5FiWSV4waFvA_UVSGkcNu";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

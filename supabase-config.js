// VOC Research World — browser-safe Supabase configuration.
// The publishable/anon key is intended for browser use. NEVER put a service_role key here.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const SUPABASE_URL = "https://wngsqgjkendxqmlgwvjy.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_IRnhnrNea_EWVaANzEQqiw_S-OnfTjB";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

import {createClient} from "@supabase/supabase-js";

 export const supabase = createClient(process.env.SUPA_URL as string, process.env.SUPA_KEY as string);

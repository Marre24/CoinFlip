import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseClient = createClient(
  "https://pftlovmoynjlzkvrfsyi.supabase.co/rest/v1/",
  "a8624bdb-ca92-4293-b210-74223ed22151",
);

export { supabaseClient };

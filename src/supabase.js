import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qvyqcitwjdmvcjiglhfi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2eXFjaXR3amRtdmNqaWdsaGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc2MTMyMTUsImV4cCI6MTk5MzE4OTIxNX0.A299Zo2QLbpwYu9ZBw_D69HjdXczZU5tF7ksFGFNhjs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

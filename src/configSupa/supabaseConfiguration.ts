import { createClient } from "@supabase/supabase-js";

const supaURL = "https://ksgrrmztxgmwrgxkgamb.supabase.co";
const supaHASH =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZ3JybXp0eGdtd3JneGtnYW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzODE1NjIsImV4cCI6MjAxNjk1NzU2Mn0.E_JcYJrxPkkOa-TxwVrcONapilgQ2oO7Z9RoJC7jqwg";

const supabase: any = createClient(supaURL, supaHASH);

export default supabase;

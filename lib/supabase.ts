import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zelkvgeqebrertdkdfmm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplbGt2Z2VxZWJyZXJ0ZGtkZm1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODgwMjgsImV4cCI6MjA5MDI2NDAyOH0.N9CxOL2Pp4gZe6IPnEiZqk8sA51R9PdZBc55UD0J9Xc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tolbffmujsvtyjoqiliq.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvbGJmZm11anN2dHlqb3FpbGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyODcwMjEsImV4cCI6MjA5OTg2MzAyMX0.LqKEWnV51NkSx2TKdrmUivj4oEo_xsLonMcvRUaPDi8"
export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
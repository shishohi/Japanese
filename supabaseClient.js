import { createClient } from "@supabase/supabase-js";

const supabaseUrl ='https://iwasyutbiohonmxaygaj.supabase.co' ;
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3YXN5dXRiaW9ob25teGF5Z2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMzQ2NjQsImV4cCI6MjA1ODYxMDY2NH0.fKo_kTCTnRQ7e23mgrFiJl-W-ZFA0tJd-v-BJdoWL9k';

export const supabase = createClient (supabaseUrl , supabaseAnonKey);

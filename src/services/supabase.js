
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://cexfmfxqlwvugtnmblwb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNleGZtZnhxbHd2dWd0bm1ibHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2ODgyNTksImV4cCI6MjA1MDI2NDI1OX0.5Kiw6306hP9z_dKorvZihvMZ5F1w58T10GGqR97Qlms'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
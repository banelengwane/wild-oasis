
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://ieqhgkftbgmwpaclhmwn.supabase.co'
// row level security will protect the use of this key when activated
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcWhna2Z0Ymdtd3BhY2xobXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0ODE5NTIsImV4cCI6MjA0NDA1Nzk1Mn0.Tu2InmUDmmmmJtM8wjl9xjPm6jsYl7iEusUTBxaWrqI'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
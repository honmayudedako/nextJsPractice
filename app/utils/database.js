import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://wbkwqlzmcdjfllccexpf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6India3dxbHptY2RqZmxsY2NleHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MDY0ODUsImV4cCI6MjA1ODQ4MjQ4NX0.xqq6sv4gml_GtjKFChD_-8JBULaAlzsr1b4Hw-1e0C0"
)

export default supabase
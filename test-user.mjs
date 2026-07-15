import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://pufeslojdgsjmnltntot.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1ZmVzbG9qZGdzam1ubHRudG90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMTQyODAsImV4cCI6MjA5OTY5MDI4MH0.MIr3np0aPxnGxGGPYMlBP-5g7g959eLsK1YRGMbT9s8'
)

async function createTestUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'test@dps.com',
    password: 'Password123!',
  })
  if (error) {
    console.error('Error creating user:', error)
  } else {
    console.log('Successfully created test user:', data.user?.email)
  }
}

createTestUser()

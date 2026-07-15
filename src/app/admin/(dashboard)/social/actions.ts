'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateFacebookUrl(formData: FormData) {
  const supabase = await createClient()
  
  const facebookUrl = formData.get('facebook_page_url') as string
  
  const { data: existing } = await supabase.from('school_profile').select('id').single()
  
  if (existing) {
    await supabase.from('school_profile').update({ facebook_page_url: facebookUrl }).eq('id', existing.id)
  } else {
    // Fallback if no profile exists yet
    await supabase.from('school_profile').insert({ 
      school_name: 'Dharampur Public School',
      location: '',
      facebook_page_url: facebookUrl 
    })
  }
  
  revalidatePath('/admin/social')
  revalidatePath('/')
}

'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateSchoolProfile(formData: FormData) {
  const supabase = await createClient()

  const profileData = {
    school_name: formData.get('school_name') as string,
    location: formData.get('location') as string,
    tagline: formData.get('tagline') as string,
    about: formData.get('about') as string,
    established_year: parseInt(formData.get('established_year') as string) || null,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    address: formData.get('address') as string,
    website_url: formData.get('website_url') as string,
    facebook_page_url: formData.get('facebook_page_url') as string,
  }

  // Check if profile exists
  const { data: existing } = await supabase.from('school_profile').select('id').single()

  if (existing) {
    await supabase.from('school_profile').update(profileData).eq('id', existing.id)
  } else {
    await supabase.from('school_profile').insert(profileData)
  }

  revalidatePath('/admin/school-profile')
  revalidatePath('/') // Revalidate homepage too
}

'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function togglePostVisibility(postId: string, currentVisibility: boolean) {
  const supabase = await createClient()
  
  await supabase
    .from('facebook_posts')
    .update({ is_visible: !currentVisibility })
    .eq('id', postId)
    
  revalidatePath('/admin/social')
  revalidatePath('/')
}

export async function deletePost(postId: string) {
  const supabase = await createClient()
  
  await supabase
    .from('facebook_posts')
    .delete()
    .eq('id', postId)
    
  revalidatePath('/admin/social')
  revalidatePath('/')
}

export async function syncFacebookPosts() {
  // This is a placeholder function for the actual API call
  // In a real scenario, this would call the Facebook Graph API or an Apify actor
  // and then insert the results into the database.
  
  const supabase = await createClient()
  
  // MOCK DATA for demonstration purposes until an API token is provided
  const mockPosts = [
    {
      fb_post_id: `mock_${Date.now()}_1`,
      content: "We had a wonderful sports day today! Congratulations to the Red House for winning the tournament! 🏆🏃‍♂️",
      image_url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
      post_url: "https://facebook.com",
    },
    {
      fb_post_id: `mock_${Date.now()}_2`,
      content: "Reminder: Parent-Teacher meetings are scheduled for this Friday from 4 PM to 7 PM. Please ensure you have booked your slots.",
      image_url: null,
      post_url: "https://facebook.com",
    },
    {
      fb_post_id: `mock_${Date.now()}_3`,
      content: "Our science exhibition was a huge success. So proud of our bright young minds! 🧬🔭",
      image_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
      post_url: "https://facebook.com",
    }
  ]
  
  for (const post of mockPosts) {
    // Upsert the posts (insert or update if it exists)
    await supabase.from('facebook_posts').upsert(post, { onConflict: 'fb_post_id' })
  }
  
  revalidatePath('/admin/social')
  revalidatePath('/')
}

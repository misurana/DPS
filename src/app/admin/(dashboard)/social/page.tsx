import { createClient } from '@/utils/supabase/server'
import { updateFacebookUrl } from './actions'
import { Facebook } from 'lucide-react'

export default async function SocialPage() {
  const supabase = await createClient()
  
  // Fetch existing profile to get the saved URL
  const { data: profile } = await supabase
    .from('school_profile')
    .select('facebook_page_url')
    .single()

  const fbUrl = profile?.facebook_page_url || ''

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
          <Facebook className="w-6 h-6 text-blue-600" />
          Facebook Page Plugin
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Connect your public Facebook Page to automatically display your latest timeline posts directly on the live website. This requires zero maintenance and stays updated instantly.
        </p>
        
        <form action={updateFacebookUrl} className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Public Facebook Page URL
            </label>
            <input 
              type="url" 
              name="facebook_page_url" 
              defaultValue={fbUrl} 
              placeholder="e.g., https://www.facebook.com/facebook"
              required 
              className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            Save URL
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Live Preview</h2>
        
        {!fbUrl ? (
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center bg-gray-50">
            <Facebook className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">Enter a valid Facebook Page URL above to see the live timeline preview.</p>
          </div>
        ) : (
          <div className="border rounded-lg p-4 bg-gray-50 flex justify-center">
            <iframe 
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(fbUrl)}&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`} 
              width="340" 
              height="500" 
              style={{ border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  )
}

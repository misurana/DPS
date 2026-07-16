import { createClient } from '@/utils/supabase/server'

export default async function GalleryPage() {
  const supabase = await createClient()
  const { data: profile } = await supabase.from('school_profile').select('*').single()

  const facebookUrl = profile?.facebook_page_url || 'https://www.facebook.com/profile.php?id=100091686457841'

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Gallery</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full text-center">
        <h2 className="text-3xl font-bold text-brand-navy mb-4 font-display">Campus Life & Events</h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-body text-lg mb-12">
          Explore the vibrant life at our school through our official Facebook gallery. We regularly post photos and videos from recent events, sports days, and cultural activities.
        </p>

        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-[800px] w-full">
            <iframe 
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookUrl)}&tabs=timeline,events,messages&width=800&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
              width="100%" 
              height="800" 
              style={{ border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

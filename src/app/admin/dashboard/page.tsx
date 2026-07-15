import { createClient } from '@/utils/supabase/server'

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  // Fetch some basic stats
  const { count: staffCount } = await supabase.from('staff_members').select('*', { count: 'exact', head: true })
  const { count: announcementsCount } = await supabase.from('announcements').select('*', { count: 'exact', head: true })
  const { count: galleryCount } = await supabase.from('gallery').select('*', { count: 'exact', head: true })
  const { count: inquiryCount } = await supabase.from('contact_inquiries').select('*', { count: 'exact', head: true }).eq('status', 'pending')

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium">Total Staff</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{staffCount || 0}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium">Announcements</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{announcementsCount || 0}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium">Gallery Items</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{galleryCount || 0}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-red-500">
          <h3 className="text-gray-500 text-sm font-medium">Pending Inquiries</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{inquiryCount || 0}</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Welcome to the DPS Admin Panel</h2>
        <p className="text-gray-600">
          Use the sidebar on the left to manage the school's website content. 
          Changes made here will reflect instantly on the live website.
        </p>
      </div>
    </div>
  )
}

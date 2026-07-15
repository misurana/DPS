import { createClient } from '@/utils/supabase/server'
import { updateSchoolProfile } from './actions'

export default async function SchoolProfilePage() {
  const supabase = await createClient()
  const { data: profile } = await supabase.from('school_profile').select('*').single()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">School Profile</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <form action={updateSchoolProfile} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">School Name</label>
              <input 
                type="text" 
                name="school_name" 
                defaultValue={profile?.school_name || ''} 
                required 
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input 
                type="text" 
                name="location" 
                defaultValue={profile?.location || ''} 
                required 
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" 
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Tagline</label>
              <input 
                type="text" 
                name="tagline" 
                defaultValue={profile?.tagline || ''} 
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" 
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">About (Description)</label>
              <textarea 
                name="about" 
                rows={5} 
                defaultValue={profile?.about || ''} 
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Established Year</label>
              <input 
                type="number" 
                name="established_year" 
                defaultValue={profile?.established_year || ''} 
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                name="email" 
                defaultValue={profile?.email || ''} 
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input 
                type="text" 
                name="phone" 
                defaultValue={profile?.phone || ''} 
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Website URL</label>
              <input 
                type="url" 
                name="website_url" 
                defaultValue={profile?.website_url || ''} 
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Facebook Page URL</label>
              <input 
                type="url" 
                name="facebook_page_url" 
                defaultValue={profile?.facebook_page_url || ''} 
                placeholder="https://facebook.com/yourpage"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" 
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Physical Address</label>
              <textarea 
                name="address" 
                rows={2} 
                defaultValue={profile?.address || ''} 
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" 
              />
            </div>
          </div>
          
          <div className="flex justify-end pt-4 border-t">
            <button 
              type="submit" 
              className="bg-[#1A3C5E] text-white px-4 py-2 rounded-md hover:bg-[#122b44] transition-colors"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

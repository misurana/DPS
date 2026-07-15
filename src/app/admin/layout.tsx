import Link from 'next/link'
import { logout } from './login/actions'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#1A3C5E] text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold">DPS Admin</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          <Link href="/admin/dashboard" className="block px-4 py-2 rounded hover:bg-[#122b44]">
            Dashboard
          </Link>
          <Link href="/admin/school-profile" className="block px-4 py-2 rounded hover:bg-[#122b44]">
            School Profile
          </Link>
          <Link href="/admin/staff" className="block px-4 py-2 rounded hover:bg-[#122b44]">
            Staff
          </Link>
          <Link href="/admin/announcements" className="block px-4 py-2 rounded hover:bg-[#122b44]">
            Announcements
          </Link>
          <Link href="/admin/birthdays" className="block px-4 py-2 rounded hover:bg-[#122b44]">
            Birthdays
          </Link>
          <Link href="/admin/gallery" className="block px-4 py-2 rounded hover:bg-[#122b44]">
            Gallery
          </Link>
          <Link href="/admin/subscribers" className="block px-4 py-2 rounded hover:bg-[#122b44]">
            Subscribers
          </Link>
          <Link href="/admin/inquiries" className="block px-4 py-2 rounded hover:bg-[#122b44]">
            Inquiries
          </Link>
        </nav>

        <div className="p-4 border-t border-[#122b44]">
          <div className="mb-4 px-4 text-sm truncate opacity-80">
            {user?.email}
          </div>
          <form action={logout}>
            <button className="w-full text-left px-4 py-2 text-sm text-red-300 hover:bg-[#122b44] rounded">
              Sign out
            </button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Content Management System</h2>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

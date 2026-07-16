import { createClient } from '@/utils/supabase/server'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default async function AboutPage() {
  const supabase = await createClient()
  const { data: profile } = await supabase.from('school_profile').select('*').single()

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">About Us</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6 font-display">Our History & Legacy</h2>
            <p className="text-gray-700 leading-relaxed mb-6 font-body text-lg">
              {profile?.about || "Divine Public School, Dharampur has been a beacon of educational excellence since its inception. We believe in providing an environment that nurtures the intellectual, physical, and emotional growth of every child."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-body">
              Our campus provides state-of-the-art facilities, highly qualified educators, and a curriculum designed to foster critical thinking and creativity.
            </p>
            <ul className="space-y-4 mb-8">
              {['Experienced and dedicated faculty', 'Focus on holistic development', 'Modern sports and arts facilities', 'Values-driven education'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-800 font-bold font-body">
                  <CheckCircle2 className="text-brand-gold mr-3" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-gold transform translate-x-4 -translate-y-4 rounded-2xl"></div>
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000" alt="About our school" className="relative z-10 rounded-2xl shadow-xl w-full h-[500px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

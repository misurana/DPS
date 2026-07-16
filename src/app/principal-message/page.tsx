import { createClient } from '@/utils/supabase/server'
import { Quote } from 'lucide-react'

export default async function PrincipalMessagePage() {
  const supabase = await createClient()
  const { data: profile } = await supabase.from('school_profile').select('*').single()

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Principal's Message</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-brand-gold font-medium font-body text-lg">Mr. H.P. Sharma</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow border border-gray-100 flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 shrink-0 text-center">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" alt="Principal Mr. H.P. Sharma" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-brand-navy font-display mb-1">Mr. H.P. Sharma</h2>
            <p className="text-[#C9A84C] font-semibold text-sm mb-3">Principal, Divine Public School</p>
            <div className="text-sm text-gray-500 font-medium">
              <p>M.A., B.Ed.</p>
              <p>Experienced Educator</p>
              <p>Dharampur, HP</p>
            </div>
          </div>
          <div className="md:w-2/3 prose prose-lg prose-emerald font-body text-gray-700">
            <Quote size={48} className="text-[#C9A84C] opacity-20 -ml-4 mb-4" />
            
            <p>
              It fills my heart with deep joy and gratitude to welcome you to Divine Public School, Dharampur — a place that I lovingly think of not just as a school, but as a second home for every child who steps through our doors. As your Principal, my purpose is simple: to ensure that each child is known by name, celebrated for their uniqueness, and given every opportunity to grow into their best self.
            </p>
            <p>
              Our school stands in the heart of Dharampur, Tehsil- Kasauli — a town full of warmth, community spirit and the natural beauty of the Kasauli hills. This is our home, and our school reflects the values of this land: hard work, humility, resilience and a genuine care for one another. We do not chase grand titles or distant benchmarks. We focus on what matters most — the child sitting in front of us, here and now.
            </p>
            <p>
              Education, in my view, is not about filling young minds with facts. It is about kindling a fire — a hunger to learn, to question, to try and to never give up. At Divine Public School, Dharampur, we cultivate this fire through attentive teaching, a caring classroom culture, and activities that stretch the body, the imagination and the spirit. Whether it is a child discovering the joy of reading for the first time, or a student cracking a tricky mathematics problem on their own — these are the victories we celebrate every day.
            </p>
            <p>
              Our dedicated team of teachers brings passion and commitment to the classroom every morning. They understand that behind every student is a family that has placed its deepest trust in us. We honour that trust with sincerity. We stay accessible, we communicate openly, and we partner with parents — because we know that the best outcomes for children happen when school and home walk together.
            </p>
            <p>
              I invite you to be a part of the Divine Public School family. Visit us, speak to us, and see for yourself the warmth and purpose that make this school a truly special place. Our doors — and our hearts — are always open.
            </p>
            
            <div className="mt-8 p-6 bg-brand-navy rounded-2xl text-center">
              <p className="text-[#C9A84C] font-display text-xl md:text-2xl italic font-bold mb-0">
                "The goal of education is not to fill a bucket but to light a fire. At Divine Public School, Dharampur, we light that fire every single day."
              </p>
            </div>
            
            <div className="mt-8">
              <p className="font-bold text-brand-navy text-lg mb-0">Mr. H.P. Sharma</p>
              <p className="text-gray-500 font-medium">Principal, Divine Public School, Dharampur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

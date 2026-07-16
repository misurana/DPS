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
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="prose max-w-none font-body text-gray-700 space-y-6">
            <h3 className="text-3xl font-bold text-brand-navy mb-4 font-display">A School Built on Trust & Care</h3>
            <p>
              Divine Public School, Dharampur is a cherished institution nestled on Subathu Road, Dharampur, in Tehsil Kasauli, District Solan, Himachal Pradesh. We are proudly affiliated to the Himachal Board (Affiliation No. 27531, School Code 4210), offering quality education from Nursery to Class XII under the guidance of Principal Mr. H.P. Sharma.
            </p>
            <p>
              Established with a heartfelt mission to bring quality education to every child in our community, Divine Public School, Dharampur has grown into a place of genuine learning, warmth and values. Our classrooms are alive with curiosity. Our teachers are dedicated mentors. And our school community — students, parents and staff — is one big family.
            </p>
            <p>
              In the beautiful and peaceful surroundings of Dharampur, where the pine-clad hills of Kasauli watch over the campus, our children grow with confidence, capability and a deep sense of who they are — ready to take on the world with the values instilled here.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 font-medium text-gray-800">
              <li>HP Board Affiliated – Affil. No. 27531 | School Code: 4210</li>
              <li>Nursery to Class XII</li>
              <li>Experienced & Caring Faculty</li>
              <li>Well-Equipped Classrooms & Labs</li>
              <li>Transport Facility Available</li>
              <li>Holistic Development – Academics, Sports & Arts</li>
            </ul>
            
            <div className="mt-8">
               <Link href="/contact" className="btn-gold font-semibold rounded-full px-8 py-3 inline-block">
                 Apply Now
               </Link>
            </div>
            
            <h3 className="text-3xl font-bold text-brand-navy mt-12 mb-4 font-display">What Makes Divine Public School Special</h3>
            <p className="italic text-gray-600 mb-6">We are a school that truly knows and cares for every child</p>
            
            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div>
                <h4 className="text-lg font-bold text-[#C9A84C] mb-2">A School That Cares</h4>
                <p className="text-sm">Every child at Divine Public School, Dharampur is known by name and cared for as an individual. Our teachers build real relationships with students and their families, creating a safe and nurturing environment where children thrive.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#C9A84C] mb-2">Quality Education</h4>
                <p className="text-sm">Our HP Board curriculum is delivered by dedicated, qualified teachers who make learning engaging and meaningful. We focus on building strong foundations in every subject while encouraging creative thinking.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#C9A84C] mb-2">Holistic Growth</h4>
                <p className="text-sm">We believe a child's education is complete only when mind, body and character grow together. Our school activities — sports, cultural events, community service — shape well-rounded individuals.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#C9A84C] mb-2">Community Roots</h4>
                <p className="text-sm">We are a school born from and for the community of Dharampur. Our values, our culture and our sense of identity are deeply rooted in this beautiful town and its people.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#C9A84C] mb-2">Safe & Disciplined</h4>
                <p className="text-sm">We maintain a safe, orderly and respectful school environment where every child feels secure. Discipline here means responsibility, not fear — and children learn to lead themselves with integrity.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#C9A84C] mb-2">Transport Facility</h4>
                <p className="text-sm">We offer safe and reliable transport options for students from surrounding areas, ensuring that distance is never a barrier to quality education. Our priority is always the safety of your child.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-4 font-display">Our Commitment to You</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4 font-medium text-gray-800">
              <li>Every child receives individual attention and care</li>
              <li>Open communication with parents at all times</li>
              <li>Qualified and trained teaching staff</li>
              <li>Regular co-curricular and cultural activities</li>
              <li>Safe, clean and welcoming campus environment</li>
              <li>Affordable, quality education for all families</li>
            </ul>
          </div>
          
          <div className="relative sticky top-32">
            <div className="absolute inset-0 bg-brand-gold transform translate-x-4 -translate-y-4 rounded-2xl"></div>
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000" alt="About our school" className="relative z-10 rounded-2xl shadow-xl w-full h-[600px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

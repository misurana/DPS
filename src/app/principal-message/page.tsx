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
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="sticky top-32">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Principal" className="w-full rounded-2xl shadow-xl border-4 border-brand-gold/20" />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-brand-navy font-display">Mr. H.P. Sharma</h3>
              <p className="text-brand-gold font-bold">Principal, Divine Public School, Dharampur</p>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl card-shadow border border-gray-100 relative">
            <Quote className="absolute top-8 right-8 text-brand-gold/10" size={120} />
            <div className="relative z-10 text-gray-700 font-body text-lg leading-relaxed space-y-6">
              <p>
                At Divine Public School, Dharampur, we believe every child carries a unique gift waiting to be discovered. Our aim is not merely to educate but to inspire — to light the lamp of curiosity, compassion and confidence in every young heart that walks through our gates.
              </p>
              <p>
                Nestled in the beautiful town of Dharampur, our school provides a warm, safe and stimulating environment where children from our community grow into confident, capable and caring individuals. We are deeply committed to the families who trust us with their most precious ones.
              </p>
              <p className="text-xl text-brand-navy font-display italic font-bold border-l-4 border-brand-gold pl-6 py-2 my-8">
                "A child's education begins the moment they feel safe, seen and celebrated. We create that space every single day."
              </p>
              <p>
                As we navigate the complexities of the 21st century, we ensure our students are equipped with modern technological skills while remaining deeply rooted in traditional values and ethics. We invite you to be a part of our thriving educational community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

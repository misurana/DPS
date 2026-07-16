import { Palette, Music, Puzzle, Heart } from 'lucide-react'

export default function KindergartenPage() {
  const activities = [
    { title: "Creative Arts", desc: "Painting, craft, and drawing to boost imagination.", icon: Palette },
    { title: "Music & Rhymes", desc: "Singing and dancing to develop rhythm and coordination.", icon: Music },
    { title: "Play & Learn", desc: "Educational games and puzzles for cognitive growth.", icon: Puzzle },
    { title: "Care & Nurture", desc: "A safe, loving environment where every child feels at home.", icon: Heart }
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Little Wonders Kindergarten</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-gold transform -translate-x-4 translate-y-4 rounded-3xl"></div>
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000" alt="Kindergarten kids" className="relative z-10 rounded-3xl shadow-xl w-full h-[500px] object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-navy mb-6">A Joyful Start to Learning</h2>
            <div className="prose font-body text-gray-700 space-y-4">
              <p>
                Little Wonders Kindergarten at Divine Public School, Dharampur provides a joyful, nurturing environment for Nursery, LKG & UKG children in Tehsil Kasauli, District Solan, HP.
              </p>
              <p>
                Our early childhood education program is designed to make learning a delightful experience. We believe that the early years are crucial for laying the foundation of a child's academic and social development.
              </p>
              <p>
                With colorful classrooms, caring educators, and a play-way methodology, we ensure that your child looks forward to coming to school every day. We focus on developing fine motor skills, language, basic numeracy, and social interaction through engaging activities.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-brand-navy mb-4">Our Kindergarten Activities</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy font-display mb-3">{item.title}</h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

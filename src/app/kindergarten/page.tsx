import { Palette, Music, Puzzle, Heart } from 'lucide-react'

export default function KindergartenPage() {
  const activities = [
    { title: "Creative Arts", desc: "Painting, craft, and drawing to boost imagination.", icon: Palette },
    { title: "Music & Movement", desc: "Rhymes, dancing, and rhythmic activities.", icon: Music },
    { title: "Cognitive Play", desc: "Puzzles and blocks to develop problem-solving skills.", icon: Puzzle },
    { title: "Social Emotional Learning", desc: "Sharing, caring, and developing early emotional intelligence.", icon: Heart },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2073')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Kindergarten</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6 font-display">Little Wonders Early Learning</h2>
            <p className="text-gray-700 leading-relaxed mb-6 font-body text-lg">
              Our Kindergarten program is designed to provide a safe, nurturing, and highly stimulating environment for young learners. We believe that early childhood education is the foundation for a lifetime of learning.
            </p>
            <p className="text-gray-700 leading-relaxed font-body">
              Through play-based learning and guided exploration, we help children develop their cognitive, motor, and social skills in a joyful setting.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-gold transform translate-x-4 -translate-y-4 rounded-2xl"></div>
            <img src="https://images.unsplash.com/photo-1545642412-25983f85822e?q=80&w=1000" alt="Kindergarten children playing" className="relative z-10 rounded-2xl shadow-xl w-full h-[400px] object-cover" />
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4 font-display">Our Learning Approach</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 card-shadow border border-gray-100 text-center">
              <div className="w-16 h-16 bg-brand-offwhite rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{item.title}</h3>
              <p className="text-gray-600 font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

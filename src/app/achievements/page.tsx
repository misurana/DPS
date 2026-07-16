import { Trophy, Medal, Star, Award } from 'lucide-react'

export default function AchievementsPage() {
  const achievements = [
    { title: "Outstanding Board Results", desc: "Our students achieved exceptional marks in the HP Board examinations, securing top positions in the district.", icon: Trophy },
    { title: "Sports Excellence", desc: "Multiple gold and silver medals won by our athletes at the district and state level sports meets.", icon: Medal },
    { title: "Cultural Accolades", desc: "First prize in the inter-school cultural fest for group dance and drama performances.", icon: Star },
    { title: "Best School Award", desc: "Recognized as a leading educational institution for holistic development by local educational authorities.", icon: Award }
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Achievements</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gray-600 font-body text-lg">
            Discover the academic, sports and cultural achievements of students at Divine Public School, Dharampur. We celebrate the success of our students and teachers who strive for excellence in every field.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm text-center border-b-4 border-brand-navy hover:shadow-md transition-shadow group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-navy/5 text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                <item.icon size={28} />
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

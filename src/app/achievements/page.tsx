import { Trophy, Medal, Star, Award } from 'lucide-react'

export default function AchievementsPage() {
  const achievements = [
    { title: "Outstanding Board Results 2024", desc: "Our students achieved exceptional marks in the HP Board examinations, with several securing top positions in the district.", icon: Trophy },
    { title: "State-Level Sports Championship", desc: "Gold medalists in under-19 basketball and athletics at the state level.", icon: Medal },
    { title: "National Science Olympiad", desc: "Multiple students qualified for the final rounds of the National Science Olympiad.", icon: Star },
    { title: "Best School Award", desc: "Recognized as the best emerging school in the Solan district by regional educational authorities.", icon: Award },
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-navy mb-4 font-display">Celebrating Excellence</h2>
          <p className="text-gray-600 font-body text-lg">We take immense pride in the academic, athletic, and cultural achievements of our students.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 card-shadow border-l-4 border-brand-gold flex items-start space-x-6 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-brand-offwhite rounded-full flex items-center justify-center shrink-0 text-brand-gold border border-gray-100">
                <item.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{item.title}</h3>
                <p className="text-gray-600 font-body leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

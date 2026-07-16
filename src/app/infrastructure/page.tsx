import { Server, Monitor, BookOpen, Music, Microscope } from 'lucide-react'

export default function InfrastructurePage() {
  const facilities = [
    { name: 'Smart Classrooms', icon: Monitor, desc: 'Interactive boards and digital learning tools.' },
    { name: 'Science Labs', icon: Microscope, desc: 'Fully equipped Physics, Chemistry, and Biology laboratories.' },
    { name: 'Library', icon: BookOpen, desc: 'Extensive collection of books, journals, and digital resources.' },
    { name: 'Computer Lab', icon: Server, desc: 'Modern computer systems with high-speed internet.' },
    { name: 'Music & Arts', icon: Music, desc: 'Dedicated spaces for creative expression and performing arts.' },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Infrastructure</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-navy mb-4 font-display">State of the Art Facilities</h2>
          <p className="text-gray-600 font-body text-lg">We provide a conducive learning environment equipped with the latest amenities to ensure comprehensive development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 card-shadow border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-offwhite rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold group-hover:bg-brand-navy group-hover:text-white transition-colors">
                <fac.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{fac.name}</h3>
              <p className="text-gray-600 font-body">{fac.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

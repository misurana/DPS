import { Building2, Monitor, BookOpen, Bus } from 'lucide-react'

export default function InfrastructurePage() {
  const facilities = [
    { title: "Smart Classrooms", desc: "Well-ventilated, spacious classrooms equipped with modern smart boards for interactive learning.", icon: Building2 },
    { title: "Computer Labs", desc: "State-of-the-art computer labs with the latest hardware and high-speed internet access.", icon: Monitor },
    { title: "Library", desc: "A well-stocked library with a vast collection of academic books, literature, and reference materials.", icon: BookOpen },
    { title: "School Transport", desc: "Safe and reliable transport fleet covering all major routes in and around Dharampur.", icon: Bus }
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Infrastructure</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gray-600 font-body text-lg">
            Explore the modern infrastructure at Divine Public School, Dharampur — smart classrooms, science and computer labs, library, playgrounds and safe transport in Tehsil Kasauli, District Solan, HP.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {facilities.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-navy text-white mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy font-display mb-3">{item.title}</h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl overflow-hidden aspect-video shadow-lg">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000" alt="School building" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-3xl overflow-hidden aspect-video shadow-lg">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000" alt="Students learning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </div>
  )
}

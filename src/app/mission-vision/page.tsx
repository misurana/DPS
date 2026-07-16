import { Target, Lightbulb, Compass, Heart } from 'lucide-react'

export default function MissionVisionPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Mission & Vision</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-10 rounded-3xl card-shadow border-t-4 border-brand-navy">
            <div className="w-16 h-16 bg-brand-navy/10 rounded-full flex items-center justify-center text-brand-navy mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6 font-display">Our Mission</h2>
            <p className="text-gray-700 font-body text-lg leading-relaxed">
              At Divine Public School, Dharampur, our mission is to provide an inclusive, stimulating, and supportive learning environment that empowers students to discover their passions. We strive to nurture critical thinkers, compassionate leaders, and lifelong learners equipped to thrive in a rapidly changing world.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-brand-navy p-10 rounded-3xl shadow-xl border-t-4 border-brand-gold">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-brand-gold mb-8">
              <Lightbulb size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 font-display">Our Vision</h2>
            <p className="text-gray-300 font-body text-lg leading-relaxed">
              To be a premier institution of academic excellence that shapes young minds into global citizens. We envision a future where every student leaves our gates with strong moral character, intellectual curiosity, and the resilience to positively impact society.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-brand-navy mb-12 font-display">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-offwhite rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold shadow-sm border border-gray-100">
                <Compass size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Integrity</h3>
              <p className="text-gray-600 font-body">Upholding honesty and strong moral principles in all actions.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-offwhite rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold shadow-sm border border-gray-100">
                <Heart size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Compassion</h3>
              <p className="text-gray-600 font-body">Fostering empathy and kindness towards others and the environment.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-offwhite rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold shadow-sm border border-gray-100">
                <Target size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Excellence</h3>
              <p className="text-gray-600 font-body">Striving for the highest quality in academics, arts, and sports.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-offwhite rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold shadow-sm border border-gray-100">
                <Lightbulb size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Innovation</h3>
              <p className="text-gray-600 font-body">Encouraging creative thinking and embracing modern methodologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

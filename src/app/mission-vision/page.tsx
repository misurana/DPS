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
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 md:p-10 rounded-3xl card-shadow border border-gray-100 flex flex-col h-full">
            <div className="flex items-center space-x-4 mb-6 border-b border-gray-100 pb-6">
              <div className="bg-[#C9A84C]/20 p-4 rounded-2xl">
                <Target size={32} className="text-[#C9A84C]" />
              </div>
              <h2 className="text-3xl font-display font-bold text-brand-navy">Our Mission</h2>
            </div>
            <p className="text-gray-700 font-body mb-6 font-medium">
              Our mission at Divine Public School, Dharampur is to provide every child in our community with a warm, encouraging and academically excellent education — one that prepares them not just for examinations, but for life itself.
            </p>
            <ul className="space-y-3 font-body text-gray-600 mt-auto">
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Deliver quality HP Board education with dedicated, trained and caring teachers</li>
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Foster curiosity, confidence and a genuine love for learning in every student</li>
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Build strong values — honesty, respect, responsibility and compassion</li>
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Create an inclusive environment where every child feels valued and supported</li>
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Partner with families, because we know great outcomes happen when school and home work together</li>
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Celebrate each child's unique strengths and help them discover who they truly are</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl card-shadow border border-gray-100 flex flex-col h-full">
            <div className="flex items-center space-x-4 mb-6 border-b border-gray-100 pb-6">
              <div className="bg-[#C9A84C]/20 p-4 rounded-2xl">
                <Lightbulb size={32} className="text-[#C9A84C]" />
              </div>
              <h2 className="text-3xl font-display font-bold text-brand-navy">Our Vision</h2>
            </div>
            <p className="text-gray-700 font-body mb-6 font-medium">
              We envision Divine Public School, Dharampur as the most trusted and beloved school in the region — a school where every child blossoms into a confident, capable and compassionate human being ready to contribute meaningfully to society.
            </p>
            <ul className="space-y-3 font-body text-gray-600 mt-auto">
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Be the first choice for quality education for families across Dharampur and surrounding areas</li>
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Achieve excellent HP Board results for our students year after year</li>
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Develop well-rounded individuals who excel in academics, sports and the arts</li>
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Create a school culture where children feel safe, seen and celebrated</li>
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Grow into a strong community anchor that serves the families of this region</li>
              <li className="flex items-start"><span className="text-[#C9A84C] mr-2 font-bold">•</span> Build alumni who give back to their school, their town and their nation</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-brand-navy mb-4">Core Values</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 font-body max-w-2xl mx-auto">
            These values guide everything we do at Divine Public School, Dharampur, every single day
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-t-4 border-brand-navy">
            <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">Excellence</h3>
            <p className="text-gray-600 text-sm font-body">Strive to do our best in all we do</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-t-4 border-brand-navy">
            <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">Integrity</h3>
            <p className="text-gray-600 text-sm font-body">Always honest and trustworthy</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-t-4 border-brand-navy">
            <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">Compassion</h3>
            <p className="text-gray-600 text-sm font-body">Care for every person we meet</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-t-4 border-brand-navy">
            <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">Curiosity</h3>
            <p className="text-gray-600 text-sm font-body">Love of learning and discovery</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-t-4 border-brand-navy">
            <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">Responsibility</h3>
            <p className="text-gray-600 text-sm font-body">Accountable citizens of tomorrow</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-t-4 border-brand-navy">
            <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">Leadership</h3>
            <p className="text-gray-600 text-sm font-body">Lead with courage and humility</p>
          </div>
        </div>
      </div>
    </div>
  )
}

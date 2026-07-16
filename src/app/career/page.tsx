import { Mail, Briefcase } from 'lucide-react'

export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Career</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full max-w-4xl">
        <div className="bg-white p-10 rounded-3xl card-shadow border border-gray-100 text-center">
          <div className="w-20 h-20 bg-brand-offwhite rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
            <Briefcase size={40} />
          </div>
          <h2 className="text-3xl font-bold text-brand-navy mb-6 font-display">Join Our Team</h2>
          <p className="text-gray-700 font-body text-lg leading-relaxed mb-8">
            At Divine Public School, we are always looking for passionate, dedicated, and innovative educators and staff members to join our community. If you are committed to shaping the future of young minds, we would love to hear from you.
          </p>
          
          <div className="bg-brand-offwhite p-8 rounded-2xl inline-block text-left w-full max-w-2xl">
            <h3 className="text-xl font-bold text-brand-navy mb-4 font-display">Current Openings</h3>
            <p className="text-gray-600 font-body mb-6">
              There are currently no active openings. However, we accept spontaneous applications year-round.
            </p>
            
            <div className="flex items-center space-x-4 border-t border-gray-200 pt-6">
              <Mail className="text-brand-gold shrink-0" size={32} />
              <div>
                <p className="text-gray-900 font-bold font-body">Send your resume to:</p>
                <a href="mailto:divine_public@yahoo.com" className="text-brand-navy hover:text-brand-gold transition-colors font-body">divine_public@yahoo.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

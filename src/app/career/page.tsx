import { Mail, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Career Opportunities</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-navy font-display mb-6">Shape the Future with Us</h2>
          <p className="text-gray-600 font-body text-lg leading-relaxed mb-6">
            At Divine Public School, Dharampur, we believe that great teachers create great futures. We are always looking for passionate, dedicated educators who bring enthusiasm, expertise, and empathy to the classroom.
          </p>
          <p className="text-gray-600 font-body text-lg leading-relaxed">
            If you share our commitment to academic excellence and holistic child development, we invite you to be part of our growing family in the beautiful hills of Himachal Pradesh.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-xl font-bold text-brand-navy font-display mb-3">Professional Growth</h3>
            <p className="text-gray-600 font-body text-sm leading-relaxed">Regular training workshops, HP Board seminars, online certification support, and a structured career progression pathway.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-xl font-bold text-brand-navy font-display mb-3">Attractive Benefits</h3>
            <p className="text-gray-600 font-body text-sm leading-relaxed">Competitive salary, ESI/PF, medical cover, transport facility, performance bonuses, and housing allowance for outstation candidates.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-xl font-bold text-brand-navy font-display mb-3">Beautiful Campus</h3>
            <p className="text-gray-600 font-body text-sm leading-relaxed">Work in a serene, green campus set in the Himalayas — a truly inspiring environment that nurtures both teacher and student alike.</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-navy font-display mb-8 text-center">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-brand-gold">
              <h3 className="text-xl font-bold text-brand-navy font-display mb-2">Science Teacher</h3>
              <p className="text-gray-600 font-body mb-4 text-sm">Physics / Chemistry / Biology for Classes IX–XII. HP Board curriculum expertise required.</p>
              <ul className="text-sm font-medium text-gray-700 space-y-1 mb-6">
                <li>• B.Sc. B.Ed.</li>
                <li>• 2+ Yrs Exp.</li>
                <li>• As per norms</li>
              </ul>
              <Link href="/contact" className="text-brand-gold font-bold hover:underline">Apply for This Post →</Link>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-brand-gold">
              <h3 className="text-xl font-bold text-brand-navy font-display mb-2">Mathematics Teacher</h3>
              <p className="text-gray-600 font-body mb-4 text-sm">Senior Secondary Mathematics (Classes X–XII). Strong conceptual and problem-solving approach required.</p>
              <ul className="text-sm font-medium text-gray-700 space-y-1 mb-6">
                <li>• B.Sc. B.Ed.</li>
                <li>• 3+ Yrs Exp.</li>
                <li>• As per norms</li>
              </ul>
              <Link href="/contact" className="text-brand-gold font-bold hover:underline">Apply for This Post →</Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-brand-gold">
              <h3 className="text-xl font-bold text-brand-navy font-display mb-2">English Teacher</h3>
              <p className="text-gray-600 font-body mb-4 text-sm">English Language & Literature for Middle and Senior classes. Excellent communication and writing skills essential.</p>
              <ul className="text-sm font-medium text-gray-700 space-y-1 mb-6">
                <li>• B.A. B.Ed.</li>
                <li>• 2+ Yrs Exp.</li>
                <li>• As per norms</li>
              </ul>
              <Link href="/contact" className="text-brand-gold font-bold hover:underline">Apply for This Post →</Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-brand-gold">
              <h3 className="text-xl font-bold text-brand-navy font-display mb-2">KG / Pre-Primary Teacher</h3>
              <p className="text-gray-600 font-body mb-4 text-sm">Nursery, LKG & UKG. Warm, creative and patient teachers with Montessori/early childhood education background preferred.</p>
              <ul className="text-sm font-medium text-gray-700 space-y-1 mb-6">
                <li>• NTT / D.Ed.</li>
                <li>• 1+ Yr Exp.</li>
                <li>• As per norms</li>
              </ul>
              <Link href="/contact" className="text-brand-gold font-bold hover:underline">Apply for This Post →</Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-brand-gold">
              <h3 className="text-xl font-bold text-brand-navy font-display mb-2">Computer Science Teacher</h3>
              <p className="text-gray-600 font-body mb-4 text-sm">IT / CS for Classes VI–XII including Python, C++, networking and MS Office. Strong technical and teaching background needed.</p>
              <ul className="text-sm font-medium text-gray-700 space-y-1 mb-6">
                <li>• BCA/MCA B.Ed.</li>
                <li>• 2+ Yrs Exp.</li>
                <li>• As per norms</li>
              </ul>
              <Link href="/contact" className="text-brand-gold font-bold hover:underline">Apply for This Post →</Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-brand-gold">
              <h3 className="text-xl font-bold text-brand-navy font-display mb-2">Physical Education Teacher</h3>
              <p className="text-gray-600 font-body mb-4 text-sm">Sports coach for cricket, football, athletics and yoga. State/national level sports background highly preferred.</p>
              <ul className="text-sm font-medium text-gray-700 space-y-1 mb-6">
                <li>• B.P.Ed.</li>
                <li>• 2+ Yrs Exp.</li>
                <li>• As per norms</li>
              </ul>
              <Link href="/contact" className="text-brand-gold font-bold hover:underline">Apply for This Post →</Link>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-2xl text-center">
            <p className="text-gray-600 font-body text-sm">
              Don't see your role? We also welcome applications from Hindi/Social Science/Arts teachers, Librarians, Lab Assistants, and Administrative staff. Fill the form below with your preferred role.
            </p>
          </div>
        </div>
        
        <div className="bg-brand-navy rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <Briefcase size={48} className="mx-auto mb-6 text-brand-gold" />
            <h2 className="text-3xl font-display font-bold mb-4">Apply for a Position</h2>
            <p className="text-gray-300 font-body max-w-xl mx-auto mb-8">
              Fill in your details and we'll be in touch within 3 working days. Our HR team is available Mon–Sat, 9 AM – 4 PM to answer any queries about openings and the application process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <Link href="/contact" className="btn-gold font-semibold rounded-full px-8 py-3 shadow-lg">
                 Apply Now
               </Link>
            </div>
            <p className="mt-8 text-sm text-brand-gold font-medium">Or WhatsApp HR at +91 94185 26764</p>
          </div>
        </div>

      </div>
    </div>
  )
}

import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Trophy, Lightbulb, MapPin, Phone, Mail, GraduationCap, Building2, BookCheck, Quote } from 'lucide-react'

export default async function Home() {
  const supabase = await createClient()
  
  // Fetch school profile data
  const { data: profile } = await supabase
    .from('school_profile')
    .select('*')
    .single()

  const facebookUrl = profile?.facebook_page_url || 'https://www.facebook.com/profile.php?id=100091686457841'
  const schoolName = profile?.school_name || 'Divine Public School, Dharampur'

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* 1. Hero Slider Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="relative max-w-screen-xl mx-auto px-4 text-center z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-black/20 text-brand-gold text-sm font-bold tracking-[0.2em] uppercase mb-6 border border-brand-gold/30 backdrop-blur-sm">
            Welcome to
          </span>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-7xl font-display">
            {schoolName}
          </h1>
          <p className="mb-10 text-lg font-medium text-gray-200 lg:text-xl sm:px-16 xl:px-48 max-w-4xl mx-auto font-body">
            {profile?.tagline || "Empowering students with holistic education, fostering creativity, and building the leaders of tomorrow in a nurturing environment."}
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
            <Link href="/contact" className="btn-gold inline-flex justify-center items-center py-3.5 px-8 text-base font-bold text-center rounded-full">
              Apply Now
              <ArrowRight className="ml-2 -mr-1" size={20} />
            </Link>
            <Link href="/about" className="inline-flex justify-center items-center py-3.5 px-8 text-base font-bold text-center text-white rounded-full border-2 border-white/50 hover:bg-white hover:text-brand-navy focus:ring-4 focus:ring-gray-100 transition-all">
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Features Badges (Overlapping) */}
      <section className="relative z-20 -mt-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 card-shadow border-t-4 border-brand-gold transform transition duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-brand-navy/10 rounded-full flex items-center justify-center mb-6 text-brand-navy">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Academic Excellence</h3>
              <p className="text-gray-600 font-body">Rigorous curriculum designed to challenge and engage students at every level, fostering critical thinking.</p>
            </div>
            <div className="bg-brand-navy rounded-2xl p-8 shadow-2xl border-t-4 border-brand-gold transform transition duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 text-brand-gold">
                <Trophy size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">Holistic Development</h3>
              <p className="text-gray-300 font-body">Focus on sports, arts, extracurricular activities, and character building alongside academics.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 card-shadow border-t-4 border-brand-gold transform transition duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-brand-navy/10 rounded-full flex items-center justify-center mb-6 text-brand-navy">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Modern Innovation</h3>
              <p className="text-gray-600 font-body">State-of-the-art teaching methodologies and technology-integrated classrooms for 21st-century learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Welcome Section */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gold transform translate-x-4 translate-y-4 rounded-2xl"></div>
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Students learning" className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-xl" />
            </div>
            <div>
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">About Our School</span>
              <h2 className="text-4xl font-bold text-brand-navy mb-6 font-display leading-tight">A Legacy of Academic Excellence</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-body">
                {profile?.about || "At Divine Public School, Dharampur, we believe that education extends far beyond the four walls of a classroom. Our mission is to provide a comprehensive learning experience that develops intellectual curiosity, emotional intelligence, and moral character. We prepare our students not just for exams, but for life."}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                    <BookCheck size={20} />
                  </div>
                  <span className="font-bold text-gray-900">CBSE Curriculum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                    <Users size={20} />
                  </div>
                  <span className="font-bold text-gray-900">Expert Faculty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                    <Building2 size={20} />
                  </div>
                  <span className="font-bold text-gray-900">Modern Campus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                    <GraduationCap size={20} />
                  </div>
                  <span className="font-bold text-gray-900">100% Results</span>
                </div>
              </div>
              <Link href="/about" className="btn-gold inline-flex items-center px-6 py-3 rounded-full font-bold">
                Read Our Story <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Statistics Counter */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000')] bg-cover bg-fixed opacity-10"></div>
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-extrabold text-brand-gold mb-2 font-display">700+</div>
              <div className="text-white font-semibold uppercase tracking-wider text-sm">Students</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-brand-gold mb-2 font-display">20+</div>
              <div className="text-white font-semibold uppercase tracking-wider text-sm">Expert Faculty</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-brand-gold mb-2 font-display">15+</div>
              <div className="text-white font-semibold uppercase tracking-wider text-sm">Years of Legacy</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-brand-gold mb-2 font-display">100%</div>
              <div className="text-white font-semibold uppercase tracking-wider text-sm">Pass Percentage</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Principal's Message & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Mission */}
            <div className="bg-brand-offwhite p-10 rounded-3xl border border-gray-100 relative">
              <Quote className="absolute top-8 right-8 text-brand-gold/20" size={120} />
              <h2 className="text-3xl font-bold text-brand-navy mb-6 font-display relative z-10">Our Mission & Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed italic mb-8 relative z-10">
                "To foster a dynamic learning environment that encourages critical thinking, innovation, and strong moral values. We envision our students as global citizens who will positively impact society through their knowledge, compassion, and leadership."
              </p>
              <div className="w-16 h-1 bg-brand-gold rounded-full"></div>
            </div>

            {/* Principal */}
            <div>
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Leadership</span>
              <h2 className="text-4xl font-bold text-brand-navy mb-8 font-display">Message from the Principal</h2>
              <div className="flex gap-6 mb-6">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Principal" className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white" />
                <div>
                  <p className="text-gray-700 leading-relaxed font-body mb-4">
                    "Education is not the learning of facts, but the training of the mind to think. At Divine Public School, Dharampur, we strive to create an ecosystem where every child's unique potential is recognized and nurtured. We welcome you to join our family."
                  </p>
                  <h4 className="font-bold text-brand-navy text-lg">Dr. Anita Sharma</h4>
                  <p className="text-brand-gold font-semibold text-sm">Principal, Divine Public School, Dharampur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Live Facebook Updates */}
      <section className="py-24 bg-brand-offwhite border-y border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Campus Life</span>
            <h2 className="text-4xl font-bold text-brand-navy mb-4 font-display">Latest Updates & Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-body text-lg">Experience the vibrant daily life at our school directly through our live updates.</p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-[500px] w-full">
              <iframe 
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookUrl)}&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                width="100%" 
                height="700" 
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact & Map */}
      <section className="py-24 bg-white relative">
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 bg-brand-navy rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 lg:p-16 text-white">
              <h2 className="text-3xl font-bold mb-8 font-display">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 mr-4 group-hover:bg-brand-gold transition-colors">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-display">Visit Us</h3>
                    <p className="text-gray-300 leading-relaxed font-body">
                      {profile?.address || "Dharampur, Mandi"}<br/>
                      Himachal Pradesh - 175040, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 mr-4 group-hover:bg-brand-gold transition-colors">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-display">Call Us</h3>
                    <p className="text-gray-300 font-body">
                      <a href={`tel:${profile?.phone || "8219432438"}`} className="hover:text-brand-gold transition-colors">{profile?.phone || "+91 8219432438"}</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 mr-4 group-hover:bg-brand-gold transition-colors">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-display">Email Us</h3>
                    <p className="text-gray-300 font-body">
                      <a href={`mailto:${profile?.email || "headmaster.dps01@gmail.com"}`} className="hover:text-brand-gold transition-colors break-all">{profile?.email || "headmaster.dps01@gmail.com"}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-offwhite p-12 lg:p-16 text-gray-900">
              <h3 className="text-2xl font-bold mb-8 font-display text-brand-navy">Send a Message</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full rounded-xl border-gray-200 bg-white p-3 focus:border-brand-gold focus:ring-brand-gold shadow-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full rounded-xl border-gray-200 bg-white p-3 focus:border-brand-gold focus:ring-brand-gold shadow-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full rounded-xl border-gray-200 bg-white p-3 focus:border-brand-gold focus:ring-brand-gold shadow-sm" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full btn-gold font-bold py-4 px-4 rounded-xl shadow-lg mt-4 text-lg">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Trophy, Lightbulb, MapPin, Phone, Mail } from 'lucide-react'

export default async function Home() {
  const supabase = await createClient()
  
  // Fetch school profile data
  const { data: profile } = await supabase
    .from('school_profile')
    .select('*')
    .single()

  const facebookUrl = profile?.facebook_page_url || 'https://www.facebook.com/profile.php?id=100091686457841'
  const schoolName = profile?.school_name || 'Dharampur Public School'

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
        <div className="relative max-w-screen-xl mx-auto px-4 text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 text-blue-200 text-sm font-semibold tracking-wider mb-6 border border-blue-700/50">
            EXCELLENCE IN EDUCATION
          </span>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-7xl">
            Welcome to {schoolName}
          </h1>
          <p className="mb-10 text-lg font-normal text-blue-100 lg:text-xl sm:px-16 xl:px-48 max-w-4xl mx-auto">
            {profile?.tagline || "Empowering students with holistic education, fostering creativity, and building the leaders of tomorrow in a nurturing environment."}
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="/#contact" className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-blue-900 rounded-full bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Apply Now
              <ArrowRight className="ml-2 -mr-1" size={20} />
            </Link>
            <Link href="/#about" className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-white rounded-full border-2 border-white/30 hover:bg-white/10 focus:ring-4 focus:ring-gray-100 transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Nurturing Potential, Inspiring Excellence</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {profile?.about || "At Dharampur Public School, we believe that education extends far beyond the four walls of a classroom. Our mission is to provide a comprehensive learning experience that develops intellectual curiosity, emotional intelligence, and moral character."}
              </p>
              <ul className="space-y-4 mb-8">
                {['Experienced and dedicated faculty', 'State-of-the-art learning facilities', 'Focus on extracurricular development'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-3">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Students learning" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features / Highlights */}
      <section id="academics" className="py-20 bg-gray-50 dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">We provide an environment where students can discover their passions and reach their full potential.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: 'Academic Excellence', desc: 'Rigorous curriculum designed to challenge and engage students at every level.' },
              { icon: Users, title: 'Holistic Development', desc: 'Focus on sports, arts, and character building alongside academics.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Modern teaching methodologies and technology-integrated classrooms.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Updates (Facebook Plugin) */}
      <section id="updates" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Latest Updates & Events</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Stay connected with the vibrant life at {schoolName}. Check out our latest announcements, student achievements, and upcoming events directly from our official Facebook feed.
              </p>
              <Link href={facebookUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold group">
                Follow us on Facebook
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 h-[600px] flex justify-center w-full">
              {/* Facebook Page Plugin Iframe */}
              <iframe 
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookUrl)}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                width="100%" 
                height="600" 
                style={{ border: 'none', overflow: 'hidden', maxWidth: '500px' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-blue-200 mb-10 text-lg">We would love to hear from you. Whether you have questions about admissions, academics, or general inquiries, our team is ready to help.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <MapPin size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                    <p className="text-blue-200 leading-relaxed">
                      {profile?.address || "Dharampur, Mandi"}<br/>
                      Himachal Pradesh - 175040, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Phone size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                    <p className="text-blue-200">
                      <a href={`tel:${profile?.phone || "8219432438"}`} className="hover:text-white transition-colors">{profile?.phone || "+91 8219432438"}</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Mail size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                    <p className="text-blue-200">
                      <a href={`mailto:${profile?.email || "headmaster.dps01@gmail.com"}`} className="hover:text-white transition-colors break-all">{profile?.email || "headmaster.dps01@gmail.com"}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
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

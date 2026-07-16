import { createClient } from '@/utils/supabase/server'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default async function ContactPage() {
  const supabase = await createClient()
  const { data: profile } = await supabase.from('school_profile').select('*').single()

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-8 font-display">Get In Touch</h2>
            <p className="text-gray-600 font-body text-lg mb-8">
              We welcome your inquiries. Whether you are a prospective parent, a current student, or a community member, please feel free to reach out to us.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-offwhite rounded-full flex items-center justify-center shrink-0 mr-4 text-brand-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 font-display text-gray-900">Address</h3>
                  <p className="text-gray-600 font-body">
                    {profile?.address || "Dharampur, Mandi"}<br/>
                    Himachal Pradesh - 175040, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-offwhite rounded-full flex items-center justify-center shrink-0 mr-4 text-brand-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 font-display text-gray-900">Phone</h3>
                  <p className="text-gray-600 font-body">
                    <a href={`tel:${profile?.phone || "8219432438"}`} className="hover:text-brand-gold transition-colors">{profile?.phone || "+91 8219432438"}</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-offwhite rounded-full flex items-center justify-center shrink-0 mr-4 text-brand-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 font-display text-gray-900">Email</h3>
                  <p className="text-gray-600 font-body">
                    <a href={`mailto:${profile?.email || "headmaster.dps01@gmail.com"}`} className="hover:text-brand-gold transition-colors">{profile?.email || "headmaster.dps01@gmail.com"}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-offwhite rounded-full flex items-center justify-center shrink-0 mr-4 text-brand-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 font-display text-gray-900">Working Hours</h3>
                  <p className="text-gray-600 font-body">
                    Monday - Saturday: 8:00 AM - 4:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-navy mb-6 font-display">Send a Message</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full rounded-xl border-gray-200 bg-gray-50 p-3 focus:border-brand-gold focus:ring-brand-gold" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full rounded-xl border-gray-200 bg-gray-50 p-3 focus:border-brand-gold focus:ring-brand-gold" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full rounded-xl border-gray-200 bg-gray-50 p-3 focus:border-brand-gold focus:ring-brand-gold" placeholder="+91 XXXXXXXXXX" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full rounded-xl border-gray-200 bg-gray-50 p-3 focus:border-brand-gold focus:ring-brand-gold" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full btn-gold font-bold py-4 px-4 rounded-xl mt-4 text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { ChevronRight, Home, BookOpen, GraduationCap } from 'lucide-react'

export default function SitemapPage() {
  const sections = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", href: "/" },
        { name: "Contact Us", href: "/contact" },
        { name: "Career Opportunities", href: "/career" },
        { name: "Photo Gallery", href: "/gallery" },
        { name: "Annual Day Function", href: "/gallery" },
        { name: "Teacher's Day", href: "/gallery" },
        { name: "National Unity Day", href: "/gallery" },
        { name: "Farewell Party", href: "/gallery" },
      ]
    },
    {
      title: "About School",
      icon: BookOpen,
      links: [
        { name: "About Divine Public School", href: "/about" },
        { name: "Principal's Message", href: "/principal-message" },
        { name: "Mission & Vision", href: "/mission-vision" },
        { name: "Infrastructure", href: "/infrastructure" },
      ]
    },
    {
      title: "Programmes & Info",
      icon: GraduationCap,
      links: [
        { name: "Kindergarten", href: "/kindergarten" },
        { name: "Achievements", href: "/achievements" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-conditions" },
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 bg-gray-50/50">
      <div className="max-w-screen-xl mx-auto px-4 py-16 w-full text-center">
        <span className="text-[#C9A84C] font-semibold tracking-[0.2em] text-sm uppercase font-display mb-2 block">
          Navigation
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy font-display mb-4">
          All Pages
        </h1>
        <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-6"></div>
        <p className="text-gray-500 font-body mb-16">
          Find everything on the Divine Public School, Dharampur website
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {sections.map((section, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border-t-4 border-brand-navy p-8 h-full">
              <div className="flex items-center space-x-3 mb-8">
                <section.icon className="text-[#C9A84C]" size={24} />
                <h2 className="text-2xl font-display font-bold text-brand-navy">{section.title}</h2>
              </div>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    <Link 
                      href={link.href}
                      className="flex items-center text-gray-600 hover:text-[#C9A84C] transition-colors font-body group"
                    >
                      <ChevronRight size={16} className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 mr-2" />
                      <span className="transform transition-transform group-hover:translate-x-2">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center space-x-4">
          <Link href="/" className="btn-gold font-semibold rounded-full px-8 py-3 flex items-center space-x-2">
            <Home size={18} />
            <span>BACK TO HOME</span>
          </Link>
          <Link href="/contact" className="bg-brand-navy text-white hover:bg-brand-navy/90 font-semibold rounded-full px-8 py-3 flex items-center space-x-2 transition-colors">
            <span>CONTACT US</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

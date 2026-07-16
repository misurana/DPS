'use client'

import Link from 'next/link'
import { BookOpen, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Footer() {
  const pathname = usePathname()
  
  // Don't show public footer on admin routes
  if (pathname?.startsWith('/admin')) {
    return null
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111827] text-gray-300 border-t-4 border-[#C9A84C]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-16">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0 max-w-sm">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group mb-6">
              <div className="bg-white p-2 rounded-full text-[#1B4332] group-hover:bg-[#C9A84C] group-hover:text-white transition-colors">
                <BookOpen size={28} />
              </div>
              <div className="flex flex-col">
                <span className="self-center text-3xl font-display font-bold whitespace-nowrap text-white tracking-tight leading-tight">
                  Divine Public School
                </span>
                <span className="text-[10px] text-[#C9A84C] font-semibold uppercase tracking-widest">
                  A Legacy of Excellence
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed font-body">
              Empowering students with holistic education, fostering creativity, and building the leaders of tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100091686457841" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-[#C9A84C] p-2 rounded-full">
                <Facebook size={20} />
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-[#C9A84C] p-2 rounded-full">
                <Instagram size={20} />
                <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-[#C9A84C] p-2 rounded-full">
                <Twitter size={20} />
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider font-display">Quick Links</h2>
              <ul className="text-gray-400 font-medium space-y-4 font-body">
                <li><Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link></li>
                <li><Link href="/infrastructure" className="hover:text-[#C9A84C] transition-colors">Infrastructure</Link></li>
                <li><Link href="/gallery" className="hover:text-[#C9A84C] transition-colors">Gallery</Link></li>
                <li><Link href="/achievements" className="hover:text-[#C9A84C] transition-colors">Achievements</Link></li>
                <li><Link href="/kindergarten" className="hover:text-[#C9A84C] transition-colors">Kindergarten</Link></li>
                <li><Link href="/career" className="hover:text-[#C9A84C] transition-colors">Career</Link></li>
                <li><Link href="/contact" className="hover:text-[#C9A84C] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider font-display">About School</h2>
              <ul className="text-gray-400 font-medium space-y-4 font-body">
                <li><Link href="/about" className="hover:text-[#C9A84C] transition-colors">About School</Link></li>
                <li><Link href="/principal-message" className="hover:text-[#C9A84C] transition-colors">Principal's Message</Link></li>
                <li><Link href="/mission-vision" className="hover:text-[#C9A84C] transition-colors">Mission & Vision</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-[#C9A84C] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions" className="hover:text-[#C9A84C] transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider font-display">Contact Us</h2>
              <ul className="text-gray-400 font-medium space-y-4 font-body">
                <li className="flex items-start space-x-3 group">
                  <MapPin size={20} className="shrink-0 mt-0.5 text-[#C9A84C] group-hover:text-white transition-colors" />
                  <span>Dharampur, Mandi<br />Himachal Pradesh - 175040, India</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <Phone size={20} className="shrink-0 text-[#C9A84C] group-hover:text-white transition-colors" />
                  <a href="tel:7807135120" className="hover:text-white transition-colors">+91 78071 35120</a>
                </li>
                <li className="flex items-center space-x-3 group">
                  <Mail size={20} className="shrink-0 text-[#C9A84C] group-hover:text-white transition-colors" />
                  <a href="mailto:divine_public@yahoo.com" className="hover:text-white transition-colors break-all">divine_public@yahoo.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-800 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center font-body flex items-center flex-wrap gap-2">
            © {currentYear} <Link href="/" className="hover:text-white transition-colors">Divine Public School, Dharampur</Link>. All Rights Reserved.
            <span className="hidden sm:inline">|</span>
            <Link href="/sitemap" className="hover:text-[#C9A84C] transition-colors">Sitemap</Link>
          </span>
          <span className="text-sm text-[#C9A84C] mt-4 sm:mt-0 block sm:inline font-semibold">
            Designed for Excellence
          </span>
        </div>
      </div>
    </footer>
  )
}

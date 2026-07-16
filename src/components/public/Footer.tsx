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
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-16">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0 max-w-sm">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group mb-6">
              <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-500 transition-colors">
                <BookOpen size={28} />
              </div>
              <span className="self-center text-3xl font-bold whitespace-nowrap text-white tracking-tight">
                DPS Dharampur
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering students with holistic education, fostering creativity, and building the leaders of tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100091686457841" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Facebook size={20} />
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Instagram size={20} />
                <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Twitter size={20} />
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h2>
              <ul className="text-gray-400 font-medium space-y-4">
                <li>
                  <Link href="/#about" className="hover:text-white hover:underline transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/#academics" className="hover:text-white hover:underline transition-colors">Academics</Link>
                </li>
                <li>
                  <Link href="/#updates" className="hover:text-white hover:underline transition-colors">Latest Updates</Link>
                </li>
                <li>
                  <Link href="/admin/login" className="hover:text-white hover:underline transition-colors">Admin Portal</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Contact Us</h2>
              <ul className="text-gray-400 font-medium space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin size={20} className="shrink-0 mt-0.5 text-blue-500" />
                  <span>Dharampur, Mandi<br />Himachal Pradesh - 175040, India</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={20} className="shrink-0 text-blue-500" />
                  <a href="tel:8219432438" className="hover:text-white transition-colors">+91 8219432438</a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={20} className="shrink-0 text-blue-500" />
                  <a href="mailto:headmaster.dps01@gmail.com" className="hover:text-white transition-colors break-all">headmaster.dps01@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-800 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © {currentYear} <Link href="/" className="hover:underline">Dharampur Public School™</Link>. All Rights Reserved.
          </span>
          <span className="text-sm text-gray-500 mt-4 sm:mt-0 block sm:inline">
            Designed for Excellence
          </span>
        </div>
      </div>
    </footer>
  )
}

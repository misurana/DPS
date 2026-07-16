'use client'

import Link from 'next/link'
import { Menu, X, BookOpen, Phone, Mail, Facebook, Instagram, Twitter, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      isDropdown: true,
      children: [
        { name: 'About School', href: '/about' },
        { name: "Principal's Message", href: '/principal-message' },
        { name: 'Mission & Vision', href: '/mission-vision' },
      ]
    },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Kindergarten', href: '/kindergarten' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact' },
  ]

  // Don't show public navbar on admin routes
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <div className="flex flex-col fixed w-full z-50 top-0 start-0">
      {/* Top Bar */}
      <div className="bg-[#1B4332] text-white/90 text-xs py-2 px-4 hidden md:flex justify-between items-center border-b border-white/10">
        <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+917807135120" className="flex items-center space-x-2 hover:text-[#C9A84C] transition-colors">
              <Phone size={14} />
              <span>+91 78071 35120</span>
            </a>
            <a href="mailto:divine_public@yahoo.com" className="flex items-center space-x-2 hover:text-[#C9A84C] transition-colors">
              <Mail size={14} />
              <span>divine_public@yahoo.com</span>
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#C9A84C] transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-[#C9A84C] transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-[#C9A84C] transition-colors"><Twitter size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#1B4332] shadow-xl border-b-4 border-[#C9A84C] transition-all duration-300">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:py-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="bg-white p-2 rounded-full text-[#1B4332] group-hover:bg-[#C9A84C] group-hover:text-white transition-all shadow-lg hidden lg:block">
              <BookOpen size={28} />
            </div>
            <div className="flex flex-col">
              <span className="self-center text-xl lg:text-2xl font-display font-bold whitespace-nowrap text-white tracking-tight leading-tight">
                Divine Public School
              </span>
              <span className="text-[10px] lg:text-xs text-[#C9A84C] font-semibold uppercase tracking-widest hidden sm:block">
                A Legacy of Excellence
              </span>
            </div>
          </Link>
          <div className="flex xl:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
            <Link
              href="/contact"
              className="btn-gold hidden sm:flex items-center focus:ring-4 focus:outline-none focus:ring-yellow-700 font-semibold rounded-full text-sm px-6 py-2.5 text-center"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg xl:hidden hover:bg-[#2D6A4F] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } items-center justify-between w-full xl:flex xl:w-auto xl:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 xl:p-0 mt-4 font-semibold border-t border-[#2D6A4F] xl:space-x-6 2xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group" onMouseEnter={() => link.isDropdown && setIsAboutOpen(true)} onMouseLeave={() => link.isDropdown && setIsAboutOpen(false)}>
                  {link.isDropdown ? (
                    <>
                      <button
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                        className={`flex items-center justify-between w-full py-2 px-3 rounded xl:p-0 transition-all duration-300 text-white hover:bg-[#2D6A4F] xl:hover:bg-transparent hover:text-[#C9A84C]`}
                      >
                        {link.name}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className={`${isAboutOpen ? 'block' : 'hidden'} xl:absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl py-2 xl:group-hover:block z-50`}>
                        {link.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#C9A84C] hover:text-white transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setIsAboutOpen(false);
                            }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href || '#'}
                      className={`block py-2 px-3 rounded xl:p-0 transition-all duration-300 ${
                        pathname === link.href
                          ? 'text-[#C9A84C] bg-[#2D6A4F] xl:bg-transparent'
                          : 'text-white hover:bg-[#2D6A4F] xl:hover:bg-transparent hover:text-[#C9A84C]'
                      }`}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="sm:hidden mt-2">
                <Link
                  href="/contact"
                  className="block text-center btn-gold rounded-full text-sm px-6 py-2.5"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Link>
              </li>
              <li className="mt-2 xl:mt-0 xl:ml-4 flex items-center justify-center xl:justify-start border-t xl:border-t-0 border-[#2D6A4F] pt-2 xl:pt-0">
                  <Link href="/admin/login" className="text-xs text-white/50 hover:text-white transition-colors">
                    Admin
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

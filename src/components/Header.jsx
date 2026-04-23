import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEnquiry } from '../context/EnquiryContext'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/store' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Our Clients', href: '/clients' },
  // { label: 'About Us', href: '/about' },
  // { label: 'Our Team', href: '/about' },
  // {
  //   label: 'Products',
  //   href: '/products',
  //   subLinks: [
  //     { label: 'Room Air Conditioning', href: '/products/room-ac' },
  //     { label: 'Commercial AC', href: '/products/commercial-ac' },
  //     { label: 'Central AC', href: '/products/central-ac' },
  //     { label: 'Ventilation', href: '/products/ventilation' },
  //   ]
  // },
  {
    label: 'Services',
    href: '/services/approach',
    subLinks: [
      { label: 'Our Approach', href: '/services/approach' },
      { label: 'AMC', href: '/services/amc' },
    ]
  },
  { label: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const { openModal } = useEnquiry()
  const location = useLocation()
  const isHome = location.pathname === '/' || '';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* Top Bar - Clean & Integrated */}
      <div className={`text-[11px] py-2 transition-all duration-500 ${(scrolled || !isHome) ? 'bg-[#002f54]' : 'bg-black/20 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="tel:+919030064466" className="flex items-center gap-2 text-white hover:text-white transition-colors font-medium">
              <svg className="w-3.5 h-3.5 text-[#0072bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9030064466</span>
            </a>
            <a href="mailto:info@rakshithaircondition.com" className="hidden sm:flex items-center gap-2 text-white hover:text-white transition-colors font-medium">
              <svg className="w-3.5 h-3.5 text-[#0072bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@rakshithaircondition.com</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-2 font-medium text-white tracking-wider uppercase text-[10px]">
            Authorized Sales & Service Daikin Channel Partner
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-500 ${(scrolled || !isHome) ? 'bg-white border-b border-gray-100 shadow-md' : 'bg-transparent border-b-0'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${isHome && !scrolled ? 'h-[75px]' : 'h-[85px]'}`}>

            {/* Logo Section */}
            <div className="h-full flex items-center">
              <Link
                to="/"
                className={`flex items-center justify-center h-full transition-all duration-500 ${isHome && !scrolled
                  ? 'bg-white px-10 rounded-b-2xl shadow-sm'
                  : 'bg-transparent px-0'
                  }`}
              >
                <img
                  src="/Rakshith logo web png.png"
                  alt="Rakshith Air Conditioners"
                  className={`w-auto object-contain transition-all duration-500 ${isHome && !scrolled ? 'h-10' : 'h-11'}`}
                />
              </Link>
            </div>

            {/* Desktop Nav - High-Fidelity Technical Style */}
            <div className="hidden xl:flex items-center gap-1 h-full">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="h-full relative flex items-center group/nav"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`h-full px-4 flex items-center text-[15px] font-medium transition-all relative ${(scrolled || !isHome)
                      ? 'text-gray-800 hover:text-[#0072bc]'
                      : 'text-white/95 hover:text-white drop-shadow-sm'
                      }`}
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {link.label}
                    {link.subLinks && (
                      <svg
                        className={`w-3 h-3 ml-1.5 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {/* Underline effect closer to text */}
                    <span className={`absolute bottom-6 left-4 right-4 h-[2px] rounded-full transition-transform duration-300 origin-left scale-x-0 group-hover/nav:scale-x-100 ${(scrolled || !isHome) ? 'bg-[#0072bc]' : 'bg-white'}`}></span>
                  </Link>

                  {/* High-Fidelity Dropdown - Closer to nav */}
                  {link.subLinks && (
                    <div className={`absolute top-[80%] left-0 w-72 bg-white shadow-2xl rounded-2xl border border-gray-50 overflow-hidden transition-all duration-400 transform origin-top ${activeDropdown === link.label ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                      <div className="p-3">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className="group/sub px-4 py-3 text-[14px] font-medium text-gray-600 hover:text-[#0072bc] hover:bg-blue-50/50 rounded-xl transition-all flex items-center justify-between"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                          >
                            <span>{sub.label}</span>
                            <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA - Premium Button */}
            <div className="hidden xl:flex items-center h-full">
              <button
                onClick={openModal}
                className={`px-8 py-3 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-all hover:scale-105 active:scale-95 ${(scrolled || !isHome)
                  ? 'bg-[#0072bc] text-white shadow-lg'
                  : 'bg-white text-[#0072bc] shadow-xl'
                  }`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Enquiry Now
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
              className={`xl:hidden p-3 rounded-xl transition-all ${scrolled ? 'text-gray-900 bg-gray-50' : 'text-white bg-white/10'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav - Modern Overlay */}
        <div className={`xl:hidden fixed inset-0 z-[60] bg-white transition-all duration-700 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-8 h-full">
            <div className="flex items-center justify-between mb-16">
              <img src="/banner/Screenshot 2026-04-15 150304.png" alt="Rakshith" className="h-10 object-contain" />
              <button onClick={() => setMobileOpen(false)} aria-label="Close mobile menu" className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-2xl text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth={2} /></svg>
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="group">
                  <div
                    className="flex items-center justify-between py-3 text-base font-bold text-gray-900"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                    onClick={() => link.subLinks ? setMobileAccordion(mobileAccordion === link.label ? null : link.label) : (setMobileOpen(false), window.location.href = link.href)}
                  >
                    {link.label}
                    {link.subLinks && (
                      <svg className={`w-6 h-6 transition-transform text-gray-300 ${mobileAccordion === link.label ? 'rotate-180 text-[#0072bc]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth={2.5} /></svg>
                    )}
                  </div>

                  {link.subLinks && mobileAccordion === link.label && (
                    <div className="flex flex-col gap-4 mb-4 pl-4 border-l-2 border-blue-50">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-gray-500 font-medium text-sm py-1 hover:text-[#0072bc] animate-fadeInUp"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileOpen(false);
                openModal();
              }}
              className="mt-auto block w-full text-center py-5 bg-[#0072bc] text-white text-lg font-bold rounded-2xl shadow-2xl shadow-blue-100 transition-transform active:scale-95"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Contact Specialist
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

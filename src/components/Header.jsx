import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Store', href: '/store' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Team', href: '/#about' },
  { 
    label: 'Products', 
    href: '/store',
    subLinks: [
      { label: 'Room Air Conditioning', href: '/store' },
      { label: 'Commercial AC', href: '/store' },
      { label: 'Central AC', href: '/store' },
      { label: 'Ventilation', href: '/store' },
    ]
  },
  { 
    label: 'Services', 
    href: '/#process',
    subLinks: [
      { label: 'Our Approach', href: '/#process' },
      { label: 'AMC', href: '/#process' },
    ]
  },
  { label: 'Contact Us', href: '/#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

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
            <a href="tel:+919848629208" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium">
              <svg className="w-3.5 h-3.5 text-[#0072bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9848629208</span>
            </a>
            <a href="mailto:info@rakshithac.com" className="hidden sm:flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium">
              <svg className="w-3.5 h-3.5 text-[#0072bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@rakshithac.com</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-2 font-medium text-white/30 tracking-widest uppercase text-[10px]">
             Authorized Sales & Service Channel Partner
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-500 ${(scrolled || !isHome) ? 'bg-white shadow-2xl shadow-black/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[80px]">

            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/banner/Screenshot 2026-04-15 150304.png"
                alt="Rakshith Air Conditioners"
                className="h-11 w-auto object-contain transition-all"
              />
            </Link>

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
                    className={`px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-[0.12em] transition-all flex items-center gap-1.5 ${(scrolled || !isHome)
                      ? 'text-gray-900 hover:text-[#0072bc]'
                      : 'text-white hover:text-white/80 filter drop-shadow-[0_2px_4_rgba(0,0,0,0.3)]'
                      }`}
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {link.label}
                    {link.subLinks && (
                      <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* High-Fidelity Dropdown */}
                  {link.subLinks && (
                    <div className={`absolute top-[85%] left-0 w-72 bg-white shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] rounded-2xl border border-gray-50 overflow-hidden transition-all duration-400 transform origin-top-left ${activeDropdown === link.label ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                      <div className="p-3">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className="group/sub px-4 py-3 text-sm font-semibold text-gray-600 hover:text-[#0072bc] hover:bg-blue-50/50 rounded-xl transition-all flex items-center justify-between"
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
            <div className="hidden xl:flex items-center">
              <Link
                to="/#contact"
                className={`px-8 py-3 text-[12px] font-bold uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 ${(scrolled || !isHome)
                  ? 'bg-[#0072bc] text-white shadow-xl shadow-blue-100'
                  : 'bg-white text-[#0072bc] shadow-2xl shadow-black/20'
                  }`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Inquire Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              id="mobile-menu-toggle"
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
              <button onClick={() => setMobileOpen(false)} className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-2xl text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth={2} /></svg>
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="group">
                  <div
                    className="flex items-center justify-between py-5 text-2xl font-bold text-gray-900"
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
                          className="text-gray-500 font-medium text-lg py-1 hover:text-[#0072bc] animate-fadeInUp"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-auto block w-full text-center py-5 bg-[#0072bc] text-white text-lg font-bold rounded-2xl shadow-2xl shadow-blue-100"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Contact Specialist
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

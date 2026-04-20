import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Store', href: '/store' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  // { label: 'Our Team', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    subLinks: [
      { label: 'Room Air Conditioning', href: '/products/room-ac' },
      { label: 'Commercial AC', href: '/products/commercial-ac' },
      { label: 'Central AC', href: '/products/central-ac' },
      { label: 'Ventilation', href: '/products/ventilation' },
    ]
  },
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
  const [isModalOpen, setIsModalOpen] = useState(false)
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
                    className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-all flex items-center gap-1.5 relative ${(scrolled || !isHome)
                      ? 'text-gray-800 hover:text-[#0072bc]'
                      : 'text-white/95 hover:text-white drop-shadow-sm'
                      }`}
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {link.label}
                    {link.subLinks && (
                      <svg
                        className={`w-3 h-3 ml-1 transition-transform duration-300 ease-in-out ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full transition-transform duration-300 origin-left scale-x-0 group-hover/nav:scale-x-100 ${(scrolled || !isHome) ? 'bg-[#0072bc]' : 'bg-white'}`}></span>
                  </Link>

                  {/* High-Fidelity Dropdown */}
                  {link.subLinks && (
                    <div className={`absolute top-[85%] left-0 w-72 bg-white shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] rounded-2xl border border-gray-50 overflow-hidden transition-all duration-400 transform origin-top-left ${activeDropdown === link.label ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
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
            <div className="hidden xl:flex items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className={`px-8 py-3 text-[12px] font-bold uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 ${(scrolled || !isHome)
                  ? 'bg-[#0072bc] text-white shadow-xl shadow-blue-100'
                  : 'bg-white text-[#0072bc] shadow-2xl shadow-black/20'
                  }`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Inquire Now
              </button>
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
                setIsModalOpen(true);
              }}
              className="mt-auto block w-full text-center py-5 bg-[#0072bc] text-white text-lg font-bold rounded-2xl shadow-2xl shadow-blue-100 transition-transform active:scale-95"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Contact Specialist
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)}></div>

          <div className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl shadow-black/20 overflow-hidden transform transition-all animate-fadeInUp">
            {/* Modal Header */}
            <div className="relative bg-[#002f54] p-8 pb-10 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
              <div className="absolute top-1/2 -right-10 w-40 h-40 bg-[#0072bc]/40 rounded-full blur-[40px]"></div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white transition-all rounded-full focus:outline-none ring-offset-2 focus:ring-2 focus:ring-white/20"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Get a Quote</h2>
                <p className="text-blue-100/70 text-sm">Our technical specialists will contact you within 24 hours to structurally analyze your requirements.</p>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8 -mt-6 relative z-20 bg-white rounded-t-[2rem]">
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted! We will contact you soon."); setIsModalOpen(false); }}>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input required type="text" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Phone</label>
                    <input required type="tel" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all" placeholder="+91" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Interest</label>
                    <select className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all appearance-none cursor-pointer">
                      <option>Commercial VRV</option>
                      <option>Central Chillers</option>
                      <option>Room AC</option>
                      <option>Industrial Ventilation</option>
                      <option>Comprehensive AMC</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Additional Details</label>
                  <textarea rows="3" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all resize-none" placeholder="Please describe your site scale or specific requirements..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 mt-2 bg-[#002f54] hover:bg-[#0072bc] text-white text-sm font-bold uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-blue-900/10 active:scale-[0.98]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Submit Inquiry
                </button>
                <p className="text-center text-[10px] font-medium text-gray-400 mt-4 uppercase tracking-widest hidden sm:block">
                  Direct Line: +91 9848629208
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

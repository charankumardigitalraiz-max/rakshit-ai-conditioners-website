const footerLinks = {
  Solutions: [
    { label: 'Room Air Conditioning', href: '#products' },
    { label: 'Commercial HVAC', href: '#commercial-ac' },
    { label: 'Centralized Systems', href: '#central-ac' },
    { label: 'Precision Ventilation', href: '#ventilation' },
  ],
  Technical: [
    { label: 'Engineering Approach', href: '#process' },
    { label: 'Annual Maintenance', href: '#amc' },
    { label: 'Service Request', href: '#service' },
    { label: 'CEO Dashboard', href: '#ceo' },
  ],
  Company: [
    { label: 'Corporate Profile', href: '#about' },
    { label: 'Technical Team', href: '#team' },
    { label: 'Authorized Catalogue', href: '#products' },
    { label: 'Contact HQ', href: '#contact' },
  ],
  Governance: [
    { label: 'Project Terms', href: '#terms' },
    { label: 'Warranty Policy', href: '#warranty' },
    { label: 'Privacy Standards', href: '#privacy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#002f54] text-white overflow-hidden">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-6 gap-12 lg:gap-16">

          {/* Brand Identity Column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img
                src="/banner/Screenshot 2026-04-15 150304.png"
                alt="Rakshith Air Conditioners"
                className="h-12 object-contain b"
              />
            </div>

            <p className="text-blue-100/60 text-sm leading-relaxed mb-8 max-w-sm">
              Rakshith Air Conditioners is South India's premier authorized Daikin distribution partner. Delivering precision-engineered climate solutions since 2001.
            </p>

            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-start gap-3 text-blue-100/80">
                <svg className="w-5 h-5 text-[#0072bc] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>Banjara Hills, Road No.1, <br /> Hyderabad, TS 500034</span>
              </div>
              <a href="tel:+919948095081" className="flex items-center gap-3 text-blue-100/80 hover:text-white transition-colors group">
                <svg className="w-5 h-5 text-[#0072bc] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9948095081
              </a>
            </div>
          </div>

          {/* Links Taxonomy */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.25em] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-blue-100/40 text-[13px] hover:text-[#0072bc] transition-all flex items-center gap-2 group"
                      >
                        <span className="w-0 h-px bg-[#0072bc] transition-all group-hover:w-3"></span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Compliance Bar */}
      <div className="border-t border-white/5 bg-[#002642]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-blue-100/20 text-[10px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Rakshith Air Conditioners. Technical Excellence.
            </p>
            <div className="hidden md:block w-px h-4 bg-white/5"></div>
            <p className="text-blue-100/20 text-[10px] uppercase tracking-widest">Certified ISO Partner</p>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-bold text-blue-100/40 uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#0072bc] rounded-full animate-pulse"></span>
            Global Daikin Tier 1 Partner
          </div>
        </div>
      </div>
    </footer>
  )
}

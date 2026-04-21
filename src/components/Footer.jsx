const footerLinks = {
  Navigation: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/store' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Services', href: '/services/approach' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Solutions: [
    { label: 'Room Air Conditioning', href: '/products/room-ac' },
    { label: 'Commercial HVAC', href: '/products/commercial-ac' },
    { label: 'Central VRV Systems', href: '/products/central-ac' },
    { label: 'Industrial Ventilation', href: '/products/ventilation' },
  ],
  Services: [
    { label: 'Engineering Approach', href: '/services/approach' },
    { label: 'Annual Maintenance', href: '/services/amc' },
    { label: 'Service Request', href: '/contact' },
    { label: 'Technical Support', href: '/contact' },
  ],
  Company: [
    // { label: 'Corporate Profile', href: '/about' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
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
                width="180"
                height="48"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-blue-100/60 text-sm leading-relaxed mb-8 max-w-sm">
              Rakshith Air Conditioners is South India's premier authorized Daikin distribution partner. Delivering precision-engineered climate solutions since 2011.
            </p>

            <div className="space-y-6">
              {/* HQ Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#0072bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-blue-100/40 uppercase tracking-wider mb-1">Regional HQ</h4>
                  <p className="text-blue-100/80 text-[13px] leading-relaxed">
                    RVRH HOMES, 41, Rd No. 3R, <br />
                    Lakshmi Nagar, Miyapur, Hyderabad 500049
                  </p>
                </div>
              </div>

              {/* Contact Grid - Organized for High Visibility */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {/* Sales Lines */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0072bc]/10 flex items-center justify-center shrink-0 border border-white/5">
                    <svg className="w-5 h-5 text-[#0072bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-blue-100/40 uppercase tracking-wider mb-1">Sales Enquiries</h4>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919030064466" className="text-blue-100/80 text-[13px] font-semibold hover:text-white transition-colors tracking-tight">+91 90300 64466</a>
                      <a href="tel:+919030094466" className="text-blue-100/80 text-[13px] font-semibold hover:text-white transition-colors tracking-tight">+91 90300 94466</a>
                    </div>
                  </div>
                </div>

                {/* Service Lines */}
                {/* <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-white/5">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-green-500/60 uppercase tracking-wider mb-1">Service & Support</h4>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919100090150" className="text-blue-100/80 text-[13px] font-semibold hover:text-white transition-colors tracking-tight">+91 91000 90150</a>
                      <a href="tel:+919100090151" className="text-blue-100/80 text-[13px] font-semibold hover:text-white transition-colors tracking-tight">+91 91000 90151</a>
                    </div>
                  </div>
                </div> */}

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-white/5">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-orange-500/60 uppercase tracking-wider mb-1">Corporate Email</h4>
                    <a href="mailto:info@rakshithac.com" className="text-blue-100/80 text-[13px] font-semibold hover:text-white transition-colors tracking-tight">info@rakshithac.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Taxonomy */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.25em] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {title}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-blue-100/70 text-[13px] hover:text-[#0072bc] transition-all flex items-center gap-2 group"
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
            <p className="text-blue-100/60 text-[10px] font-bold uppercase tracking-wider">
              © {new Date().getFullYear()} Rakshith Air Conditioners. Engineering Excellence.
            </p>
            <div className="hidden md:block w-px h-4 bg-white/5"></div>
            <p className="text-blue-100/60 text-[10px] uppercase tracking-wider">Certified Daikin Service Channel</p>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-bold text-blue-100/70 uppercase tracking-wider">
            <span className="w-2 h-2 bg-[#0072bc] rounded-full animate-pulse"></span>
            Global Daikin Tier 1 Partner
          </div>
        </div>
      </div>
    </footer>
  )
}

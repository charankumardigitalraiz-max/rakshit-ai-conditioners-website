const cards = [
  {
    id: 'approach',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Precision Approach',
    desc: 'At Rakshith, we deliver engineered excellence. Our methodology is built on technical accuracy and long-term asset performance.',
    href: '#approach',
    tag: 'Methodology',
  },
  {
    id: 'amc',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'AMC Lifecycle Care',
    desc: 'Our Annual Maintenance Contracts (AMC) guarantee system uptime and peak efficiency through scheduled technical audits.',
    href: '#amc',
    tag: 'Maintenance',
  },
  {
    id: 'service',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Service Excellence',
    desc: 'Direct access to certified technical engineers. From emergency response to major system overhauls, we deliver prompt precision.',
    href: '#service',
    tag: 'Technical Response',
  },
  {
    id: 'ceo',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Reach Our Leadership',
    desc: 'Transparency is core to our operations. Our leadership team remains directly accessible to ensure your project exceeds expectations.',
    href: '#ceo',
    tag: 'Connect',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-16 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-10 h-0.5 bg-[#0072bc]"></span>
            <span className="text-[#0072bc] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>The Rakshith Standard</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Why Choose <span className="text-[#0072bc]">Rakshith?</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            We operate at the intersection of technical innovation and absolute reliability, providing full-lifecycle HVAC services from engineering design to long-term maintenance.
          </p>
        </div>

        {/* Corporate Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group relative bg-white border border-gray-100 rounded-xl p-8 hover:border-[#0072bc]/30 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              {/* Step Number Background */}
              <div className="absolute top-4 right-6 text-6xl font-black text-gray-400/5 select-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative">
                <div className="text-[#0072bc] mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">{card.icon}</div>
                <span className="text-[10px] font-bold text-[#0072bc] uppercase tracking-[0.2em] mb-3 block">{card.tag}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0072bc] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {card.desc}
                </p>
                <a
                  href={card.href}
                  className="flex items-center text-[#0072bc] text-xs font-bold uppercase tracking-wider gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0"
                >
                  Learn Strategy
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Projects Banner - High-Impact */}
        <div className="relative bg-[#002f54] rounded-xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-[#0072bc] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>

          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-block bg-[#0072bc] text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6 shadow-xl">
                Our Project Portfolio
              </span>
              <h3 className="text-white text-3xl lg:text-4xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Precision HVAC Engineering <br />Since 2001
              </h3>
              <p className="text-blue-100/70 text-base leading-relaxed mb-10">
                From high-precision pharmaceutical clean rooms to luxury hospitality landmarks, Rakshith has successfully delivered hundreds of critical infrastructure projects across South India.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-[#0072bc] text-white font-bold rounded-lg hover:bg-[#005fa3] shadow-2xl shadow-black/30 text-sm tracking-wide transition-all"
                >
                  Submit Project Inquiry
                </a>
                <a
                  href="#about"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 text-sm transition-all"
                >
                  View Case Studies
                </a>
              </div>
            </div>

            {/* Floating Stat Ring */}
            <div className="flex-shrink-0 relative hidden lg:block">
              <div className="w-56 h-56 rounded-full border border-white/10 flex flex-col items-center justify-center p-8 text-center animate-pulse">
                <span className="text-4xl font-extrabold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>500+</span>
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mt-2">Projects <br /> Delivered</span>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#0072bc] rounded-full flex items-center justify-center text-white shadow-xl transition-transform hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

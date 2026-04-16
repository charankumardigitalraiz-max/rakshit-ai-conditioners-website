const categories = [
  {
    id: 'room-ac',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Precision Room Cooling',
    desc: 'High-efficiency split systems engineered for silent, consistent performance in residential and executive spaces.',
    href: '#room-ac',
  },
  {
    id: 'commercial-ac',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Enterprise Solutions',
    desc: 'Advanced VRF, Cassette, and Ducted systems designed for scalable commercial environments and retail architecture.',
    href: '#commercial-ac',
  },
  {
    id: 'central-ac',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Industrial HVAC',
    desc: 'Certified central plant solutions for critical clean rooms, pharma facilities, and large-scale industrial complexes.',
    href: '#central-ac',
  },
  {
    id: 'ventilation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Technical Ventilation',
    desc: 'Specialized industrial exhaust, basement ventilation, and smoke extraction systems engineered for safety.',
    href: '#ventilation',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-10 h-0.5 bg-[#0072bc]"></span>
            <span className="text-[#0072bc] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Precision <span className="text-[#0072bc]">HVAC Engineering</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From bespoke residential comfort to critical industrial climate control, Rakshith provides vertically integrated HVAC services including design, installation, and lifecycle maintenance.
          </p>
        </div>

        {/* Categories Grid - Minimalist & Modern */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group relative p-8 bg-white border border-gray-100 rounded-lg hover:border-[#0072bc]/30 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-lg mb-6 bg-blue-50 text-[#0072bc] group-hover:bg-[#0072bc] group-hover:text-white transition-all duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0072bc] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {cat.desc}
                </p>
                <div className="flex items-center text-[#0072bc] text-xs font-bold uppercase tracking-wider gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Service Details
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                 <div className="w-24 h-24 transform translate-x-1/3 -translate-y-1/3">
                    {cat.icon}
                 </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA Banner - Professional & Dark */}
        <div className="mt-12 relative p-10 lg:p-14 bg-[#002f54] overflow-hidden rounded-lg group">
          <div className="absolute inset-0 bg-[#0072bc] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left max-w-2xl">
              <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Engineering the Future of Climate Control
              </h3>
              <p className="text-blue-100/70 text-base leading-relaxed">
                Connect with our senior engineering team for a comprehensive technical assessment of your project requirements.
              </p>
            </div>
            <a
              href="#contact"
              className="px-10 py-4 bg-white text-[#002f54] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-2xl shadow-black/20 text-sm tracking-wide whitespace-nowrap"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Consult an Engineer
            </a>
          </div>
          {/* Decorative Background Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#0072bc]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}

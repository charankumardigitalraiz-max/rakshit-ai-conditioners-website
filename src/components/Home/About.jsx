const branches = [
  'Hyderabad (HQ)', 'Rajahmundry', 'Bengaluru', 'Khammam',
  'Chennai', 'Tirupati', 'Visakhapatnam', 'Vijayawada',
]

const specialties = [
  'Pharma Industries',
  'Cold Room Solutions',
  'Clean Room Solutions',
  'Basement Ventilation',
  'Staircase Ventilation',
  'Hot Water Generator',
  'Industrial Establishments',
  'Luxury Villas & Apartments',
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-10 h-0.5 bg-[#0072bc]"></span>
              <span className="text-[#0072bc] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Corporate Profile</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Welcome to <span className="text-[#0072bc]">Rakshith Air Conditioners</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed mb-10 text-base">
              <p>
                Rakshith is a premier <strong>Air Conditioning Solution provider</strong> with over a decade of industry-shaping experience. Headquartered in Hyderabad with a robust presence across South India, we deliver high-precision HVAC engineering for critical environments.
              </p>
              <p>
                As an <strong>authorized Daikin partner</strong> since 2007, we specialize in high-complexity projects for Pharma Industries, Cold Room Solutions, Clean Room environments, and high-end commercial architecture.
              </p>
            </div>

            {/* Specialty Icons - High-Fidelity SVGs */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { 
                  title: 'Pharma & Clean Room', 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.27a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.168 1.168a2 2 0 00-.547 1.022l-.477 2.387a2 2 0 00.547 1.022l1.168 1.168a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.675-.27a6 6 0 013.86-.517l2.388.477a2 2 0 001.022-.547l1.168-1.168a2 2 0 00.547-1.022l.477-2.387a2 2 0 00-.547-1.022l-1.168-1.168zM12 13V4.5M12 4.5l-3 3M12 4.5l3 3" />
                    </svg>
                  )
                },
                { 
                  title: 'Industrial Solutions', 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                { 
                  title: 'Commercial Cooling', 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                { 
                  title: 'Luxury Residential', 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )
                },
              ].map((s) => (
                <div key={s.title} className="flex items-center gap-3 p-4 bg-gray-50/50 border border-gray-100 hover:border-[#0072bc]/30 hover:bg-blue-50/30 transition-all rounded-xl group/item">
                  <div className="text-[#0072bc] group-hover/item:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <span className="text-[13px] font-semibold text-gray-700 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>{s.title}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0072bc] text-white font-bold uppercase tracking-widest rounded-xl hover:bg-[#005fa3] shadow-xl hover:-translate-y-0.5 text-xs transition-all"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Corporate Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-blue-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest leading-tight">
                  Trusted by 500+ <br /> Enterprise Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right – High-Fidelity Image Composition */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl skew-y-1 lg:skew-y-0 group">
              <img 
                src="/banner/hero_ac_interior_1776336133282.png" 
                alt="Rakshith Professional Environment" 
                className="w-full h-[520px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-8 border-l-4 border-[#0072bc] shadow-2xl rounded-r-xl">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-[#0072bc]" style={{ fontFamily: 'Outfit, sans-serif' }}>17+</div>
                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em] mt-2">Years Excellence</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#0072bc]" style={{ fontFamily: 'Outfit, sans-serif' }}>8+</div>
                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em] mt-2">Regional Offices</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#0072bc]/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-20">

      {/* Decorative SVG Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0072bc" />
            <stop offset="100%" stopColor="#4ab0ff" />
          </linearGradient>
        </defs>
      </svg>

      {/* Premium Hero Header */}
      <div className="relative py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="w-12 h-0.5 bg-[#0072bc]"></span>
              <span className="text-[#0072bc] text-xs font-bold uppercase tracking-[0.4em]">Corporate Overview</span>
              <span className="w-12 h-0.5 bg-[#0072bc]"></span>
            </div>
            <h1 className="text-gray-900 text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Pioneering <span className="text-[#0072bc]">HVAC Excellence</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Rakshith Air Condition & Services has been delivering critical, high-precision thermal management and HVAC engineering solutions since 2011.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="bg-blue-50/50 px-6 py-3 rounded-full border border-blue-100 flex items-center gap-3">
                <span className="text-[#0072bc] font-bold text-xl">₹50Cr+</span>
                <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Annual Turnover</span>
              </div>
              <div className="bg-blue-50/50 px-6 py-3 rounded-full border border-blue-100 flex items-center gap-3">
                <span className="text-[#0072bc] font-bold text-xl">2011</span>
                <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Established</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro & Leadership Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-[-15deg] origin-bottom -mr-40 pointer-events-none shadow-2xl"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-[0.3em]">The Foundation</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                A legacy built on <span className="text-[#0072bc]">Precision & Trust</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  Initiated by <strong className="text-gray-900">Mr. Koppisetty Rajkamal</strong>, Rakshith embarked on its journey in 2011. Since its inception, the firm has metamorphosed into a premier HVAC solutions provider across South India.
                </p>
                <p>
                  Serving dual markets—commercial and luxury residential—our team executes high-complexity thermal setups including Pharma Clean Rooms, Cold Storages, and large-scale Basement Ventilation assemblies. Operating from our expansive Head Office in Miyapur, Telangana, and our flagship branch in Vijayawada, Andhra Pradesh, our footprint is geared towards unparalleled service accessibility.
                </p>
                <p>
                  As an esteemed <strong className="text-[#0072bc]">Daikin Channel Partner</strong>, our engineering protocols align with global standards, guaranteeing optimized lifecycle costs and peak environmental conditioning.
                </p>
              </div>

              {/* Leadership Signature/Badge */}
              <div className="mt-10 p-6 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,114,188,0.1)] border border-gray-100 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0072bc] flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 leading-none mb-1 cursor-default" style={{ fontFamily: 'Outfit, sans-serif' }}>Mr. Koppisetty Rajkamal</h4>
                  <span className="text-[11px] font-bold text-[#0072bc] uppercase tracking-widest">Managing Director</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
               {/* Decorative image/graphic placeholder */}
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative bg-gradient-to-tr from-[#002f54] to-[#0072bc]">
                  <img src="/banner/hero_ac_interior_1776336133282.png" className="w-full h-full object-cover mix-blend-overlay opacity-50" alt="Corporate Environment" />
                  <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 to-transparent">
                     <h3 className="text-white text-3xl font-bold mb-2">Our Mission</h3>
                     <p className="text-white/80 leading-relaxed text-sm">To design, map, and implement world-class climate control architectures with uncompromising reliability.</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Structural Organization */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Organizational <span className="text-[#0072bc]">Bandwidth</span>
            </h2>
            <p className="text-gray-500">
              Our workforce is meticulously divided into specialized action forces to handle parallel large-scale operations with zero compromise on quality and promptness.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             {/* Dynamic Cards */}
             {[
               { id: 1, val: 10, label: 'VRV Team' },
               { id: 2, val: 6, label: 'Non-VRV Team' },
               { id: 3, val: 75, label: 'Installation Experts' },
               { id: 4, val: 24, label: 'Service Engineers' },
               { id: 5, val: 15, label: 'Admin & Accounts' },
               { id: 6, val: 5, label: 'Marketing' },
             ].map((stat) => (
                <div key={stat.id} className="group relative bg-[#f8fbff] rounded-2xl p-6 border border-blue-100 hover:border-[#0072bc]/30 hover:shadow-xl transition-all duration-500 text-center flex flex-col justify-center min-h-[140px] overflow-hidden">
                   <div className="absolute inset-0 bg-[#0072bc]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="relative z-10">
                      <div className="text-4xl font-black text-[#0072bc] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{stat.val}</div>
                      <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{stat.label}</div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Technical Specialities Core */}
      <section className="py-24 bg-[#0a1118] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0072bc]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Core Domains</span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Engineering Specialities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: 'Pharma Industries', desc: 'Regulated thermal environments and FDA-compliant clean room conditioning mechanisms.' },
               { title: 'Cold Room Solutions', desc: 'Ultra-low temperature storage architectures for biologicals, perishables, and critical materials.' },
               { title: 'Basement Ventilation', desc: 'Heavy-duty air extraction and CO purging systems for deep foundation facilities.' },
               { title: 'Staircase Pressurization', desc: 'Advanced fire-safety smoke extraction and positive pressure routing.' },
               { title: 'Clean Room Setup', desc: 'High-HEPA filtered, particle-free environments for semiconductors and laboratories.' },
               { title: 'Luxury Condominiums', desc: 'Aesthetically concealed, whisper-quiet VRV cooling for premium residential spaces.' },
               { title: 'Hot Water Generators', desc: 'Industrial-scale heating matrices bundled with thermal recovery loops.' },
               { title: 'Commercial Establishments', desc: 'High-efficiency centralized plants for malls, tech parks, and corporate hubs.' },
             ].map((spec, i) => (
               <div key={i} className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{spec.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{spec.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Infrastructure CTA */}
      <div className="bg-[#002f54] py-20 text-center relative overflow-hidden text-white border-t border-white/10">
         <div className="max-w-3xl mx-auto px-5 relative z-10">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Ready to integrate with industry leaders?
          </h2>
          <p className="text-blue-100/60 mb-10 text-lg">
            HQ: Plot no-41, Laxmi Nagar, Miyapur, Hyderabad | Branch: Vijayawada
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#0072bc] text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-white hover:text-[#002f54] hover:-translate-y-1 transition-all shadow-2xl shadow-blue-500/20"
          >
            Connect With Administration
          </a>
        </div>
      </div>
    </div>
  )
}

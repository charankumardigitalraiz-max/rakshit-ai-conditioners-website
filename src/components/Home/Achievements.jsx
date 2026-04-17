import React from 'react'

const awards = [
  { id: 1, img: '/achievements/1.png' },
  { id: 2, img: '/achievements/2.png' },
  { id: 3, img: '/achievements/3.png' },
  { id: 4, img: '/achievements/4.png' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-10 h-0.5 bg-[#0072bc]"></span>
            <span className="text-[#0072bc] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Milestones</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Corporate <span className="text-[#0072bc]">Achievements</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl">
            Our commitment to engineering excellence is recognized by the industry. As a premier Daikin Tier 1 partner, we consistently set standards in HVAC delivery and service.
          </p>
        </div>

        {/* Awards Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {awards.map((award) => (
            <div
              key={award.id}
              className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#0072bc]/30 hover:shadow-[0_32px_64px_-16px_rgba(0,114,188,0.18)]"
              style={{ boxShadow: '0 2px 16px -4px rgba(0,0,0,0.06)' }}
            >
              {/* Top gradient ribbon */}
              <div className="h-1 w-full bg-gradient-to-r from-[#0072bc] via-sky-400 to-[#0072bc] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shine sweep */}
              <div
                className="pointer-events-none absolute inset-0 z-20"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.55) 50%, transparent 60%)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.7s ease',
                }}
                data-shine
              />
              <style>{`
                .group:hover [data-shine] { transform: translateX(100%) !important; }
              `}</style>

              {/* Image area */}
              <div className="relative flex items-center justify-center p-5 aspect-square overflow-hidden">
                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,114,188,0.07)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Pulsing ring on hover */}
                <div className="absolute inset-4 rounded-full ring-1 ring-[#0072bc]/0 group-hover:ring-[#0072bc]/15 group-hover:scale-110 transition-all duration-700" />

                <img
                  src={award.img}
                  alt={`Award ${award.id}`}
                  className="relative z-10 w-[82%] h-[82%] object-contain transition-transform duration-700 group-hover:scale-[1.08]"
                  style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.08))' }}
                />
              </div>

              {/* Footer label */}
              <div className="border-t border-gray-50 px-4 py-3 flex items-center justify-between bg-gray-50/60 group-hover:bg-blue-50/40 transition-colors duration-500">
                <span
                  className="text-[11px] font-700 text-gray-400 uppercase tracking-widest group-hover:text-[#0072bc] transition-colors duration-300"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                >
                  Certified
                </span>
                <span className="w-5 h-5 rounded-full bg-[#0072bc]/0 group-hover:bg-[#0072bc]/10 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-3 h-3 text-[#0072bc] opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Strip */}
        {/* <div className="mt-16 pt-10 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0072bc]">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                 </svg>
              </div>
              <div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Authenticated By</div>
                 <div className="text-gray-900 font-bold text-sm tracking-tight">ISO 9001:2015 Standards</div>
              </div>
           </div>
           
           <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center md:text-right">
             Top Performance Partner <br /> South India Region
           </div>
        </div> */}
      </div>
    </section>
  )
}

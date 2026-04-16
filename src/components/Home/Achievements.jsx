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
              className="group relative bg-gray-50 rounded-2xl p-2 border border-gray-100/50 hover:border-[#0072bc]/20 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle glass effect backdrop */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-blue-50/50 to-transparent transition-opacity duration-500"></div>
              
              <div className="relative z-10 aspect-square overflow-hidden rounded-xl bg-white shadow-sm flex items-center justify-center">
                <img 
                  src={award.img} 
                  alt={`Award ${award.id}`} 
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors"></div>
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

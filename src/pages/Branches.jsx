import React, { useState } from 'react'
import PageTransition from '../components/ui/PageTransition'

const branchImages = [
  '/branch/WhatsApp Image 2026-04-22 at 5.30.19 PM (1).jpeg',
  '/branch/WhatsApp Image 2026-04-22 at 5.30.19 PM (2).jpeg',
  '/branch/WhatsApp Image 2026-04-22 at 5.30.19 PM.jpeg',
  '/branch/WhatsApp Image 2026-04-22 at 5.30.20 PM.jpeg',
  '/branch/WhatsApp Image 2026-04-22 at 5.30.21 PM (1).jpeg',
  '/branch/WhatsApp Image 2026-04-22 at 5.30.21 PM (2).jpeg',
  '/branch/WhatsApp Image 2026-04-22 at 5.30.21 PM.jpeg',
  '/branch/WhatsApp Image 2026-04-22 at 5.30.22 PM.jpeg',
  '/branch/WhatsApp Image 2026-04-22 at 5.30.23 PM (1).jpeg',
  '/branch/WhatsApp Image 2026-04-22 at 5.30.23 PM.jpeg',
]

const videoFile = '/branch/WhatsApp Video 2026-04-22 at 5.30.24 PM.mp4'

export default function Branches() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#002f54] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002f54] to-transparent z-10" />
        <div className="absolute inset-0 opacity-20">
          {/* We can use the branch video as a subtle hero background loop here */}
          <video 
            src={videoFile} 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-0.5 bg-white"></span>
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Regional Infrastructure</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our <span className="text-blue-300">Branch Network</span>
            </h1>
            <p className="text-blue-100/80 text-lg leading-relaxed max-w-lg mb-8">
              Explore our state-of-the-art facilities, service hubs, and regional operations dedicated to delivering exceptional HVAC solutions across South India.
            </p>
          </div>
        </div>
      </section>

      {/* Media Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>Facility Highlights</h2>
             <p className="text-gray-500 text-sm leading-relaxed">
               Take a look inside our branches. Our advanced infrastructure and dedicated engineering environments represent our commitment to quality.
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Featured Video Card */}
            <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group lg:col-span-2 lg:row-span-2">
               <video 
                  src={videoFile} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002f54]/90 via-transparent to-transparent flex flex-col justify-end p-8">
                   <div className="w-12 h-12 rounded-full bg-[#0072bc] flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30">
                      <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4l12 6-12 6z" />
                      </svg>
                   </div>
                   <h3 className="text-white text-xl font-bold tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>Branch Operations Overview</h3>
                   <p className="text-blue-200/80 text-[11px] font-bold uppercase tracking-wider mt-1">Video Tour</p>
                </div>
            </div>

            {/* Image Cards */}
            {branchImages.map((src, idx) => (
              <div 
                key={idx}
                onClick={() => setLightbox(src)}
                className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in group bg-white border border-gray-100"
              >
                <img 
                  src={src} 
                  alt={`Branch Facility ${idx + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg scale-90 group-hover:scale-100 text-[#0072bc]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox for zooming into branch photos */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); const idx = branchImages.findIndex(i => i === lightbox); setLightbox(branchImages[(idx - 1 + branchImages.length) % branchImages.length]) }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); const idx = branchImages.findIndex(i => i === lightbox); setLightbox(branchImages[(idx + 1) % branchImages.length]) }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox}
              alt="Branch Regional Detail"
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </PageTransition>
  )
}

import React, { useState } from 'react'

const images = [
  { id: 1, src: '/gallary/1.png', alt: 'Daikin VRV Installation Project', span: 'md:row-span-2' },
  { id: 2, src: '/gallary/2.png', alt: 'Commercial HVAC Setup' },
  { id: 3, src: '/gallary/3.png', alt: 'Precision Cooling System' },
  { id: 4, src: '/gallary/4.png', alt: 'Industrial Air Conditioning', span: 'md:col-span-2' },
  // { id: 5, src: '/gallary/5.png', alt: 'Residential Climate Solution' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-0.5 bg-[#0072bc]"></span>
              <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Our Work</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Success Highlights
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              A visual showcase of our precision-engineered HVAC installations across industrial, commercial, and residential spaces.
            </p>
          </div>
          {/* <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            <span className="w-2 h-2 bg-[#0072bc] rounded-full animate-pulse"></span>
            Daikin Authorized Installations
          </div> */}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[240px] gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => setLightbox(img)}
              className={`relative overflow-hidden rounded-3xl cursor-zoom-in group ${img.span || ''}`}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002f54]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <p className="text-white font-semibold text-[13px] tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {img.alt}
                </p>
                <div className="flex items-center gap-2 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  <span className="text-blue-300 text-[10px] font-bold uppercase tracking-wider">View Full</span>
                  <svg className="w-3 h-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Corner badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/30">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
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
            onClick={(e) => { e.stopPropagation(); const idx = images.findIndex(i => i.id === lightbox.id); setLightbox(images[(idx - 1 + images.length) % images.length]) }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); const idx = images.findIndex(i => i.id === lightbox.id); setLightbox(images[(idx + 1) % images.length]) }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl px-8 py-6">
              <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>{lightbox.alt}</p>
              <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">
                {images.findIndex(i => i.id === lightbox.id) + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

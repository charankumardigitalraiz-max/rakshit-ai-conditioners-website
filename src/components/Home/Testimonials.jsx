import React, { useState, useRef, useEffect } from 'react'

const testimonials = [
  { id: 1, src: '/testimonials/1.jpg', alt: 'Client Review 1' },
  { id: 2, src: '/testimonials/2.webp', alt: 'Client Review 2' },
  { id: 3, src: '/testimonials/3.webp', alt: 'Client Review 3' },
  { id: 4, src: '/testimonials/4.webp', alt: 'Client Review 4' },
]

export default function Testimonials() {
  const [lightbox, setLightbox] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef(null)

  // Continuous smooth scroll logic
  useEffect(() => {
    let animationFrameId;
    
    const smoothScroll = () => {
      if (scrollRef.current && !isHovered) {
        const { scrollLeft, scrollWidth } = scrollRef.current;
        
        // When we've scrolled exactly halfway, seamlessly reset to the beginning.
        if (scrollLeft >= scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        } else {
          // You can change 1 to a floating point number for slower/faster speed
          scrollRef.current.scrollLeft += 1; 
        }
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current
      const scrollTo = direction === 'left'
        ? scrollLeft - 350
        : scrollLeft + 350

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="testimonials" className="py-5 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-0.5 bg-[#0072bc]"></span>
              <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Client Feedback</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              What Our <span className="text-[#0072bc]">Clients Say</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
              Discover real experiences from our clients. We take pride in delivering exceptional HVAC solutions that earn the trust and positive feedback of those we serve.
            </p>
          </div>


        </div>

        {/* Horizontal Scrolling Gallery */}
        <div 
          className="relative group/gallery"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons (Sides) */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-[-10px] sm:left-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gray-200 flex flex-shrink-0 items-center justify-center text-gray-400 hover:border-[#0072bc] hover:text-[#0072bc] transition-all bg-white shadow-lg opacity-0 group-hover/gallery:opacity-100 hidden md:flex"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-[-10px] sm:right-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gray-200 flex flex-shrink-0 items-center justify-center text-gray-400 hover:border-[#0072bc] hover:text-[#0072bc] transition-all bg-white shadow-lg opacity-0 group-hover/gallery:opacity-100 hidden md:flex"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 no-scrollbar py-4 items-center"
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => setLightbox(item)}
                className="flex-shrink-0 group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-zoom-in h-[160px] sm:h-[200px] md:h-[240px]"
              >
                {/* Image area only - no background, auto width based on proportion! */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-auto max-w-[85vw] object-contain rounded-2xl transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg scale-90 group-hover:scale-100 text-[#0072bc] z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Hint for more content on right */}
          <div className="absolute right-0 top-0 bottom-12 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none group-hover/gallery:opacity-0 transition-opacity" />
        </div>
      </div>

      {/* Lightbox for zooming into reviews */}
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
            onClick={(e) => { e.stopPropagation(); const idx = testimonials.findIndex(i => i.id === lightbox.id); setLightbox(testimonials[(idx - 1 + testimonials.length) % testimonials.length]) }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); const idx = testimonials.findIndex(i => i.id === lightbox.id); setLightbox(testimonials[(idx + 1) % testimonials.length]) }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg text-center">
              <p className="text-white/70 text-[12px] font-bold uppercase tracking-widest mt-1">
                Review {testimonials.findIndex(i => i.id === lightbox.id) + 1} of {testimonials.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

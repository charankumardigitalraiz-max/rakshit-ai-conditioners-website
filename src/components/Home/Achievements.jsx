import React, { useRef, useEffect } from 'react'

const awards = [
  { id: 1, img: '/achievements/1.png' },
  { id: 2, img: '/achievements/2.png' },
  { id: 3, img: '/achievements/3.png' },
  { id: 4, img: '/achievements/4.png' },
  { id: 5, img: '/achievements/4.png' },
]

export default function Achievements() {
  const scrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        
        // If we're near the end, reset to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          scrollRef.current.scrollTo({
            left: scrollLeft + 300,
            behavior: 'smooth'
          });
        }
      }
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - 300
        : scrollLeft + 300;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="achievements" className="py-2 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-0.5 bg-[#0072bc]"></span>
              <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Corporate Milestones</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              National <span className="text-[#0072bc]">Recognition</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
              Our commitment to engineering excellence is consistently recognized by Daikin and industry bodies, setting the benchmark for HVAC delivery in South India.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#0072bc] hover:text-[#0072bc] transition-all bg-white shadow-sm"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#0072bc] hover:text-[#0072bc] transition-all bg-white shadow-sm"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative group/gallery">
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-12 snap-x no-scrollbar scroll-smooth"
          >
            {awards.map((award) => (
              <div
                key={award.id}
                className="flex-shrink-0 w-[240px] sm:w-[280px] snap-start group relative bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-500 hover:border-[#0072bc]/30 hover:shadow-[0_40px_80px_-20px_rgba(0,114,188,0.15)]"
              >
                {/* Top Accent */}
                <div className="h-1.5 w-full bg-[#0072bc] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image area */}
                <div className="relative flex items-center justify-center p-8 aspect-square">
                  {/* Radial Backdrop */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,114,188,0.03)_0%,_transparent_70%)]" />

                  {/* Pulsing Base */}
                  <div className="absolute inset-6 rounded-full border border-blue-50 group-hover:scale-125 transition-transform duration-1000 group-hover:border-[#0072bc]/10" />

                  <img
                    src={award.img}
                    alt={`Award ${award.id}`}
                    className="relative z-10 w-[75%] h-[75%] object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-xl"
                  />
                </div>

                {/* Card Branding */}
                <div className="px-6 py-5 bg-gray-50/50 group-hover:bg-blue-50/40 transition-colors border-t border-gray-50 flex items-center justify-between">
                  <div>
                    <h4 className="text-[12px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>Official Certification</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Premium Partner</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm text-[#0072bc] group-hover:bg-[#0072bc] group-hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hint for more content on right */}
          <div className="absolute right-0 top-0 bottom-12 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none group-hover/gallery:opacity-0 transition-opacity" />
        </div>
      </div>
    </section>



  )
}

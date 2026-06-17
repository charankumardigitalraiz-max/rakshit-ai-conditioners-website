import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAchievements } from '../../redux/achievementsSlice'
import { getImageUrl } from '../../services/api'

export default function Achievements() {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(1.8)'
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: 'center center',
      transform: 'scale(1)'
    });
  };

  const dispatch = useDispatch();
  const achievements = useSelector((state) => state.achievements.items)
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



  useEffect(() => {
    dispatch(fetchAchievements())
  }, [])

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
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
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
            {achievements.map((item) => (
              <div
                key={item._id}
                className="flex-shrink-0 w-[220px] sm:w-[260px] snap-start group relative bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-500 hover:border-[#0072bc]/30 hover:shadow-[0_40px_80px_-20px_rgba(0,114,188,0.15)]"
              >
                {/* Top Accent */}
                <div className="h-1.5 w-full bg-[#0072bc] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image area */}
                <div className="relative flex items-center justify-center p-4 aspect-square"
                  onClick={() => { setModalImg(getImageUrl(item.image)); setIsModalOpen(true); }}>
                  {/* Radial Backdrop */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,114,188,0.03)_0%,_transparent_70%)]" />

                  {/* Pulsing Base */}
                  <div className="absolute inset-4 rounded-full border border-blue-50 group-hover:scale-110 transition-transform duration-1000 group-hover:border-[#0072bc]/10" />

                  {/* Year Badge */}
                  {item.year && (
                    <span className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 px-2.5 py-1 bg-[#0072bc] text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-lg shadow-[#0072bc]/30 ring-2 ring-white">
                      <svg className="w-3 h-3 opacity-90" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {item.year}
                    </span>
                  )}

                  <img
                    src={getImageUrl(item.image)}
                    alt={item.title || 'Achievement award'}
                    className="relative z-10 w-full h-full object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-xl"
                  />
                  {/* View Image Button */}
                  <button
                    onClick={() => { setModalImg(getImageUrl(item.image)); setIsModalOpen(true); }}
                    className="absolute top-2 right-2 p-1 bg-white/70 rounded-full hover:bg-white transition-colors z-10"
                    aria-label="View image"
                  >
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>

                {/* Card Branding */}
                <div className="px-5 py-4 bg-gray-50/50 group-hover:bg-blue-50/40 transition-colors border-t border-gray-50 flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[12px] font-bold text-gray-900 tracking-tight line-clamp-2 leading-snug" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {item.title || 'Official Certification'}
                    </h4>
                    {item.description && (
                      <p className="text-[12px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
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

          {/* Image Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setIsModalOpen(false)}>
              <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden p-2 shadow-2xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <div className="overflow-hidden rounded-xl max-h-[calc(85vh-16px)] w-full flex items-center justify-center bg-gray-50">
                  <img 
                    src={modalImg} 
                    alt="Preview" 
                    className="max-w-full max-h-[80vh] object-contain transition-transform duration-100 ease-out cursor-zoom-in" 
                    style={zoomStyle}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <button 
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors z-10" 
                  onClick={() => setIsModalOpen(false)} 
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
          {/* Hint for more content on right */}
          <div className="absolute right-0 top-0 bottom-12 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none group-hover/gallery:opacity-0 transition-opacity" />
        </div>
      </div>
    </section>



  )
}

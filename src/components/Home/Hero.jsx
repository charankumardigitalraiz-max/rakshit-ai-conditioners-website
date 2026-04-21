import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative h-[70vh] sm:h-screen flex items-center justify-start overflow-hidden">

      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner/rakshith_hero_bg_v2_1776336794838.png"
          alt="Rakshith HVAC Solutions - Modern AC Interior"
          fetchpriority="high"
          className="w-full h-full object-cover object-right"
        />
        {/* Left-focused gradient + Top Contrast Shelf */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, #002f54 0%, #002f54ee 20%, #0072bccc 40%, #0072bc55 55%, transparent 70%),
              linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 150px)
            `,
          }}
        ></div>
        {/* Very subtle overall darkening for text contrast */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Subtle horizontal separator line (like the reference) */}
      <div className="absolute top-[88px] left-0 right-0 h-px bg-white/15 z-20"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl">

          <h1
            className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold tracking-tight leading-[1.15] mb-3 sm:mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Experience Ultimate Comfort with Smart Cooling Solutions
          </h1>

          <p className="text-blue-100/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-7 max-w-md font-light">
            Authorized Daikin partner providing energy-efficient HVAC design, installation, and 24/7 service for homes and businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="/store"
              className="px-8 py-3.5 bg-[#0072bc] text-white text-sm font-semibold tracking-wide transition-all shadow-lg hover:bg-[#005fa3] hover:-translate-y-0.5 inline-flex justify-center items-center"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Explore Products
            </a>

            <a
              href="services/approach"
              className="px-8 py-3.5 bg-transparent border border-white/60 text-white text-sm font-semibold tracking-wide transition-all hover:bg-white hover:text-[#0072bc] hover:border-white inline-flex justify-center items-center"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View Our Services
            </a>
          </div>

        </div>
      </div>

    </section>
  )
}

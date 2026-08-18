import React from 'react'
import { Link } from 'react-router-dom'

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
            className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[3.20rem] font-bold tracking-tight leading-[1.15] mb-3 sm:mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          ><br></br>
          <br></br>
            Experience Ultimate Comfort with Smart Cooling Solutions
          </h1>

          <p className="text-blue-100/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-7 max-w-md font-light">
            Authorized Daikin partner providing energy-efficient HVAC design, installation, and 24/7 service for homes and businesses.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4">
            <Link
              to="/store"
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-fit px-8 py-3.5 rounded-xl bg-white text-[#0072bc] text-sm font-bold tracking-wide shadow-[0_8px_32px_rgba(0,0,0,0.18)] hover:bg-blue-50 hover:shadow-[0_12px_40px_rgba(0,114,188,0.28)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Explore Products
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3">
              <Link
                to="/services/approach"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                View Our Services
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                About Rakshith
              </Link>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

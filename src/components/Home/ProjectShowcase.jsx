import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProjectShowcase() {
  const allProjects = useSelector((state) => state.projects.items)
  const featuredProjects = allProjects.slice(0, 4) // First 4 as requested

  return (
    <section id="project-showcase" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header Container */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#0072bc]"></span>
              <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Portfolio</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Landmark <span className="text-[#0072bc]">Projects</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Delivering precision HVAC engineering for iconic modern infrastructure and corporate hubs.
            </p>
          </div>

          <Link
            to="/projects"
            className="group flex items-center gap-2 text-xs font-bold text-[#0072bc] uppercase tracking-wider hover:text-[#005fa3] transition-colors"
          >
            All Projects
            <div className="w-8 h-8 rounded-full border border-blue-100 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Project Grid - Compact 4 Column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group relative bg-[#002f54] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500">

              {/* Image Container - Taller upright cards */}
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                {/* Visual Overlay - Stronger at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>

                {/* Metadata Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-50/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#0072bc] uppercase tracking-wider border border-blue-100/30 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Seamless Hover Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-14 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-200 text-[10px] font-semibold tracking-widest uppercase truncate">{project.location}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {project.title}
                </h3>

                {/* Hidden description that reveals smoothly on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-2">
                    {project.details}
                  </p>

                  {/* <Link
                    to="/projects"
                    className="inline-flex items-center gap-1.5 text-white text-[9px] font-bold uppercase tracking-[0.2em] group/btn"
                  >
                    View Details
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center transition-transform group-hover/btn:translate-x-1 group-hover/btn:bg-blue-500">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </Link> */}
                </div>
              </div>

              {/* Bottom Card Shadow Color Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0072bc] transition-all duration-700 group-hover:w-full z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProjectShowcase() {
  const allProjects = useSelector((state) => state.projects.items)
  const featuredProjects = allProjects.slice(0, 4) // First 4 as requested

  return (
    <section id="project-showcase" className="py-16 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header Container */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-0.5 bg-[#0072bc]"></span>
              <span className="text-[#0072bc] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Portfolio</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Landmark <span className="text-[#0072bc]">Projects</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Delivering precision HVAC engineering for iconic residential complexes, high-fidelity corporate hubs, and critical institutional infrastructure.
            </p>
          </div>

          <Link
            to="/projects"
            className="group flex items-center gap-3 text-sm font-bold text-[#0072bc] uppercase tracking-widest hover:text-[#005fa3] transition-colors"
          >
            Explore All Projects
            <div className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-700">

              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Metadata Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-[#0072bc] uppercase tracking-widest shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100/60 text-xs font-semibold tracking-tight">{project.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 opacity-0 opacity-100 transition-opacity duration-700 underline-offset-4 decoration-blue-500/50">
                  {project.details}
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-[0.2em] opacity-100 transition-all duration-700 translate-y-0"
                >
                  Project Details
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Bottom Card Shadow Accent */}
              <div className="h-1.5 w-0 bg-[#0072bc] transition-all duration-700 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

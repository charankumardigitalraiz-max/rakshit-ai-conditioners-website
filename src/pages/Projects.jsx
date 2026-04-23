import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PageTransition from '../components/ui/PageTransition'
import SectionTransition from '../components/ui/SectionTransition'
import { fetchProjects } from '../redux/projectsSlice'
import { getImageUrl } from '../services/api'

export default function Projects() {
  const dispatch = useDispatch()
  const allProjects = useSelector((state) => state.projects.items)
  const projectStatus = useSelector((state) => state.projects.status)
  const projectError = useSelector((state) => state.projects.error)

  useEffect(() => {
    if (projectStatus === 'idle') {
      dispatch(fetchProjects())
    }
  }, [dispatch, projectStatus])

  const filteredProjects = allProjects

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-20">

        {/* Premium Portfolio Header */}
        <div className="relative py-12 lg:py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-3 mb-6 justify-center">
                <span className="w-12 h-0.5 bg-[#0072bc]"></span>
                <span className="text-[#0072bc] text-xs font-bold uppercase tracking-[0.4em]">Project Portfolio</span>
                <span className="w-12 h-0.5 bg-[#0072bc]"></span>
              </div>
              <h1 className="text-gray-900 text-5xl lg:text-6xl font-black mb-6 tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Precision in <span className="text-[#0072bc]">Engineering</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                Explore our diverse portfolio of critical HVAC installations across South India. From educational campuses to high-fidelity medical centers and luxury residences.
              </p>
            </div>
          </div>
        </div>

        {/* Filter System - Corporate Minimalist */}
        {/* <div className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between overflow-x-auto no-scrollbar">
          <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100 flex-shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all ${filter === cat
                  ? 'bg-white text-[#0072bc] shadow-md ring-1 ring-gray-100'
                  : 'text-gray-400 hover:text-gray-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 text-gray-400 text-[10px] font-bold uppercase tracking-widest border-l border-gray-100 pl-8 ml-8">
            <span className="w-2 h-2 bg-[#0072bc] rounded-full"></span>
            {filteredProjects.length} Verified Installations
          </div>
        </div>
      </div> */}

        {/* Full Projects Gallery */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-2">
          {projectStatus === 'loading' && (
            <div className="py-14 text-center text-gray-500">Loading projects...</div>
          )}
          {projectStatus === 'failed' && (
            <div className="py-14 text-center text-red-500">{projectError || 'Failed to load projects.'}</div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredProjects.map((project, index) => (
              <SectionTransition key={project.id} delay={index * 0.1}>
                <div className="group flex flex-col h-full bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:border-[#0072bc]/20 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700">

                  {/* Image & Detail Overlay */}
                  <div className="relative aspect-video overflow-hidden bg-gray-50">
                    <img
                      src={getImageUrl(project.image)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="bg-blue-50/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#0072bc] uppercase tracking-wider border border-blue-100/30 shadow-sm">
                        {typeof project.category === 'string' ? project.category : project.category?.name}
                      </span>
                    </div>
                  </div>

                  {/* Project Intelligence Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{project.location}</span>
                      </div>
                      <h3 className="text-xl font-[500] text-gray-900 group-hover:text-[#0072bc] transition-colors mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {project.title}
                      </h3>
                      <div className="h-0.5 w-12 bg-gray-100 group-hover:w-20 group-hover:bg-[#0072bc] transition-all duration-500 mb-6"></div>
                      <p className="text-sm text-gray-500 leading-relaxed font-normal">
                        {project.description || project.details || 'Project description not available.'}
                      </p>
                    </div>

                    {/* Visual Accent */}
                    {/* <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50">
                  <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">Authentication Verified</span>
                  <svg className="w-5 h-5 text-gray-100 group-hover:text-[#0072bc] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div> */}
                  </div>
                </div>
              </SectionTransition>
            ))}
          </div>
        </div>

        {/* Portfolio CTA */}
        {/* <div className="bg-[#002f54] py-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0072bc] to-transparent"></div>
          <div className="max-w-3xl mx-auto px-5 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Ready for your Next Landmark Project?
            </h2>
            <p className="text-blue-100/60 mb-10">
              Connect with our engineering specialists to discuss bespoke HVAC solutions for your infrastructure requirements.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#0072bc] text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-[#005fa3] hover:-translate-y-1 transition-all shadow-2xl shadow-blue-500/20"
            >
              Initiate Contact
            </a>
          </div>
        </div> */}
      </div>
    </PageTransition>
  )
}

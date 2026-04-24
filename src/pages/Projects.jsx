import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Calendar, Activity, Wind, Database, ArrowRight } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionTransition from '../components/ui/SectionTransition'
import { fetchProjects } from '../redux/projectsSlice'
import { getImageUrl } from '../services/api'

// Project Detail Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-500 hover:text-slate-900 hover:scale-110 transition-all border border-slate-100"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-slate-100">
              <img
                src={getImageUrl(project.image)}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none md:hidden" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto no-scrollbar">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#0072bc] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                  {typeof project.category === 'string' ? project.category : project.category?.name}
                </div>
                <h2 className="text-3xl font-black text-slate-900 leading-tight mb-4 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {project.title}
                </h2>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <MapPin size={16} className="text-blue-500" />
                  <span>{project.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={12} /> Duration
                  </p>
                  <p className="text-sm font-semibold text-slate-700">{project.duration || project.date || 'Project Period'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Activity size={12} /> Status
                  </p>
                  <p className="text-sm font-semibold text-slate-700">{project.status}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Wind size={12} /> System Type
                  </p>
                  <p className="text-sm font-semibold text-slate-700">{project.hvacSystemType || 'Not Specified'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Database size={12} /> Capacity
                  </p>
                  <p className="text-sm font-semibold text-slate-700">{project.totalCapacity || 'Not Specified'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Activity size={12} /> Horsepower (HP)
                  </p>
                  <p className="text-sm font-semibold text-slate-700">{project.hp || 'Not Specified'}</p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Project Overview</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description || project.details || 'No additional details available for this installation.'}
                </p>
              </div>

              <div className="mt-10">
                <button
                  onClick={onClose}
                  className="w-full py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all border border-slate-100/50"
                >
                  Close Report
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function Projects() {
  const dispatch = useDispatch()
  const allProjects = useSelector((state) => state.projects.items)
  const projectStatus = useSelector((state) => state.projects.status)
  const projectError = useSelector((state) => state.projects.error)

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (projectStatus === 'idle') {
      dispatch(fetchProjects())
    }
  }, [dispatch, projectStatus])

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = allProjects

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-20 pb-20">

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

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
              <SectionTransition key={project.id || project._id} delay={index * 0.1}>
                <div className="group flex flex-col h-full bg-white border border-slate-100/80 rounded-[2rem] overflow-hidden hover:border-blue-200/50 hover:shadow-[0_20px_50px_-12px_rgba(0,114,188,0.12)] transition-all duration-500 hover:-translate-y-1.5">

                  {/* Image & Detail Overlay */}
                  <div className="relative aspect-video overflow-hidden bg-gray-50">
                    <img
                      src={getImageUrl(project.image)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-bold text-[#0072bc] uppercase tracking-[0.1em] border border-white/20 shadow-sm">
                        {typeof project.category === 'string' ? project.category : project.category?.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">{project.location}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0072bc] transition-colors mb-3 line-clamp-2 leading-snug" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-3 mb-6">
                        {project.description || project.details || 'Project description not available.'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => openModal(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-[#0072bc] group/btn rounded-xl transition-all duration-300 border border-slate-100/50 hover:border-[#0072bc] shadow-sm hover:shadow-md hover:shadow-blue-500/10"
                      >
                        <span className="text-[10px] font-bold text-slate-500 group-hover/btn:text-white uppercase tracking-widest transition-colors">
                          View Details
                        </span>
                        <ArrowRight size={14} className="text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                      </button>
                    </div>
                  </div>
                </div>
              </SectionTransition>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}


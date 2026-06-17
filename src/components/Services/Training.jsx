import React, { useEffect, useState } from 'react'
import { useEnquiry } from '../../context/EnquiryContext'
import { fetchJSON } from '../../services/api'

export default function Training({ content, loading, error }) {
  const { openModal } = useEnquiry()

  const openTrainingEnquiry = () => {
    openModal({
      title: 'Training Enquiry',
      subtitle: 'Request enrollment or a corporate training batch.',
      interest: 'HVAC Training',
      message: 'I would like to inquire about HVAC training programs or corporate batch enrollment.',
    })
  }

  const openCourseEnquiry = (course) => {
    const details = [course.category, course.duration].filter(Boolean).join(' · ')
    openModal({
      title: 'Course Enquiry',
      subtitle: course.title,
      interest: 'HVAC Training',
      message: `I would like to inquire about the course "${course.title}"${details ? ` (${details})` : ''}.`,
    })
  }
  const [localContent, setLocalContent] = useState(null)
  const [localLoading, setLocalLoading] = useState(!content)
  const [localError, setLocalError] = useState(null)

  useEffect(() => {
    if (content) return

    const load = async () => {
      try {
        setLocalLoading(true)
        const res = await fetchJSON('/service-training')
        setLocalContent(res.data)
        setLocalError(null)
      } catch (err) {
        setLocalError(err.message || 'Failed to load training content')
      } finally {
        setLocalLoading(false)
      }
    }
    load()
  }, [content])

  const data = content || localContent
  const isLoading = loading ?? localLoading
  const loadError = error ?? localError

  if (isLoading) {
    return (
      <div className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center text-gray-400 text-sm animate-pulse">
          Loading training content...
        </div>
      </div>
    )
  }

  if (loadError || !data) {
    return (
      <div className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center text-gray-500 text-sm">
          {loadError || 'Training content is unavailable.'}
        </div>
      </div>
    )
  }

  const { hero, stats = [], catalog = {}, courses = [] } = data
  const sortedStats = [...stats].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  const sortedCourses = [...courses].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <div className="py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="bg-[#002f54] rounded-[2.5rem] p-8 lg:p-12 text-white mb-16 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,114,188,0.15)_0%,_transparent_65%)]" />
          <div className="relative z-10 max-w-3xl">
            {hero?.eyebrow && (
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 block">{hero.eyebrow}</span>
            )}
            {hero?.title && (
              <h3 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {hero.title}
              </h3>
            )}
            {hero?.description && (
              <p className="text-blue-100/80 text-sm leading-relaxed mb-6">
                {hero.description}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openTrainingEnquiry}
                className="px-6 py-3 bg-[#0072bc] hover:bg-blue-600 transition-colors rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                {hero?.ctaText || 'Enquire Now'}
              </button>
            </div>
          </div>
        </div>

        {sortedStats.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {sortedStats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="text-3xl font-black text-[#0072bc] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{stat.num}</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mb-12 border-l-4 border-[#0072bc] pl-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {catalog.title || 'Course Modules'}
          </h3>
          {catalog.description && (
            <p className="text-gray-500 text-sm">{catalog.description}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sortedCourses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:border-[#0072bc]/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {course.category && (
                    <span className="px-3 py-1 bg-blue-50 text-[#0072bc] text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-100">
                      {course.category}
                    </span>
                  )}
                  {course.duration && (
                    <span className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                  )}
                </div>

                {course.title && (
                  <h4 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {course.title}
                  </h4>
                )}

                {course.description && (
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    {course.description}
                  </p>
                )}

                {course.highlights?.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Key Takeaways</h5>
                    <ul className="grid grid-cols-2 gap-2">
                      {course.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-gray-600 flex items-start gap-1.5 leading-tight">
                          <span className="text-[#0072bc] font-bold">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                onClick={() => openCourseEnquiry(course)}
                className="w-full py-2.5 bg-gray-50 hover:bg-[#0072bc] hover:text-white transition-all text-xs font-bold uppercase tracking-wider text-[#0072bc] border border-gray-100 hover:border-[#0072bc] rounded-xl"
              >
                Inquire Course Details
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

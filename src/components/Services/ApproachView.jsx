import React, { useEffect, useState } from 'react'
import { fetchJSON, getImageUrl } from '../../services/api'

const resolveImage = (src) => {
  if (!src) return ''
  if (src.startsWith('http://') || src.startsWith('https://')) return src
  if (src.startsWith('/uploads')) return getImageUrl(src)
  return src
}

export default function ApproachView({ content, loading, error }) {
  const [localContent, setLocalContent] = useState(null)
  const [localLoading, setLocalLoading] = useState(!content)
  const [localError, setLocalError] = useState(null)

  useEffect(() => {
    if (content) return

    const load = async () => {
      try {
        setLocalLoading(true)
        const res = await fetchJSON('/service-approach')
        setLocalContent(res.data)
        setLocalError(null)
      } catch (err) {
        setLocalError(err.message || 'Failed to load approach content')
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
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center text-gray-400 text-sm animate-pulse">
          Loading approach content...
        </div>
      </section>
    )
  }

  if (loadError || !data) {
    return (
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center text-red-500 text-sm">
          {loadError || 'Approach content unavailable'}
        </div>
      </section>
    )
  }

  const pillars = [...(data.pillars || [])].sort((a, b) => (a.order || 0) - (b.order || 0))
  const steps = [...(data.steps || [])].sort((a, b) => (a.order || 0) - (b.order || 0))

  return (
    <section className="py-20 lg:py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {data.methodology?.title || 'Our Core'}{' '}
              <span className="text-[#0072bc]">{data.methodology?.highlight || 'Methodology'}</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              {data.methodology?.description}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] border border-gray-100 hover:border-[#0072bc]/30 hover:shadow-xl transition-all duration-500 overflow-hidden group"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={resolveImage(step.image)}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-12 border-l-4 border-[#0072bc] pl-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {data.roadmap?.title || 'The Execution Roadmap'}
            </h3>
            <p className="text-gray-500 text-sm">{data.roadmap?.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:border-[#0072bc]/30 hover:shadow-xl transition-all duration-500 group flex flex-col">
                <div className="w-full h-32 sm:h-36 overflow-hidden relative">
                  <img
                    src={resolveImage(step.image)}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0072bc]/90 backdrop-blur-sm text-white text-[10px] font-bold py-1 px-2.5 rounded-full">
                    {step.number}
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <h4 className="text-sm font-bold text-gray-900 mb-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>{step.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

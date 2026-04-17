import React from 'react'

const SolutionHighlights = ({ highlights }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
      {highlights.map((item, index) => (
        <div key={index} className="group p-8 bg-white border border-gray-100 rounded-[2rem] hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-1">
          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-[#0072bc] group-hover:bg-[#0072bc] group-hover:text-white transition-all duration-500">
            {item.icon}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default SolutionHighlights

import React from 'react'

const SeriesOverview = ({ series }) => {
  return (
    <div className="my-5">
      <div className="flex items-center gap-3 mb-10">
        <span className="w-10 h-0.5 bg-[#0072bc]"></span>
        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Explore the <span className="text-[#0072bc]"> Range</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {series.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col sm:flex-row items-center p-6 gap-8 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-700">
            <div className="w-full sm:w-1/3 aspect-square rounded-3xl overflow-hidden bg-white border border-gray-50 flex items-center justify-center p-4">
              {item.image ? (
                <img src={item.image} alt={item.title} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />
              ) : (
                <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] text-center">
                  {item.title} Illustration
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.specs.map((spec, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc]"></span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SeriesOverview

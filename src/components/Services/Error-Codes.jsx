import React, { useState, useEffect } from 'react'
import { fetchJSON } from '../../services/api'

const unitBadgeClass = (unit) => {
  if (unit === 'Indoor Unit') return 'bg-green-50 text-green-700 border-green-100'
  if (unit === 'Outdoor Unit') return 'bg-orange-50 text-orange-700 border-orange-100'
  return 'bg-purple-50 text-purple-700 border-purple-100'
}

export default function ErrorCodes() {
  const [errorCodesData, setErrorCodesData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedUnit, setSelectedUnit] = useState('All')

  useEffect(() => {
    const loadErrorCodes = async () => {
      try {
        setLoading(true)
        const res = await fetchJSON('/error-codes')
        setErrorCodesData(res.data || [])
        setError(null)
      } catch (err) {
        setError(err.message || 'Failed to load error codes')
      } finally {
        setLoading(false)
      }
    }
    loadErrorCodes()
  }, [])

  const filteredCodes = errorCodesData.filter((item) => {
    const matchesSearch = item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesUnit = selectedUnit === 'All' || item.unit === selectedUnit

    return matchesSearch && matchesUnit
  })

  if (loading) {
    return (
      <div className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-blue-100 border-t-[#0072bc] rounded-full animate-spin mb-4" />
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Loading error codes...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center py-20 text-red-500 bg-red-50 rounded-2xl border border-red-100">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Search & Filter Header */}
        <div className="grid md:grid-cols-12 gap-6 items-center mb-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          
          <div className="md:col-span-4 relative">
            <input
              type="text"
              placeholder="Search error code (e.g. U4, A6)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all pl-10"
            />
            <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="md:col-span-8 flex flex-wrap gap-2 justify-end">
            {['All', 'Indoor Unit', 'Outdoor Unit', 'System'].map(unit => (
              <button
                key={unit}
                onClick={() => setSelectedUnit(unit)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                  selectedUnit === unit
                    ? 'bg-[#0072bc] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {unit}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Troubleshoot Banner */}
        <div className="bg-blue-50 border border-[#0072bc]/20 rounded-2xl p-6 mb-8 flex gap-4 items-start">
          <div className="p-3 bg-white rounded-xl text-[#0072bc] shrink-0 shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">How to Read Daikin Error Codes:</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Point your wireless remote controller at the indoor unit and press and hold the "Cancel" button for 5 seconds. The temperature display will change to a double-zero code indication. Keep pressing "Cancel" repeatedly until a continuous beep sounds. That display indicates the active malfunction code.
            </p>
          </div>
        </div>

        {/* Error Codes Table/List */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="hidden lg:grid grid-cols-12 gap-4 bg-gray-50 px-6 py-4 border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-500">
            <div className="col-span-1">Code</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-4">Meaning / Symptoms</div>
            <div className="col-span-5">Recommended Service Action</div>
          </div>

          <div className="divide-y divide-gray-100">
            {filteredCodes.length > 0 ? (
              filteredCodes.map((item) => (
                <div key={item._id || item.code} className="grid lg:grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-gray-50/50 transition-colors">
                  
                  {/* Code */}
                  <div className="col-span-1 flex items-center gap-2 lg:block">
                    <span className="text-lg font-black text-[#0072bc] bg-blue-50 px-3 py-1 rounded-xl block text-center lg:inline-block">
                      {item.code}
                    </span>
                    <span className="lg:hidden text-xs font-bold text-gray-400 uppercase tracking-wider">
                      ({item.unit})
                    </span>
                  </div>

                  {/* Category */}
                  <div className="col-span-2 hidden lg:block">
                    <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${unitBadgeClass(item.unit)}`}>
                      {item.unit}
                    </span>
                  </div>

                  {/* Meaning */}
                  <div className="col-span-4 space-y-1">
                    <h5 className="font-bold text-gray-900 text-sm">{item.title}</h5>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Action */}
                  <div className="col-span-5 flex gap-3 items-start bg-gray-50 lg:bg-transparent p-4 lg:p-0 rounded-xl mt-3 lg:mt-0">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[#0072bc] shrink-0 mt-0.5 border border-blue-100">
                      <span className="font-bold text-[10px]">!</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                      {item.action}
                    </p>
                  </div>

                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-sm">No error codes matches your search criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* Warning Callout */}
        <div className="mt-8 text-center text-[11px] text-gray-400 leading-relaxed max-w-2xl mx-auto">
          ⚠️ **Disclaimer:** HVAC maintenance requires specialized electrical and refrigerant handling credentials. If your system triggers a fault, please contact our certified service technicians instead of attempting complex PCB or wiring replacements.
        </div>

      </div>
    </div>
  );
}

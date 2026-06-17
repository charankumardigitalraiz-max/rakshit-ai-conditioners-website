import React, { useState, useEffect, useMemo } from 'react'
import { fetchJSON } from '../../services/api'

const groupByState = (locations) => {
  const groups = {}
  locations.forEach((loc) => {
    if (!groups[loc.state]) groups[loc.state] = []
    groups[loc.state].push({
      name: loc.name,
      address: loc.address,
      phone: loc.phone,
      email: loc.email,
      timing: loc.timing,
    })
  })
  return Object.entries(groups).map(([state, cities]) => ({ state, cities }))
}

export default function ServiceLocations() {
  const [locationsData, setLocationsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedState, setSelectedState] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const loadLocations = async () => {
      try {
        setLoading(true)
        const res = await fetchJSON('/service-locations')
        setLocationsData(groupByState(res.data || []))
        setError(null)
      } catch (err) {
        setError(err.message || 'Failed to load service locations')
      } finally {
        setLoading(false)
      }
    }
    loadLocations()
  }, [])

  const states = useMemo(
    () => ['All', ...locationsData.map((d) => d.state)],
    [locationsData]
  )

  const filteredLocations = locationsData
    .map((stateGroup) => {
      if (selectedState !== 'All' && stateGroup.state !== selectedState) {
        return null
      }
      const matchingCities = stateGroup.cities.filter((city) =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.address.toLowerCase().includes(searchQuery.toLowerCase())
      )
      if (matchingCities.length === 0) return null
      return { ...stateGroup, cities: matchingCities }
    })
    .filter(Boolean)

  if (loading) {
    return (
      <div className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-blue-100 border-t-[#0072bc] rounded-full animate-spin mb-4" />
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Loading service locations...</p>
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
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          {/* State Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {states.map(state => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                  selectedState === state
                    ? 'bg-[#0072bc] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {state}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search by city or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all pl-10"
            />
            <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="space-y-12">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((group, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                  <span className="w-3 h-3 rounded-full bg-[#0072bc]"></span>
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {group.state}
                  </h3>
                  <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full">
                    {group.cities.length} {group.cities.length === 1 ? 'Location' : 'Locations'}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.cities.map((city, cityIdx) => (
                    <div
                      key={cityIdx}
                      className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-[#0072bc]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <h4 className="font-bold text-gray-900 text-base mb-3 group-hover:text-[#0072bc] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          {city.name}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed mb-4">
                          {city.address}
                        </p>
                      </div>

                      <div className="border-t border-gray-50 pt-4 mt-4 space-y-2.5">
                        <div className="flex items-center gap-2.5 text-xs text-gray-600">
                          <svg className="w-4 h-4 text-[#0072bc] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${city.phone}`} className="hover:underline font-semibold">{city.phone}</a>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-gray-600">
                          <svg className="w-4 h-4 text-[#0072bc] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <a href={`mailto:${city.email}`} className="hover:underline">{city.email}</a>
                        </div>
                        <div className="flex items-center gap-2.5 text-[11px] text-gray-400">
                          <svg className="w-4 h-4 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{city.timing}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-400 text-sm">No service locations match your search or filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

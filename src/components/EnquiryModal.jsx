import React, { useState } from 'react'
import { useEnquiry } from '../context/EnquiryContext'
import { toast } from 'react-hot-toast'
import { fetchJSON } from '../services/api'

export default function EnquiryModal() {
  const { isOpen, closeModal } = useEnquiry()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    interest: 'Commercial VRV',
    details: ''
  })

  if (!isOpen) return null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const data = await fetchJSON('/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (data.success) {
        toast.success('Inquiry submitted! We will contact you soon.')
        setFormData({
          fullName: '',
          phone: '',
          interest: 'Commercial VRV',
          details: ''
        })
        closeModal()
      }
    } catch (error) {
      console.error('Submission error:', error)
      toast.error(error.message || 'Failed to submit inquiry. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
        onClick={closeModal}
      />

      <div className="relative z-10 bg-white w-full max-w-lg rounded-[2rem] shadow-2xl shadow-black/20 overflow-hidden animate-fadeInUp my-auto">
        {/* Modal Header */}
        <div className="relative bg-[#002f54] p-8 pb-10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}
          />
          <div className="absolute top-1/2 -right-10 w-40 h-40 bg-[#0072bc]/40 rounded-full blur-[40px]" />
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white transition-all rounded-full focus:outline-none"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Get a Quote</h2>
            <p className="text-blue-100/70 text-sm">Our technical specialists will contact you within 24 hours to analyze your requirements.</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 -mt-6 relative z-20 bg-white rounded-t-[2rem]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
              <input
                required
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Phone</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Interest</label>
                <div className="relative">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all appearance-none cursor-pointer"
                  >
                    <option>Commercial VRV</option>
                    <option>Central Chillers</option>
                    <option>Room AC</option>
                    <option>Industrial Ventilation</option>
                    <option>Comprehensive AMC</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Additional Details</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all resize-none"
                placeholder="Please describe your site scale or specific requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 mt-2 bg-[#002f54] hover:bg-[#0072bc] text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-blue-900/10 active:scale-[0.98] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {loading ? 'Submitting...' : 'Submit Enquiry'}
            </button>

            <p className="text-center text-[10px] font-medium text-gray-400 mt-4 uppercase tracking-wider hidden sm:block">
              Direct Line: +91 90300 64466
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

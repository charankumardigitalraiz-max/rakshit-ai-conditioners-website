import React, { useEffect, useState } from 'react'
import { useEnquiry } from '../context/EnquiryContext'
import { toast } from 'react-hot-toast'
import { fetchJSON } from '../services/api'

const DEFAULT_FORM = {
  name: '',
  email: '',
  phone: '',
  interest: 'Commercial VRV',
  location: '',
  area: '',
  message: '',
}

export default function EnquiryModal() {
  const { isOpen, modalContext, closeModal } = useEnquiry()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState(DEFAULT_FORM)

  useEffect(() => {
    if (!isOpen) return

    setFormData({
      ...DEFAULT_FORM,
      interest: modalContext?.interest || DEFAULT_FORM.interest,
      message: modalContext?.message || '',
    })
  }, [isOpen, modalContext])

  if (!isOpen) return null

  const modalTitle = modalContext?.title || 'Get a Quote'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const payload = {
        ...formData,
        message: formData.message?.trim() || `Enquiry for ${formData.interest}`,
      }

      const data = await fetchJSON('/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (data.success) {
        toast.success('Inquiry submitted successfully! We will contact you soon.')
        setFormData(DEFAULT_FORM)
        closeModal()
      } else {
        toast.error(data.error || data.message || 'Failed to submit inquiry. Please try again.')
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

      <div className="relative z-10 bg-white w-full max-w-md rounded-[1.75rem] shadow-2xl shadow-black/20 overflow-hidden animate-fadeInUp my-auto">
        {/* Modal Header */}
        <div className="relative bg-[#002f54] p-5 pb-6 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }}
          />
          <div className="absolute top-1/2 -right-10 w-36 h-36 bg-[#0072bc]/40 rounded-full blur-[35px]" />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white transition-all rounded-full focus:outline-none"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative z-10 pr-6">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>{modalTitle}</h2>
            {modalContext?.subtitle && (
              <p className="text-blue-100/80 text-sm mt-1.5 leading-snug">{modalContext.subtitle}</p>
            )}
          </div>
        </div>

        {/* Form */}
        <div className="p-6 -mt-4 relative z-20 bg-white rounded-t-[1.75rem]">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Full Name</label>
              <input
                required
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/15 focus:border-[#0072bc] transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Phone</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/15 focus:border-[#0072bc] transition-all"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="block text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/15 focus:border-[#0072bc] transition-all"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Location / City</label>
                <input
                  required
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/15 focus:border-[#0072bc] transition-all"
                  placeholder="e.g. Bengaluru"
                />
              </div>
              <div>
                <label className="block text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Area / Suburb</label>
                <input
                  required
                  name="area"
                  type="text"
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/15 focus:border-[#0072bc] transition-all"
                  placeholder="e.g. Indiranagar"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Interest</label>
              <div className="relative">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0072bc]/15 focus:border-[#0072bc] transition-all appearance-none cursor-pointer"
                >
                  <option>Commercial VRV</option>
                  <option>Central Chillers</option>
                  <option>Room AC</option>
                  <option>Industrial Ventilation</option>
                  <option>Comprehensive AMC</option>
                  <option>Maintenance & Repair</option>
                  <option>HVAC Training</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Additional Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="2"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/15 focus:border-[#0072bc] transition-all resize-none"
                placeholder="Please describe your site scale or specific requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 mt-1 bg-[#002f54] hover:bg-[#0072bc] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-blue-900/10 active:scale-[0.98] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {loading ? 'Submitting...' : 'Submit Enquiry'}
            </button>

            <p className="text-center text-[10px] font-bold text-gray-400 mt-3.5 uppercase tracking-wider hidden sm:block">
              Direct Line: +91 90300 64466
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

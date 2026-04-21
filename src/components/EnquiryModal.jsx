import React from 'react'
import { useEnquiry } from '../context/EnquiryContext'

export default function EnquiryModal() {
  const { isOpen, closeModal } = useEnquiry()

  if (!isOpen) return null

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
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Inquiry submitted! We will contact you soon.')
              closeModal()
            }}
          >
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
              <input
                required
                type="text"
                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Phone</label>
                <input
                  required
                  type="tel"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Interest</label>
                <select className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all appearance-none cursor-pointer">
                  <option>Commercial VRV</option>
                  <option>Central Chillers</option>
                  <option>Room AC</option>
                  <option>Industrial Ventilation</option>
                  <option>Comprehensive AMC</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Additional Details</label>
              <textarea
                rows="3"
                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all resize-none"
                placeholder="Please describe your site scale or specific requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-[#002f54] hover:bg-[#0072bc] text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-blue-900/10 active:scale-[0.98]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Submit Enquiry
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

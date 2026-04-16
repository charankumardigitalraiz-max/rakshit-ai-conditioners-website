export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – Corporate Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-10 h-0.5 bg-[#0072bc]"></span>
              <span className="text-[#0072bc] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Global Connectivity</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Connect with our <br /> <span className="text-[#0072bc]">Engineering Team</span>
            </h2>
            <p className="text-gray-500 mb-8 text-base leading-relaxed max-w-md">
              From complex industrial HVAC design to premium residential installations — our expert consultants are available for a comprehensive technical assessment of your requirements.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Regional Headquarters',
                  value: '6-3-347/9/6, Road No.1, Banjara Hills, Hyderabad – 500 034',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Technical Inquiries',
                  value: '+91-40-65454389 | +91 9948095081',
                  href: 'tel:+919948095081',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Corporate Email',
                  value: 'info@rakshithac.com',
                  href: 'mailto:info@rakshithac.com',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0072bc] flex-shrink-0 transition-transform hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-gray-800 text-base hover:text-[#0072bc] font-bold tracking-tight">{item.value}</a>
                    ) : (
                      <div className="text-gray-800 text-base font-bold tracking-tight">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – High-Fidelity Quote Form */}
          <div className="bg-[#fafbfc] rounded-xl border border-gray-100 p-10 lg:p-12 shadow-2xl shadow-blue-900/5">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Request Technical Assessment
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-5 py-3.5 bg-white border border-gray-100 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Primary Contact</label>
                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full px-5 py-3.5 bg-white border border-gray-100 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">System Orientation</label>
                <select className="w-full px-5 py-3.5 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all appearance-none cursor-pointer">
                  <option value="">Select infrastructure type...</option>
                  <option>Industrial Clean Room</option>
                  <option>Pharmaceutical Complex</option>
                  <option>Commercial HQ / Office</option>
                  <option>Precision Residential (Split AC)</option>
                  <option>Centralized VRF</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Project Brief</label>
                <textarea
                  rows={4}
                  placeholder="Describe your technical requirements..."
                  className="w-full px-5 py-3.5 bg-white border border-gray-100 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#0072bc] hover:bg-[#005fa3] text-white font-bold rounded-lg shadow-xl shadow-blue-200 transition-all hover:-translate-y-0.5 text-xs uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Submit for Assessment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

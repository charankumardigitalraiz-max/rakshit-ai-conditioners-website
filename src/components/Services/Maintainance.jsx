import React from 'react'
import { useEnquiry } from '../../context/EnquiryContext'

const maintenanceCategories = [
  {
    title: 'Preventative Maintenance Care',
    description: 'Scheduled multi-point diagnostics designed to keep cooling systems working at optimum thermodynamic efficiency, lowering power bills by up to 20%.',
    features: [
      'Filter washing & frame disinfection',
      'Operating current & voltage checks',
      'Gas pressure diagnostic checks',
      'Condenser coil cleaning & checking'
    ],
    icon: (
      <svg className="w-6 h-6 text-[#0072bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Breakdown & Repair Services',
    description: 'Emergency support to restore HVAC systems instantly in cases of complete shutdown, refrigeration leaking, or control failures.',
    features: [
      'Quick technician dispatch',
      'Leakage repair & nitrogen testing',
      'Inverter PCB diagnosis & repair',
      'Original Daikin parts replacement'
    ],
    icon: (
      <svg className="w-6 h-6 text-[#0072bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    title: 'Eco-Wash & Coil Chemical Descaling',
    description: 'A deep cleaning treatment that dissolves accumulated dirt, mold, and scale from condenser and evaporator fins, maximizing heat exchange.',
    features: [
      'Biodegradable chemical wash',
      'High-pressure water jetting',
      'Drain tray rust treatment',
      'Blower fan deep cleaning'
    ],
    icon: (
      <svg className="w-6 h-6 text-[#0072bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: 'IAQ Steam Disinfection & Health Audits',
    description: 'Specialized HVAC sanitization aimed at purging mold, bacteria, and allergens from air streams for healthier indoor living and working environments.',
    features: [
      '140°C high-temperature dry steam',
      'Anti-microbial spray coating',
      'Air duct health inspections',
      'Airflow & CFM mapping'
    ],
    icon: (
      <svg className="w-6 h-6 text-[#0072bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
];

export default function MaintainanceServices() {
  const { openModal } = useEnquiry();

  return (
    <div className="py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Introduction section */}
        <div className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Keep Your Equipment Running Like <span className="text-[#0072bc]">New</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Daikin air conditioning systems represent high engineering standards. To guarantee long operating lifetimes, low power usage, and healthy indoor air, regular professional care is required. Our certified technicians carry specialized diagnostic checkers, electronic pressure leak testers, and safety gear to execute premium audits.
            </p>
            <div className="space-y-3.5 mb-6">
              {[
                'Technicians trained directly under Daikin engineers',
                '100% original spares with manufacturer backed warranties',
                'Advanced digital service logs and diagnostic tools',
                'Fully equipped mobile utility service vans'
              ].map((text, i) => (
                <div key={i} className="flex gap-2.5 items-start text-xs text-gray-600">
                  <span className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center text-[#0072bc] border border-blue-100 shrink-0 font-bold">✓</span>
                  <p className="leading-tight mt-0.5">{text}</p>
                </div>
              ))}
            </div>
            <button
              onClick={openModal}
              className="px-6 py-3 bg-[#002f54] text-white hover:bg-[#0072bc] transition-colors rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Book Service Call Now
            </button>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-80 lg:h-96">
            <img 
              src="/service/amc_technician_maintenance_1776509796451.png" 
              alt="Technician Service Check" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002f54]/70 to-transparent"></div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-12 border-l-4 border-[#0072bc] pl-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Service Catalog</h3>
          <p className="text-gray-500 text-sm">Professional repair, descaling, and optimization services.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {maintenanceCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:border-[#0072bc]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                  {cat.icon}
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {cat.title}
                </h4>

                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  {cat.description}
                </p>

                <div className="space-y-2.5">
                  <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Service Scope Includes</h5>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {cat.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex gap-2 items-start text-xs text-gray-600">
                        <span className="text-[#0072bc] font-bold shrink-0">•</span>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-50 pt-6 mt-8 flex justify-end">
                <button
                  onClick={openModal}
                  className="px-4 py-2 bg-gray-50 hover:bg-[#0072bc] hover:text-white transition-all text-xs font-bold uppercase tracking-wider text-[#0072bc] border border-gray-100 hover:border-[#0072bc] rounded-xl"
                >
                  Schedule This Service
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

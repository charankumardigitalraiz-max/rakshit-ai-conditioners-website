import React from 'react'
import { useEnquiry } from '../../context/EnquiryContext'

const courses = [
  {
    title: 'Daikin VRV System Design & Integration',
    category: 'Engineering & Design',
    duration: '5 Days (Full-time)',
    description: 'Learn VRV system selection, pipeline designing, piping sizing, CAD layout planning, and heat load calculations according to Daikin international standards.',
    highlights: ['Psychrometric chart analysis', 'VRV X/H series selections', 'Control system architecture', 'Refnet joints & header layouts']
  },
  {
    title: 'Advanced VRV Installation & Commissioning',
    category: 'Installation Practice',
    duration: '3 Days (Practical)',
    description: 'Hands-on practical training covering copper pipe brazing, nitrogen pressure testing, vacuum holding, refnet installation, and startup configurations.',
    highlights: ['Oxygen-Acetylene brazing rules', 'Airtight testing protocols', 'Refrigerant additional charging', 'Vaccum drying procedure']
  },
  {
    title: 'Inverter & VRV Service Troubleshooting',
    category: 'Maintenance & Service',
    duration: '4 Days (Practical)',
    description: 'Focuses on electrical fault finding, inverter compressor diagnosis, diagnostic checker tool usage, and resolving complex communication error codes.',
    highlights: ['Daikin Checker tool utility', 'IPM and inverter board testing', 'Compressor winding diagnostic', 'Expansion valve (EEV) calibration']
  },
  {
    title: 'RA/SA Split AC Maintenance & Diagnostics',
    category: 'Basic Training',
    duration: '2 Days',
    description: 'Fundamental training course designed for fresh HVAC technicians detailing split AC operations, cleaning techniques, and standard installation rules.',
    highlights: ['Flaring & bending methods', 'Refrigerant pressure checks', 'Deep wet service procedures', 'Basic electrical connections']
  }
];

export default function Training() {
  const { openModal } = useEnquiry();

  return (
    <div className="py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Hero Section Card */}
        <div className="bg-[#002f54] rounded-[2.5rem] p-8 lg:p-12 text-white mb-16 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,114,188,0.15)_0%,_transparent_65%)]" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 block">HVAC Academy & Skill Development</span>
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Daikin Certified Training Hub
            </h3>
            <p className="text-blue-100/80 text-sm leading-relaxed mb-6">
              Our advanced training facility bridges the gap between theoretical engineering and actual site execution. We train technicians, project managers, and HVAC professionals on the latest inverter, VRV, and indoor air quality solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openModal}
                className="px-6 py-3 bg-[#0072bc] hover:bg-blue-600 transition-colors rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                Enroll / Request Corporate Batch
              </button>
            </div>
          </div>
        </div>

        {/* Academics Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { num: '500+', label: 'Technicians Trained' },
            { num: '100%', label: 'Hands-on Practical' },
            { num: '4+', label: 'Specialized Courses' },
            { num: 'Daikin', label: 'Authorized Certification' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="text-3xl font-black text-[#0072bc] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{stat.num}</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Course Catalog */}
        <div className="mb-12 border-l-4 border-[#0072bc] pl-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Course Modules</h3>
          <p className="text-gray-500 text-sm">Comprehensive programs tailored for diverse skill levels.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:border-[#0072bc]/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-[#0072bc] text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-100">
                    {course.category}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {course.title}
                </h4>

                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  {course.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Key Takeaways</h5>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-gray-600 flex items-start gap-1.5 leading-tight">
                        <span className="text-[#0072bc] font-bold">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={openModal}
                className="w-full py-2.5 bg-gray-50 hover:bg-[#0072bc] hover:text-white transition-all text-xs font-bold uppercase tracking-wider text-[#0072bc] border border-gray-100 hover:border-[#0072bc] rounded-xl"
              >
                Inquire Course Details
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

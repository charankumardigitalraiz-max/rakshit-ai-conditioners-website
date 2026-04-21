import React from 'react'
import PageTransition from '../components/ui/PageTransition'

export default function About() {
  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-20">

        {/* Decorative SVG Definitions */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0072bc" />
              <stop offset="100%" stopColor="#4ab0ff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Premium Hero Header */}
        <div className="relative  lg:mt-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-3 mb-6 justify-center">
                <span className="w-12 h-0.5 bg-[#0072bc]"></span>
                <span className="text-[#0072bc] text-xs font-bold uppercase tracking-[0.4em]">Corporate Overview</span>
                <span className="w-12 h-0.5 bg-[#0072bc]"></span>
              </div>
              <h1 className="text-gray-900 text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Pioneering <span className="text-[#0072bc]">Cooling Solutions</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                RAKSHITH Air Condition & Services, established in 2011, is a registered company specializing in advanced HVAC solutions. As an authorized dealer and service provider for Daikin, we focus on delivering exceptional services for commercial, industrial, and residential sectors.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="bg-blue-50/50 px-6 py-3 rounded-full border border-blue-100 flex items-center gap-3">
                  <span className="text-[#0072bc] font-bold text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>₹50Cr+</span>
                  <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>Annual Turnover</span>
                </div>
                <div className="bg-blue-50/50 px-6 py-3 rounded-full border border-blue-100 flex items-center gap-3">
                  <span className="text-[#0072bc] font-bold text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>2011</span>
                  <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>Established</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intro & Leadership Section */}
        <section className="py-10 mt-10 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-7 items-center">

              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-[0.3em]">The Foundation</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  A legacy built on <span className="text-[#0072bc]">Precision & Trust</span>
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-base">
                  <p>
                    With an annual turnover exceeding <strong className="text-gray-900">50 crores</strong> and a team of experienced, skilled engineers and technicians across South India, we’ve become a preferred partner for high-end cooling systems. Our clients include IT companies, real estate developers, educational institutions, and manufacturing plants.
                  </p>
                  <p>
                    Our success stems from our strong business structure, which includes technicians, engineers, and managers working seamlessly together. This ensures we efficiently address complex tasks, provide quick responses, and deliver high-quality service with a dedicated professional team.
                  </p>
                  <p className="italic text-sm text-[#0072bc] font-medium">
                    Started by Mr. Koppisetty Rajkamal, Rakshith has evolved into a leading cooling solutions provider, following quality standards that match the best in the world.
                  </p>
                </div>

                {/* Leadership Signature/Badge */}
                <div className="mt-10 p-6 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,114,188,0.1)] border border-gray-100 flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0072bc] flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 leading-none mb-1 cursor-default" style={{ fontFamily: 'Outfit, sans-serif' }}>Mr. Koppisetty Rajkamal</h4>
                    <span className="text-[11px] font-bold text-[#0072bc] uppercase tracking-widest">Managing Director</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="max-w-md ml-auto aspect-[4/5] rounded-[3rem] overflow-hidden border border-gray-100 relative bg-gray-100 group">
                  <img src="/banner/hero_ac_interior_1776336133282.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Corporate Environment" />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors duration-500"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-[#0072bc]/20 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,114,188,0.06)] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#0072bc] rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Mission</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      We are dedicated to providing reliable, personalized services that offer exceptional quality and value for money. By fostering a safe and supportive work environment, we aim to enhance our reputation and exceed client expectations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-[#0072bc]/20 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,114,188,0.06)] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#0072bc] rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Vision</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      To be recognized as a leading, reliable cooling company, known for exceptional service, quality, and sustainable growth across the region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Team Structure */}
        <section className="py-15 bg-gray-50/50 relative overflow-hidden pb-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#0072bc]/30"></span>
                <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-[0.4em]">Operational Excellence</span>
                <span className="w-8 h-px bg-[#0072bc]/30"></span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Strategic <span className="text-[#0072bc]">Team Structure</span>
              </h2>
              <p className="text-gray-500 text-lg">
                Our specialized departments work in perfect sync to deliver world-class cooling architectures from concept to commissioning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: 'design',
                  name: 'Design Team',
                  desc: 'Produces precise Engineering and MEP drawings using AutoCAD, ensuring absolute technical accuracy.',
                  icon: <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                },
                {
                  id: 'project',
                  name: 'Project Team',
                  desc: 'Ensures seamless on-site installation of piping, wiring, and high-performance cooling systems.',
                  icon: <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                },
                {
                  id: 'business',
                  name: 'Sales & Finance',
                  desc: 'Dedicated teams focusing on specialized functions to optimize project value and financial transparency.',
                  icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                },
                {
                  id: 'service',
                  name: 'Service Team',
                  desc: 'Committed to meeting all customer needs post-installation, ensuring long-term reliability.',
                  icon: <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                }
              ].map((team) => (
                <div key={team.id} className="group relative bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-[#0072bc]/20 hover:shadow-[0_40px_80px_-20px_rgba(0,114,188,0.1)] transition-all duration-500 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0072bc] mb-6 group-hover:bg-[#0072bc] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {team.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>{team.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {team.desc}
                  </p>
                  <div className="mt-8 w-8 h-1 bg-gray-100 group-hover:w-16 group-hover:bg-[#0072bc] transition-all duration-500 rounded-full"></div>
                </div>
              ))}
            </div>

            {/* Stats Summary Bar */}
            <div className="mt-20 p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.03)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {[
                  { id: 1, val: 10, label: 'VRV Engineers', sub: 'Site Experts' },
                  { id: 2, val: 6, label: 'Non-VRV Team', sub: 'Site Engineers' },
                  { id: 3, val: 75, label: 'Installers', sub: '25 Tech + 50 Helpers' },
                  { id: 4, val: 24, label: 'Service Team', sub: '12 Tech + 12 Helpers' },
                  { id: 5, val: 15, label: 'Admin Staff', sub: 'Operations' },
                  { id: 6, val: 5, label: 'Marketing', sub: 'Sales Support' },
                ].map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className="text-2xl font-black text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{stat.val}</div>
                    <div className="text-[9px] font-bold text-[#0072bc] uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                    <div className="text-[8px] text-gray-400 font-medium uppercase tracking-widest">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modern Tools & Equipment Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-[0.3em]">Infrastructure</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Modern Tools & <span className="text-[#0072bc]">Equipment</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  To ensure precision and reliability in extreme cooling environments, we deploy the latest industrial-grade machinery and diagnostic tools across every project.
                </p>
                <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0072bc] text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-900">Certified Equipment</span>
                  </div>
                  <p className="text-[11px] text-[#0072bc] font-medium leading-relaxed">
                    Every piece of equipment is calibrated and maintained to meet international engineering standards.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Industrial Machinery</h4>
                    <ul className="space-y-3">
                      {[
                        'Recovery Machine (Environment Friendly)',
                        'Vacuum Pumps (R-22, R-410A)',
                        'Electrical Welding Facility',
                        'Electrical and Gas Cutter Machine',
                        'Lock Forming Machine (Ducting)',
                        'Acetylene Lamp Set'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-500 items-center group">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-[#0072bc] transition-colors"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Precision Diagnostics</h4>
                    <ul className="space-y-3">
                      {[
                        'Digital Micron Gauges',
                        'Anemometer (Flow Rate)',
                        'Digital Thermometer & Multimeter',
                        'Digital Weight Machines',
                        'High-Pressure Jet Pumps'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-500 items-center group">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-[#0072bc] transition-colors"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sm:col-span-2">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Materials & Gas Inventory</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { title: 'Oxygen', desc: 'Cylinders' },
                        { title: 'Nitrogen', desc: 'Cylinders' },
                        { title: 'DA', desc: 'Cylinders' },
                        { title: 'Refrigerants', desc: 'R410A, R32, R22' }
                      ].map((inv, i) => (
                        <div key={i} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
                          <div className="text-[10px] font-bold text-[#0072bc] uppercase mb-1">{inv.title}</div>
                          <div className="text-xs text-gray-400">{inv.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specialities Core */}
        {/* <section className="py-24 bg-[#0a1118] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0072bc]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Core Domains</span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Engineering Specialities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Pharma Industries', desc: 'Regulated thermal environments and FDA-compliant clean room conditioning mechanisms.' },
              { title: 'Cold Room Solutions', desc: 'Ultra-low temperature storage architectures for biologicals, perishables, and critical materials.' },
              { title: 'Basement Ventilation', desc: 'Heavy-duty air extraction and CO purging systems for deep foundation facilities.' },
              { title: 'Staircase Pressurization', desc: 'Advanced fire-safety smoke extraction and positive pressure routing.' },
              { title: 'Clean Room Setup', desc: 'High-HEPA filtered, particle-free environments for semiconductors and laboratories.' },
              { title: 'Luxury Condominiums', desc: 'Aesthetically concealed, whisper-quiet VRV cooling for premium residential spaces.' },
              { title: 'Hot Water Generators', desc: 'Industrial-scale heating matrices bundled with thermal recovery loops.' },
              { title: 'Commercial Establishments', desc: 'High-efficiency centralized plants for malls, tech parks, and corporate hubs.' },
            ].map((spec, i) => (
              <div key={i} className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{spec.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        {/* Infrastructure CTA */}
        {/* <div className="bg-[#002f54] py-20 text-center relative overflow-hidden text-white border-t border-white/10">
        <div className="max-w-3xl mx-auto px-5 relative z-10">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Ready to integrate with industry leaders?
          </h2>
          <p className="text-blue-100/60 mb-10 text-lg">
            HQ: Plot no-41, Laxmi Nagar, Miyapur, Hyderabad | Branch: Vijayawada
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#0072bc] text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-white hover:text-[#002f54] hover:-translate-y-1 transition-all shadow-2xl shadow-blue-500/20"
          >
            Connect With Administration
          </a>
        </div>
      </div> */}
      </div>
    </PageTransition>
  )
}

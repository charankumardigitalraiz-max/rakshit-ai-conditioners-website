import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PageTransition from '../components/ui/PageTransition'
import SectionTransition from '../components/ui/SectionTransition'

export default function Services() {
    const { serviceId } = useParams()
    const navigate = useNavigate()

    // Default to 'approach' if there is no param or invalid param
    useEffect(() => {
        if (!serviceId || (serviceId !== 'approach' && serviceId !== 'amc')) {
            navigate('/services/approach', { replace: true })
        }
    }, [serviceId, navigate])

    const isAmc = serviceId === 'amc'

    const hero = isAmc
        ? {
            pre: 'Asset Longevity',
            title: 'Annual Maintenance',
            subtitle: 'Contract (AMC)',
            desc: 'Protect your infrastructure investments with our comprehensive, 24/7 priority maintenance protocols designed to guarantee zero unwanted downtime.'
        }
        : {
            pre: 'Engineering Methodology',
            title: 'Precision Climate',
            subtitle: 'Approach',
            desc: 'Our rigorously defined 5-step engineering framework ensures that every deployment is calculated, reliable, and perfectly integrated.'
        }

    return (
        <PageTransition>
            <div className="bg-white min-h-screen pt-20">

                {/* Clean Service Header */}
                <div className="relative py-12 lg:mt-15 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
                        <SectionTransition direction="up">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-3 mb-4">
                                    <span className="w-8 h-0.5 bg-[#0072bc]"></span>
                                    <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-[0.3em]">{hero.pre}</span>
                                </div>
                                <h1 className="text-gray-900 text-4xl lg:text-5xl font-black mb-4 tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    {hero.title} <span className="text-[#0072bc]">{hero.subtitle}</span>
                                </h1>
                                <p className="text-gray-500 text-base leading-relaxed max-w-xl">
                                    {hero.desc}
                                </p>
                            </div>
                        </SectionTransition>
                    </div>
                </div>

                {/* Dynamic Content Divider */}
                <hr className="border-gray-100" />

                {/* View Switching */}
                {isAmc ? (
                    // --- AMC VIEW ---
                    // --- AMC VIEW ---
                    <div className="bg-gray-50/30 overflow-hidden">
                        <section className="py-20">
                            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                                {/* Section 1: Intro Split Layout */}
                                <div className="mb-24 grid lg:grid-cols-2 gap-16 items-center">
                                    <div>
                                        <div className="mb-10">
                                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                                Why Choose Daikin's <span className="text-[#0072bc]">Annual Service Care?</span>
                                            </h2>
                                            <div className="space-y-4 text-gray-500 leading-relaxed text-sm">
                                                <p>
                                                    All air conditioning systems, like any other machine, depreciate with time. Without proper care, your air conditioning unit is bound to give you problems in the future. We offer affordable plans, which you can select based on what works best for your infrastructure.
                                                </p>
                                                <p>
                                                    By entering into a yearly contract with us, you can ensure that your machine is functioning at its absolute best. Our team of experts repair and replace the necessary parts, calibrate the systems and ensure that your air conditioner is working at its maximum capacity at any given time.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            {[
                                                { title: 'Quality', desc: 'Scheduled maintenance minimizes equipment deterioration and sudden shutdowns.' },
                                                { title: 'Safety', desc: 'Ensures safety devices function properly to prevent anomalies.' },
                                                { title: 'Promptness', desc: 'Periodic check records allow accurately accelerated responses.' }
                                            ].map((adv, i) => (
                                                <div key={i} className="border-l-2 border-[#0072bc]/20 pl-4 py-1">
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{adv.title}</h3>
                                                    <p className="text-[11px] text-gray-500 leading-relaxed">{adv.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="relative h-full min-h-[400px]">
                                        <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl">
                                            <img src="/service/amc_technician_maintenance_1776509796451.png" alt="Professional Technician Maintenance" loading="lazy" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#002f54]/80 via-transparent to-transparent"></div>
                                            <div className="absolute bottom-8 left-8 right-8">
                                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0072bc] flex-shrink-0">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-bold mb-0.5">Certified Engineers</h4>
                                                        <p className="text-white/80 text-[10px] uppercase tracking-wider">Daikin Specialised Team</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Complete USPs & Network */}
                                <div className="mb-24 grid lg:grid-cols-12 gap-10">
                                    <div className="lg:col-span-8 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Exclusive Daikin USPs</h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {[
                                                { title: 'Call Centre Facility', desc: 'Specialized call centres ensure prompt response to service requests and complaints.' },
                                                { title: 'Training Facility', desc: 'Specialized training facility at our Neemrana, Rajasthan base to groom expertise.' },
                                                { title: 'Technical Helpline', desc: 'Specialized trained staff to help troubleshoot problems over the phone, saving time.' },
                                                { title: 'Genuine Spares', desc: 'Assured use of genuine Daikin spares guaranteeing high uptime for your entire system.' },
                                                { title: 'Extended Life', desc: 'Regular preventive checks by Daikin engineers significantly extend your asset lifespan.' }
                                            ].map((usp, i) => (
                                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-[#0072bc]/20 transition-all">
                                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0072bc] border border-blue-100 flex-shrink-0">
                                                        <span className="font-bold text-xs">{i + 1}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 text-sm mb-1">{usp.title}</h4>
                                                        <p className="text-[11px] text-gray-500 leading-relaxed">{usp.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="lg:col-span-4 translate-y-4">
                                        <div className="relative rounded-[2rem] overflow-hidden shadow-xl h-full min-h-[350px]">
                                            <img src="/service/amc_genuine_spares_1776509955145.png" alt="Technical Engineering" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-[#002f54]/85 backdrop-blur-[1px]"></div>
                                            <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                                                <h3 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>Vast Network</h3>
                                                <ul className="space-y-4">
                                                    {[
                                                        'In-house training centers for specialized instruction',
                                                        'Engineers intensively trained on sophisticated equipment',
                                                        'Highly advanced tools deployed for each engineer',
                                                        'No surprise break-downs with proactive thermal checks',
                                                        'System calibration for perfect air distribution'
                                                    ].map((item, i) => (
                                                        <li key={i} className="flex gap-3 text-sm text-blue-50/90 leading-tight">
                                                            <span className="text-blue-400 mt-1 font-bold">›</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3: Detailed Maintenance Contracts */}
                                <div className="text-center mb-12">
                                    <h3 className="text-[#0072bc] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Service Solutions</h3>
                                    <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Maintenance Contracts</h2>
                                    <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">Protecting your technologically advanced equipment is as important as your initial investment. We offer the finest and most comprehensive range of Service Solutions.</p>
                                </div>

                                <div className="grid xl:grid-cols-3 gap-6">
                                    {/* Contract 1: Comprehensive */}
                                    <div className="bg-white rounded-[2rem] border border-[#0072bc]/20 shadow-[0_20px_40px_-20px_rgba(0,114,188,0.15)] p-8 relative flex flex-col transform transition-transform hover:-translate-y-1">
                                        <div className="absolute top-0 right-0 bg-[#0072bc] text-white text-[9px] font-black uppercase tracking-wider py-1.5 px-5 rounded-bl-2xl rounded-tr-[2rem]">Most Popular</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Comprehensive</h3>
                                        <p className="text-xs text-gray-500 mb-6 pb-6 border-b border-gray-100">Complete peace of mind with critical component replacement.</p>

                                        <div className="flex-grow space-y-6">
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2"><span className="text-green-500">◆</span> Inclusions</h4>
                                                <ul className="space-y-2.5">
                                                    {['Four routine services', 'Immediate attendance of breakdown', 'Refrigerant gas charging', 'Compressor', 'Fan Motor', 'P.C.B.', 'Magnetic Switch', 'Transformer'].map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-green-500 font-bold shrink-0">✓</span> {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3 flex items-center gap-2"><span className="text-red-400">◆</span> Exclusions</h4>
                                                <ul className="space-y-2.5">
                                                    {['Plastic Items', 'Air filter', 'Sheet Metal Parts', 'Condenser & Evaporator Coils', 'Remote Control Handset', 'Voltage Stabilizers & Scanners', 'Circuit breaker', 'Thermocol Parts'].map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400"><span className="text-red-300 shrink-0">×</span> {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contract 2: Non-Comprehensive (Semi) */}
                                    <div className="bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col hover:border-[#0072bc]/20 hover:shadow-xl transition-all">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Non-Comprehensive</h3>
                                        <p className="text-xs text-gray-500 mb-6 pb-6 border-b border-gray-100">Standard protection excluding the main compressor unit.</p>

                                        <div className="flex-grow space-y-6">
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3 flex items-center gap-2"><span className="text-green-500">◆</span> Inclusions</h4>
                                                <ul className="space-y-2.5">
                                                    {['Four routine services', 'Immediate attendance of breakdown', 'Refrigerant gas charging', 'Fan Motor', 'P.C.B.', 'Magnetic Switch', 'Transformer'].map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-green-500 font-bold shrink-0">✓</span> {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3 flex items-center gap-2"><span className="text-red-400">◆</span> Exclusions</h4>
                                                <ul className="space-y-2.5">
                                                    <li className="flex items-start gap-2 text-sm text-gray-900 font-bold"><span className="text-red-500 shrink-0">×</span> Compressor</li>
                                                    {['Plastic Items', 'Air filter', 'Sheet Metal Parts', 'Condenser & Evaporator Coils', 'Remote Control', 'Voltage Stabilizers & Scanners', 'Circuit breaker', 'Thermocol Parts'].map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400"><span className="text-red-300 shrink-0">×</span> {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contract 3: Labour Type */}
                                    <div className="bg-gray-50/50 rounded-[2rem] border border-gray-100 p-8 flex flex-col">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Labour Only</h3>
                                        <p className="text-xs text-gray-500 mb-6 pb-6 border-b border-gray-100">Basic preventative maintenance and technical deployments.</p>

                                        <div className="flex-grow space-y-6">
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3 flex items-center gap-2"><span className="text-green-500">◆</span> Inclusions</h4>
                                                <ul className="space-y-2.5">
                                                    {['Four routine services', 'Immediate attendance of Breakdown'].map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-green-500 font-bold shrink-0">✓</span> {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3 flex items-center gap-2"><span className="text-red-400">◆</span> Exclusions</h4>
                                                <ul className="space-y-2.5">
                                                    <li className="flex items-start gap-2 text-sm text-gray-900 font-bold"><span className="text-red-500 shrink-0">×</span> All spare parts</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 text-center">
                                    <a href="/#contact" className="inline-flex px-8 py-3 bg-[#002f54] text-white text-[11px] font-bold uppercase tracking-wider rounded-xl shadow-lg hover:bg-[#0072bc] transition-colors">
                                        Request Contract Quotation
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                ) : (
                    // --- APPROACH VIEW ---
                    <section className="py-20 lg:py-16 bg-gray-50/50">
                        <div className="max-w-7xl mx-auto px-5 sm:px-8">
                            {/* Core Philosophy Pillars */}
                            <div className="mb-20">
                                <div className="text-center max-w-2xl mx-auto mb-16">
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                        Our Core <span className="text-[#0072bc]">Methodology</span>
                                    </h2>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Our approach is rooted in three foundational pillars that ensure every installation is a masterpiece of precision and reliability.
                                    </p>
                                </div>
                                <div className="grid lg:grid-cols-3 gap-8">
                                    {[
                                        {
                                            title: 'Standardized Quality Protocols',
                                            desc: 'We deliver industry-leading quality through standardized cooling protocols and optimized hardware selection, ensuring maximum thermodynamic efficiency.',
                                            icon: (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: 'Infrastructure Integrity',
                                            desc: 'Our safety-first engineering protocols prevent malfunctions through rigorous equipment auditing and preemptive thermal assessments.',
                                            icon: (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: 'Proactive Lifecycle Support',
                                            desc: 'We provide prompt, record-driven support that maximizes equipment longevity through dedicated technical monitoring and periodic health checks.',
                                            icon: (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )
                                        }
                                    ].map((step, idx) => (
                                        <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-[#0072bc]/30 hover:shadow-xl transition-all duration-500 group">
                                            <div className="w-12 h-12 bg-blue-50 text-[#0072bc] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0072bc] group-hover:text-white transition-all duration-500">
                                                {step.icon}
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>{step.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Implementation Roadmap */}
                            <div>
                                <div className="mb-12 border-l-4 border-[#0072bc] pl-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>The Execution Roadmap</h3>
                                    <p className="text-gray-500 text-sm">A systematic 6-phase journey from analytics to technical handover.</p>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { num: '01', title: 'Requirement Analytics', desc: 'Thorough site surveys and load estimations based on geographical mapping and occupancy density.' },
                                        { num: '02', title: 'System Blueprinting', desc: 'Drafting CAD alignments for duct routing and unit placements to ensure maximum aesthetic concealment.' },
                                        { num: '03', title: 'Procurement Strategy', desc: 'Sourcing exact Daikin models and superior gauge copper pipelines with factory quality cross-checks.' },
                                        { num: '04', title: 'Structural Installation', desc: 'Precision bracket mounting, copper laying, and gas-tight brazing protocols by certified engineers.' },
                                        { num: '05', title: 'Commissioning', desc: 'Vacuum holding tests, nitrogen flushing, and systematic start-ups with index testing.' },
                                        { num: '06', title: 'Telemetry Support', desc: 'Activating structural warranties and long-term preventive thermal checkups.' }
                                    ].map((step, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#0072bc]/20 transition-all group flex gap-5">
                                            <div className="text-2xl font-black text-gray-100 group-hover:text-[#0072bc]/10 transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>{step.num}</div>
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{step.title}</h4>
                                                <p className="text-gray-500 text-[11px] leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Service CTA Footer */}
                <div className="bg-gradient-to-r from-[#002f54] to-[#00477a] py-16 text-center">
                    <div className="max-w-3xl mx-auto px-5">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Ready to secure your climate?
                        </h2>
                        <p className="text-blue-100/60 mb-8 max-w-xl mx-auto">
                            Speak with our technical architects to engineer a site-specific layout or draft a comprehensive maintenance protocol.
                        </p>
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-[#002f54] text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-gray-100 transition-all shadow-xl"
                        >
                            Schedule Technical Visit
                        </a>
                    </div>
                </div>

            </div>
        </PageTransition>
    )
}

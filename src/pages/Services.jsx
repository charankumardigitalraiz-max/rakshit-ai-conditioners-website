import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

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
        <div className="bg-white min-h-screen pt-20">

            {/* Clean Service Header */}
            <div className="relative py-12 lg:mt-15 overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
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
                </div>
            </div>

            {/* Dynamic Content Divider */}
            <hr className="border-gray-100" />

            {/* View Switching */}
            {isAmc ? (
                // --- AMC VIEW ---
                <section className="py-20 lg:py-5">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="mb-10">
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                        Why Choose a <span className="text-[#0072bc]">Rakshith AMC?</span>
                                    </h2>
                                    <p className="text-gray-500 leading-relaxed">
                                        Our Annual Maintenance Contracts are proactive rather than reactive. We deploy scheduled telemetry checks and preventive interventions to detect thermal inefficiency before a breakdown occurs, minimizing risk to your critical operations.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Priority 24/7 Breakdown Assistance', desc: 'Guaranteed rapid response Service Level Agreements (SLA) for emergency faults.' },
                                        { title: 'Extended Equipment Lifespan', desc: 'Frequent cleaning and calibration reduces compressor load, significantly extending the life of the unit.' },
                                        { title: 'Optimized Energy Consumption', desc: 'Routine fine-tuning ensures the equipment operates at peak COP, directly lowering electricity bills.' },
                                        { title: 'Genuine OEM Spares', desc: 'We only supply authentic components directly manufactured by Daikin, ensuring compatibility and durability.' }
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex gap-4 p-5 rounded-2xl bg-[#f8fbff] border border-blue-50/50">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0072bc] shadow-sm flex-shrink-0">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{benefit.title}</h4>
                                                <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                {/* Geometric representation of AMC security */}
                                <div className="aspect-[4/5] rounded-[3rem] bg-gradient-to-tr from-[#002f54] to-[#0072bc] overflow-hidden shadow-2xl relative p-10 flex flex-col justify-end">
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3"></div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-white text-3xl font-bold mb-3">Comprehensive Coverage</h3>
                                        <p className="text-white/80 leading-relaxed text-sm">Transfer the liability of maintenance entirely to us. Under comprehensive coverage, gas charging, major compressor replacements, and routine service are fundamentally secured.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                // --- APPROACH VIEW ---
                <section className="py-20 lg:py-5 bg-gray-50/50">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Standard 5-step process visual */}
                            {[
                                { num: '01', title: 'Requirement Analytics', desc: 'Thorough site surveys and load estimations based on geographical mapping, glass exposure, and occupancy density to calculate exact tonnage parameters.' },
                                { num: '02', title: 'System Blueprinting', desc: 'Drafting CAD alignments for duct routing, unit placements, and piping to ensure maximum aesthetic concealment and minimal fluid friction.' },
                                { num: '03', title: 'Procurement Strategy', desc: 'Sourcing the exact Daikin models and superior gauge copper pipelines, meticulously cross-checking factory quality before dispatch.' },
                                { num: '04', title: 'Structural Installation', desc: 'Rigorous, non-destructive civil modifications followed by precision bracket mounting, copper laying, and gas-tight brazing protocols.' },
                                { num: '05', title: 'Commissioning & Handover', desc: 'Vacuum holding tests, nitrogen flushing, and systematic start-ups. Extensive testing of CFM, cooling index, and acoustics prior to formal handover.' },
                                { num: '06', title: 'Telemetry Support', desc: 'Implementing structural warranties and activating long-term preventive thermal checkups.' }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:border-[#0072bc]/20 transition-all group">
                                    <div className="text-[10px] font-black text-gray-200 uppercase tracking-widest mb-6 group-hover:text-[#0072bc]/20 transition-colors">Phase {step.num}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>{step.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
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
    )
}

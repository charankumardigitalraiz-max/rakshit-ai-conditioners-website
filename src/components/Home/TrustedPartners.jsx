import React from 'react'

const TrustedPartners = () => {
    const vrvClients = [
        'Sri Harsha Trucking Private', 'MHA Villa-591 Kiran', 'Aneesh Lucky Health Care', 'GHR Infra Developers LLP',
        'Skootr Global Private Limited', 'K Ganesh Rao', 'SSR Luxury Rooms', 'Chintalpalli Aparna',
        'Kantamneni Varun (301)', 'Yerneni Naveen (401)', 'Soumith Goud', 'RNV Ventures B4',
        'Joyalukkas', 'L&T Finance Limited', 'Covalent Laboratories Pvt Ltd'
    ];

    const standardClients = [
        'Minarva Cooffe Shop', 'S R Garden', 'SR Convenction', 'Prowell Hotels', 'Bharath Benz',
        'Harsha Toyota', 'Harsha Automotives Pvt Ltd', 'Venkatesh Sir School', 'A.Madhusudan Enco',
        'Enterprise Partners', 'Regional Logistics', 'Tech Hubs South', 'Corporate Headquarters'
    ];

    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-8 h-0.5 bg-[#0072bc]"></span>
                            <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Global Portfolio</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900  tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Trusted by <span className="text-[#0072bc]">Industry Leaders</span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Sector Impact Cards */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-24">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        {
                            title: 'Healthcare',
                            count: '12+',
                            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        },
                        {
                            title: 'Industrial',
                            count: '25+',
                            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        },
                        {
                            title: 'Hospitality',
                            count: '18+',
                            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        },
                        {
                            title: 'Enterprise',
                            count: '40+',
                            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        },
                    ].map((sector, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center hover:border-[#0072bc]/20 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group">
                            <div className="w-16 h-16 rounded-[1.25rem] bg-blue-50/50 text-[#0072bc] flex items-center justify-center mb-6 group-hover:bg-[#0072bc] group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                                {sector.icon}
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{sector.count}</div>
                            <div className="text-[10px] font-bold text-[#0072bc] uppercase tracking-[0.2em]">{sector.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative space-y-12">
                {/* Row 1: VRV Portfolio */}
                <div className="relative z-20">
                    <div className="flex items-center gap-4 mb-5 px-10">
                        <span className="text-[10px] font-black text-[#0072bc] uppercase tracking-wider whitespace-nowrap">High-Power VRV Systems</span>
                        <div className="h-px w-full bg-blue-100"></div>
                    </div>
                    <div className="flex overflow-hidden">
                        <div className="animate-marquee whitespace-nowrap flex py-2">
                            {vrvClients.concat(vrvClients).map((client, i) => (
                                <div key={i} className="mx-4 px-8 py-5 bg-white border border-gray-100 rounded-[2rem] flex items-center gap-4 hover:border-[#0072bc]/30 transition-all shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] group">
                                    <div className="flex flex-col">
                                        <span className="text-[14px] font-bold text-gray-800 tracking-tight uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>{client}</span>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc]"></span>
                                            <span className="text-[8px] font-black text-[#0072bc] uppercase tracking-widest">VRV Maintenance</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Row 2: Standard Systems (Reverse) */}
                <div className="relative z-20">
                    <div className="flex items-center gap-4 mb-5 px-10">
                        <div className="h-px w-full bg-gray-200"></div>
                        <span className="text-[10px] font-black text-gray-700 uppercase tracking-wider whitespace-nowrap">Standard / Non-VRV Solutions</span>
                    </div>
                    <div className="flex overflow-hidden">
                        <div className="animate-marquee-reverse whitespace-nowrap flex py-2">
                            {standardClients.concat(standardClients).map((client, i) => (
                                <div key={i} className="mx-4 px-8 py-5 bg-white border border-gray-100 rounded-[2rem] flex items-center gap-4 hover:border-gray-300 transition-all shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] group">
                                    <div className="flex flex-col text-right">
                                        <span className="text-[14px] font-bold text-gray-600 tracking-tight uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>{client}</span>
                                        <div className="flex items-center justify-end gap-2 mt-1.5">
                                            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Standard AC Care</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    )
}

export default TrustedPartners

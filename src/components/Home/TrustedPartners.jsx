import React from 'react'

const TrustedPartners = () => {

    const vrvClients = [
        { name: 'OMEGA HOSPITAL', address: 'Gachibowli', hp: 1100 },
        { name: 'GITAM', address: 'Sangareddy', hp: 498 },
        { name: 'G M KANNA BABU (ESAOTE INDIA)', address: 'Kondapur', hp: 180 },
        { name: 'R ARUNKUMAR AYYANA PRESTAGE 401F A BLOCK', address: 'Kondapur', hp: 148 },
        { name: 'PRASANNA', address: 'Kokapet', hp: 146 },
        { name: 'TELUGU FILM PRODUCERS', address: 'Kokapet', hp: 142 },
        { name: 'NAKODA JEWELLERS', address: 'Nizampet', hp: 140 },
        { name: 'MV MADHUSUDHAN', address: 'Jubilee Hills', hp: 140 },
        { name: 'LEIUTIS PHARMACEUTICALS LLP', address: 'Bala Nagar', hp: 136 },
        { name: 'DVS RAJU', address: 'Jubilee Hills', hp: 132 },
        { name: 'COVALENT LABORATORIES PVT LTD', address: 'Sangareddy', hp: 118 },
        { name: 'SM SHEGAL FOUNDATION', address: 'Ravalkole', hp: 115 },
        { name: 'MHA VILLA-110 (Mr.MANISH)', address: 'Tellapur', hp: 110 },
        { name: 'LAPALOMA VILLA OWNERS WELFARE', address: 'Mokila', hp: 92 },
        { name: 'NCL INDUSTRIES LTD', address: 'Secunderabad', hp: 86 },
        { name: 'Sri Harsha Trucking Private', address: 'Hayathnagar', hp: 74 },
        { name: 'MHA Villa-591 Kiran', address: 'Tellapur', hp: 72 },
        { name: 'Aneesh Lucky Health Care', address: 'Jubilee Hills', hp: 62 },
        { name: 'GHR Infra Developers LLP', address: 'Kolluru', hp: 60 },
        { name: 'Skootr Global Private Limited', address: 'Hi Tech City', hp: 60 },
        { name: 'K Ganesh Rao', address: 'Secunderabad', hp: 54 },
        { name: 'SSR Luxury Rooms', address: 'Madhinaguda', hp: 52 },
        { name: 'Chintalpalli Aparna', address: 'Jubilee Hills', hp: 48 },
        { name: 'Kantamneni Varun (301)', address: 'Jubilee Hills', hp: 46 },
        { name: 'Yerneni Naveen (401)', address: 'Jubilee Hills', hp: 46 },
        { name: 'Soumith Goud', address: 'Kolluru', hp: 44 },
        { name: 'RNV Ventures B4', address: 'Nanakaramguda', hp: 44 },
        { name: 'Joyalukkas', address: 'Warangal', hp: 42 },
        { name: 'L&T Finance Limited', address: 'Ranigunj', hp: 42 },
        { name: 'Covalent Laboratories Pvt Ltd', address: 'Sangareddy', hp: 40 },
    ];

    const standardClients = [
        { name: 'Minarva Coffee Shop', address: 'Hyderabad' },
        { name: 'S R Garden', address: 'Hyderabad' },
        { name: 'SR Convention', address: 'Hyderabad' },
        { name: 'Prowell Hotels', address: 'Hyderabad' },
        { name: 'Bharath Benz', address: 'Hyderabad' },
        { name: 'Harsha Toyota', address: 'Hyderabad' },
        { name: 'Harsha Automotives Pvt Ltd', address: 'Hyderabad' },
        { name: 'Venkatesh Sir School', address: 'Hyderabad' },
        { name: 'A. Madhusudan Enco', address: 'Hyderabad' },
        { name: 'Enterprise Partners', address: 'Hyderabad' },
        { name: 'Regional Logistics', address: 'Hyderabad' },
        { name: 'Tech Hubs South', address: 'Hi Tech City' },
        { name: 'Corporate Headquarters', address: 'Gachibowli' },
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Trusted by <span className="text-[#0072bc]">Industry Leaders</span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Sector Impact Cards */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16">
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
                            <div className="text-[10px] font-bold text-[#0072bc] uppercase tracking-wider">{sector.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Marquee Rows */}
            <div className="relative space-y-10">
                {/* Row 1: VRV Clients */}
                <div className="relative z-20">
                    <div className="flex items-center gap-4 mb-5 px-10">
                        <span className="text-[10px] font-bold text-[#0072bc] uppercase tracking-wider whitespace-nowrap">High-Power VRV Systems</span>
                        <div className="h-px w-full bg-blue-100"></div>
                    </div>
                    <div className="flex overflow-hidden">
                        <div className="animate-marquee flex py-2 gap-5">
                            {vrvClients.concat(vrvClients).map((client, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 bg-white border border-gray-100 rounded-2xl px-6 py-4 hover:border-[#0072bc]/30 hover:shadow-lg transition-all duration-300 group min-w-[260px]"
                                >
                                    {/* Client Name */}
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <span
                                            className="text-[13px] font-bold text-gray-800 group-hover:text-[#0072bc] transition-colors leading-tight"
                                            style={{ fontFamily: 'Outfit, sans-serif' }}
                                        >
                                            {client.name}
                                        </span>
                                        {/* HP Badge */}
                                        <span className="flex-shrink-0 bg-blue-50 text-[#0072bc] text-[11px] font-black px-2.5 py-1 rounded-lg border border-blue-100 group-hover:bg-[#0072bc] group-hover:text-white transition-colors">
                                            {client.hp} HP
                                        </span>
                                    </div>
                                    {/* Address */}
                                    <div className="flex items-center gap-1.5">
                                        <svg className="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-[11px] text-gray-400 font-medium">{client.address}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Row 2: Standard Clients (Reverse) */}
                <div className="relative z-20">
                    <div className="flex items-center gap-4 mb-5 px-10">
                        <div className="h-px w-full bg-gray-200"></div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">Standard / Non-VRV Solutions</span>
                    </div>
                    <div className="flex overflow-hidden">
                        <div className="animate-marquee-reverse flex py-2 gap-5">
                            {standardClients.concat(standardClients).map((client, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 hover:border-gray-300 hover:bg-white hover:shadow-md transition-all duration-300 group min-w-[220px]"
                                >
                                    <span
                                        className="text-[13px] font-semibold text-gray-600 group-hover:text-gray-900 transition-colors leading-tight block mb-2"
                                        style={{ fontFamily: 'Outfit, sans-serif' }}
                                    >
                                        {client.name}
                                    </span>
                                    <div className="flex items-center gap-1.5">
                                        <svg className="w-3 h-3 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-[11px] text-gray-400 font-medium">{client.address}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    )
}

export default TrustedPartners

import React, { useState, useEffect } from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionTransition from '../components/ui/SectionTransition';

const clientCategories = [
    { id: 'all', name: 'All' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'enterprise', name: 'Enterprise' },
    { id: 'hospitality', name: 'Hospitality' }
];

const allClients = [
    { name: 'OMEGA HOSPITAL', location: 'Gachibowli', hp: 1100, category: 'healthcare', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop' },
    { name: 'GITAM University', location: 'Sangareddy', hp: 498, category: 'industrial', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop' },
    { name: 'Leiutis Pharmaceuticals', location: 'Bala Nagar', hp: 136, category: 'industrial', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&h=400&fit=crop' },
    { name: 'Covalent Laboratories', location: 'Sangareddy', hp: 118, category: 'industrial', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1516122276289-c28ffbaf888c?w=600&h=400&fit=crop' },
    { name: 'NCL Industries Ltd', location: 'Secunderabad', hp: 86, category: 'industrial', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop' },
    { name: 'MyHome Ankura', location: 'Tellapur', hp: 72, category: 'hospitality', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop' },
    { name: 'La Paloma Villas', location: 'Mokila', hp: 92, category: 'hospitality', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop' },
    { name: 'Iris Raghava', location: 'Kolluru', hp: 60, category: 'enterprise', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop' },
    { name: 'Kakateeya Infra', location: 'Hyderabad', hp: null, category: 'industrial', type: 'Installation', logo: 'https://images.unsplash.com/photo-1590845947698-8924d7409b56?w=600&h=400&fit=crop' },
    { name: 'My Scape', location: 'Hyderabad', hp: null, category: 'enterprise', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
    { name: 'Subhishi', location: 'Hyderabad', hp: null, category: 'industrial', type: 'Installation', logo: 'https://images.unsplash.com/photo-1565785755576-f98f2e48f3fd?w=600&h=400&fit=crop' },
    { name: 'Nex Gen', location: 'Hyderabad', hp: null, category: 'enterprise', type: 'Standard AC', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop' },
    { name: 'Indu', location: 'Hyderabad', hp: null, category: 'industrial', type: 'Installation', logo: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop' },
    { name: 'Adarsh', location: 'Hyderabad', hp: null, category: 'industrial', type: 'Standard AC', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
    { name: 'Aneesh Lucky Health Care', location: 'Jubilee Hills', hp: 62, category: 'healthcare', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop' },
    { name: 'Nakoda Jewellers', location: 'Nizampet', hp: 140, category: 'enterprise', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop' },
    { name: 'Skootr Global', location: 'Hi Tech City', hp: 60, category: 'enterprise', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop' },
    { name: 'L&T Finance Limited', location: 'Ranigunj', hp: 42, category: 'enterprise', type: 'Standard AC', logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop' },
    { name: 'Joyalukkas', location: 'Warangal', hp: 42, category: 'enterprise', type: 'Standard AC', logo: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop' },
    { name: 'Bharath Benz', location: 'Hyderabad', hp: null, category: 'industrial', type: 'Installation', logo: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop' },
    { name: 'Harsha Toyota', location: 'Hyderabad', hp: null, category: 'enterprise', type: 'Installation', logo: 'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=600&h=400&fit=crop' },
    { name: 'Prowell Hotels', location: 'Hyderabad', hp: null, category: 'hospitality', type: 'Commercial', logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop' },
    { name: 'SR Convention', location: 'Hyderabad', hp: null, category: 'hospitality', type: 'Commercial', logo: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop' },
    { name: 'S R Garden', location: 'Hyderabad', hp: null, category: 'hospitality', type: 'Commercial', logo: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop' },
    { name: 'Minarva Coffee Shop', location: 'Hyderabad', hp: null, category: 'hospitality', type: 'Commercial', logo: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop' },
    { name: 'G M Kanna Babu', location: 'Kondapur', hp: 180, category: 'enterprise', type: 'VRV Systems', logo: 'https://images.unsplash.com/photo-1545259742-89afcf21f9ec?w=600&h=400&fit=crop' },
];

export default function Clients() {
    const [filter, setFilter] = useState('all');
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const filtered = allClients.filter(c => filter === 'all' || c.category === filter);

    return (
        <PageTransition>
            <div className="min-h-screen bg-[#f8f9fb] font-sans">

                {/* ── HERO ── */}
                <section className="bg-white border-b border-gray-100 pt-28 lg:pt-36 pb-12 lg:pb-16">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8">
                        <SectionTransition direction="up">
                            <div className="inline-flex items-center gap-2 mb-5">
                                <span className="w-8 h-0.5 bg-[#0072bc]"></span>
                                <span className="text-[#0072bc] text-xs font-bold uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Our Partners</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tighter mb-5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Trusted by <span className="text-[#0072bc]">Industry</span><br className="hidden lg:block" /> Leaders.
                            </h1>
                            <p className="text-gray-500 text-base leading-relaxed max-w-lg font-normal">
                                From critical healthcare infrastructure to premium residential developments — powering South India's most ambitious projects.
                            </p>
                        </SectionTransition>
                    </div>
                </section>

                {/* ── STICKY FILTER ── */}
                <div className="sticky top-[80px] z-40 bg-white/95 backdrop-blur-lg border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8">
                        <div className="flex items-center justify-between h-14 overflow-x-auto no-scrollbar">
                            <div className="flex items-center gap-1">
                                {clientCategories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setFilter(cat.id)}
                                        className={`px-4 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200 ${filter === cat.id
                                            ? 'text-[#0072bc] bg-blue-50'
                                            : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
                                        style={{ fontFamily: 'Outfit, sans-serif' }}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                            <span className="hidden sm:block text-xs border border-gray-100 px-5 py-3 rounded-lg text-gray-400 font-medium flex-shrink-0">
                                <span className="text-[#0072bc] font-bold">{filtered.length}</span> partners
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── PARTNER GRID ── */}
                <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 lg:py-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filtered.map((client, idx) => (
                            <SectionTransition key={client.id || idx} delay={idx * 0.05}>
                                <div className="group relative aspect-square overflow-hidden rounded-[2rem] bg-gray-900 border border-gray-100 shadow-md">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />

                                    {/* Glass Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                                    {/* Compact Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <div className="transform translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                                            <div className="mb-2.5">
                                                <span className="bg-[#0072bc] text-white text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded shadow-lg">
                                                    {client.category}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold text-white mb-2 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                                {client.name}
                                            </h3>

                                            {/* <div className="flex items-center justify-between pt-3 border-t border-white/10">
                                                <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{client.location}</span>
                                                {client.hp && (
                                                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-2 py-0.5 rounded text-[10px] font-black">
                                                        {client.hp} HP
                                                    </span>
                                                )}
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </SectionTransition>
                        ))}
                    </div>
                </div>

                {/* ── STATS BAND ── */}
                {/* <div className="bg-[#0072bc] py-14">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8">
                        <div className="grid grid-cols-3 gap-8 text-center">
                            {[
                                { val: '500+', label: 'Installations' },
                                { val: '98%', label: 'Retention Rate' },
                                { val: '24/7', label: 'Support' }
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="text-3xl lg:text-5xl font-black text-white mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{s.val}</div>
                                    <div className="text-blue-100/70 text-xs font-semibold uppercase tracking-wide">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}

                {/* ── CTA ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-2xl mx-auto px-5 text-center">
                        <SectionTransition direction="up">
                            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-5 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Join our growing network of <span className="text-[#0072bc]">trusted partners.</span>
                            </h2>
                            <p className="text-gray-500 text-base mb-10 font-normal leading-relaxed">
                                We deliver end-to-end HVAC lifecycle management for the most demanding commercial and residential requirements.
                            </p>
                            <a href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-[#0072bc] text-white text-sm font-bold rounded-full hover:bg-[#005fa3] hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-900/15">
                                Get in Touch
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </SectionTransition>
                    </div>
                </section>

            </div>
        </PageTransition>
    );
}

import React, { useState, useEffect } from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionTransition from '../components/ui/SectionTransition';
import { fetchJSON, getImageUrl } from '../services/api';

export default function Clients() {
    const [clients, setClients] = useState([]);
    const [categories, setCategories] = useState([{ _id: 'all', name: 'All' }]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        loadCategories();
    }, []);

    useEffect(() => {
        loadClients();
    }, [filter]);

    const loadCategories = async () => {
        try {
            // Using the admin categories endpoint as it's already established and public
            const res = await fetchJSON('/admin/categories?limit=100');
            console.log('Loaded categories:', res);
            if (res.success && Array.isArray(res.data)) {
                setCategories([{ _id: 'all', name: 'All' }, ...res.data]);
            }
        } catch (err) {
            console.error('Error loading categories:', err);
        }
    };


    const loadClients = async () => {
        setLoading(true);
        try {
            const query = filter !== 'all' ? `?category=${filter}` : '';
            const res = await fetchJSON(`/clients${query}`);
            if (res.success) {
                setClients(res.data);
            }
        } catch (err) {
            console.error('Error loading clients:', err);
        } finally {
            setLoading(false);
        }
    };

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
                                {categories.map(cat => (
                                    <button
                                        key={cat._id}
                                        onClick={() => setFilter(cat._id)}
                                        className={`px-4 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${filter === cat._id
                                            ? 'text-[#0072bc] bg-blue-50'
                                            : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
                                        style={{ fontFamily: 'Outfit, sans-serif' }}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                            <span className="hidden sm:block text-xs border border-gray-100 px-5 py-3 rounded-lg text-gray-400 font-medium flex-shrink-0">
                                <span className="text-[#0072bc] font-bold">{clients.length}</span> partners
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── PARTNER GRID ── */}
                <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 lg:py-14">
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0072bc]"></div>
                        </div>
                    ) : clients.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {clients.map((client, idx) => (
                                <SectionTransition key={client._id || idx} delay={idx * 0.05}>
                                    <div className="group relative aspect-square overflow-hidden rounded-[2rem] bg-gray-900 border border-gray-100 shadow-md">
                                        <img
                                            src={getImageUrl(client.image)}
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
                                                        {client.category?.name || 'Partner'}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-bold text-white mb-2 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                                    {client.name}
                                                </h3>

                                                <div className="flex items-center justify-between pt-3 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{client.location}</span>
                                                    {client.hp && (
                                                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-2 py-0.5 rounded text-[10px] font-black">
                                                            {client.hp} HP
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SectionTransition>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-400">No partners found in this category.</p>
                        </div>
                    )}
                </div>

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

import React, { useEffect, useState } from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionTransition from '../components/ui/SectionTransition';
import { fetchJSON } from '../services/api';
import { toast } from 'react-hot-toast';

const vijaImages = [
    '/branch/WhatsApp Image 2026-04-22 at 5.30.21 PM (2).jpeg',
    '/branch/WhatsApp Image 2026-04-22 at 5.30.21 PM.jpeg',
    '/branch/WhatsApp Image 2026-04-22 at 5.30.22 PM.jpeg',
    '/branch/WhatsApp Image 2026-04-22 at 5.30.23 PM (1).jpeg',
    '/branch/WhatsApp Image 2026-04-22 at 5.30.23 PM.jpeg',
    '/branch/WhatsApp Image 2026-04-22 at 5.30.19 PM (1).jpeg',
    '/branch/WhatsApp Image 2026-04-22 at 5.30.19 PM (2).jpeg',
    '/branch/WhatsApp Image 2026-04-22 at 5.30.19 PM.jpeg',
    '/branch/WhatsApp Image 2026-04-22 at 5.30.20 PM.jpeg',
    '/branch/WhatsApp Image 2026-04-22 at 5.30.21 PM (1).jpeg',

];

const hydImages = [
    '/Screenshot 2026-04-21 163857.png',
    '/Screenshot 2026-04-21 164012.png',
    '/Screenshot 2026-04-21 164050.png',
    '/Screenshot 2026-04-21 182922.png',
    '/gallary/4.png',
    '/gallary/5.png'
];

const videoFile = '/branch/WhatsApp Video 2026-04-22 at 5.30.24 PM.mp4';

const branchData = {
    hyd: {
        id: 'hyd',
        name: 'Hyderabad Operations',
        label: 'Corporate Headquarters',
        address: 'Plot no-41, Lakshmi Nagar Colony, Phase-1, Road no: 3R, Near Heritage Fresh, Miyapur, Hyderabad, TS 500049',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.954898283918!2d78.36654679999998!3d17.498843400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9300783092b5%3A0xed084e0674aa10b7!2sRAKSHITH%20AIR%20CONDITION%20%26%20SERVICES!5e1!3m2!1sen!2sin!4v1776410422214!5m2!1sen!2sin',
        nav: 'https://maps.google.com/?q=17.4988434,78.3665468',
        images: hydImages,
        theme: '#0072bc',
        video: null
    },
    vija: {
        id: 'vija',
        name: 'Vijayawada Hub',
        label: 'Regional Distribution Center',
        address: 'D.No. 4-43, 100 Feet Rd, near Hanuman Temple, Beside Bank of Baroda, Poranki Rural, Vijayawada, AP 521137',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.405632009926!2d80.70200257510534!3d16.50083482773909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb003fb5a211%3A0xe753b764291e5b32!2sDaikin%20Rakshith%20air%20condition%20service%20and%20plaza!5e1!3m2!1sen!2sin!4v1776410519900!5m2!1sen!2sin',
        nav: 'https://maps.google.com/?q=16.5008348,80.7020026',
        images: vijaImages,
        theme: '#22c55e',
        video: videoFile
    }
};

export default function Contact() {
    const [lightbox, setLightbox] = useState(null);
    const [activeGallery, setActiveGallery] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactData(prev => ({ ...prev, [name]: value }));
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const data = await fetchJSON('/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactData)
            });
            if (data.success) {
                toast.success('Message sent successfully! We will get back to you soon.');
                setContactData({ name: '', email: '', phone: '', subject: '', message: '' });
            }
        } catch (error) {
            toast.error(error.message || 'Failed to send message');
        } finally {
            setSubmitting(false);
        }
    };

    // Low-Latency Peek States
    const [swapHyd, setSwapHyd] = useState(null);
    const [swapVija, setSwapVija] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openLightbox = (img, gallery) => {
        setLightbox(img);
        setActiveGallery(gallery);
    };

    return (
        <PageTransition>
            <div className="min-h-screen bg-white  pt-10 text-[#1a1a1a] font-sans">

                {/* 1. SLIM HERO */}
                <header className="relative pt-20 lg:pt-28 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0072bc]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 pb-6 lg:pb-8">
                        <SectionTransition direction="up">
                            <div className="inline-flex items-center gap-2 mb-3">
                                <span className="w-10 h-0.5 bg-[#0072bc]"></span>
                                <span className="text-[#0072bc] text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Support Architecture</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Connect with <span className="text-[#0072bc]">Rakshith Air Condition </span>& Services.
                            </h1>

                            <p className="text-gray-600 text-base leading-relaxed max-w-xl font-normal">
                                Access our regional corporate network for enterprise sales, authorized service support, and technical project lifecycle management across South India.
                            </p>
                        </SectionTransition>
                    </div>
                </header>

                {/* 2. SUPPORT PILLARS */}
                <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-6 lg:mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                label: 'Sales Operations',
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                                phone1: '+91 90300 64466',
                                theme: '#0072bc',
                                href: 'tel:+919030064466',
                                detail: 'Enterprise & Industrial'
                            },
                            {
                                label: 'Technical Service',
                                icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" /></>,
                                phone1: '+91 91000 90150',
                                theme: '#22c55e',
                                href: 'tel:+919100090150',
                                detail: 'Authorized Assistance'
                            },
                            {
                                label: 'Corporate Email',
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                                phone1: 'info@rakshithaircondition.com',
                                theme: '#c667ce',
                                href: 'mailto:info@rakshithaircondition.com',
                                detail: 'Consultancy'
                            }
                        ].map((card, idx) => (
                            <SectionTransition key={idx} delay={idx * 0.1} direction="up">
                                <div className="group bg-white rounded-2xl p-6 lg:p-7 border border-gray-100 hover:border-[#0072bc]/20 hover:shadow-[0_20px_50px_rgba(0,114,188,0.08)] transition-all duration-500 overflow-hidden h-full">
                                    <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: card.theme }}></div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center justify-center transition-all group-hover:scale-110" style={{ color: card.theme }}>
                                            <svg className="w-4 h-4 font-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">{card.icon}</svg>
                                        </div>
                                        <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>{card.label}</h3>
                                    </div>
                                    <a href={card.href} className="block text-[18px] lg:text-[18px] font-semibold text-gray-900 mb-0.5 truncate hover:text-[#0072bc] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>{card.phone1}</a>
                                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{card.detail}</p>
                                </div>
                            </SectionTransition>
                        ))}
                    </div>
                </div>

                {/* 3. EXECUTIVE REGIONAL NETWORK - HORIZONTAL BLOCKS */}
                <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-20 lg:mb-28">
                    <SectionTransition direction="up">

                        {/* Executive Header */}
                        <div className="mb-10 lg:mb-5">
                            <div className="inline-flex items-center gap-2 mb-2">
                                <span className="w-10 h-0.5 bg-[#0072bc]"></span>
                                <span className="text-[#0072bc] text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Regional Infrastructure</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>Strategic <span className="text-[#0072bc]">Hubs.</span></h2>
                            <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-normal max-w-2xl">Our primary corporate nodes managing technical operations and logistics directly across South India.</p>
                        </div>

                        {/* Full Width Stacked Interface */}
                        <div className="flex flex-col gap-12 lg:gap-20">

                            {/* HYDERABAD HUB (Horizontal Layout - Map on Right) */}
                            <div className="bg-white rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_40px_100px_-20px_rgba(0,114,188,0.15)] transition-all duration-1000 flex flex-col lg:flex-row group relative min-h-[420px]">
                                {/* Map Node (Reduced Width) */}
                                <div className="lg:w-[46%] xl:w-[48%] relative h-[250px] lg:h-auto bg-gray-50 border-b lg:border-b-0 lg:border-l border-gray-100 overflow-hidden order-1 lg:order-2">
                                    <div className="absolute inset-0 transition-opacity duration-1000">
                                        {swapHyd ? (
                                            <img src={swapHyd} className="absolute inset-0 w-full h-full object-cover animate-in fade-in zoom-in-110 duration-1000" alt="Peek" />
                                        ) : (
                                            <iframe
                                                src={branchData.hyd.map}
                                                className="w-full h-full  group-hover:grayscale-[20%] transition-all duration-1000 "
                                                allowFullScreen=""
                                                loading="lazy"
                                            ></iframe>
                                        )}
                                    </div>
                                    {/* <div className="absolute top-8 right-8 z-10 px-5 py-2 bg-white shadow-2xl shadow-blue-900/10 rounded-full border border-blue-50/50">
                                        <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.25em] text-[#0072bc]">Operational Satellite Interface</span>
                                    </div> */}

                                    {!swapHyd && (
                                        <div className="absolute bottom-8 left-8 right-8 z-10 flex items-center gap-5 pointer-events-none">
                                            <div className="h-0.5 flex-grow bg-blue-900/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#0072bc] w-1/3 animate-pulse"></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] whitespace-nowrap">Asset Telemetry</span>
                                        </div>
                                    )}
                                </div>
                                {/* Balanced Content Area (Widened) */}
                                <div className="lg:w-[54%] xl:w-[52%] p-8 lg:p-11 xl:px-14 xl:py-12 flex flex-col relative justify-center order-2 lg:order-1">
                                    <div className="space-y-4 mb-8 relative z-10">
                                        <div className="inline-block py-1 px-3 bg-blue-50 rounded-lg">
                                            <span className="text-[10px] font-bold text-[#0072bc] uppercase tracking-[0.2em]">Operational Node</span>
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            {branchData.hyd.name}<span className="text-[#0072bc]">.</span>
                                        </h2>
                                        <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-normal pr-6 max-w-sm">
                                            {branchData.hyd.address}
                                        </p>
                                    </div>

                                    <div className="space-y-5 relative z-10">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Infrastructure Gallery</span>
                                            <span className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#0072bc] rounded-full animate-pulse"></span>
                                                <span className="text-[10px] font-black text-[#0072bc] uppercase tracking-widest italic">Live Peek</span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            {branchData.hyd.images.slice(0, 5).map((img, i) => (
                                                <div
                                                    key={i}
                                                    onMouseEnter={() => setSwapHyd(img)}
                                                    onMouseLeave={() => setSwapHyd(null)}
                                                    onClick={() => openLightbox(img, branchData.hyd.images)}
                                                    className={`w-14 h-14 lg:w-16 lg:h-16 xl:w-17 xl:h-17 rounded-2xl overflow-hidden cursor-zoom-in border-[3px] transition-all duration-500 hover:scale-115 hover:-translate-y-3 shadow-md ${swapHyd === img ? 'border-[#0072bc] shadow-2xl shadow-blue-500/40 ring-4 ring-blue-50 scale-110 -translate-y-2' : 'border-white grayscale-[40%] hover:grayscale-0 hover:border-blue-100'}`}
                                                >
                                                    <img src={img} className="w-full h-full object-cover" alt="Hub" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-10 relative z-10">
                                        <a href={branchData.hyd.nav} target="_blank" rel="noreferrer" className="group/btn inline-flex items-center justify-center gap-4 w-fit px-10 py-4 bg-[#0072bc] text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-[#005fa3] shadow-[0_20px_50px_rgba(0,114,188,0.2)] hover:shadow-[0_25px_60px_rgba(0,114,188,0.3)] transition-all text-[11px] active:scale-95" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            Launch Navigation
                                            <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </a>
                                    </div>
                                    <div className="absolute left-0 top-12 bottom-12 w-1 bg-[#0072bc]/10 rounded-full hidden lg:block"></div>
                                </div>


                            </div>                            {/* VIJAYAWADA HUB (Horizontal Layout - Map on Right) */}
                            <div className="bg-white rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_40px_100px_-20px_rgba(34,197,94,0.15)] transition-all duration-1000 flex flex-col lg:flex-row group relative min-h-[420px]">
                                {/* Map Node (Anchored Left) */}
                                <div className="lg:w-[46%] xl:w-[48%] relative h-[250px] lg:h-auto bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-100 overflow-hidden order-1 lg:order-1">
                                    <div className="absolute inset-0 transition-opacity duration-1000">
                                        {swapVija === 'video' ? (
                                            <video src={videoFile} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-700" />
                                        ) : swapVija ? (
                                            <img src={swapVija} className="absolute inset-0 w-full h-full object-cover animate-in fade-in zoom-in-110 duration-1000" alt="Peek" />
                                        ) : (
                                            <iframe
                                                src={branchData.vija.map}
                                                className="w-full h-full  group-hover:grayscale-[20%] transition-all duration-1000 "
                                                allowFullScreen=""
                                                loading="lazy"
                                            ></iframe>
                                        )}
                                    </div>
                                    {/* <div className="absolute top-8 right-8 z-10 px-5 py-2 bg-white shadow-2xl shadow-green-900/10 rounded-full border border-green-50/50">
                                        <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.25em] text-green-600">Regional Gateway Satellite Interface</span>
                                    </div> */}

                                    {!swapVija && (
                                        <div className="absolute bottom-8 left-8 right-8 z-10 flex items-center gap-5 pointer-events-none">
                                            <div className="h-0.5 flex-grow bg-green-900/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-green-500 w-1/4 animate-pulse"></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] whitespace-nowrap">Logistic Telemetry</span>
                                        </div>
                                    )}
                                </div>
                                {/* Content Area (Anchored Right) */}
                                <div className="lg:w-[54%] xl:w-[52%] p-8 lg:p-11 xl:px-14 xl:py-12 flex flex-col relative justify-center order-2 lg:order-2">
                                    <div className="space-y-4 mb-8 relative z-10">
                                        <div className="inline-block py-1 px-3 bg-green-50 rounded-lg">
                                            <span className="text-[10px] font-bold text-green-600 uppercase tracking-[0.2em]">Logistics Center</span>
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            {branchData.vija.name}<span className="text-green-600">.</span>
                                        </h2>
                                        <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-normal pr-6 max-w-sm">
                                            {branchData.vija.address}
                                        </p>
                                    </div>

                                    <div className="space-y-5 relative z-10">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Operational Assets</span>
                                            <span className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                                <span className="text-[10px] font-black text-green-600 uppercase tracking-widest italic">Live Peek</span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            {branchData.vija.images.slice(0, 4).map((img, i) => (
                                                <div
                                                    key={i}
                                                    onMouseEnter={() => setSwapVija(img)}
                                                    onMouseLeave={() => setSwapVija(null)}
                                                    onClick={() => openLightbox(img, branchData.vija.images)}
                                                    className={`w-14 h-14 lg:w-16 lg:h-16 xl:w-17 xl:h-17 rounded-2xl overflow-hidden cursor-zoom-in border-[3px] transition-all duration-500 hover:scale-115 hover:-translate-y-3 shadow-md ${swapVija === img ? 'border-green-600 shadow-2xl shadow-green-500/40 ring-4 ring-green-50 scale-110 -translate-y-2' : 'border-white grayscale-[40%] hover:grayscale-0 hover:border-green-100'}`}
                                                >
                                                    <img src={img} className="w-full h-full object-cover" alt="Hub" />
                                                </div>
                                            ))}
                                            <div onMouseEnter={() => setSwapVija('video')} onMouseLeave={() => setSwapVija(null)} className="w-14 h-14 lg:w-16 lg:h-16 xl:w-17 xl:h-17 rounded-2xl bg-green-50 flex items-center justify-center cursor-pointer hover:bg-green-100 border-[3px] border-white transition-all shadow-md group/vid">
                                                <svg className="w-8 h-8 text-green-600 group-hover/vid:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 relative z-10">
                                        <a href={branchData.vija.nav} target="_blank" rel="noreferrer" className="group/btn inline-flex items-center justify-center gap-4 w-fit px-10 py-4 bg-green-600 text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-green-700 shadow-[0_20px_50px_rgba(22,163,74,0.2)] hover:shadow-[0_25px_60px_rgba(22,163,74,0.3)] transition-all text-[11px] active:scale-95" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            Launch Navigation
                                            <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </a>
                                    </div>
                                    <div className="absolute right-0 top-12 bottom-12 w-1 bg-green-500/10 rounded-full hidden lg:block"></div>
                                </div>


                            </div>

                        </div>
                    </SectionTransition>
                </div>

                {/* 4. CONTACT FORM SECTION */}
                {/* <div className="bg-slate-50 py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <SectionTransition direction="right">
                                <div>
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <span className="w-10 h-0.5 bg-[#0072bc]"></span>
                                        <span className="text-[#0072bc] text-xs font-bold uppercase tracking-wider">Direct Communication</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                        Send us a <span className="text-[#0072bc]">Message.</span>
                                    </h2>
                                    <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
                                        For general inquiries, corporate feedback, or partnership opportunities, please use the form below. Our administrative team will route your message to the appropriate department.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#0072bc]">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Response Time</h4>
                                                <p className="text-gray-900 font-bold">Within 2-4 Business Hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SectionTransition>

                            <SectionTransition direction="left">
                                <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 border border-gray-100 shadow-2xl shadow-blue-900/5">
                                    <form className="space-y-5" onSubmit={handleContactSubmit}>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Full Name</label>
                                                <input
                                                    required
                                                    name="name"
                                                    type="text"
                                                    value={contactData.name}
                                                    onChange={handleContactChange}
                                                    placeholder="John Doe"
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Email Address</label>
                                                <input
                                                    required
                                                    name="email"
                                                    type="email"
                                                    value={contactData.email}
                                                    onChange={handleContactChange}
                                                    placeholder="john@example.com"
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Phone (Optional)</label>
                                                <input
                                                    name="phone"
                                                    type="tel"
                                                    value={contactData.phone}
                                                    onChange={handleContactChange}
                                                    placeholder="+91"
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Subject</label>
                                                <input
                                                    required
                                                    name="subject"
                                                    type="text"
                                                    value={contactData.subject}
                                                    onChange={handleContactChange}
                                                    placeholder="e.g. Partnership Inquiry"
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Your Message</label>
                                            <textarea
                                                required
                                                name="message"
                                                value={contactData.message}
                                                onChange={handleContactChange}
                                                rows="4"
                                                placeholder="Write your message here..."
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-all resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className={`w-full py-4 bg-[#002f54] hover:bg-[#0072bc] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-900/10 transition-all active:scale-[0.98] ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            style={{ fontFamily: 'Outfit, sans-serif' }}
                                        >
                                            {submitting ? 'Sending Message...' : 'Send Message'}
                                        </button>
                                    </form>
                                </div>
                            </SectionTransition>
                        </div>
                    </div>
                </div> */}

                {/* 5. LIGHTBOX - SYNCHRONIZED ARCHITECTURE */}
                {lightbox && (
                    <div
                        className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center p-6 transition-all animate-in fade-in duration-300"
                        onClick={() => setLightbox(null)}
                    >
                        <button onClick={() => setLightbox(null)} className="absolute top-10 right-10 w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#0072bc] hover:text-white transition-all shadow-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <div className="relative w-full max-w-5xl max-h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            <img src={lightbox} alt="Spotlight" className="max-h-[75vh] max-w-full object-contain rounded-3xl shadow-2xl border border-gray-100" />

                            <button onClick={(e) => { e.stopPropagation(); const idx = activeGallery.indexOf(lightbox); if (idx !== -1) setLightbox(activeGallery[(idx - 1 + activeGallery.length) % activeGallery.length]) }} className="absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 border border-gray-100 flex items-center justify-center text-gray-900 hover:bg-white hover:shadow-xl transition-all shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); const idx = activeGallery.indexOf(lightbox); if (idx !== -1) setLightbox(activeGallery[(idx + 1) % activeGallery.length]) }} className="absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 border border-gray-100 flex items-center justify-center text-gray-900 hover:bg-white hover:shadow-xl transition-all shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>

                        <div className="mt-10 text-xs font-bold text-[#0072bc] uppercase tracking-[0.4em] mb-4">
                            Operational Asset Focus • {activeGallery.indexOf(lightbox) + 1} / {activeGallery.length}
                        </div>
                    </div>
                )}
            </div>
        </PageTransition>
    );
}

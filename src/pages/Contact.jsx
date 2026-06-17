import React, { useEffect, useState } from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionTransition from '../components/ui/SectionTransition';
import { fetchJSON, getImageUrl } from '../services/api';
import { toast } from 'react-hot-toast';

const channelIcons = {
    sales: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    technical: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" /></>,
    email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    phone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
};

const resolveMedia = (src) => {
    if (!src) return '';
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) return src;
    if (src.startsWith('/uploads')) return getImageUrl(src);
    return src;
};

export default function Contact() {
    const [lightbox, setLightbox] = useState(null);
    const [activeGallery, setActiveGallery] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [branches, setBranches] = useState([]);
    const [contactChannels, setContactChannels] = useState([]);
    const [swapPeek, setSwapPeek] = useState({});
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

    useEffect(() => {
        window.scrollTo(0, 0);

        const loadContent = async () => {
            try {
                const [branchRes, channelRes] = await Promise.all([
                    fetchJSON('/branches'),
                    fetchJSON('/contact-channels'),
                ]);
                setBranches(branchRes.data || []);
                setContactChannels(channelRes.data || []);
            } catch {
                setBranches([]);
                setContactChannels([]);
            }
        };

        loadContent();
    }, []);

    const openLightbox = (img, gallery) => {
        setLightbox(img);
        setActiveGallery(gallery);
    };

    const setBranchPeek = (branchId, value) => {
        setSwapPeek((prev) => ({ ...prev, [branchId]: value }));
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
                        {contactChannels.map((card, idx) => (
                            <SectionTransition key={card._id || idx} delay={idx * 0.1} direction="up">
                                <div className="group bg-white rounded-2xl p-6 lg:p-7 border border-gray-100 hover:border-[#0072bc]/20 hover:shadow-[0_20px_50px_rgba(0,114,188,0.08)] transition-all duration-500 overflow-hidden h-full relative">
                                    <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: card.theme }}></div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center justify-center transition-all group-hover:scale-110" style={{ color: card.theme }}>
                                            <svg className="w-4 h-4 font-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">{channelIcons[card.key] || channelIcons[card.type] || channelIcons.phone}</svg>
                                        </div>
                                        <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>{card.label}</h3>
                                    </div>
                                    <a href={card.href} className="block text-[18px] lg:text-[18px] font-semibold text-gray-900 mb-0.5 truncate hover:text-[#0072bc] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>{card.contactValue}</a>
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

                        <div className="flex flex-col gap-12 lg:gap-20">
                            {branches.map((branch) => {
                                const branchId = branch._id;
                                const peek = swapPeek[branchId];
                                const theme = branch.theme || '#0072bc';
                                const images = (branch.images || []).map(resolveMedia);
                                const videoSrc = resolveMedia(branch.video);
                                const mapOnLeft = branch.mapPosition === 'left';
                                const galleryImages = images.slice(0, branch.video ? 4 : 5);

                                return (
                                    <div
                                        key={branchId}
                                        className="bg-white rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-1000 flex flex-col lg:flex-row group relative min-h-[420px]"
                                        style={{ boxShadow: 'none' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 40px 100px -20px ${theme}26`; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                                    >
                                        <div
                                            className={`lg:w-[46%] xl:w-[48%] relative h-[250px] lg:h-auto bg-gray-50 border-b lg:border-b-0 overflow-hidden order-1 ${mapOnLeft ? 'lg:border-r border-gray-100 lg:order-1' : 'lg:border-l border-gray-100 lg:order-2'}`}
                                        >
                                            <div className="absolute inset-0 transition-opacity duration-1000">
                                                {peek === 'video' && videoSrc ? (
                                                    <video src={videoSrc} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-700" />
                                                ) : peek ? (
                                                    <img src={peek} className="absolute inset-0 w-full h-full object-cover animate-in fade-in zoom-in-110 duration-1000" alt="Peek" />
                                                ) : (
                                                    <iframe
                                                        src={branch.mapEmbed}
                                                        className="w-full h-full group-hover:grayscale-[20%] transition-all duration-1000"
                                                        allowFullScreen=""
                                                        loading="lazy"
                                                        title={`${branch.name} map`}
                                                    ></iframe>
                                                )}
                                            </div>

                                            {!peek && (
                                                <div className="absolute bottom-8 left-8 right-8 z-10 flex items-center gap-5 pointer-events-none">
                                                    <div className="h-0.5 flex-grow rounded-full overflow-hidden" style={{ backgroundColor: `${theme}1a` }}>
                                                        <div className="h-full w-1/3 animate-pulse" style={{ backgroundColor: theme }}></div>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] whitespace-nowrap">Live Telemetry</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className={`lg:w-[54%] xl:w-[52%] p-8 lg:p-11 xl:px-14 xl:py-12 flex flex-col relative justify-center order-2 ${mapOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                                            <div className="space-y-4 mb-8 relative z-10">
                                                <div className="inline-block py-1 px-3 rounded-lg" style={{ backgroundColor: `${theme}15` }}>
                                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: theme }}>{branch.badge}</span>
                                                </div>
                                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                                    {branch.name}<span style={{ color: theme }}>.</span>
                                                </h2>
                                                <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-normal pr-6 max-w-sm">
                                                    {branch.address}
                                                </p>
                                            </div>

                                            <div className="space-y-5 relative z-10">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">{branch.galleryLabel || 'Infrastructure Gallery'}</span>
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: theme }}></span>
                                                        <span className="text-[10px] font-black uppercase tracking-widest italic" style={{ color: theme }}>Live Peek</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4 flex-wrap">
                                                    {galleryImages.map((img, i) => (
                                                        <div
                                                            key={i}
                                                            onMouseEnter={() => setBranchPeek(branchId, img)}
                                                            onMouseLeave={() => setBranchPeek(branchId, null)}
                                                            onClick={() => openLightbox(img, images)}
                                                            className="w-14 h-14 lg:w-16 lg:h-16 xl:w-17 xl:h-17 rounded-2xl overflow-hidden cursor-zoom-in border-[3px] transition-all duration-500 hover:scale-115 hover:-translate-y-3 shadow-md border-white grayscale-[40%] hover:grayscale-0"
                                                            style={peek === img ? { borderColor: theme, boxShadow: `0 25px 50px -12px ${theme}66` } : {}}
                                                        >
                                                            <img src={img} className="w-full h-full object-cover" alt="Hub" />
                                                        </div>
                                                    ))}
                                                    {videoSrc && (
                                                        <div
                                                            onMouseEnter={() => setBranchPeek(branchId, 'video')}
                                                            onMouseLeave={() => setBranchPeek(branchId, null)}
                                                            className="w-14 h-14 lg:w-16 lg:h-16 xl:w-17 xl:h-17 rounded-2xl flex items-center justify-center cursor-pointer border-[3px] border-white transition-all shadow-md group/vid"
                                                            style={{ backgroundColor: `${theme}15` }}
                                                        >
                                                            <svg className="w-8 h-8 group-hover/vid:scale-110 transition-transform" style={{ color: theme }} fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="mt-10 relative z-10">
                                                <a
                                                    href={branch.navUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="group/btn inline-flex items-center justify-center gap-4 w-fit px-10 py-4 text-white font-bold uppercase tracking-widest rounded-2xl transition-all text-[11px] active:scale-95"
                                                    style={{ backgroundColor: theme, fontFamily: 'Outfit, sans-serif', boxShadow: `0 20px 50px ${theme}33` }}
                                                >
                                                    Launch Navigation
                                                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                </a>
                                            </div>
                                            <div
                                                className={`absolute top-12 bottom-12 w-1 rounded-full hidden lg:block ${mapOnLeft ? 'right-0' : 'left-0'}`}
                                                style={{ backgroundColor: `${theme}1a` }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
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

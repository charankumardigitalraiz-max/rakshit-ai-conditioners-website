import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PageTransition from '../components/ui/PageTransition'
import SectionTransition from '../components/ui/SectionTransition'
import { AnimatePresence, motion } from 'framer-motion'
import { fetchJSON, getImageUrl } from '../services/api'
import { toast } from 'react-hot-toast'

export default function ProductDetail() {
    const { productId } = useParams()
    const navigate = useNavigate()
    const products = useSelector((state) => state.products.items) || []
    const [product, setProduct] = useState(null)
    const [activeVariant, setActiveVariant] = useState(null)
    const [activeTab, setActiveTab] = useState('features')
    const [activeImgIdx, setActiveImgIdx] = useState(0)
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [quoteData, setQuoteData] = useState({
        fullName: '',
        phone: '',
        details: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setQuoteData(prev => ({ ...prev, [name]: value }))
    }

    const handleQuoteSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const data = await fetchJSON('/enquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...quoteData,
                    interest: `${product.name} (${activeVariant.capacity})`,
                    product: product._id || product.id // Support both for safety
                }),
            })

            if (data.success) {
                toast.success('Quotation request submitted! Our experts will contact you soon.')
                setQuoteData({
                    fullName: '',
                    phone: '',
                    details: ''
                })
                setIsQuoteModalOpen(false)
            }
        } catch (error) {
            console.error('Submission error:', error)
            toast.error(error.message || 'Failed to submit request. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        // Find product by ID or Slug
        const found = products.find(p => p.slug === productId || p.id === productId || p._id === productId)
        if (found) {
            setProduct(found)
            setActiveVariant(found.variants[0])
        } else if (products.length > 0) {
            // Fallback to searching by slug-like comparison if ID match fails
            const foundBySlug = products.find(p => p.id && (p.id.includes(productId) || productId.includes(p.id)))
            if (foundBySlug) {
                setProduct(foundBySlug)
                setActiveVariant(foundBySlug.variants[0])
            } else {
                navigate('/store')
            }
        }
    }, [productId, products, navigate])

    if (!product || !activeVariant) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

    const techImages = [
        { label: 'Main Unit', isMain: true, url: getImageUrl(product.image), hasPlaceholder: product.hasPlaceholderImage, placeholderText: product.placeholderText },
        ...(product.images || []).map((imgUrl, idx) => ({
            label: `Angle ${idx + 1}`,
            url: getImageUrl(imgUrl)
        }))
    ]

    // If no gallery images, we keep some dummy thumbnails so the UI doesn't look empty,
    // but only if there are truly no extra images.
    if (techImages.length === 1) {
        techImages.push(
            { label: 'Outdoor Unit', dummy: true },
            { label: 'Remote Control', dummy: true },
            { label: 'Unit Specs', dummy: true }
        )
    }

    const installationDetails = {
        standardCharges: product.installation?.standardCharges || "Rs. 1,500",
        outdoorStand: product.installation?.outdoorStand || "Rs. 750",
        timeline: product.installation?.timeline || "2 – 3 days",
        includes: product.installation?.includes?.length > 0 ? product.installation.includes : [
            "Drilling of wall hole & fixing sleeve.",
            "Fixing Indoor and Outdoor Unit.",
            "Standard Kit Connection (3m).",
            "Functional Demo."
        ],
        excludes: product.installation?.excludes?.length > 0 ? product.installation.excludes : [
            "Extra Copper Piping.",
            "Civil and Masonry Work.",
            "Electrical cabling from power point."
        ]
    }

    const standardIcons = [
        'M13 10V3L4 14h7v7l9-11h-7z', // Lightning
        'M4.5 17.25a4.5 4.5 0 008.197-2.348', // Wind
        'M9 12l2 2 4-4', // Check
        'M19.428 15.428a2 2 0 00-1.022-.547' // Shield
    ];

    const standardFeatures = product.features?.length > 0
        ? product.features.map((feat, idx) => ({
            title: feat.split(' ').slice(0, 2).join(' ') || 'Feature',
            desc: feat,
            icon: standardIcons[idx % standardIcons.length]
        }))
        : [
            { title: 'Inverter Compressor', desc: 'Neo swing tech for efficiency.', icon: standardIcons[0] },
            { title: 'Coanda Airflow', desc: 'Draft-free comfort ceiling flow.', icon: standardIcons[1] },
            { title: 'PM 2.5 Filter', desc: 'Titanium air-purification.', icon: standardIcons[2] },
            { title: 'Anti-Corrosion', desc: 'Protective hydrophilic coating.', icon: standardIcons[3] }
        ]


    return (
        <PageTransition>
            <div className="bg-white min-h-screen">
                {/* Header Spacer */}
                <div className="h-24 md:h-32"></div>

                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
                        <Link to="/store" className="hover:text-[#0072bc]">Store</Link>
                        <span className="opacity-50">/</span>
                        <span className="text-gray-900 truncate">{product.name}</span>
                    </nav>

                    {/* Grid Structure: Image Left, Info Right */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                        {/* LEFT COLUMN: VISUALS (Sticky on Desktop) */}
                        <div className="w-full lg:w-[45%] lg:sticky top-32 flex flex-col aspect-[4/3] sm:aspect-square max-h-[80vh]">
                            {/* Main Stage */}
                            <div className="relative flex-1 flex items-center justify-center group min-h-0 mb-4 sm:mb-6">
                                <div className="w-full h-full flex items-center justify-center relative z-10">
                                    {techImages[activeImgIdx]?.dummy ? (
                                        <div className="flex flex-col items-center justify-center text-center opacity-40">
                                            <div className="w-16 h-16 mb-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                                                <svg className="w-6 h-6 text-[#0072bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            </div>
                                            <p className="text-xs font-medium text-gray-500">{techImages[activeImgIdx].label}</p>
                                        </div>
                                    ) : (
                                        techImages[activeImgIdx]?.hasPlaceholder ? (
                                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-50 text-center">
                                                <span className="text-[#0072bc] font-bold text-sm uppercase tracking-wider">{techImages[activeImgIdx].placeholderText}</span>
                                            </div>
                                        ) : (
                                            <img src={techImages[activeImgIdx]?.url} alt={product.name} className="w-full h-full object-contain rounded-2xl transition-transform duration-700 hover:scale-105" />
                                        )
                                    )}
                                </div>

                                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold text-blue-600 uppercase tracking-wider border border-blue-100 shadow-sm flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                        Rakshith Verified
                                    </span>
                                </div>
                            </div>

                            {/* Thumbnail Selector (Horizontal Row) */}
                            <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                                {techImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImgIdx(idx)}
                                        onMouseEnter={() => setActiveImgIdx(idx)}
                                        // onMouseLeave={() => setActiveImgIdx(0)}
                                        className={`flex-shrink-0 w-20 sm:w-24 aspect-square rounded-2xl border-2 transition-all p-2 bg-white flex flex-col items-center justify-center gap-2 ${activeImgIdx === idx ? 'border-[#0072bc] ring-4 ring-[#0072bc]/10 shadow-md' : 'border-gray-100 hover:border-gray-200 shadow-sm'}`}
                                    >
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-50 rounded-xl flex items-center justify-center text-[#0072bc]">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        </div>
                                        <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-500 text-center line-clamp-1">{img.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: CONTENT */}
                        <div className="w-full lg:w-[60%] pt-4 lg:pt-0">
                            {/* Title Section */}
                            <div className="mb-2">
                                <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#002f54] text-white text-xs font-bold uppercase tracking-wider rounded">
                                    {product.category}
                                </span>
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    {product.name}
                                </h1>
                                <p className="text-gray-600 text-base leading-relaxed max-w-2xl border-l-4 border-[#0072bc]/20 pl-6 py-2 italic font-medium">
                                    "{product.shortDescription || 'Experience premium cooling comfort and superior energy efficiency with advanced technology.'}"
                                </p>
                            </div>

                            {/* Pricing Block */}
                            <div className="mb-5 flex flex-col items-start bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Indicative Dealer Price</span>
                                <div className="flex items-baseline gap-4 mb-2">
                                    <span className="text-4xl font-bold text-[#002f54]" style={{ fontFamily: 'Outfit, sans-serif' }}>₹{activeVariant.price.toLocaleString()}</span>
                                    <span className="text-lg font-medium text-gray-400 line-through">₹{(activeVariant.price * 1.25).toLocaleString()}</span>
                                </div>
                                <div className="flex items-center gap-3 mt-1">
                                    <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-md uppercase tracking-wide">Save 25%</span>
                                    <span className="text-xs text-gray-500 font-medium">Includes GST *</span>
                                </div>
                            </div>

                            {/* Capacity Selector */}
                            <div className="mb-10">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Choose Configuration</span>
                                    <span className="text-xs font-medium text-[#0072bc]">SKU: {activeVariant.sku}</span>
                                </div>
                                <div className="grid grid-cols-5 sm:grid-cols-4 gap-4">
                                    {product.variants.map((v) => {
                                        const isSelected = activeVariant.capacity === v.capacity
                                        return (
                                            <button
                                                key={v._id || v.id || v.capacity}
                                                onClick={() => setActiveVariant(v)}
                                                className={`py-1 px-1 rounded-xl border-2 transition-all text-center ${isSelected
                                                    ? 'border-[#0072bc] bg-white shadow-md shadow-blue-500/10'
                                                    : 'border-gray-100 bg-gray-50/50 text-gray-500 hover:border-gray-200'
                                                    }`}
                                            >
                                                <span className={`block text-lg font-bold ${isSelected ? 'text-[#0072bc]' : 'text-gray-500'}`} style={{ fontFamily: 'Outfit, sans-serif' }}>
                                                    {v.capacity}
                                                </span>
                                                {/* <span className="text-xs font-medium text-gray-400 mt-1 block">Series Range</span> */}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* CTA Actions */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => setIsQuoteModalOpen(true)}
                                    className="flex-1 py-3 px-6 bg-[#0072bc] text-white flex items-center justify-center gap-2 rounded-lg text-sm font-semibold hover:bg-[#002f54] hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-[0.98]"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    Request Quotation
                                </button>
                                {/* <button className="py-3 px-6 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:border-[#0072bc] hover:bg-gray-50 hover:text-[#0072bc] transition-all bg-white">
                                    Expert Help
                                </button> */}
                            </div>
                        </div>
                    </div>

                    {/* Tabbed Info Details (Full Width Below) */}
                    <div className="mt-12 pt-10 border-t border-gray-100">
                        {/* Tab Navigation */}
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-10 border-b border-gray-100 mb-12 overflow-x-auto no-scrollbar">
                            {[
                                { id: 'features', label: 'Key Highlights' },
                                { id: 'specs', label: 'Technical Data' },
                                { id: 'installation', label: 'Service Scope' },
                                { id: 'warranty', label: 'Warranty & Trust' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`pb-4 px-4 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all border-b-2 ${activeTab === tab.id ? 'border-[#0072bc] text-[#0072bc]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {/* Features Tab */}
                                    {activeTab === 'features' && (
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {standardFeatures.map((feat, i) => (
                                                <div key={i} className="p-8 bg-white border border-gray-100 rounded-2xl hover:border-[#0072bc]/20 hover:shadow-xl hover:shadow-blue-900/5 transition-all text-center group">
                                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0072bc] mx-auto mb-6 group-hover:bg-[#0072bc] group-hover:text-white transition-all duration-300">
                                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feat.icon} /></svg>
                                                    </div>
                                                    <h4 className="text-base font-bold text-gray-900 mb-2">{feat.title}</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Specs Tab */}
                                    {activeTab === 'specs' && (
                                        <div className="bg-gray-50/50 p-4 rounded-3xl border border-gray-100">
                                            <div className="grid grid-cols-1 gap-2">
                                                {[
                                                    { label: 'Cooling Capacity', val: `${activeVariant.capacity}` },
                                                    { label: 'Power Supply', val: product.technicalSpecs?.powerSupply || '1 Phase, 230 V, 50 Hz' },
                                                    { label: 'Refrigerant', val: product.refrigerant || 'Eco-Friendly R-32 (Zero ODP)' },
                                                    { label: 'Condenser Coil', val: product.technicalSpecs?.condenserCoil || '100% High-Grade Copper' },
                                                    { label: 'ISEER Rating', val: activeVariant.iseer ? `${activeVariant.iseer}` : '3.90+ for 3-Star Models' },
                                                    { label: 'Operating Temp', val: product.technicalSpecs?.operatingTemp || 'Stable up to 52°C Ambient' }
                                                ].map((spec, i) => (
                                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-5 sm:px-8 rounded-2xl border border-transparent hover:border-blue-100 transition-all gap-2">
                                                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{spec.label}</span>
                                                        <span className="text-base font-medium text-gray-900">{spec.val}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Installation Tab */}
                                    {activeTab === 'installation' && (
                                        <div className="flex flex-col gap-8 px-4 sm:px-6">
                                            <div className="grid md:grid-cols-2 gap-10">
                                                <div className="p-8 sm:p-10 bg-[#002f54] rounded-3xl text-white shadow-xl shadow-blue-900/10">
                                                    <h4 className="text-xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>Standard Deployment</h4>
                                                    <div className="space-y-4">
                                                        {installationDetails.includes.map((inc, i) => (
                                                            <div key={i} className="flex gap-3 text-sm font-medium text-blue-100/90 leading-relaxed">
                                                                <span className="text-blue-400 mt-0.5">✓</span>
                                                                {inc}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                                                        <div className="flex flex-col">
                                                            <span className="text-xs font-medium text-blue-300 uppercase tracking-wider mb-1">Standard Cost</span>
                                                            <span className="text-2xl font-bold font-mono">{installationDetails.standardCharges}</span>
                                                        </div>
                                                        <div className="flex flex-col text-right">
                                                            <span className="text-xs font-medium text-blue-300 uppercase tracking-wider mb-1">Time To Cool</span>
                                                            <span className="text-xl font-bold">{installationDetails.timeline}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-center gap-8">
                                                    <div className="p-8 sm:p-10 border border-gray-100 rounded-3xl bg-gray-50/50">
                                                        <h4 className="text-sm font-bold text-gray-600 mb-5 uppercase tracking-wider">Exclusions (Not in Scope)</h4>
                                                        <div className="space-y-4">
                                                            {installationDetails.excludes.map((exc, i) => (
                                                                <div key={i} className="flex gap-3 text-sm font-medium text-gray-600">
                                                                    <span className="text-red-400 mt-0.5">×</span>
                                                                    {exc}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <p className="text-xs font-medium text-gray-500 leading-relaxed text-center italic">
                                                        *Final site appraisal by Rakshith technicians may adjust the final quote.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Free Services Banner */}
                                            <div className="p-6 sm:p-8 bg-green-50/50 border border-green-100 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                                                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-green-50">
                                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">2 Free Maintenance Services</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">Enjoy two comprehensive AC maintenance services absolutely free within <span className="font-semibold text-gray-900">1 Year</span> from the date of Installation strictly adhering to Daikin manufacturer standards.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Warranty Tab */}
                                    {activeTab === 'warranty' && (
                                        <div>
                                            <div className="p-10 sm:p-16 bg-white border border-gray-100 rounded-3xl shadow-xl shadow-blue-900/5 text-center relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] transition-transform group-hover:scale-110 group-hover:rotate-12 duration-1000">
                                                    <svg className="w-48 h-48 text-[#0072bc]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>
                                                </div>
                                                <div className="relative z-10">
                                                    <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Factory Backed Assurance</h4>
                                                    <p className="text-gray-600 text-base mb-10 max-w-2xl mx-auto leading-relaxed">Genuine Manufacturer Warranty provided with every unit. Verified Rakshith commissioning certificate included for peace of mind.</p>

                                                    <div className="flex flex-col sm:flex-row justify-center gap-10 lg:gap-20">
                                                        <div className="flex flex-col items-center gap-4">
                                                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0072bc] text-xl font-bold shadow-inner shadow-blue-100">
                                                                {product.warranty?.compressor?.split(' ')[0] || '10'}Y
                                                            </div>
                                                            <div className="text-center">
                                                                <span className="block text-sm font-bold text-gray-900 mb-1">Compressor</span>
                                                                <span className="text-xs text-gray-500">Core Integrity</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-center gap-4">
                                                            <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-xl font-bold shadow-inner shadow-orange-100">
                                                                {product.warranty?.pcb?.split(' ')[0] || '5'}Y
                                                            </div>
                                                            <div className="text-center">
                                                                <span className="block text-sm font-bold text-gray-900 mb-1">PCB Unit</span>
                                                                <span className="text-xs text-gray-500">Logic Board Coverage</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-center gap-4">
                                                            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-xl font-bold shadow-inner shadow-green-100">
                                                                {product.warranty?.unitWide?.split(' ')[0] || '1'}Y
                                                            </div>
                                                            <div className="text-center">
                                                                <span className="block text-sm font-bold text-gray-900 mb-1">Unit Wide</span>
                                                                <span className="text-xs text-gray-500">Complete System</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Related Solutions */}
                    <div className="mt-5 pt-12 border-t border-gray-100">
                        <div className="text-center mb-12">
                            <span className="text-[#0072bc] text-xs font-bold uppercase tracking-widest mb-2 block">Hardware Ecosystem</span>
                            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Related Architecture</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {products
                                .filter(p => p.category === product.category && (p._id || p.id) !== (product._id || product.id))
                                .slice(0, 4)
                                .map(similarProd => (
                                    <Link key={similarProd._id || similarProd.id} to={`/product/${similarProd.slug || similarProd._id || similarProd.id}`} className="group block h-full">
                                        <div className="bg-white border border-gray-100 rounded-3xl p-5 sm:p-6 flex flex-col h-full transition-all hover:border-[#0072bc]/30 hover:shadow-xl hover:shadow-blue-900/5 text-left">
                                            <div className="h-32 sm:h-40 mb-5 flex items-center justify-center">
                                                {similarProd.hasPlaceholderImage ? (
                                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0072bc] text-xs font-bold uppercase tracking-wider">{similarProd.placeholderText}</div>
                                                ) : (
                                                    <img src={getImageUrl(similarProd.image)} alt={similarProd.name} className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm mix-blend-multiply" />
                                                )}
                                            </div>

                                            <div className="flex-1 flex flex-col">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1.5 line-clamp-1">{similarProd.name}</h4>
                                                <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{similarProd.shortDescription || 'Premium air conditioning system delivering exceptional comfort and energy efficiency.'}</p>

                                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-bold text-gray-400 mb-0.5 tracking-wider">Starting At</span>
                                                        <span className="text-sm sm:text-base font-bold text-[#002f54]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                                            ₹{similarProd.variants?.[0]?.price?.toLocaleString() || 'POA'}
                                                        </span>
                                                    </div>
                                                    <span className="bg-blue-50 text-[#0072bc] p-2.5 rounded-xl group-hover:bg-[#0072bc] group-hover:text-white transition-colors shadow-sm ml-2 shrink-0">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>

                </div>

                {/* Request Quotation Modal */}
                {isQuoteModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-900/40 backdrop-blur-sm animate-fadeIn">
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
                            <div className="p-6 sm:p-8 flex items-center justify-between border-b border-gray-100 shrink-0">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Request Quotation</h3>
                                    <p className="text-sm text-gray-500 mt-1">Fill out the details below and our experts will contact you.</p>
                                </div>
                                <button onClick={() => setIsQuoteModalOpen(false)} className="text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors self-start">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <div className="p-6 sm:p-8 overflow-y-auto">
                                <form className="space-y-5" onSubmit={handleQuoteSubmit}>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Product Configuration</label>
                                        <input type="text" readOnly value={`${product.name} - ${activeVariant.capacity}`} className="w-full bg-gray-50 border border-gray-200 text-gray-500 text-sm rounded-xl px-4 py-3 focus:outline-none font-medium" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                                            <input
                                                name="fullName"
                                                value={quoteData.fullName}
                                                onChange={handleInputChange}
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#0072bc] focus:ring-2 focus:ring-[#0072bc]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
                                            <input
                                                name="phone"
                                                value={quoteData.phone}
                                                onChange={handleInputChange}
                                                type="tel"
                                                required
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#0072bc] focus:ring-2 focus:ring-[#0072bc]/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Requirement Details</label>
                                        <textarea
                                            name="details"
                                            value={quoteData.details}
                                            onChange={handleInputChange}
                                            rows="4"
                                            placeholder="e.g., Number of units required, site location, or special installation needs..."
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#0072bc] focus:ring-2 focus:ring-[#0072bc]/20 outline-none transition-all resize-none"
                                        />
                                    </div>
                                    <div className="    mt-8 pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-4 bg-[#0072bc] text-white rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#002f54] hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? 'Submitting Request...' : 'Submit Quotation Request'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </PageTransition>
    )
}

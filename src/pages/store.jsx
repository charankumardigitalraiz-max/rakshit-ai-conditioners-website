import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { setCategoryFilter } from '../redux/productSlice'
import ProductCard from '../components/ui/ProductCard'
import SolutionHighlights from '../components/Store/SolutionHighlights'
import SeriesOverview from '../components/Store/SeriesOverview'
import PageTransition from '../components/ui/PageTransition'
import SectionTransition from '../components/ui/SectionTransition'

export default function Store() {
    const { categoryId } = useParams()
    const products = useSelector((state) => state.products.items)
    const filters = useSelector((state) => state.products.filters)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [selectedVariants, setSelectedVariants] = useState({})

    const getMappedCategory = (catId) => {
        if (!catId) return 'All';
        switch (catId) {
            case 'room-ac': return 'Room AC';
            case 'commercial-ac': return 'Commercial AC';
            case 'central-ac': return 'Central AC';
            case 'ventilation': return 'Ventilation';
            default: return 'All';
        }
    }

    const getPageContent = (catId) => {
        switch (catId) {
            case 'room-ac':
                return {
                    hero: { pre: 'Precision Comfort', title: 'Residential', subtitle: 'Air Conditioning', desc: 'Experience the pinnacle of home comfort with Daikin\'s advanced inverter technology, designed for energy efficiency and whispering quietness.' },
                    highlights: [
                        { title: 'Inverter Technology', description: 'Next-gen compressors that adjust speed to maintain perfect temperature while saving up to 50% energy.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>) },
                        { title: 'PM 2.5 Filtration', description: 'Triple-layer air purification systems that capture microscopic pollutants for a healthier living environment.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>) },
                        { title: 'COANDA Airflow', description: 'Unique airflow design that circulates air along the ceiling to prevent cold drafts hitting people directly.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>) },
                        { title: 'Econo Mode', description: 'Optimizes power consumption for maximum efficiency when multiple appliances are running.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) },
                    ],
                    series: [
                        { title: 'FTKL 3-Star Inverter', description: 'Our most popular range offering high cooling performance with smart savings.', specs: ['Econo Mode', 'Coanda Airflow', 'Power Chill'], image: '/products/daikin_ftkl_best_seller_1776343022422.png' },
                        { title: 'JTKJ 5-Star Premium', description: 'The pinnacle of luxury with advanced air purification and maximum energy rating.', specs: ['PM 2.5 Filter', 'Dual Sensor', 'Silent Operation'], image: '/products/daikin_jtkj_toptier_1776343163911.png' }
                    ]
                };
            case 'commercial-ac':
                return {
                    hero: { pre: 'Enterprise Solutions', title: 'Commercial', subtitle: 'Climate Control', desc: 'Heavy-duty cooling systems engineered for retail, offices, and commercial complexes with high-traffic demands.' },
                    highlights: [
                        { title: 'Round Flow Cooling', description: '360° uniform airflow distribution ensuring no dead zones in large open areas like retail stores.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>) },
                        { title: 'Space Optimization', description: 'Compact outdoor units and concealed indoor units that preserve your building architecture and aesthetics.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>) },
                        { title: 'High Integrity', description: 'Built for continuous 24/7 operation with robust engineering for challenging environmental conditions.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) },
                        { title: 'Self Diagnosis', description: 'Advanced control panels that pinpoint technical issues instantly, reducing downtime and maintenance costs.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>) },
                    ],
                    series: [
                        { title: 'Cassette Units', description: 'Modern 360° airflow units for retail outlets and boardrooms.', specs: ['High Ceiling Capable', 'Elegant Design', 'Draft Free'], image: null },
                        { title: 'Ductable Split', description: 'High-power concealed cooling for larger halls and restaurants.', specs: ['Up to 50TR Scale', 'High Static Pressure', 'Modular'], image: null }
                    ]
                };
            case 'central-ac':
                return {
                    hero: { pre: 'Infrastructure Scale', title: 'Central', subtitle: 'VRV Systems', desc: 'World-leading Variable Refrigerant Volume technology for high-rise buildings, shopping malls, and massive architectures.' },
                    highlights: [
                        { title: 'VRV Innovation', description: 'The original modular cooling technology that allows control of up to 512 indoor units from a central point.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>) },
                        { title: 'Zoning Control', description: 'Individual temperature management for every single room in a tower from a single central plant.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>) },
                        { title: 'Intelligent Manager', description: 'Cloud-based monitoring and scheduling system for optimizing energy consumption across entire buildings.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>) },
                        { title: 'Ultra Quiet', description: 'Minimal noise vibration technology, essential for premium residential and hospital environments.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>) },
                    ],
                    series: [
                        { title: 'VRV X Series', description: 'Our flagship outdoor unit with highest energy efficiency index.', specs: ['Up to 60HP Capacity', 'Active Heat Recovery', 'Anti-Corrosion'], image: null },
                        { title: 'Chiller Plants', description: 'Centrifugal and Srew chillers for industrial cooling demands.', specs: ['Water/Air Cooled', 'Magnetic Bearing', 'Green Refrigerant'], image: null }
                    ]
                };
            case 'ventilation':
                return {
                    hero: { pre: 'Fresh Air Management', title: 'Industrial', subtitle: 'Ventilation', desc: 'Critical air purging and IAQ management systems for basements, kitchens, and industrial process plants.' },
                    highlights: [
                        { title: 'IAQ Management', description: 'Continuous fresh air infusion systems that monitor and maintain healthy CO2 levels in tight spaces.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>) },
                        { title: 'CO Purging', description: 'Automatic basement fire & CO extraction systems triggered by smart air quality sensors.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>) },
                        { title: 'Kitchen Exhaust', description: 'Heavy duty centrifugal fans designed to handle high grease, heat, and smoke volumes.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" /></svg>) },
                        { title: 'High CFM Output', description: 'Industrial grade airflow volume designed for stairwell pressurization and fire safety.', icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>) },
                    ],
                    series: [
                        { title: 'Axial Fans', description: 'High volume extraction for basements and tunnels.', specs: ['Wall Mounted', 'Duct Connected', 'Fire Rated'], image: null },
                        { title: 'Centrifugal Fans', description: 'High pressure units for industrial air scouring and scrubbing.', specs: ['SISW/DIDW', 'Belt Driven', 'Dynamic Balanced'], image: null }
                    ]
                };
            default:
                return {
                    hero: { pre: 'Authorized Daikin Partner', title: 'Precision', subtitle: 'Climate Solutions', desc: 'Explore our comprehensive range of HVAC solutions, from residential comfort to massive industrial infrastructure plants.' },
                    highlights: [],
                    series: []
                };
        }
    }

    useEffect(() => {
        const mapped = getMappedCategory(categoryId);
        dispatch(setCategoryFilter(mapped));
    }, [categoryId, dispatch])

    useEffect(() => {
        const initialVariants = {}
        products.forEach(p => {
            initialVariants[p.id] = p.variants[0]
        })
        setSelectedVariants(initialVariants)
    }, [products])

    const handleVariantChange = (productId, variant) => {
        setSelectedVariants(prev => ({
            ...prev,
            [productId]: variant
        }))
    }

    const filteredProducts = products.filter(p => {
        const matchesCategory = filters.category === 'All' || p.category === filters.category
        return matchesCategory
    })

    const content = getPageContent(categoryId);

    return (
        <PageTransition>
            <div className="bg-white min-h-screen pt-20">

                {/* Premium Informative Hero */}
                {/* <div className="relative py-16 lg:py-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto mt-3 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-3 mb-3">
                            <span className="w-8 h-0.5 bg-[#0072bc]"></span>
                            <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-[0.4em]">{content.hero.pre}</span>
                            <span className="w-8 h-0.5 bg-[#0072bc]"></span>
                        </div>
                        <h1 className="text-gray-900 text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[0.95]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            {content.hero.title} {" "} <br className="hidden md:block" />
                            <span className="text-[#0072bc]">{content.hero.subtitle}</span>
                        </h1>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-xl font-medium mx-auto">
                            {content.hero.desc}
                        </p>
                    </div>
                </div>
            </div> */}

                {/* Informative Grid - Sticky Navigation */}
                <div className="sticky top-[100px] z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100  sm:top-[120px]">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between overflow-x-auto no-scrollbar">
                        <div className="flex items-center gap-8 flex-shrink-0">
                            <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
                                {['All', 'Room AC', 'Commercial AC', 'Central AC', 'Ventilation'].map(cat => {
                                    const slug = cat === 'All' ? '' : cat.toLowerCase().replace(' ', '-');
                                    return (
                                        <button
                                            key={cat}
                                            onClick={() => navigate(`/store/${slug}`)}
                                            className={`px-6 py-2.5 text-[11px] font-bold rounded-xl transition-all whitespace-nowrap ${filters.category === cat ? 'bg-white text-[#0072bc] shadow-xl shadow-gray-200 ring-1 ring-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
                                        >
                                            {cat}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-5 sm:px-8">
                    {/* Tech Highlights */}
                    {/* {content.highlights.length > 0 && (
                    <SolutionHighlights highlights={content.highlights} />
                )}

  
                {content.series.length > 0 && (
                    <SeriesOverview series={content.series} />
                )} */}

                    {/* Product Configuration Grid */}
                    <div className="pt-15 pb-16">
                        <div className="mb-12">
                            <h2 className="text-3xl font-black text-gray-900 tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Technical <span className="text-[#0072bc]">Configurations</span>
                            </h2>
                            <p className="text-gray-400 text-sm font-medium mt-2">Explore specific models and technical variants for your selection.</p>
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20 text-gray-400 font-medium">
                                No technical configurations found for this category.
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {filteredProducts.map((product, index) => (
                                <SectionTransition key={product.id} delay={index * 0.05}>
                                    <ProductCard
                                        product={product}
                                        currentVariant={selectedVariants[product.id] || product.variants[0]}
                                        onVariantChange={handleVariantChange}
                                    />
                                </SectionTransition>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Authority Footer */}
                <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
                    <div className="p-10 bg-[#002f54] rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0072bc]/20 rounded-full blur-[80px] -mr-32 -mt-32 transition-all group-hover:bg-[#0072bc]/30"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Need a Technical Site Survey?</h3>
                                <p className="text-blue-100/60 text-sm max-w-lg">Our authorized specialists provide structural analysis and heat-load calculations to ensure your selection is perfectly optimized for your environment.</p>
                            </div>
                            <button  className="px-10 py-4 bg-white text-[#002f54] text-[11px] font-bold uppercase  rounded-2xl hover:bg-[#0072bc] hover:text-white transition-all transform hover:scale-105 active:scale-95" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Schedule  Technical  Survey
                            </button>
                        </div>
                    </div>
                </div>

                {/* <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase tracking-widest text-center">
                        *Specifications and performance data are indicative and subject to site conditions. <br />
                        Authorized Sales & Service Channel Partner since 2011. Genuine Daikin Spares & Certified Installation.
                    </p>
                </div>
            </div> */}
            </div>
        </PageTransition>
    )
}

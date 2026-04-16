import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryFilter, setTonnageFilter } from '../redux/productSlice'

export default function Store() {
    const products = useSelector((state) => state.products.items)
    const filters = useSelector((state) => state.products.filters)
    const dispatch = useDispatch()

    const [selectedVariants, setSelectedVariants] = useState({})

    // Initialize selected variants for each product
    useEffect(() => {
        const initialVariants = {}
        products.forEach(p => {
            initialVariants[p.id] = p.variants[0] // Default to first variant
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

    return (
        <div className="bg-white min-h-screen pt-20">

            {/* Premium Store Header */}
            <div className="relative bg-[#002f54] py-16 lg:py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
                <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="w-12 h-0.5 bg-[#0072bc]"></span>
                            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.4em]">Official Daikin Catalogue</span>
                        </div>
                        <h1 className="text-white text-5xl lg:text-6xl font-black mb-8 tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Precision Engineered <br /> <span className="text-blue-400">Climate Solutions</span>
                        </h1>
                        <p className="text-blue-100/60 text-lg leading-relaxed max-w-xl">
                            Explore the complete range of Daikin air conditioning systems. From high-efficiency residential split units to industrial-grade VRV solutions.
                        </p>
                    </div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-[#0072bc]/10 rounded-full blur-[80px]"></div>
            </div>

            {/* Filter Bar - Modern Sticky */}
            <div className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category:</span>
                            <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
                                {['All', 'Room AC', 'Commercial', 'Industrial'].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => dispatch(setCategoryFilter(cat))}
                                        className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${filters.category === cat ? 'bg-white text-[#0072bc] shadow-sm ring-1 ring-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                        Showing {filteredProducts.length} Premium Configurations
                    </div>
                </div>
            </div>

            {/* Product Discovery Grid */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {filteredProducts.map((product) => {
                        const currentVariant = selectedVariants[product.id] || product.variants[0]

                        return (
                            <div key={product.id} className="group h-full flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-[#0072bc]/20 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] transition-all duration-500">

                                {/* Product Visual */}
                                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 right-6">
                                        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-[#0072bc] uppercase tracking-widest shadow-sm border border-white">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Product Meta */}
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="mb-6">
                                        <h3 className="text-xl font-[500] text-gray-900 mb-2 group-hover:text-[#0072bc] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            {product.name}
                                        </h3>
                                        {/* <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed h-10">
                      {product.description}
                    </p> */}
                                    </div>

                                    {/* Variant Selection Logic (Tonnage) */}
                                    <div className="mb-2">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Select Configuration</span>
                                            <span className="text-[10px] font-bold text-[#0072bc]">{currentVariant.model}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            {product.variants.map((variant) => (
                                                <button
                                                    key={variant.type}
                                                    onClick={() => handleVariantChange(product.id, variant)}
                                                    className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all border ${currentVariant.type === variant.type
                                                        ? 'bg-[#0072bc] border-[#0072bc] text-white shadow-lg shadow-blue-100 scale-105'
                                                        : 'bg-white border-gray-100 text-gray-500 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {variant.type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Dynamic Pricing & Action */}
                                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between gap-4">
                                        <div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Indicative Price</div>
                                            <div className="text-2xl font-black text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                                ₹{currentVariant.price.toLocaleString()}
                                                <span className="text-[10px] font-bold text-gray-400 ml-1 uppercase tracking-tighter italic">Inc. GST*</span>
                                            </div>
                                        </div>

                                        {/* <a
                                            href={`https://wa.me/919948095081?text=Hi, I am interested in the ${product.name} (${currentVariant.type} variant - ${currentVariant.model}). Please provide a quote.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center hover:bg-[#0072bc] hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-90"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Disclaimer */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase tracking-widest text-center">
                        *Prices shown are indicative and subject to site survey and specific technical requirements. <br />
                        Authorized sales & service partner since 2001. All models subject to availability.
                    </p>
                </div>
            </div>
        </div>
    )
}

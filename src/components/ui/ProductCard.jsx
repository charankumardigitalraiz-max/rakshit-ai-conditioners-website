import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product, currentVariant, onVariantChange }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div
            onClick={handleCardClick}
            className="group h-full flex flex-col bg-white border border-gray-100/60 rounded-2xl overflow-hidden shadow-sm hover:border-[#0072bc]/30 hover:shadow-[0_20px_40px_-15px_rgba(0,114,188,0.1)] transition-all duration-300 cursor-pointer"
        >

            {/* Minimalist Visual Container */}
            <div className="relative h-48 bg-[#fcfcfc] overflow-hidden flex flex-col items-center justify-center p-4">
                {product.hasPlaceholderImage ? (
                    <div className="w-full h-full bg-gradient-to-br from-blue-50/30 to-gray-50 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-100 shadow-sm text-center">
                            <span className="text-[#0072bc] font-black text-[9px] uppercase tracking-widest">{product.placeholderText}</span>
                        </div>
                    </div>
                ) : (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
                    />
                )}

                {/* Minimal Badge */}
                <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold text-gray-500 uppercase tracking-widest shadow-sm border border-gray-100">
                        {product.category}
                    </span>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex-grow flex flex-col">
                <div className="mb-4">
                    <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[#0072bc] transition-colors leading-tight mb-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {product.name}
                    </h3>
                    {/* <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-medium">
                        {product.description}
                    </p> */}
                </div>

                {/* Variant Selector - Pill Format */}
                <div className="mt-auto mb-5">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Select Model</span>
                        <span className="text-[9px] font-bold text-[#0072bc] truncate max-w-[50%]">{currentVariant.model}</span>
                    </div>
                    <div className="relative group/select">
                        <select
                            value={currentVariant.type}
                            onChange={(e) => {
                                const selected = product.variants.find(v => v.type === e.target.value);
                                if (selected) onVariantChange(product.id, selected);
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 text-[10px] font-bold px-4 py-2.5 rounded-xl cursor-pointer hover:border-[#0072bc]/30 hover:bg-white transition-all outline-none"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                            {product.variants.map((variant) => (
                                <option key={variant.type} value={variant.type}>
                                    {variant.type} - {variant.model}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover/select:text-[#0072bc] transition-colors">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Price block - Compact */}
                <div className="pt-2 border-t border-gray-100 flex items-end justify-between">
                    <div>
                        <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Indicative Quote</div>
                        <div className="text-lg font-black text-gray-900 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            ₹{currentVariant.price.toLocaleString()}
                        </div>
                    </div>
                    <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest italic mb-1">
                        Inc. GST*
                    </div>
                </div>
            </div>

        </div>
    );
}

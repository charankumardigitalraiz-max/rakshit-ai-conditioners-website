import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function FeaturedProducts() {
  const products = useSelector((state) => state.products.items) || [];
  const navigate = useNavigate();

  // Pick the first 5 products to feature dynamically
  const featuredProducts = products.slice(0, 5);

  return (
    <section id="products" className="py-3 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Simplified Store Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-10 h-0.5 bg-[#0072bc]"></span>
            <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Authorized Store</span>
            <span className="w-10 h-0.5 bg-[#0072bc]"></span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Latest <span className="text-[#0072bc]">Air Conditioners</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Our certified split systems combine industry-leading efficiency with modern climate control aesthetics.
          </p>
        </div>

        {/* Simplified Commerce Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredProducts.map((p) => {
            const stars = p.stars || 5; // Default to 5 stars if not specified in Redux store
            const startingPrice = p.variants?.[0]?.price || 0;

            return (
              <div
                key={p.id}
                onClick={() => navigate(`/product/${p.id}`)}
                className="group flex flex-col bg-white border border-gray-100 rounded-xl transition-all duration-500 hover:border-[#0072bc] hover:shadow-2xl hover:shadow-blue-900/5 p-4 cursor-pointer"
              >
                {/* Product Visual */}
                <div className="relative aspect-square flex items-center justify-center mb-2 overflow-hidden bg-gray-50/30 rounded-lg">
                  {p.hasPlaceholderImage ? (
                    <div className="w-full h-full bg-gradient-to-br from-blue-50/30 to-gray-50 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-100 shadow-sm text-center">
                        <span className="text-[#0072bc] font-black text-[9px] uppercase tracking-wider">{p.placeholderText || 'Image Coming Soon'}</span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-[85%] h-[85%] object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* View Product Ghost Overlay on Hover */}
                  <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
                    <div className="px-5 py-2.5 bg-[#0072bc] text-white text-[9px] font-bold uppercase tracking-wider rounded shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View details
                    </div>
                  </div>
                </div>

                {/* Minimalist Info */}
                <div className="text-center flex flex-col items-center">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">{p.category}</span>
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-tight tracking-tight px-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {p.name}
                  </h3>
                  <span className="text-[#0072bc] text-base font-bold tracking-tight">
                    ₹{startingPrice.toLocaleString()}
                  </span>

                  {/* Discrete star count for quality assurance */}
                  <div className="mt-3 opacity-30 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < stars ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const products = [
  {
    id: 'ftq',
    image: '/products/daikin_ftq_2star_1776342731832.png',
    name: 'Daikin Non-Inverter FTQ',
    priceRange: '₹32,400 – ₹38,900',
    stars: 2
  },
  {
    id: 'ftl',
    image: '/products/daikin_ftl_3star_1776342800676.png',
    name: 'Daikin Non-Inverter FTL',
    priceRange: '₹36,200 – ₹42,800',
    stars: 3
  },
  {
    id: 'ftkl',
    image: '/products/daikin_ftkl_best_seller_1776343022422.png',
    name: 'Daikin Inverter FTKL',
    priceRange: '₹39,900 – ₹48,600',
    stars: 3
  },
  {
    id: 'ftkg',
    image: '/products/daikin_ftkg_premium_1776343081832.png',
    name: 'Daikin Inverter FTKG',
    priceRange: '₹48,400 – ₹59,200',
    stars: 5
  },
  {
    id: 'jtkj',
    image: '/products/daikin_jtkj_toptier_1776343163911.png',
    name: 'Daikin Flagship JTKJ',
    priceRange: '₹56,400 – ₹68,900',
    stars: 5
  },
]

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Simplified Store Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-10 h-0.5 bg-[#0072bc]"></span>
            <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-[0.4em]" style={{ fontFamily: 'Inter, sans-serif' }}>Authorized Store</span>
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
          {products.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col bg-white border border-gray-100 rounded-xl transition-all duration-500 hover:border-[#0072bc] hover:shadow-2xl hover:shadow-blue-900/5 p-4"
            >
              {/* Product Visual */}
              <div className="relative aspect-square flex items-center justify-center mb-6 overflow-hidden bg-gray-50/30 rounded-lg">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-[85%] h-[85%] object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* View Product Ghost Overlay on Hover */}
                <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
                   <div className="px-5 py-2.5 bg-[#0072bc] text-white text-[9px] font-bold uppercase tracking-widest rounded shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View details
                   </div>
                </div>
              </div>

              {/* Minimalist Info */}
              <div className="text-center flex flex-col items-center">
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-tight tracking-tight px-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {p.name}
                </h3>
                <span className="text-[#0072bc] text-base font-bold tracking-tight">
                  {p.priceRange}
                </span>
                
                {/* Discrete star count for quality assurance */}
                <div className="mt-3 opacity-30 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className={`w-2.5 h-2.5 ${i < p.stars ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Partner Strip - SVG Fixed */}
        <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
            <div className="flex items-center gap-6">
               <svg className="h-4 w-auto grayscale hover:grayscale-0 transition-all" viewBox="0 0 455 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M72.3 0H0V100H68.7C104.5 100 133.5 71 133.5 35.2V0H72.3ZM107.8 35.2C107.8 56.8 90.3 74.3 68.7 74.3H25.8V25.7H72.3V25.8H107.8V35.2Z" fill="#0072BC"/>
                  <path d="M196.2 100H150.9V0H196.2C223.9 0 246.3 22.4 246.3 50.1C246.3 77.8 223.9 100 196.2 100ZM183.1 77.1H196.2C211.1 77.1 223.2 65 223.2 50.1C223.2 35.2 211.1 23.1 196.2 23.1H183.1V77.1Z" fill="#0072BC"/>
                  <path d="M308.2 100H260.6V0H308.2L355.8 100H308.2Z" fill="#0072BC"/>
                  <path d="M409.2 100V0H383.5V100H409.2Z" fill="#0072BC"/>
                  <path d="M455 100V0H429.3V100H455Z" fill="#0072BC"/>
               </svg>
               <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Authorized Sales & Service Channel Partner</span>
            </div>
        </div>
      </div>
    </section>
  )
}

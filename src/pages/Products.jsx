import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { categoryId } = useParams();

  const categories = [
    {
      id: 'room-ac',
      title: 'Room Air Conditioning',
      subtitle: 'Residential Comfort',
      description: 'Experience the pinnacle of home comfort with advanced inverter technology, designed for maximum energy efficiency and whispering quietness.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      href: '/products/room-ac',
      img: '/products/daikin_ftkl_best_seller_1776343022422.png',
      technicalContent: {
        heroTitle: "Premium Residential Split Systems",
        heroSubtitle: "Advanced Inverter Technology",
        intro: "Our room air conditioning solutions bring the best-in-class experience to your home. As authorized Daikin dealers, we offer a wide range of split air conditioners backed by a legendary 10-year warranty on compressors. These units are engineered to level up your interior decor while providing exceptional cooling performance and energy efficiency.",
        longDescription: "We offer residential solutions ranging from 0.75 tons to 3 tons, catering to everything from small bedrooms to expansive living areas. Our units come with energy ratings from 2-star to the ultra-efficient 5-star series, utilizing environment-friendly refrigerant gases like R32 and R410A. Every unit is selected for its ability to provide uniform cooling and whisper-quiet operation.",
        deepDive: {
          title: "The Inverter Advantage",
          content: "Unlike traditional non-inverter ACs that stop and start repeatedly—causing sharp spikes in power consumption—our Inverter type air conditioners adjust the compressor speed to control the refrigerant flow rate. This precise control eliminates temperature fluctuations, consumes significantly less current, and ensures a more comfortable environment. An inverter AC adjusts its speed to the cooling demand, ensuring that once the set temperature is reached, the unit maintains it with minimal power draw."
        },
        features: [
          { title: "Split Inverter Technology", detail: "Maintains optimal capacity to eliminate temperature swings." },
          { title: "Whisper Operation", detail: "Optimized fan designs for near-silent cooling down to 19dB." },
          { title: "Smart Air Purifiers", detail: "Integrated filtration systems (MC30UVM6/MC70MVM6) that remove viruses, bacteria, and allergens. In today\'s world, air filtration is essential for maintaining optimal health." },
          { title: "Power Chill Mode", detail: "Rapid temperature drop for immediate relief during extreme heat." }
        ],
        applications: ["Master Bedrooms", "Home Offices", "Living Rooms", "Private Libraries", "Guest Suites", "Home Theaters"]
      }
    },
    {
      id: 'commercial-ac',
      title: 'Commercial AC',
      subtitle: 'Enterprise Solutions',
      description: 'Heavy-duty cooling systems engineered for retail, offices, and commercial complexes with high-traffic demands.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      href: '/products/commercial-ac',
      img: '/products/daikin_ftkg_premium_1776343081832.png',
      technicalContent: {
        heroTitle: "Advanced Commercial HVAC",
        heroSubtitle: "Engineered for High-Traffic Growth",
        intro: "Commercial spaces require cooling that is both robust and flexible. Our lineup is designed to handle the dynamic heat loads of retail showrooms, corporate offices, and hospitality centers without compromising on aesthetics or energy costs. We provide specialized installation services that optimize airflow patterns.",
        longDescription: "We understand that in a commercial environment, reliability is paramount. Our team provides specialized installation services that optimize airflow patterns to ensure every corner of your business remains comfortably cool, regardless of foot traffic. From low-profile cassettes to powerful ductable units, we tailor the system to your specific floor plan and occupancy requirements.",
        deepDive: {
          title: "360° Round Flow Technology",
          content: "Our Cassette units feature uniform 360-degree airflow distribution. This eliminates 'blind spots' or dead zones where cooling is insufficient, ensuring that your customers and employees stay cool no matter where they are standing. The variable pitch, adjustable motor pulleys, and auto-swing louvers optimize fan performance across any ceiling height."
        },
        features: [
          { title: "Multi-Cassette Control", detail: "Centralized management of multiple units from a single interface." },
          { title: "Low-Profile Design", detail: "Slim units that fit into tight ceiling spaces without disrupting interior height." },
          { title: "High-Lift Drain Pump", detail: "Advanced condensate management for flexible installation in complex layouts. Essential for commercial buildings with restrictive plumbing." },
          { title: "Auto-Swing Louvers", detail: "Dynamic air direction control for optimized circulation and comfort." }
        ],
        applications: ["Retail Showrooms", "Fine Dining Restaurants", "Corporate Offices", "Boutique Hotels", "Fitness Centers", "Banks & Financial Institutions"]
      }
    },
    {
      id: 'central-ac',
      title: 'Central AC & VRV',
      subtitle: 'Infrastructure Scale',
      description: 'World-leading Variable Refrigerant Volume technology for high-rise buildings and massive architectures.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      href: '/products/central-ac',
      img: '/products/daikin_jtkj_toptier_1776343163911.png',
      technicalContent: {
        heroTitle: "Infrastructure-Grade Centralized Cooling",
        heroSubtitle: "VRV & Chiller Engineering",
        intro: "Central air conditioning demands engineering precision. We specialize in VRV (Variable Refrigerant Volume) systems—a revolutionary technology capable of independently cooling and heating every room in a multi-story building from a single unified outdoor unit. VRV systems are the first choice for modern architectural marvels.",
        longDescription: "Our track record includes massive installations like the 6000HP project at the Tech Mahindra campus. We provide Centrifugal, Screw, and Scroll chillers that offer environment-friendly, high-performance cooling for the most demanding industrial and institutional applications. These chillers are a testament to unmatched engineering capability, ideal for commercial, industrial and institutional HVAC applications.",
        deepDive: {
          title: "The Science of VRV",
          content: "VRV systems are well known for their high energy efficiency and modular design. By varying the volume of refrigerant to each indoor unit based on the specific load required, VRV systems reduce energy wastage compared to traditional centralized chillers while offering unparalleled zoning flexibility. From VRV S series for luxury residences to VRV X units for massive towers, we provide the ultimate in scalability. VRV S is compact, while VRV X provides maximum capacity."
        },
        features: [
          { title: "Independent Multi-Zoning", detail: "Allow individual temperature settings for up to 64 indoor units per system." },
          { title: "Air Handling Units (AHU)", detail: "Scaling from recovery ventilation to large-scale fresh air management for buildings of all sizes." },
          { title: "Chiller Engineering", detail: "Precision centrifugal and screw chillers for industrial cooling loops and massive mechanical processes." },
          { title: "Space-Saving Piping", detail: "Minimal piping and compact outdoor units free up valuable rooftop and service floor space." }
        ],
        applications: ["IT Parks", "High-Rise Residential", "Hospitals", "Educational Campuses", "Factories", "Airports", "Shopping Malls"]
      }
    },
    {
      id: 'ventilation',
      title: 'Ventilation',
      subtitle: 'Industrial Fresh Air',
      description: 'Critical air purging systems, heavy-duty centrifugal fans, and safety units designed for enclosed infrastructures.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      href: '/products/ventilation',
      img: '/products/daikin_ftl_3star_1776342800676.png',
      technicalContent: {
        heroTitle: "Industrial Ventilation & Purging",
        heroSubtitle: "Intelligent Air Exchange & Life-Safety",
        intro: "Modern architecture relies on forced or mechanical ventilation to ensure air quality and safety. Our systems remove odors, heat, bacterial build-up and pump in filtered fresh air to maintain a healthy building environment. Natural Ventilation in large buildings is impossible, therefore forced mechanical units are incorporated.",
        longDescription: "Ventilation is vital for any air conditioning design. We specialize in high-pressure systems capable of handling 700 to 800 Pa, ensuring that even the most enclosed basement areas meet stringent safety and airflow requirements. We use specialized fans—Inline, Propeller, and Axial—to provide high quality, cost-competitive solutions regardless of the application complexity.",
        deepDive: {
          title: "Impulse Jet Fan Systems",
          content: "Specifically for parking decks, our induction/jet fans support natural flow and provide motion in low-speed regions. By using localized fans, we take up less than 0.5% of ceiling area, improving visibility and often allowing for reduced storey heights in new constructions. This saves time and money. Centrifugal fans are also used for large ventilating air spaces, capable of circulating huge volumes due to higher drag."
        },
        features: [
          { title: "Centrifugal Impulse Fans", detail: "High-efficiency enclosed units for huge volumes with pressure up to 800 Pa." },
          { title: "Axial Aerofoil Design", detail: "Wing-shaped blades generating high drag for superior gush efficiency and lower noise levels." },
          { title: "Cabinet Exhaust Fans", detail: "Belt-drive through-the-wall units ideal for high volume at low static pressures." },
          { title: "Propeller General Purpose", detail: "Cost-effective, high quality solution for general commercial exhaust and supply configurations." }
        ],
        applications: ["Parking Basements", "Commercial Kitchens", "Emergency Stairwells", "Tunnels", "Industrial Workshops", "Data Centers", "Cold Storage Boxes"]
      }
    }
  ];

  const currentCategory = categories.find(c => c.id === categoryId);

  return (
    <div className="bg-[#fafbfc] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {!categoryId ? (
          <>
            {/* Page Header - Overview Mode */}
            <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeInUp">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-[#0072bc]"></span>
                <span className="text-[#0072bc] text-[11px] font-black uppercase tracking-[0.3em]" style={{ fontFamily: 'Inter, sans-serif' }}>Our Expertise</span>
                <span className="w-12 h-0.5 bg-[#0072bc]"></span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Comprehensive <span className="text-[#0072bc]">HVAC Solutions</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                As an authorized sales and service partner, we provide end-to-end climate control solutions ranging from residential splits to industrial VRV and ventilation infrastructure.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 animate-fadeInUp">
              {categories.map((category, idx) => (
                <Link
                  to={category.href}
                  key={category.id}
                  className="group bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(0,114,188,0.15)] hover:border-blue-100 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-bl-[100%] transition-transform duration-700 group-hover:scale-110 origin-top-right pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start h-full">
                    {/* Visual / Icon Side */}
                    <div className="w-full md:w-1/3 flex flex-col items-center flex-shrink-0">
                      <div className="w-20 h-20 bg-[#002f54] text-white rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-blue-900/20 transform group-hover:-translate-y-2 transition-transform duration-500">
                        {category.icon}
                      </div>
                      <div className="relative w-full aspect-square bg-gray-50/50 rounded-2xl p-4 hidden md:flex items-center justify-center border border-gray-100">
                        <img src={category.img} alt={category.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-2/3 flex flex-col h-full text-center md:text-left">
                      <span className="text-[#0072bc] text-[10px] font-black uppercase tracking-widest mb-2">{category.subtitle}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {category.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                        {category.description}
                      </p>

                      <div className="mt-auto flex items-center justify-center md:justify-start gap-3 text-sm font-bold text-[#002f54] uppercase tracking-widest group-hover:text-[#0072bc] transition-colors">
                        Explore Information
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#0072bc] group-hover:border-[#0072bc] group-hover:text-white transition-all duration-300">
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : currentCategory ? (
          <div className="animate-fadeInUp">
            {/* Category Breadcrumb */}
            <div className="mb-10 flex items-center justify-start gap-2">
               <Link to="/products" className="text-gray-400 text-[10px] font-bold uppercase tracking-widest hover:text-[#0072bc]">Expertise</Link>
               <span className="text-gray-300">/</span>
               <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-widest">{currentCategory.technicalContent.heroTitle}</span>
            </div>

            {/* Individual Category Detail Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
               <div>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <span className="w-10 h-0.5 bg-[#0072bc]"></span>
                    <span className="text-[#0072bc] text-[10px] font-black uppercase tracking-[0.3em]" style={{ fontFamily: 'Inter, sans-serif' }}>{currentCategory.technicalContent.heroSubtitle}</span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {currentCategory.technicalContent.heroTitle}
                  </h1>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
                     <p className="font-semibold text-gray-900">{currentCategory.technicalContent.intro}</p>
                     <p>{currentCategory.technicalContent.longDescription}</p>
                  </div>
                  
                  {/* Technology Deep Dive Box */}
                  <div className="bg-[#002f54] text-white p-8 lg:p-10 rounded-[2.5rem] mb-12 relative overflow-hidden shadow-2xl">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                     <h3 className="text-xl font-bold mb-4 flex items-center gap-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        <span className="w-8 h-8 rounded-full bg-[#0072bc] flex items-center justify-center text-[10px]">!</span>
                        {currentCategory.technicalContent.deepDive.title}
                     </h3>
                     <p className="text-blue-100/80 text-base leading-relaxed">
                        {currentCategory.technicalContent.deepDive.content}
                     </p>
                  </div>

                  {/* Typical Applications */}
                  <div>
                    <h4 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-widest px-4 border-l-4 border-l-[#0072bc]" style={{ fontFamily: 'Outfit, sans-serif' }}>Ideal Applications</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                       {currentCategory.technicalContent.applications.map((app, i) => (
                         <div key={i} className="bg-white border border-gray-100 py-3 px-4 rounded-xl text-xs font-bold text-gray-600 shadow-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0072bc] rounded-full"></span>
                            {app}
                         </div>
                       ))}
                    </div>
                  </div>
               </div>

               {/* Right Column: Visual and Specifications */}
               <div className="lg:sticky lg:top-36 space-y-8">
                  <div className="relative group">
                     <div className="absolute inset-0 bg-[#0072bc] rounded-[3rem] rotate-2 group-hover:rotate-1 transition-transform opacity-5"></div>
                     <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-gray-100 p-8 flex items-center justify-center">
                         <img 
                           src={currentCategory.img} 
                           alt={currentCategory.title} 
                           className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105 mix-blend-multiply" 
                         />
                     </div>
                  </div>

                  {/* Technical Feature Grid */}
                  <div className="grid gap-4">
                     {currentCategory.technicalContent.features.map((f, i) => (
                       <div key={i} className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-100 hover:shadow-md transition-all">
                          <h4 className="text-gray-900 font-bold mb-1 text-sm uppercase tracking-wider group-hover:text-[#0072bc] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>{f.title}</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">{f.detail}</p>
                       </div>
                     ))}
                  </div>

                  <div className="flex items-center justify-center gap-4">
                     <Link to="/store" className="w-full text-center px-8 py-4 bg-[#0072bc] text-white text-[11px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-900/10 hover:-translate-y-1 transition-all">
                        Browse Compatible Models in Store
                     </Link>
                  </div>
               </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
             <h2 className="text-2xl font-bold text-gray-900">Category not found</h2>
             <Link to="/products" className="text-[#0072bc] font-bold mt-4 inline-block underline">Return to Expertise</Link>
          </div>
        )}

        {/* Bottom CTA Block */}
        <div className="mt-20 bg-[#002f54] rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden text-center sm:text-left shadow-2xl">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#0072bc]/30 rounded-full blur-[80px] -mr-48 -mt-48 pointer-events-none"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                 <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Not sure which system fits your scale?</h2>
                 <p className="text-blue-100/70 text-base leading-relaxed">Schedule a free technical site survey. Our certified engineers will calculate heat loads and recommend the exact tonnage and system architecture required for your infrastructure.</p>
              </div>
              <Link to="/contact" className="flex-shrink-0 px-10 py-5 bg-white text-[#002f54] text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#0072bc] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                 Request Site Survey
              </Link>
           </div>
        </div>
      </div>
    </div>
  )
}

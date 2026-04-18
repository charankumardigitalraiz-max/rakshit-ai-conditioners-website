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
      description: 'Get the best-in-class air conditioning experience with a wide range of Daikin split ACs featuring a 10-year compressor warranty.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      href: '/products/room-ac',
      img: '/productinformation/product_room_ac_1776510551764.png',
      technicalContent: {
        heroTitle: "Premium Split Systems",
        heroSubtitle: "Advanced residential cooling",
        intro: "Get the best-in-class air conditioning experience with a wide range of split air conditioners with 10 Years warranty on compressor by Daikin. Loaded with amazing features, exceptional cooling performance, and great energy-saving technology, our air conditioners level up the décor of your place wonderfully.",
        longDescription: "We offer Split Air-conditioners ranging from 0.75 tons to 3 tons with different energy ratings of 2-star, 3-star, 4-star and 5-star. We also provide inverter type split air-conditioners with refrigerant gases ranging from R32 and R410A. In today’s fast paced world, we also provide advanced Air Purifiers to ensure the air inside your sanctuary safely filtered from invisible deadly viruses, bacteria, and allergens.",
        deepDive: {
          title: "Split Inverter Technology",
          content: "An inverter type air-conditioner adjusts the speed of the compressor to control the refrigerant flow rate, thereby consuming less current and power. It has precise temperature control and as the set temperature is attained, the unit adjusts its capacity to eliminate any temperature fluctuations. In contrast, non-inverter air-conditioners repeatedly start and stop, causing sharp spikes in power consumption."
        },
        features: [
          { title: "Daikin FTKL Series", detail: "Advanced performance split systems engineered for precise home climate control." },
          { title: "Daikin FTL Series", detail: "Robust, high-efficiency non-inverter options for immediate and reliable cooling." },
          { title: "Daikin JTKJ Series", detail: "Top-tier inverter models featuring streamer discharge technology and whisper-quiet operation." },
          { title: "Air Purifiers", detail: "Advanced MC30UVM6 and MC70MVM6 units that effectively neutralize airborne pathogens." }
        ],
        applications: ["Master Bedrooms", "Living Rooms", "Home Offices", "Guest Suites", "Private Libraries", "Children's Rooms"]
      }
    },
    {
      id: 'commercial-ac',
      title: 'Commercial AC',
      subtitle: 'Enterprise Solutions',
      description: 'Ductable, Cassette, and Floor Stand systems ranging up to 50 tons for high cooling loads in massive spaces.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      href: '/products/commercial-ac',
      img: '/productinformation/product_commercial_ac_1776510566821.png',
      technicalContent: {
        heroTitle: "Advanced Commercial HVAC",
        heroSubtitle: "Engineered for High-Traffic Loads",
        intro: "With a wide range of commercial solutions including ductable, cassette, and floor standing units, we deliver the best cooling solutions for your office, hotels, hospitals, and home. These types of systems are used when the cooling area is large with high cooling loads.",
        longDescription: "Sri Comforts has been a pioneer in ductable air conditioners in Telangana, Andhra Pradesh, Tamil Nadu, and Karnataka for the past 18+ years. We deploy systems ranging from 1.5 tons to 50 tons capacity, applicable to commercial buildings of all sizes. Our Cassette units are designed to deliver high cooling effect without ducting provisions, while our Floor Standing units provide quiet cooling without complex installation.",
        deepDive: {
          title: "Ductable vs Cassette Cooling",
          content: "Ductable air conditioners are a very good choice for commercial layouts as they are highly cost-effective and compact, allowing for invisible thermal management across huge floor plates. Cassette types are usually installed directly on the ceiling, suited specifically for large open-plan rooms where ducting is restricted, ensuring uniform distribution without disrupting the overarching aesthetic architecture."
        },
        features: [
          { title: "Ductable Units (FBQ, FDXS)", detail: "Concealed units like the FBQ and FDBMF-FDMQN series that distribute air via integrated ductwork." },
          { title: "Cassette Units (FCT, FFF)", detail: "Ceiling-mounted units including the FCT, FFF, and FKA series for seamless wide-angle delivery." },
          { title: "Floor Standing Units", detail: "Versatile FVGR Series, FVQ, and FVRN-FVQN systems designed for immediate deployment." },
          { title: "Heavy Load Capacity", detail: "Scalable commercial solutions ranging massively from 1.5 tons all the way up to 50 tons." }
        ],
        applications: ["Retail Showrooms", "Corporate Offices", "Hospitals", "Boutique Hotels", "Large Restaurants", "Banks"]
      }
    },
    {
      id: 'central-ac',
      title: 'Central AC & VRV',
      subtitle: 'Infrastructure Scale',
      description: 'Revolutionary Variable Refrigerant Volume & Chiller systems for skyscrapers and mass commercial centers.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      href: '/products/central-ac',
      img: '/productinformation/product_central_ac_1776510598158.png',
      technicalContent: {
        heroTitle: "Infrastructure Central HVAC",
        heroSubtitle: "VRV & Chiller Engineering",
        intro: "VRV or Variable Refrigerant Volume is a revolutionary technique used in large buildings or commercial centers. VRVs are capable of cooling/heating each room in the building individually. VRV systems are well known for their high energy efficiency and compact size.",
        longDescription: "They can be easily installed without much complication in piping and wiring. We are proud to be the first air-conditioning dealer to have installed a massive 6000HP project at the Tech Mahindra campus in Chennai. Beyond VRV, with our comprehensive range of chillers, Daikin is poised to power up various mechanical cooling process applications across demanding industries.",
        deepDive: {
          title: "Chillers & AHU Frameworks",
          content: "Our Centrifugal chillers, Screw chillers, and Scroll chillers are a testament to Daikin's unmatched engineering capability, providing flexible, environment-friendly, and high-performance cooling for institutional HVAC applications. We pair these immense systems with Air Handling Units (AHU) ranging from medium-sized heat recovery ventilation to large-scale fresh air management for buildings of all sizes."
        },
        features: [
          { title: "VRV S & VRV X Series", detail: "Advanced VRV Indoor and Outdoor units capable of highly energy-efficient modular scaling." },
          { title: "Centrifugal Chillers", detail: "Engineered, immensely flexible solutions for industrial and institutional HVAC baseloads." },
          { title: "Screw & Scroll Chillers", detail: "High-performance processing chillers providing environment-friendly massive thermal solutions." },
          { title: "Air Handling Units", detail: "Optimal climate conditioning units ensuring fresh, healthy environments across vast architectures." }
        ],
        applications: ["IT Parks (e.g. Tech Mahindra)", "High-Rise Commercial", "Hospitals", "Massive Factories", "Airports", "Shopping Malls"]
      }
    },
    {
      id: 'ventilation',
      title: 'Ventilation',
      subtitle: 'Industrial Fresh Air',
      description: 'Critical forced mechanic units including Jet fans, Centrifugal, and Axial fans generating up to 800 Pa pressure.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      href: '/products/ventilation',
      img: '/productinformation/product_ventilation_1776510625274.png',
      technicalContent: {
        heroTitle: "Industrial Forced Ventilation",
        heroSubtitle: "Intelligent Air Exchange Logistics",
        intro: "Ventilation is vital for any air conditioning design. It is the only medium of air exchange that forcefully removes odors, heat, bacterial build-up and pumps fresh air into the building. Natural Ventilation in large buildings is impossible due to sheer size, making forced mechanics critical.",
        longDescription: "Our engineering team modifies every segment of your ventilation layout to create an effective cooling cycle. We provide a full suite of mechanical systems ranging from Inline fans and Cabinet Exhausts to heavy duty Propeller Fans. Sri Comforts ensures highly efficient air delivery using world-class aerodynamics.",
        deepDive: {
          title: "Centrifugal vs Axial Aerodynamics",
          content: "Centrifugal fans are enclosed with sealed impellers, circulating huge volumes of air up to 700-800 Pa pressure due to higher drag, perfect for massive spaces. In contrast, Axial fans use aerofoil blades (like an airplane wing) to generate high drag and gush air parallel to the axis of rotation. Coupled to an AC layout, our axial fans handle >800 Pa pressure with better efficiency and lower noise than inline counterparts."
        },
        features: [
          { title: "Jet / Impulse Fans", detail: "Installed at particular points in parking decks, taking up <0.5% ceiling area to preserve visibility and storey height." },
          { title: "Centrifugal Units", detail: "High-pressure sealed casing fans capable of flawlessly handling 700 to 800 Pa without generating immense noise." },
          { title: "Axial Aerofoil Fans", detail: "Wing-shaped blade fans handling upwards of 800 Pa pressure, ideal for parallel axis gushing." },
          { title: "Cabinet & Inline Fans", detail: "Belt-driven installations delivering high volume through-the-wall dynamics at low static pressures." }
        ],
        applications: ["Parking Basements", "Commercial Kitchens", "Tunnels", "Industrial Warehouses", "Data Centers", "Manufacturing Floors"]
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
                <span className="text-[#0072bc] text-[11px] font-black uppercase tracking-[0.3em]">Our Expertise</span>
                <span className="w-12 h-0.5 bg-[#0072bc]"></span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
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
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
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
                  <span className="text-[#0072bc] text-[10px] font-black uppercase tracking-[0.3em]">{currentCategory.technicalContent.heroSubtitle}</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
                  {currentCategory.technicalContent.heroTitle}
                </h1>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
                  <p className="font-semibold text-gray-900">{currentCategory.technicalContent.intro}</p>
                  <p>{currentCategory.technicalContent.longDescription}</p>
                </div>

                {/* Technology Deep Dive Box */}
                <div className="bg-[#002f54] text-white p-8 lg:p-10 rounded-[2.5rem] mb-12 relative overflow-hidden shadow-1xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0072bc] flex items-center justify-center text-[10px]">!</span>
                    {currentCategory.technicalContent.deepDive.title}
                  </h3>
                  <p className="text-blue-100/80 text-base leading-relaxed">
                    {currentCategory.technicalContent.deepDive.content}
                  </p>
                </div>

                {/* Typical Applications */}
                <div>
                  <h4 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-widest px-4 border-l-4 border-l-[#0072bc]">Ideal Applications</h4>
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
                <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src={currentCategory.img}
                    alt={currentCategory.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#002f54]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Technical Feature Grid */}
                <div className="grid gap-4">
                  {currentCategory.technicalContent.features.map((f, i) => (
                    <div key={i} className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-100 hover:shadow-md transition-all">
                      <h4 className="text-gray-900 font-bold mb-1 text-sm uppercase tracking-wider group-hover:text-[#0072bc] transition-colors">{f.title}</h4>
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
        <div className="mt-20 bg-[#002f54] rounded-[2.5rem] p-10 lg:p-7 relative overflow-hidden text-center sm:text-left shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0072bc]/30 rounded-full blur-[80px] -mr-48 -mt-48 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-2xl font-bold text-white mb-4">Not sure which system fits your scale?</h2>
              <p className="text-blue-100/70 text-base leading-relaxed">Schedule a free technical site survey. Our certified engineers will calculate heat loads and recommend the exact tonnage and system architecture required for your infrastructure.</p>
            </div>
            <Link to="/contact" className="flex-shrink-0 px-5 py-3 bg-white text-[#002f54] text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-[#0072bc] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
              Request Site Survey
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

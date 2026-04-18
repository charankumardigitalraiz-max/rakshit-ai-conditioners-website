import React, { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-28">
            <div className="flex flex-col lg:flex-row min-h-screen lg:items-start">

                {/* Left Side: Sticky Information Panel */}
                <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 bg-[#002f54] text-white p-8 sm:p-12 lg:p-10 xl:p-14 2xl:p-16 lg:sticky lg:top-[112px] lg:min-h-[calc(100vh-112px)] flex flex-col justify-between">
                    <div>
                        {/* Premium Accent Line */}
                        <div className="w-12 h-1 bg-[#0072bc] mb-8"></div>

                        <h1 className="text-3xl sm:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light mb-3 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Get In <span className="font-bold">Touch</span>
                        </h1>
                        <p className="text-blue-100/60 mb-8 lg:mb-6 xl:mb-10 max-w-sm text-xs sm:text-base leading-relaxed">
                            Connect with our intelligent cooling experts for corporate projects, or request authorized Daikin service.
                        </p>

                        {/* Sales Section */}
                        <div className="mb-8 lg:mb-6 xl:mb-8">
                            <h3 className="text-[#0072bc] text-[10px] font-bold uppercase tracking-widest mb-2">Sales Enquiries</h3>
                            <a href="tel:+919030064466" className="block text-xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-normal hover:text-blue-300 transition-colors mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>+91 90300 64466</a>
                            <a href="tel:+919030094466" className="block text-xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-normal hover:text-blue-300 transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>+91 90300 94466</a>
                        </div>

                        {/* Service Section */}
                        <div>
                            <h3 className="text-green-500 text-[10px] font-bold uppercase tracking-widest mb-2">Service & Support</h3>
                            <a href="tel:+919100090150" className="block text-xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-normal hover:text-green-300 transition-colors mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>+91 91000 90150</a>
                            <a href="tel:+919100090151" className="block text-xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-normal hover:text-green-300 transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>+91 91000 90151</a>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-6 xl:mt-12 w-full pt-8 border-t border-white/10">
                        <p className="text-[10px] text-white/30 uppercase tracking-widest">© 2026 Rakshith Air Conditioners & Services</p>
                    </div>
                </div>

                {/* Right Side: Scrollable Map Branches */}
                <div className="flex-1 w-full bg-white px-4 sm:px-12 lg:px-12 xl:px-20 py-10 lg:py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-4 border-b border-gray-100 pb-6">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Visit Our Plazas</h2>
                            <p className="text-gray-500">Physical consultation and hardware exploration.</p>
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 2xl:gap-x-20 gap-y-16">
                            {/* Branch 1 */}
                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-2.5 h-2.5 bg-[#0072bc] rounded-full"></div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Hyderabad HQ</h3>
                                </div>

                                <div className="w-full aspect-[4/3] sm:aspect-[16/9] bg-gray-50 mb-6 overflow-hidden rounded-2xl group-hover:shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-700 relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.954898283918!2d78.36654679999998!3d17.498843400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9300783092b5%3A0xed084e0674aa10b7!2sRAKSHITH%20AIR%20CONDITION%20%26%20SERVICES!5e1!3m2!1sen!2sin!4v1776410422214!5m2!1sen!2sin"
                                        className="w-full h-full border-0 absolute inset-0 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                                        allowFullScreen=""
                                        title="Hyderabad Map"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                                <h4 className="text-lg font-bold text-gray-900 mb-1">Rakshith Air Condition & Services</h4>
                                <p className="text-gray-500 leading-relaxed max-w-md mb-4">RVRH HOMES, 41, Rd No. 3R, Laxmi Nagar, Lakshmi Nagar colony, Miyapur, Hyderabad, Telangana 500049</p>

                                <a href="https://maps.google.com/?q=17.4988434,78.3665468" target="_blank" rel="noreferrer" className="text-[#0072bc] font-bold text-sm uppercase tracking-wider hover:text-[#002f54] flex items-center gap-2 group-hover:gap-3 transition-all w-max border-b-2 border-transparent hover:border-[#002f54] pb-1">
                                    Get Directions 
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            </div>

                            {/* Branch 2 */}
                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Vijayawada Hub</h3>
                                </div>

                                <div className="w-full aspect-[4/3] sm:aspect-[16/9] bg-gray-50 mb-6 overflow-hidden rounded-2xl group-hover:shadow-2xl group-hover:shadow-green-900/10 transition-all duration-700 relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.405632009926!2d80.70200257510534!3d16.50083482773909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb003fb5a211%3A0xe753b764291e5b32!2sDaikin%20Rakshith%20air%20condition%20service%20and%20plaza!5e1!3m2!1sen!2sin!4v1776410519900!5m2!1sen!2sin"
                                        className="w-full h-full border-0 absolute inset-0 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                                        allowFullScreen=""
                                        title="Vijayawada Map"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                                <h4 className="text-lg font-bold text-gray-900 mb-1">Daikin Rakshith Air Condition Service & Plaza</h4>
                                <p className="text-gray-500 leading-relaxed max-w-md mb-4">100 Feet Rd, Poranki Rural, tadiKadapa, Vijayawada, Poranki, Andhra Pradesh 521137</p>

                                <a href="https://maps.google.com/?q=16.5008348,80.7020026" target="_blank" rel="noreferrer" className="text-green-600 font-bold text-sm uppercase tracking-wider hover:text-green-800 flex items-center gap-2 group-hover:gap-3 transition-all w-max border-b-2 border-transparent hover:border-green-800 pb-1">
                                    Get Directions 
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

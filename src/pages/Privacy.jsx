import React, { useEffect } from 'react';
import PageTransition from '../components/ui/PageTransition';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const policies = [
        {
            title: "Data Collection",
            content: "We collect information you provide directly to us through enquiry forms, service tags, and consultation requests. This typically includes your name, site address, and contact details."
        },
        {
            title: "How We Use Data",
            content: "Your data is used exclusively to provide authorized Daikin service, process technical cooling requirements, and manage your Annual Maintenance Contracts. We do not sell client data to third-party marketing firms."
        },
        {
            title: "Technical Partner Sharing",
            content: "Information necessary for equipment warranty registration may be shared with Daikin Airconditioning India Pvt. Ltd. (DAIPL) as part of our authorized channel protocols."
        },
        {
            title: "Site Analysis Cookies",
            content: "Our website uses session-based cookies to improve your browsing experience and analyze technical performance. These do not track personal identity."
        },
        {
            title: "Data Retention",
            content: "We retain project records for the duration of the equipment's operational life to ensure accurate service history and technical support."
        }
    ];

    return (
        <PageTransition>
            <div className="min-h-screen bg-white pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-5 sm:px-8">
                    {/* Header */}
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-10 h-0.5 bg-[#0072bc]"></span>
                            <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Privacy</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Privacy <span className="text-[#0072bc]">Policy</span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                            Protecting your project data and personal privacy is a core part of our commitment to professional integrity.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {policies.map((policy, index) => (
                            <div key={index} className="group">
                                <div className="text-[10px] font-bold text-[#0072bc] uppercase tracking-widest mb-3 opacity-40 group-hover:opacity-100 transition-opacity">POL-{index + 1}</div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    {policy.title}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {policy.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Note */}
                    <div className="mt-20 p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="max-w-md">
                            <h3 className="font-bold text-gray-900 mb-1">Privacy Questions?</h3>
                            <p className="text-sm text-gray-500">Contact our data protection coordinator for any queries regarding your information.</p>
                        </div>
                        <a href="/contact" className="px-8 py-3 bg-[#0072bc] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-blue-700 transition-colors">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Privacy;

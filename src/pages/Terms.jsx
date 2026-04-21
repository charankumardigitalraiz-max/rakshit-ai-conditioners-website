import React, { useEffect } from 'react';
import PageTransition from '../components/ui/PageTransition';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: "1. Professional Engagement",
            content: "By accessing this website or engaging our services, you agree to comply with and be bound by these terms. Rakshith Air Conditioners provides authorized sales, installation, and maintenance of Daikin climate control systems."
        },
        {
            title: "2. Service Level Agreement",
            content: "All installation projects are subject to structural technical analysis. We guarantee adherence to Daikin global installation standards. Annual Maintenance Contracts (AMC) are governed by specific service tickets issued at the time of subscription."
        },
        {
            title: "3. Warranty & Liability",
            content: "Standard manufacturer warranties apply to all hardware. Rakshith Air Conditioners provides a separate limited warranty on installation workmanship for a period of 12 months from the date of commissioning, unless otherwise specified in the project contract."
        },
        {
            title: "4. Technical Specifications",
            content: "Product performance data (BTU, tonnage, efficiency ratings) are based on standard test conditions. Actual performance may vary based on site insulation, heat load, and electrical stability."
        },
        {
            title: "5. Intellectual Property",
            content: "The content, technical diagrams, and brand iconography on this site are the property of Rakshith Air Conditioners or its partners. Unauthorized reproduction for commercial use is strictly prohibited."
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
                            <span className="text-[#0072bc] text-[10px] font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Compliance</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Terms & <span className="text-[#0072bc]">Conditions</span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                            These terms govern our professional relationship, ensuring engineering excellence and client satisfaction.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <div key={index} className="group">
                                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    <span className="text-[#0072bc]/20 group-hover:text-[#0072bc] transition-colors">{index + 1}.0</span>
                                    {section.title.split('. ')[1]}
                                </h2>
                                <p className="text-gray-600 leading-relaxed pl-10 border-l border-gray-100 group-hover:border-[#0072bc]/30 transition-colors">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-20 pt-10 border-t border-gray-100 text-sm text-gray-400 italic">
                        Last updated: April 21, 2026. For specific project contracts, please refer to your physical engineering documents.
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Terms;

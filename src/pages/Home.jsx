import React from 'react'
import Hero from '../components/Home/Hero'
import Testimonials from '../components/Home/Testimonials'
import Services from '../components/Home/Services'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import About from '../components/Home/About'
import ProjectShowcase from '../components/Home/ProjectShowcase'
import TrustedPartners from '../components/Home/TrustedPartners'
import Process from '../components/Home/Process'
import Achievements from '../components/Home/Achievements'
import Gallery from '../components/Home/Gallery'
import Contact from '../components/Home/Contact'
import PageTransition from '../components/ui/PageTransition'
import SectionTransition from '../components/ui/SectionTransition'

const Home = () => {
    return (
        <PageTransition>
            <Hero />

            <SectionTransition delay={0.1}>
                <FeaturedProducts />
            </SectionTransition>
            <SectionTransition delay={0.2}>
                <About />
            </SectionTransition>
            <SectionTransition delay={0.1}>
                <ProjectShowcase />
            </SectionTransition>
            {/* <SectionTransition delay={0.2}>
                <TrustedPartners />
            </SectionTransition> */}
            <SectionTransition delay={0.1}>
                <Achievements />
            </SectionTransition>
            <SectionTransition delay={0.1}>
                <Testimonials />
            </SectionTransition>
            <SectionTransition delay={0.1}>
                <Gallery />
            </SectionTransition>

        </PageTransition>
    )
}

export default Home
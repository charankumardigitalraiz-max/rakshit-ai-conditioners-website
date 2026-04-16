import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import About from '../components/Home/About'
import ProjectShowcase from '../components/Home/ProjectShowcase'
import Process from '../components/Home/Process'
import Achievements from '../components/Home/Achievements'
import Contact from '../components/Home/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <FeaturedProducts />
            <About />
            {/* <Services /> */}
            <ProjectShowcase />
            {/* <Process /> */}
            <Achievements />
            <Contact />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
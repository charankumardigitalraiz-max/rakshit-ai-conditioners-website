import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Store from './pages/store'
import Projects from './pages/Projects'
import About from './pages/About'
import Services from './pages/Services'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Whatsappfloatingbutton from './components/ui/Whatsapp-floating-button'
import ScrollToTop from './components/ui/ScrollToTop'
import SocialBand from './components/ui/SocialBand'
import './index.css'

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-white selection:bg-[#005bac] selection:text-white relative">
        <ScrollToTop />
        <SocialBand />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store/:categoryId?" element={<Store />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:serviceId?" element={<Services />} />
            <Route path="/products/:categoryId?" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Whatsappfloatingbutton />
      </div>
    </Router>
  )
}

export default App


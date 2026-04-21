import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Whatsappfloatingbutton from './components/ui/Whatsapp-floating-button'
import ScrollToTop from './components/ui/ScrollToTop'
import SocialBand from './components/ui/SocialBand'
import EnquiryModal from './components/EnquiryModal'
import { EnquiryProvider } from './context/EnquiryContext'
import './index.css'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Store = lazy(() => import('./pages/store'))
const Projects = lazy(() => import('./pages/Projects'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const Products = lazy(() => import('./pages/Products'))
const Terms = lazy(() => import('./pages/Terms'))
const Privacy = lazy(() => import('./pages/Privacy'))

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-[80vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-blue-100 border-t-[#0072bc] rounded-full animate-spin"></div>
  </div>
)

function App() {
  const location = useLocation();

  return (
    <EnquiryProvider>
      <div className="font-sans antialiased text-gray-900 bg-white selection:bg-[#005bac] selection:text-white relative">
        <ScrollToTop />
        <SocialBand />
        <Header />
        <main>
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/store/:categoryId?" element={<Store />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/services/:serviceId?" element={<Services />} />
                <Route path="/products/:categoryId?" element={<Products />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
        <Whatsappfloatingbutton />
        <EnquiryModal />
      </div>
    </EnquiryProvider>
  )
}

export default App


import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Store from './pages/store'
import Projects from './pages/Projects'
import Whatsappfloatingbutton from './components/ui/Whatsapp-floating-button'
import ScrollToTop from './components/ui/ScrollToTop'
import './index.css'

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-white selection:bg-[#005bac] selection:text-white relative">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
        <Whatsappfloatingbutton />
      </div>
    </Router>
  )
}

export default App


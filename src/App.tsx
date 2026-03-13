import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import TabSection from './components/TabSection'
import ResultsTab from './pages/ResultsTab'
import ProductTab from './pages/ProductTab'
import ValueTab from './pages/ValueTab'
import ImplementTab from './pages/ImplementTab'
import FooterSection from './components/FooterSection'

export type TabId = 'results' | 'product' | 'value' | 'implement'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('results')
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark)
  }, [isDark])

  const handleExplore = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-[#0a1628] to-[#060f1d]' 
        : 'bg-gradient-to-b from-[#faf9f7] to-[#f0eeeb]'
    }`}>
      {/* Noise overlay */}
      <div className="noise" />
      
      {/* Ambient glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="glow-spot w-[900px] h-[900px] -top-40 -right-40" />
        <div className="glow-spot w-[700px] h-[700px] bottom-0 -left-60" />
        <div className="glow-gold w-[400px] h-[400px] top-1/3 right-1/4" />
      </div>

      <Navigation scrolled={scrolled} onExplore={handleExplore} isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection onExplore={handleExplore} isDark={isDark} />
      
      {/* Content */}
      <div id="content">
        <TabSection activeTab={activeTab} setActiveTab={setActiveTab} isDark={isDark} />
        
        <main className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeTab === 'results' && <ResultsTab isDark={isDark} />}
              {activeTab === 'product' && <ProductTab isDark={isDark} />}
              {activeTab === 'value' && <ValueTab isDark={isDark} />}
              {activeTab === 'implement' && <ImplementTab isDark={isDark} />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      
      <FooterSection isDark={isDark} />
    </div>
  )
}

export default App

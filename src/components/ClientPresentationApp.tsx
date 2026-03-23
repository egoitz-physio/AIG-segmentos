import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import TabSection from './TabSection'
import FooterSection from './FooterSection'
import ResultsTab from '../pages/ResultsTab'
import ProductTab from '../pages/ProductTab'
import ValueTab from '../pages/ValueTab'
import ImplementTab from '../pages/ImplementTab'
import KinesiologiaTab from '../pages/KinesiologiaTab'
import ObjetivoTab from '../pages/ObjetivoTab'

export type TabId = 'objetivo' | 'results' | 'product' | 'value' | 'kinesiologia' | 'implement'

interface ClientPresentationAppProps {
  clientName: string
  clientLogo?: string
}

export default function ClientPresentationApp({
  clientName,
  clientLogo,
}: ClientPresentationAppProps) {
  const [activeTab, setActiveTab] = useState<TabId>('objetivo')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab)
    const content = document.getElementById('content')
    if (content) {
      const tabSection = document.getElementById('tab-section')
      const tabHeight = tabSection?.offsetHeight || 0
      const contentTop = content.offsetTop - tabHeight
      window.scrollTo({ top: contentTop, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#0a1628] to-[#060f1d]">
      <div className="noise" />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="glow-spot w-[900px] h-[900px] -top-40 -right-40" />
        <div className="glow-spot w-[700px] h-[700px] bottom-0 -left-60" />
        <div className="glow-gold w-[400px] h-[400px] top-1/3 right-1/4" />
      </div>

      <Navigation scrolled={scrolled} clientName={clientName} clientLogo={clientLogo} />
      <HeroSection clientName={clientName} />

      <TabSection
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        isDark={true}
        clientName={clientName}
        clientLogo={clientLogo}
      />

      <main id="content" className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab === 'objetivo' && <ObjetivoTab isDark={true} clientName={clientName} />}
            {activeTab === 'results' && <ResultsTab isDark={true} clientName={clientName} />}
            {activeTab === 'product' && <ProductTab isDark={true} clientName={clientName} />}
            {activeTab === 'value' && <ValueTab isDark={true} clientName={clientName} />}
            {activeTab === 'implement' && <ImplementTab isDark={true} clientName={clientName} />}
            {activeTab === 'kinesiologia' && <KinesiologiaTab isDark={true} clientName={clientName} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <FooterSection isDark={true} clientName={clientName} clientLogo={clientLogo} />
    </div>
  )
}

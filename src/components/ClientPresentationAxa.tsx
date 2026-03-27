import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import TabSection from './TabSection'
import FooterSection from './FooterSection'
import ObjetivoTab from '../pages/ObjetivoTab'
import ProductTab from '../pages/ProductTab'
import AxaResultsTab from '../pages/AxaResultsTab'
import AxaValueTab from '../pages/AxaValueTab'
import AxaImplementTab from '../pages/AxaImplementTab'
import type { TabId } from './ClientPresentationApp'

interface ClientPresentationAxaProps {
  clientName: string
  clientLogo?: string
  homePath?: string
  visibleTabs?: TabId[]
  initialTab?: TabId
  hero?: {
    eyebrow?: string
    title?: ReactNode
    description?: string
    image?: string
    imageAlt?: string
  }
  footer?: {
    description?: string
    bottomText?: string
  }
}

export default function ClientPresentationAxa({
  clientName,
  clientLogo,
  homePath = '/',
  visibleTabs = ['objetivo', 'product', 'value', 'implement'],
  initialTab = 'objetivo',
  hero,
  footer,
}: ClientPresentationAxaProps) {
  const [activeTab, setActiveTab] = useState<TabId>(initialTab)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const previousTitle = document.title
    document.title = `Fisify × ${clientName} | Expertos en tu bienestar`
    return () => {
      document.title = previousTitle
    }
  }, [clientName])

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
        <div className="glow-spot w-[900px] h-[900px] -top-40 -right-40 opacity-70" />
        <div className="glow-spot w-[700px] h-[700px] bottom-0 -left-60 opacity-60" />
        <div className="glow-blue w-[420px] h-[420px] top-1/3 right-1/4" />
        <div className="glow-blue w-[260px] h-[260px] bottom-24 right-10 opacity-70" />
      </div>

      <Navigation scrolled={scrolled} clientName={clientName} clientLogo={clientLogo} homePath={homePath} />
      <HeroSection
        clientName={clientName}
        eyebrow={hero?.eyebrow}
        title={hero?.title}
        description={hero?.description}
        image={hero?.image}
        imageAlt={hero?.imageAlt}
      />

      <TabSection
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        isDark={true}
        clientName={clientName}
        clientLogo={clientLogo}
        visibleTabs={visibleTabs}
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
            {activeTab === 'results' && <AxaResultsTab isDark={true} clientName={clientName} />}
            {activeTab === 'product' && <ProductTab isDark={true} clientName={clientName} />}
            {activeTab === 'value' && <AxaValueTab isDark={true} clientName={clientName} />}
            {activeTab === 'implement' && <AxaImplementTab isDark={true} clientName={clientName} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <FooterSection
        isDark={true}
        clientName={clientName}
        clientLogo={clientLogo}
        description={footer?.description}
        bottomText={footer?.bottomText}
      />
    </div>
  )
}

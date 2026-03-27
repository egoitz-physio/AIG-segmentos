import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import type { TabId } from './ClientPresentationApp'

interface TabSectionProps {
  activeTab: TabId
  setActiveTab: (tab: TabId) => void
  isDark: boolean
  clientLogo?: string
  clientName?: string
  visibleTabs?: TabId[]
  brand?: 'standard' | 'zurich'
}

const allTabs = [
  { id: 'objetivo' as TabId, label: 'Objetivo' },
  { id: 'results' as TabId, label: 'Planes' },
  { id: 'product' as TabId, label: 'Producto' },
  { id: 'value' as TabId, label: 'Valor' },
  { id: 'implement' as TabId, label: 'Plan de trabajo' },
]

export default function TabSection({ activeTab, setActiveTab, isDark, clientLogo = '/images/medicus-logo-white.png', clientName = 'Medicus', visibleTabs, brand = 'standard' }: TabSectionProps) {
  const [isSticky, setIsSticky] = useState(false)
  const showClientLogo = Boolean(clientLogo)
  const isAxaKeraltyLogo = clientLogo.includes('axa-keralty-logo')
  const isZurichLogo = clientLogo.includes('logo-zurich')
  const isPrudentialLogo = clientLogo.includes('logo-prudential')
  const useBrandFilter = !clientLogo.includes('logo-aig') && !isZurichLogo && !isPrudentialLogo && !isAxaKeraltyLogo
  const stickyClientSize = clientLogo.includes('logo-aig') ? 'h-5 opacity-80' : isZurichLogo ? 'h-7 opacity-90' : isPrudentialLogo ? 'h-8 opacity-90' : isAxaKeraltyLogo ? 'h-5 opacity-85' : 'h-4 opacity-80'
  const miniClientSize = clientLogo.includes('logo-aig') ? 'h-4 opacity-40' : isZurichLogo ? 'h-6 opacity-50' : isPrudentialLogo ? 'h-6 opacity-55' : isAxaKeraltyLogo ? 'h-4 opacity-45' : 'h-3 opacity-40'
  const clientLogoColor = isAxaKeraltyLogo ? 'brightness-0 invert' : useBrandFilter ? (isDark ? 'brightness-0 invert' : 'brightness-0') : ''
  const isZurich = brand === 'zurich'

  useEffect(() => {
    const handleScroll = () => {
      // Get the tab section element position
      const tabSection = document.getElementById('tab-section')
      if (tabSection) {
        const rect = tabSection.getBoundingClientRect()
        setIsSticky(rect.top <= 0)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tabs = visibleTabs ? allTabs.filter(t => visibleTabs.includes(t.id)) : allTabs

  return (
    <section
      id="tab-section"
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        isDark
          ? (isZurich ? 'bg-[#081b38]/92 border-white/10' : 'bg-[#0a1628]/95 border-white/5')
          : 'bg-white/95 border-black/5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo - appears when sticky */}
          <motion.div
            initial={false}
            animate={{
              opacity: isSticky ? 1 : 0,
              x: isSticky ? 0 : -20,
              width: isSticky ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 overflow-hidden"
          >
            <img
              src="/images/fisify-logo-white.png"
              alt="Fisify"
              className={`h-5 opacity-80 ${isDark ? 'brightness-0 invert' : 'brightness-0'}`}
            />
            {!isAxaKeraltyLogo && (
              <span className={`text-xs ${isDark ? 'text-cream/30' : 'text-[#0a1628]/30'}`}>×</span>
            )}
            {showClientLogo ? (
              <img
                src={clientLogo}
                alt={clientName}
                className={`${clientLogoColor} ${stickyClientSize}`}
              />
            ) : (
              <span className={`text-xs uppercase tracking-[0.28em] ${isDark ? 'text-cream/70' : 'text-[#0a1628]/70'}`}>
                {clientName}
              </span>
            )}
          </motion.div>

          {/* Tabs */}
          <div className="flex items-center gap-0">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-3 px-6 lg:px-8 py-6 transition-all duration-300 ${
                  activeTab === tab.id
                    ? isDark ? 'text-cream' : 'text-[#0a1628]'
                    : isDark ? 'text-cream/60 hover:text-cream/90' : 'text-[#0a1628]/50 hover:text-[#0a1628]/80'
                }`}
              >
                <span className={`text-xs font-light tracking-widest transition-colors ${
                  activeTab === tab.id
                    ? isDark ? (isZurich ? 'text-[#9cc2ff]' : 'text-accent') : 'text-[#1a3a6e]'
                    : isDark ? 'text-cream/40' : 'text-[#0a1628]/35'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-body font-light text-xs uppercase tracking-[0.15em] whitespace-nowrap">
                  {tab.label}
                </span>
                
                {/* Active indicator */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-px ${
                      isDark 
                        ? (isZurich ? 'bg-gradient-to-r from-transparent via-[#9cc2ff] to-transparent' : 'bg-gradient-to-r from-transparent via-accent to-transparent')
                        : 'bg-gradient-to-r from-transparent via-[#1a3a6e] to-transparent'
                    }`}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mini brand - hides when logo appears */}
          <motion.div 
            initial={false}
            animate={{ 
              opacity: isSticky ? 0 : 1,
              x: isSticky ? 20 : 0,
              width: isSticky ? 0 : 'auto'
            }}
            transition={{ duration: 0.3 }}
            className="hidden lg:flex items-center gap-3 overflow-hidden"
          >
            <img
              src="/images/fisify-logo-white.png"
              alt="Fisify"
              className={`h-4 opacity-40 ${isDark ? 'brightness-0 invert' : 'brightness-0'}`}
            />
            {!isAxaKeraltyLogo && (
              <span className={`text-xs font-light ${isDark ? 'text-cream/20' : 'text-[#0a1628]/20'}`}>×</span>
            )}
            {showClientLogo ? (
              <img
                src={clientLogo}
                alt={clientName}
                className={`${clientLogoColor} ${miniClientSize}`}
              />
            ) : (
              <span className={`text-[10px] uppercase tracking-[0.28em] ${isDark ? 'text-cream/20' : 'text-[#0a1628]/20'}`}>
                {clientName}
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

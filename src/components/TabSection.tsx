import { motion } from 'framer-motion'
import type { TabId } from '../App'

interface TabSectionProps {
  activeTab: TabId
  setActiveTab: (tab: TabId) => void
  isDark: boolean
}

const tabs = [
  { id: 'results' as TabId, label: 'Resultados', num: '01' },
  { id: 'product' as TabId, label: 'Producto', num: '02' },
  { id: 'value' as TabId, label: 'Valor', num: '03' },
  { id: 'implement' as TabId, label: 'Implementación', num: '04' },
]

export default function TabSection({ activeTab, setActiveTab, isDark }: TabSectionProps) {
  return (
    <section className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors ${
      isDark 
        ? 'bg-[#0a1628]/95 border-white/5' 
        : 'bg-white/95 border-black/5'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Tabs */}
          <div className="flex items-center gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-3 px-6 lg:px-8 py-6 transition-all duration-300 ${
                  activeTab === tab.id 
                    ? isDark ? 'text-cream' : 'text-[#0a1628]'
                    : isDark ? 'text-cream/30 hover:text-cream/60' : 'text-[#0a1628]/30 hover:text-[#0a1628]/60'
                }`}
              >
                <span className={`text-xs font-light tracking-widest transition-colors ${
                  activeTab === tab.id 
                    ? isDark ? 'text-accent' : 'text-[#1a3a6e]'
                    : isDark ? 'text-cream/20' : 'text-[#0a1628]/20'
                }`}>
                  {tab.num}
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
                        ? 'bg-gradient-to-r from-transparent via-accent to-transparent' 
                        : 'bg-gradient-to-r from-transparent via-[#1a3a6e] to-transparent'
                    }`}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mini brand */}
          <div className="hidden lg:flex items-center gap-3">
            <span className={`text-xs uppercase tracking-[0.2em] font-light ${
              isDark ? 'text-cream/20' : 'text-[#0a1628]/20'
            }`}>
              Fisify × Medicus
            </span>
            <div className={`w-6 h-6 border flex items-center justify-center ${
              isDark ? 'border-accent/20' : 'border-[#1a3a6e]/20'
            }`}>
              <span className={`font-display text-xs ${isDark ? 'text-accent' : 'text-[#1a3a6e]'}`}>F</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

interface NavigationProps {
  scrolled: boolean
  clientName?: string
  clientLogo?: string
  homePath?: string
  brand?: 'standard' | 'zurich'
}

export default function Navigation({ scrolled, clientName = 'Medicus', clientLogo = '/images/medicus-logo-white.png', homePath = '/', brand = 'standard' }: NavigationProps) {
  const showClientLogo = Boolean(clientLogo)
  const isZurichLogo = clientLogo.includes('logo-zurich')
  const isPrudentialLogo = clientLogo.includes('logo-prudential')
  const useBrandFilter = !clientLogo.includes('logo-aig') && !isZurichLogo && !isPrudentialLogo
  const clientLogoSize = clientLogo.includes('logo-aig')
    ? (scrolled ? 'h-5 opacity-90' : 'h-6 opacity-100')
    : isZurichLogo
      ? (scrolled ? 'h-7 opacity-95' : 'h-8 opacity-100')
      : isPrudentialLogo
        ? (scrolled ? 'h-8 opacity-95' : 'h-9 opacity-100')
      : (scrolled ? 'h-[14px] opacity-90' : 'h-[18px] opacity-100')
  const isZurich = brand === 'zurich'

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? (isZurich ? 'bg-[#081b38]/70 backdrop-blur-2xl border-b border-white/8' : 'bg-[#0a1628]/60 backdrop-blur-2xl')
          : (isZurich ? 'bg-gradient-to-b from-[#04101f]/70 to-transparent' : 'bg-gradient-to-b from-black/40 to-transparent')
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`flex items-center justify-center transition-all duration-500 ease-out ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logos - Centered with scale animation */}
          <a href={homePath} className="flex items-center gap-4 group">
              <img 
                src="/images/fisify-logo-white.png" 
                alt="Fisify" 
                className={`brightness-0 invert transition-all duration-500 ease-out group-hover:opacity-70 ${
                  scrolled ? 'h-5 opacity-90' : 'h-6 opacity-100'
                }`}
              />
            <span className={`font-light ${isZurich ? 'text-[#8fb7ff]/30' : 'text-white/30'} transition-all duration-500 ${
              scrolled ? 'text-[8px]' : 'text-[10px]'
            }`}>×</span>
            {showClientLogo ? (
              <img
                src={clientLogo}
                alt={clientName}
                className={`${useBrandFilter ? 'brightness-0 invert' : ''} transition-all duration-500 ease-out group-hover:opacity-70 ${
                  clientLogoSize
                }`}
              />
            ) : (
              <span className={`text-white tracking-[0.35em] font-light uppercase transition-all duration-500 ${
                scrolled ? 'text-[11px] opacity-90' : 'text-sm opacity-100'
              }`}>
                {clientName}
              </span>
            )}
          </a>
        </div>
      </nav>
    </motion.header>
  )
}

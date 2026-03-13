import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

interface HeroSectionProps {
  onExplore: () => void
  isDark: boolean
}

export default function HeroSection({ onExplore, isDark }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-cinematic.png"
          alt="Fisioterapia Medicus"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlays */}
        <div className={`absolute inset-0 transition-colors duration-300 ${
          isDark ? 'bg-[#0a1628]/60' : 'bg-white/70'
        }`} />
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-t from-[#060f1d] via-transparent to-[#0a1628]/50' 
            : 'bg-gradient-to-t from-[#faf9f7] via-transparent to-white/50'
        }`} />
      </div>

      {/* Content - Centered */}
      <div className="relative flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Collaboration Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <span className={`text-xs uppercase tracking-[0.3em] font-light ${
              isDark ? 'text-cream/40' : 'text-[#0a1628]/40'
            }`}>
              Una colaboración exclusiva
            </span>
          </motion.div>

          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-8 md:gap-12 mb-12"
          >
            {/* Medicus Logo */}
            <div className={isDark ? 'text-cream' : 'text-[#0a1628]'}>
              <span className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Medicus
              </span>
            </div>
            
            {/* Divider */}
            <div className={`text-3xl md:text-4xl font-extralight mx-2 ${
              isDark ? 'text-accent/60' : 'text-[#1a3a6e]/60'
            }`}>
              ×
            </div>
            
            {/* Fisify Logo */}
            <div className={isDark ? 'text-accent' : 'text-[#1a3a6e]'}>
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold italic" style={{ fontFamily: 'Philosopher, serif' }}>
                fisify
              </span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`text-xl md:text-2xl font-body font-light leading-relaxed mb-16 max-w-2xl mx-auto ${
              isDark ? 'text-cream/50' : 'text-[#0a1628]/60'
            }`}
          >
            Fisioterapia digital de excelencia para los asegurados de Medicus
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button onClick={onExplore} className="btn-primary">
              Ver Propuesta
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-24"
          >
            <div className="flex items-center justify-center gap-12 md:gap-20">
              {[
                { value: '9.82', label: 'Satisfacción', suffix: '/10' },
                { value: '90', label: 'Adherencia', suffix: '%' },
                { value: '50+', label: 'Años Medicus', suffix: '' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="stat-value text-2xl md:text-3xl">{stat.value}</span>
                    <span className={`text-xs ${isDark ? 'text-cream/30' : 'text-[#0a1628]/30'}`}>{stat.suffix}</span>
                  </div>
                  <p className={`text-xs mt-1 uppercase tracking-widest font-light ${
                    isDark ? 'text-cream/30' : 'text-[#0a1628]/30'
                  }`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className={`text-xs uppercase tracking-[0.3em] font-light ${
          isDark ? 'text-cream/20' : 'text-[#0a1628]/20'
        }`}>
          Descubrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className={`w-4 h-4 ${isDark ? 'text-accent/50' : 'text-[#1a3a6e]/50'}`} />
        </motion.div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

interface HeroSectionProps {
  clientName?: string
}

export default function HeroSection({ clientName = 'Medicus' }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/new-hero-2.png"
          alt={`${clientName} Fisioterapia Digital`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#060f1d] via-[#060f1d]/40 to-transparent" />
      </div>

      {/* Content - Bottom Left */}
      <div className="relative flex-1 flex items-end">
        <div className="px-8 md:px-16 lg:px-24 pb-20 md:pb-28">
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-2xl"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, letterSpacing: '-0.01em' }}
          >
            Innovación con propósito para los afiliados de <span className="font-semibold">{clientName}</span>
          </motion.h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 right-8 md:right-16"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}

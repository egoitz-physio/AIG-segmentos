import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

interface NavigationProps {
  scrolled: boolean
  onExplore: () => void
  isDark: boolean
  toggleTheme: () => void
}

export default function Navigation({ scrolled, onExplore, isDark, toggleTheme }: NavigationProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? isDark 
            ? 'bg-[#0a1628]/90 backdrop-blur-xl border-b border-white/5' 
            : 'bg-white/90 backdrop-blur-xl border-b border-black/5'
          : ''
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <span className={`font-display text-xl italic transition-colors ${
              isDark ? 'text-cream group-hover:text-accent' : 'text-[#0a1628] group-hover:text-[#1a3a6e]'
            }`}>
              fisify
            </span>
            <span className={`text-sm ${isDark ? 'text-accent/40' : 'text-[#1a3a6e]/40'}`}>×</span>
            <span className={`text-sm font-light tracking-wide ${
              isDark ? 'text-cream/50' : 'text-[#0a1628]/50'
            }`}>
              Medicus
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="nav-link">Proyecto</a>
            <a href="#results" className="nav-link">Resultados</a>
            <a href="#roadmap" className="nav-link">Roadmap</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Explore */}
            <button
              onClick={onExplore}
              className={`hidden md:block text-xs uppercase tracking-[0.2em] font-light transition-colors ${
                isDark ? 'text-cream/40 hover:text-accent' : 'text-[#0a1628]/40 hover:text-[#1a3a6e]'
              }`}
            >
              Explorar
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

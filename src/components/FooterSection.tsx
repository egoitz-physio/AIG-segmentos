interface FooterSectionProps {
  isDark: boolean
  clientName?: string
  clientLogo?: string
}

export default function FooterSection({ isDark, clientName = 'Medicus', clientLogo = '/images/medicus-logo-white.png' }: FooterSectionProps) {
  const showClientLogo = Boolean(clientLogo)
  const useBrandFilter = !clientLogo.includes('logo-aig')
  const clientLogoSize = clientLogo.includes('logo-aig') ? 'h-6 transition-all' : 'h-5 transition-all'
  const textMuted = isDark ? 'text-cream/70' : 'text-[#0a1628]/70'
  const textAccent = isDark ? 'text-accent' : 'text-[#1a3a6e]'
  const borderColor = isDark ? 'border-white/10' : 'border-black/10'

  return (
    <footer className={`relative mt-32 border-t ${borderColor} ${isDark ? 'bg-[#060f1d]' : 'bg-[#f0eeeb]'}`}>
      {/* Top section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/images/fisify-logo-white.png"
                alt="Fisify"
                className={`h-6 transition-all ${isDark ? 'brightness-0 invert' : 'brightness-0'}`}
              />
              <span className={`text-xs font-light ${isDark ? 'text-cream/50' : 'text-[#0a1628]/50'}`}>×</span>
              {showClientLogo ? (
                <img
                  src={clientLogo}
                  alt={clientName}
                  className={`${useBrandFilter ? (isDark ? 'brightness-0 invert' : 'brightness-0') : ''} ${clientLogoSize}`}
                />
              ) : (
                <span className={`text-sm uppercase tracking-[0.3em] ${isDark ? 'text-cream/70' : 'text-[#0a1628]/70'}`}>
                  {clientName}
                </span>
              )}
            </div>
            <p className={`text-sm leading-relaxed mb-8 max-w-sm font-light ${textMuted}`}>
              Transformando la experiencia de salud de los asegurados de {clientName} a través de fisioterapia digital de excelencia.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className={`text-xs uppercase tracking-[0.2em] mb-6 font-light ${textMuted}`}>Soluciones</h4>
            <ul className="space-y-4">
              {['Prevención', 'Rehabilitación', 'FisifyStudio', 'FisifyCare'].map((item) => (
                <li key={item}>
                  <a href="#" className={`text-sm font-light transition-colors ${isDark ? 'text-cream/60 hover:text-cream' : 'text-[#0a1628]/60 hover:text-[#0a1628]'}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className={`text-xs uppercase tracking-[0.2em] mb-6 font-light ${textMuted}`}>Empresa</h4>
            <ul className="space-y-4">
              {['Sobre nosotros', 'Casos de éxito', 'Blog', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href="#" className={`text-sm font-light transition-colors ${isDark ? 'text-cream/60 hover:text-cream' : 'text-[#0a1628]/60 hover:text-[#0a1628]'}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className={`text-xs uppercase tracking-[0.2em] mb-6 font-light ${textMuted}`}>Contacto</h4>
            <div className={`space-y-4 text-sm font-light ${textMuted}`}>
              <p>Madrid, España</p>
              <p className={textAccent}>info@fisify.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={`border-t ${borderColor}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-xs font-light tracking-wide ${isDark ? 'text-cream/40' : 'text-[#0a1628]/40'}`}>
            © 2026 Fisify. Propuesta exclusiva para {clientName}.
          </p>
          <div className="flex gap-8">
            <a href="#" className={`text-xs transition-colors font-light ${isDark ? 'text-cream/40 hover:text-cream/70' : 'text-[#0a1628]/40 hover:text-[#0a1628]/70'}`}>Privacidad</a>
            <a href="#" className={`text-xs transition-colors font-light ${isDark ? 'text-cream/40 hover:text-cream/70' : 'text-[#0a1628]/40 hover:text-[#0a1628]/70'}`}>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

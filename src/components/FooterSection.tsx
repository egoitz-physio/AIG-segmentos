interface FooterSectionProps {
  isDark: boolean
}

export default function FooterSection({ isDark }: FooterSectionProps) {
  const textMain = isDark ? 'text-cream' : 'text-[#0a1628]'
  const textMuted = isDark ? 'text-cream/40' : 'text-[#0a1628]/40'
  const textAccent = isDark ? 'text-accent' : 'text-[#1a3a6e]'
  const borderColor = isDark ? 'border-white/5' : 'border-black/5'

  return (
    <footer className={`relative mt-32 border-t ${borderColor} ${isDark ? 'bg-[#060f1d]' : 'bg-[#f0eeeb]'}`}>
      {/* Top section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-10 h-10 border flex items-center justify-center ${isDark ? 'border-accent/30' : 'border-[#1a3a6e]/30'}`}>
                <span className={`font-display text-lg ${textAccent}`}>F</span>
              </div>
              <div>
                <span className={`font-display tracking-wide ${textMain}`}>Fisify</span>
                <span className={`ml-2 text-sm ${isDark ? 'text-accent/60' : 'text-[#1a3a6e]/60'}`}>× Medicus</span>
              </div>
            </div>
            <p className={`text-sm leading-relaxed mb-8 max-w-sm font-light ${textMuted}`}>
              Transformando la experiencia de salud de los asegurados de Medicus a través de fisioterapia digital de excelencia.
            </p>
            <p className={`text-xs uppercase tracking-[0.2em] ${isDark ? 'text-cream/20' : 'text-[#0a1628]/20'}`}>
              Creada por médicos, para médicos
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className={`text-xs uppercase tracking-[0.2em] mb-6 font-light ${textMuted}`}>Soluciones</h4>
            <ul className="space-y-4">
              {['Prevención', 'Rehabilitación', 'FisifyStudio', 'FisifyCare'].map((item) => (
                <li key={item}>
                  <a href="#" className={`text-sm font-light transition-colors ${isDark ? 'text-cream/30 hover:text-cream' : 'text-[#0a1628]/30 hover:text-[#0a1628]'}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className={`text-xs uppercase tracking-[0.2em] mb-6 font-light ${textMuted}`}>Empresa</h4>
            <ul className="space-y-4">
              {['Sobre nosotros', 'Casos de éxito', 'Blog', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href="#" className={`text-sm font-light transition-colors ${isDark ? 'text-cream/30 hover:text-cream' : 'text-[#0a1628]/30 hover:text-[#0a1628]'}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className={`text-xs uppercase tracking-[0.2em] mb-6 font-light ${textMuted}`}>Contacto</h4>
            <div className={`space-y-4 text-sm font-light ${textMuted}`}>
              <p>Buenos Aires, Argentina</p>
              <p>Madrid, España</p>
              <p className={textAccent}>hola@fisify.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={`border-t ${borderColor}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-xs font-light tracking-wide ${isDark ? 'text-cream/20' : 'text-[#0a1628]/20'}`}>
            © 2026 Fisify. Propuesta exclusiva para Medicus.
          </p>
          <div className="flex gap-8">
            <a href="#" className={`text-xs transition-colors font-light ${isDark ? 'text-cream/20 hover:text-cream/40' : 'text-[#0a1628]/20 hover:text-[#0a1628]/40'}`}>Privacidad</a>
            <a href="#" className={`text-xs transition-colors font-light ${isDark ? 'text-cream/20 hover:text-cream/40' : 'text-[#0a1628]/20 hover:text-[#0a1628]/40'}`}>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

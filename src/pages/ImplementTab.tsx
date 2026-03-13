import { motion } from 'framer-motion'

interface ImplementTabProps {
  isDark: boolean
}

export default function ImplementTab({ isDark }: ImplementTabProps) {
  const cardBg = isDark ? 'bg-[#0d1a2e]' : 'bg-white'
  const borderColor = isDark ? 'bg-white/5' : 'bg-black/5'
  const textMain = isDark ? 'text-cream' : 'text-[#0a1628]'
  const textMuted = isDark ? 'text-cream/40' : 'text-[#0a1628]/50'
  const textAccent = isDark ? 'text-accent' : 'text-[#1a3a6e]'

  const phases = [
    { num: '01', title: 'Diseño', duration: '2 semanas', items: ['Definición de alcance con Medicus', 'Personalización de marca', 'Configuración de dashboard', 'Integración técnica (opcional)'] },
    { num: '02', title: 'Formación', duration: '1 semana', items: ['Capacitación equipo comercial', 'Formación a kinesiólogos', 'Materiales de comunicación', 'Guías para asegurados'] },
    { num: '03', title: 'Lanzamiento', duration: '1 semana', items: ['Comunicación a asegurados', 'Activación progresiva', 'Webinar de bienvenida', 'Soporte dedicado inicial'] },
    { num: '04', title: 'Operación', duration: 'Continuo', items: ['Reportes mensuales', 'Revisiones trimestrales', 'Optimización continua', 'Evolución de roadmap'] },
  ]

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      {/* Header */}
      <section className="mb-20">
        <span className="section-label mb-8 inline-block">Proceso de Implementación</span>
        <h2 className={`heading-display text-display-lg mb-6 max-w-3xl ${textMain}`}>De 0 a lanzamiento en 4 semanas</h2>
        <p className={`text-xl max-w-2xl font-light ${textMuted}`}>
          Un proceso ágil y profesional, diseñado para minimizar la carga operativa del equipo de Medicus.
        </p>
      </section>

      {/* Phases */}
      <section className="mb-32">
        <div className={`grid lg:grid-cols-4 gap-px ${borderColor}`}>
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`${cardBg} p-8 lg:p-10`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs tracking-[0.3em] ${isDark ? 'text-accent/50' : 'text-[#1a3a6e]/50'}`}>{phase.num}</span>
                <span className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1 border ${isDark ? 'border-white/10 text-cream/30' : 'border-black/10 text-[#0a1628]/30'}`}>{phase.duration}</span>
              </div>
              <h3 className={`font-display text-xl mb-6 ${textMain}`}>{phase.title}</h3>
              <ul className="space-y-3">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className={`w-1 h-1 mt-2 flex-shrink-0 ${isDark ? 'bg-accent/40' : 'bg-[#1a3a6e]/40'}`} />
                    <span className={`font-light ${textMuted}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <div className={`w-16 h-px ${isDark ? 'bg-accent/50' : 'bg-[#1a3a6e]/50'}`} />
          <h3 className={`text-xs uppercase tracking-[0.3em] font-light ${textMuted}`}>Requerimientos de Medicus</h3>
        </div>
        <div className={`grid md:grid-cols-3 gap-px ${borderColor}`}>
          {[
            { title: 'Brand assets', desc: 'Logo, colores y guía de estilo', effort: 'Bajo' },
            { title: 'Interlocutor', desc: 'Punto de contacto para decisiones', effort: 'Bajo' },
            { title: 'Comunicación', desc: 'Canales para llegar a asegurados', effort: 'Medio' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} p-8`}
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className={`font-display ${textMain}`}>{item.title}</h4>
                <span className={`text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 ${
                  item.effort === 'Bajo' ? (isDark ? 'bg-accent/10 text-accent' : 'bg-[#1a3a6e]/10 text-[#1a3a6e]') : (isDark ? 'bg-cream/5 text-cream/30' : 'bg-[#0a1628]/5 text-[#0a1628]/30')
                }`}>{item.effort}</span>
              </div>
              <p className={`text-sm font-light ${textMuted}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fisify commitment */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <div className={`w-16 h-px ${isDark ? 'bg-cream/20' : 'bg-[#0a1628]/20'}`} />
          <h3 className={`text-xs uppercase tracking-[0.3em] font-light ${textMuted}`}>Compromiso de Fisify</h3>
        </div>
        <div className={`grid md:grid-cols-2 gap-px ${borderColor}`}>
          {[
            { title: 'Project Manager dedicado', desc: 'Un interlocutor único para toda la implementación' },
            { title: 'Soporte técnico 24/7', desc: 'Equipo disponible para asegurados y Medicus' },
            { title: 'Dashboard ejecutivo', desc: 'Panel de métricas en tiempo real' },
            { title: 'Reportes mensuales', desc: 'Informes detallados de uso y resultados' },
            { title: 'Optimización continua', desc: 'Mejoras basadas en feedback' },
            { title: 'SLA garantizado', desc: 'Disponibilidad 99.9%' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} p-8`}
            >
              <h4 className={`font-display mb-2 ${textMain}`}>{item.title}</h4>
              <p className={`text-sm font-light ${textMuted}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline visual */}
      <section className="mb-20">
        <div className={`border p-12 lg:p-16 ${cardBg} ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <h3 className={`font-display text-2xl mb-12 text-center ${textMain}`}>Timeline de Lanzamiento</h3>
          <div className="relative max-w-3xl mx-auto">
            <div className={`absolute top-4 left-0 right-0 h-px ${isDark ? 'bg-gradient-to-r from-accent via-cream/20 to-cream/5' : 'bg-gradient-to-r from-[#1a3a6e] via-[#0a1628]/20 to-[#0a1628]/5'}`} />
            <div className="grid grid-cols-4 gap-4">
              {[
                { week: 'Sem 1-2', label: 'Diseño' },
                { week: 'Sem 3', label: 'Formación' },
                { week: 'Sem 4', label: 'Lanzamiento' },
                { week: 'Continuo', label: 'Operación' },
              ].map((item, i) => (
                <div key={item.week} className="text-center">
                  <div className={`w-2 h-2 mx-auto mb-4 ${i === 0 ? (isDark ? 'bg-accent' : 'bg-[#1a3a6e]') : (isDark ? 'bg-cream/20' : 'bg-[#0a1628]/20')}`} />
                  <span className={`text-sm font-light block mb-1 ${isDark ? 'text-cream/60' : 'text-[#0a1628]/60'}`}>{item.week}</span>
                  <span className={`text-xs font-light ${textMuted}`}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="text-center">
          <p className={`text-lg mb-8 font-light ${textMuted}`}>¿Listos para comenzar?</p>
          <button className="btn-primary">Iniciar Proyecto</button>
        </div>
      </section>
    </div>
  )
}

import { motion } from 'framer-motion'

interface ProductTabProps {
  isDark: boolean
}

export default function ProductTab({ isDark }: ProductTabProps) {
  const cardBg = isDark ? 'bg-[#0d1a2e]' : 'bg-white'
  const borderColor = isDark ? 'border-white/5' : 'border-black/5'
  const textMain = isDark ? 'text-cream' : 'text-[#0a1628]'
  const textMuted = isDark ? 'text-cream/40' : 'text-[#0a1628]/50'
  const textAccent = isDark ? 'text-accent' : 'text-[#1a3a6e]'

  const roadmap = [
    { quarter: 'Q3 2025', status: 'done', items: ['Evaluación personalizada', 'Asistente Virtual (VA)', 'Corrección en tiempo real'] },
    { quarter: 'Q4 2025', status: 'done', items: ['FisifyWork', 'FisifySport', 'BodyOS', 'Píldoras de salud'] },
    { quarter: 'Q1 2026', status: 'current', items: ['One-to-one con fisio', 'Gamificación', 'Dashboard Medicus', 'Charla bienvenida'] },
    { quarter: 'Q2 2026', status: 'upcoming', items: ['Visión IA + LLM', 'Agentes conversacionales', 'Wearables', 'Integración Medicard'] },
  ]

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      {/* Header */}
      <section className="mb-20">
        <span className="section-label mb-8 inline-block">Roadmap de Producto</span>
        <h2 className={`heading-display text-display-lg mb-6 max-w-3xl ${textMain}`}>Evolución continua</h2>
        <p className={`text-xl max-w-2xl font-light ${textMuted}`}>
          Escuchamos a los asegurados. Optimizamos la experiencia. Alineados con la visión de excelencia de Medicus.
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-16">
          <div className={`w-16 h-px ${isDark ? 'bg-accent/50' : 'bg-[#1a3a6e]/50'}`} />
          <h3 className={`text-xs uppercase tracking-[0.3em] font-light ${textMuted}`}>Timeline 2025-2026</h3>
        </div>

        <div className="relative">
          <div className={`absolute left-0 top-0 bottom-0 w-px ${isDark ? 'bg-gradient-to-b from-accent/50 via-cream/10 to-cream/5' : 'bg-gradient-to-b from-[#1a3a6e]/50 via-[#0a1628]/10 to-[#0a1628]/5'}`} />
          
          {roadmap.map((phase, i) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 pb-16 last:pb-0"
            >
              <div className={`absolute left-0 top-0 w-2 h-2 -translate-x-[3px] ${
                phase.status === 'done' ? (isDark ? 'bg-accent' : 'bg-[#1a3a6e]') :
                phase.status === 'current' ? (isDark ? 'bg-accent animate-pulse' : 'bg-[#1a3a6e] animate-pulse') :
                (isDark ? 'bg-cream/20' : 'bg-[#0a1628]/20')
              }`} />
              
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="lg:w-32 flex-shrink-0">
                  <span className={`text-sm font-light ${phase.status === 'current' ? textAccent : textMuted}`}>{phase.quarter}</span>
                  {phase.status === 'current' && (
                    <span className={`block text-[10px] mt-1 uppercase tracking-[0.2em] ${isDark ? 'text-accent/60' : 'text-[#1a3a6e]/60'}`}>En progreso</span>
                  )}
                </div>
                <div className="flex-1 grid md:grid-cols-2 gap-3">
                  {phase.items.map((item) => (
                    <div
                      key={item}
                      className={`p-5 border transition-colors ${
                        phase.status === 'upcoming' 
                          ? `${borderColor} ${textMuted} ${isDark ? 'bg-[#0d1a2e]/50' : 'bg-white/50'}` 
                          : `${borderColor} ${isDark ? 'text-cream/70' : 'text-[#0a1628]/70'} ${cardBg} hover:border-accent/30`
                      }`}
                    >
                      <span className="text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FisifyOne */}
      <section className="mb-32">
        <div className={`border p-12 lg:p-20 ${cardBg} ${borderColor}`}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label mb-6 inline-block">Exclusivo para Medicus</span>
            <h2 className={`heading-display text-display-lg mb-6 ${textMain}`}>FisifyOne</h2>
            <p className={`text-xl font-light ${textMuted}`}>Atención one-to-one. Un fisioterapeuta dedicado para cada asegurado de Medicus.</p>
          </div>
          <div className={`grid md:grid-cols-4 gap-px ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
            {[
              { num: '01', title: 'Fisio personal', desc: 'Profesional asignado de la red Medicus' },
              { num: '02', title: 'Valoración', desc: 'Evaluación inicial completa vía chat' },
              { num: '03', title: 'Programa', desc: 'Rutinas personalizadas post-consulta' },
              { num: '04', title: 'Seguimiento', desc: 'Acompañamiento semanal continuo' },
            ].map((step) => (
              <div key={step.num} className={`${isDark ? 'bg-[#0a1628]' : 'bg-[#faf9f7]'} p-8 text-center`}>
                <span className={`text-xs tracking-[0.3em] block mb-4 ${isDark ? 'text-accent/50' : 'text-[#1a3a6e]/50'}`}>{step.num}</span>
                <h4 className={`font-display mb-2 ${textMain}`}>{step.title}</h4>
                <p className={`text-sm font-light ${textMuted}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section>
        <div className="flex items-center gap-6 mb-12">
          <div className={`w-16 h-px ${isDark ? 'bg-cream/20' : 'bg-[#0a1628]/20'}`} />
          <h3 className={`text-xs uppercase tracking-[0.3em] font-light ${textMuted}`}>Tecnología 2026</h3>
        </div>
        <div className={`grid md:grid-cols-3 gap-px ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
          {[
            { title: 'Visión IA + LLM', desc: 'Seguimiento avanzado mediante inteligencia artificial.' },
            { title: 'Agentes conversacionales', desc: 'Asistentes IA disponibles 24/7 para los asegurados.' },
            { title: 'Integración Medicard', desc: 'Acceso directo desde la app de Medicus.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} p-10`}
            >
              <h4 className={`font-display mb-3 ${textMain}`}>{item.title}</h4>
              <p className={`text-sm font-light leading-relaxed ${textMuted}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

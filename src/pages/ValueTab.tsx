import { motion } from 'framer-motion'

interface ValueTabProps {
  isDark: boolean
}

export default function ValueTab({ isDark }: ValueTabProps) {
  const cardBg = isDark ? 'bg-[#0d1a2e]' : 'bg-white'
  const borderColor = isDark ? 'border-white/5' : 'border-black/5'
  const textMain = isDark ? 'text-cream' : 'text-[#0a1628]'
  const textMuted = isDark ? 'text-cream/40' : 'text-[#0a1628]/50'
  const textAccent = isDark ? 'text-accent' : 'text-[#1a3a6e]'

  const impactMetrics = [
    { value: 'x3', label: 'Activación', detail: 'Con modelo One-to-One + Fisio', context: 'Con los one-to-ones con fisioterapeuta, la adherencia se multiplica por tres' },
    { value: '90%', label: 'Adherencia', detail: 'Usuarios activos semana 10', context: 'El 90% de usuarios siguen activos, consolidando un hábito de mínimo 5 min/semana' },
    { value: '9.8', label: 'Satisfacción', detail: 'Fisify 3.0', context: 'Con el lanzamiento de Fisify 3.0 hemos triplicado la adherencia de los asegurados' },
  ]

  const addons = [
    { num: '01', title: 'FisifyCare Premium', desc: '30 min con fisioterapeuta de la red Medicus + plan de recuperación + seguimiento semanal.', tag: 'Premium', objective: 'Objetivo: disminuir siniestralidad' },
    { num: '02', title: 'Apoyo de Marketing', desc: 'El equipo de marketing de Fisify crea contenido branded para la comunicación interna de Medicus.', tag: 'Incluido', objective: 'Objetivo: maximizar activación' },
    { num: '03', title: 'Formaciones Online', desc: 'Charlas y webinars de salud física (45 min, online). Adaptadas al perfil del asegurado.', tag: 'Add-on', objective: 'Objetivo: educación preventiva' },
    { num: '04', title: 'Clases Grupales', desc: 'Espalda sana, fuerza, hipopresivos y suelo pélvico. Sesiones de 30 min online en directo.', tag: 'Add-on', objective: 'Objetivo: comunidad y engagement' },
  ]

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      {/* Header with image */}
      <section className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label mb-8 inline-block">
              Impacto Demostrado
            </span>
            <h2 className={`heading-display text-display-lg mb-6 max-w-xl ${textMain}`}>
              Resultados reales que validan nuestro modelo
            </h2>
            <p className={`text-xl max-w-lg font-light ${textMuted}`}>
              Más adherencia = menos siniestralidad = mayor rentabilidad para Medicus.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <img
              src="/images/value-patient.png"
              alt="Paciente usando Fisify"
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-[#0a1628]/50 to-transparent' : 'bg-gradient-to-t from-white/30 to-transparent'}`} />
          </motion.div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="mb-32">
        <div className={`grid lg:grid-cols-3 gap-px ${borderColor}`}>
          {impactMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`${cardBg} p-12 lg:p-16`}
            >
              <span className="stat-value text-6xl lg:text-7xl block">
                {metric.value}
              </span>
              <h3 className={`font-display text-xl mt-4 mb-2 ${textMain}`}>
                {metric.label}
              </h3>
              <p className={`text-sm mb-4 ${textAccent}`}>
                {metric.detail}
              </p>
              <p className={`text-sm font-light leading-relaxed ${textMuted}`}>
                {metric.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Formula */}
        <div className={`mt-px border p-8 text-center ${isDark ? 'border-accent/20 bg-accent/5' : 'border-[#1a3a6e]/20 bg-[#1a3a6e]/5'}`}>
          <p className={`text-lg font-light tracking-wide ${isDark ? 'text-cream/70' : 'text-[#0a1628]/70'}`}>
            <span className={textAccent}>Más adherencia</span>
            <span className={isDark ? 'text-cream/20 mx-4 md:mx-6' : 'text-[#0a1628]/20 mx-4 md:mx-6'}>→</span>
            <span className={textMain}>Menos siniestralidad</span>
            <span className={isDark ? 'text-cream/20 mx-4 md:mx-6' : 'text-[#0a1628]/20 mx-4 md:mx-6'}>→</span>
            <span className={textAccent}>Mayor rentabilidad</span>
          </p>
        </div>
      </section>

      {/* Image break */}
      <section className="mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[21/9] overflow-hidden"
        >
          <img
            src="/images/value-campus.png"
            alt="Campus de salud Medicus"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-[#0a1628]/30' : 'bg-white/20'}`} />
        </motion.div>
      </section>

      {/* Add-ons with image */}
      <section className="mb-32">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-6 mb-12">
              <div className={`w-16 h-px ${isDark ? 'bg-cream/20' : 'bg-[#0a1628]/20'}`} />
              <h3 className={`text-xs uppercase tracking-[0.3em] font-light ${textMuted}`}>
                Servicios Add-on
              </h3>
            </div>

            <div className={`grid gap-px ${borderColor}`}>
              {addons.map((addon, i) => (
                <motion.div
                  key={addon.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`${cardBg} p-8`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs tracking-[0.3em] ${isDark ? 'text-accent/50' : 'text-[#1a3a6e]/50'}`}>{addon.num}</span>
                    <span className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1 border ${
                      addon.tag === 'Premium' 
                        ? isDark ? 'border-accent/30 text-accent' : 'border-[#1a3a6e]/30 text-[#1a3a6e]'
                        : isDark ? 'border-cream/10 text-cream/40' : 'border-[#0a1628]/10 text-[#0a1628]/40'
                    }`}>
                      {addon.tag}
                    </span>
                  </div>
                  <h4 className={`font-display text-lg mb-2 ${textMain}`}>{addon.title}</h4>
                  <p className={`text-sm font-light ${textMuted}`}>{addon.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden lg:aspect-auto"
          >
            <img
              src="/images/value-care.png"
              alt="Fisioterapeuta cuidando paciente"
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-[#0a1628]/50 to-transparent' : 'bg-gradient-to-r from-white/30 to-transparent'}`} />
          </motion.div>
        </div>
      </section>

      {/* Strategic positioning */}
      <section className="mb-32">
        <div className={`border p-12 lg:p-16 ${cardBg} ${borderColor}`}>
          <div className="max-w-3xl">
            <span className={`text-xs tracking-[0.3em] block mb-6 ${isDark ? 'text-accent/50' : 'text-[#1a3a6e]/50'}`}>
              Posicionamiento Estratégico
            </span>
            <h3 className={`font-display text-3xl mb-6 ${textMain}`}>
              Medicus como referente en innovación
            </h3>
            <p className={`text-lg font-light leading-relaxed mb-8 ${textMuted}`}>
              50 años de excelencia médica + tecnología de vanguardia. 
              La combinación perfecta para liderar el futuro de la salud digital en Argentina.
            </p>
            <div className={`grid sm:grid-cols-3 gap-6 border-t pt-8 ${borderColor}`}>
              {[
                { label: 'Años de trayectoria', value: '50+' },
                { label: 'Especialistas en red', value: '10k+' },
                { label: 'Asegurados potenciales', value: '600k+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className={`text-2xl font-display ${textAccent}`}>{stat.value}</span>
                  <span className={`block text-xs mt-2 uppercase tracking-widest ${textMuted}`}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className={`border p-12 lg:p-20 text-center ${cardBg} ${borderColor}`}>
          <h2 className={`heading-display text-display mb-6 ${textMain}`}>
            ¿Comenzamos juntos?
          </h2>
          <p className={`text-xl mb-10 max-w-2xl mx-auto font-light ${textMuted}`}>
            Agenda una reunión con nuestro equipo para definir los próximos pasos de esta alianza estratégica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Agendar Reunión</button>
            <button className="btn-ghost">Descargar Propuesta</button>
          </div>
        </div>
      </section>
    </div>
  )
}

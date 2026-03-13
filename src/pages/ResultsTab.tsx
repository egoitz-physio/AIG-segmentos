import { motion } from 'framer-motion'

interface ResultsTabProps {
  isDark: boolean
}

export default function ResultsTab({ isDark }: ResultsTabProps) {
  const cardBg = isDark ? 'bg-[#0d1a2e]' : 'bg-white'
  const borderColor = isDark ? 'bg-white/5' : 'bg-black/5'
  const textMain = isDark ? 'text-cream' : 'text-[#0a1628]'
  const textMuted = isDark ? 'text-cream/40' : 'text-[#0a1628]/50'
  const textAccent = isDark ? 'text-accent' : 'text-[#1a3a6e]'

  const stats = {
    prevention: [
      { value: '160', label: 'Usuarios activos', detail: '26.67% de colaboradores Medicus' },
      { value: '768', label: 'Logins totales', detail: 'Uso recurrente validado' },
      { value: '9.82', label: 'Satisfacción', detail: 'Puntuación sobre 10' },
      { value: '2,344', label: 'Ejercicios', detail: 'Completados en el piloto' },
    ],
    rehab: [
      { value: '80%', label: 'Activación', detail: '28 de 35 pacientes' },
      { value: '6.64', label: 'Sesiones/paciente', detail: 'Adherencia sostenida' },
      { value: '186', label: 'Sesiones totales', detail: 'Completadas con éxito' },
      { value: '9.18', label: 'Satisfacción', detail: 'Puntuación sobre 10' },
    ]
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      {/* Header */}
      <section className="mb-20">
        <span className="section-label mb-8 inline-block">Prueba de Concepto 2025</span>
        <h2 className={`heading-display text-display-lg mb-6 max-w-3xl ${textMain}`}>
          Resultados que validan el modelo
        </h2>
        <p className={`text-xl max-w-2xl font-light ${textMuted}`}>
          Dos programas piloto con colaboradores y asegurados de Medicus. Datos reales. Impacto medible.
        </p>
      </section>

      {/* Programs */}
      <section className="mb-32">
        <div className={`grid lg:grid-cols-2 gap-px ${borderColor}`}>
          <div className={`${cardBg} p-12 lg:p-16`}>
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-2 h-2 ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`} />
              <span className={`text-xs uppercase tracking-[0.2em] font-light ${textMuted}`}>Programa 01</span>
            </div>
            <h3 className={`font-display text-2xl mb-4 ${textMain}`}>Prevención y Bienestar</h3>
            <p className={`mb-8 font-light ${textMuted}`}>600 colaboradores de Medicus · Plataforma Estar Bien · 2.5 meses</p>
            <div className="space-y-4 text-sm">
              <div className={`flex justify-between py-3 border-b ${isDark ? 'border-white/5' : 'border-black/5'}`}>
                <span className={textMuted}>Póliza</span><span className={textMain}>Colectivos</span>
              </div>
              <div className={`flex justify-between py-3 border-b ${isDark ? 'border-white/5' : 'border-black/5'}`}>
                <span className={textMuted}>Objetivo</span><span className={textMain}>Validar adopción</span>
              </div>
              <div className="flex justify-between py-3">
                <span className={textMuted}>Resultado</span><span className={textAccent}>✓ Éxito</span>
              </div>
            </div>
          </div>

          <div className={`${cardBg} p-12 lg:p-16`}>
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-2 h-2 ${isDark ? 'bg-medicus' : 'bg-[#2a4a7e]'}`} />
              <span className={`text-xs uppercase tracking-[0.2em] font-light ${textMuted}`}>Programa 02</span>
            </div>
            <h3 className={`font-display text-2xl mb-4 ${textMain}`}>Rehabilitación Híbrida</h3>
            <p className={`mb-8 font-light ${textMuted}`}>15 kinesiólogos de la red Medicus + pacientes · FisifyStudio · 2 meses</p>
            <div className="space-y-4 text-sm">
              <div className={`flex justify-between py-3 border-b ${isDark ? 'border-white/5' : 'border-black/5'}`}>
                <span className={textMuted}>Póliza</span><span className={textMain}>Salud</span>
              </div>
              <div className={`flex justify-between py-3 border-b ${isDark ? 'border-white/5' : 'border-black/5'}`}>
                <span className={textMuted}>Objetivo</span><span className={textMain}>Optimizar acceso</span>
              </div>
              <div className="flex justify-between py-3">
                <span className={textMuted}>Resultado</span><span className={textAccent}>✓ Éxito</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats sections */}
      {[
        { title: 'Datos de Prevención', data: stats.prevention, color: isDark ? 'bg-accent/50' : 'bg-[#1a3a6e]/50' },
        { title: 'Datos de Rehabilitación', data: stats.rehab, color: isDark ? 'bg-medicus/50' : 'bg-[#2a4a7e]/50' }
      ].map((section) => (
        <section key={section.title} className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <div className={`w-16 h-px ${section.color}`} />
            <h3 className={`text-xs uppercase tracking-[0.3em] font-light ${textMuted}`}>{section.title}</h3>
          </div>
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-px ${borderColor}`}>
            {section.data.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${cardBg} p-8 lg:p-12`}
              >
                <span className="stat-value text-4xl lg:text-5xl block mb-3">{stat.value}</span>
                <span className={`font-light block mb-1 ${textMain}`}>{stat.label}</span>
                <span className={`text-sm font-light ${textMuted}`}>{stat.detail}</span>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* Learnings */}
      <section>
        <div className="flex items-center gap-6 mb-12">
          <div className={`w-16 h-px ${isDark ? 'bg-cream/20' : 'bg-[#0a1628]/20'}`} />
          <h3 className={`text-xs uppercase tracking-[0.3em] font-light ${textMuted}`}>Aprendizajes Clave</h3>
        </div>
        <div className={`grid lg:grid-cols-3 gap-px ${borderColor}`}>
          {[
            { num: '01', title: 'Adopción validada', desc: 'Los asegurados de Medicus no solo prueban la solución, la integran en su día a día.' },
            { num: '02', title: 'Valor en salud', desc: 'El piloto demuestra que es posible activar hábitos saludables de forma digital.' },
            { num: '03', title: 'Satisfacción excepcional', desc: 'Puntuaciones superiores a 9/10 reflejan el estándar de excelencia de Medicus.' },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`${cardBg} p-10 lg:p-14`}
            >
              <span className={`text-xs tracking-[0.3em] mb-6 block font-light ${isDark ? 'text-accent/60' : 'text-[#1a3a6e]/60'}`}>{item.num}</span>
              <h4 className={`font-display text-xl mb-4 ${textMain}`}>{item.title}</h4>
              <p className={`leading-relaxed font-light ${textMuted}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

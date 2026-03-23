import { motion } from 'framer-motion'

interface BienestarTabProps {
  isDark: boolean
  clientName?: string
}

export default function BienestarTab({ isDark, clientName = 'Medicus' }: BienestarTabProps) {
  const cardBg = isDark ? 'bg-[#0d1a2e]' : 'bg-white'
  const borderColor = isDark ? 'border-white/5' : 'border-black/5'
  const textMain = isDark ? 'text-cream' : 'text-[#0a1628]'
  const textMuted = isDark ? 'text-cream/40' : 'text-[#0a1628]/50'
  const textAccent = isDark ? 'text-accent' : 'text-[#1a3a6e]'

  const situacionActual = [
    { icon: '📉', text: 'Baja frecuencia de uso digital' },
    { icon: '⏳', text: 'Relación con la aseguradora puramente reactiva' },
    { icon: '💸', text: 'Dolencias físicas gestionadas cuando ya generan coste' },
    { icon: '😐', text: 'Poca percepción de valor en el día a día' },
    { icon: '🚫', text: 'La póliza no forma parte de la rutina diaria' },
  ]

  const cambioParadigma = [
    { title: 'Tangibilizador de valor', desc: 'El asegurado percibe valor en su día a día' },
    { title: 'Disponibilidad 24/7', desc: 'Desde cualquier lugar, sin desplazamientos' },
    { title: 'Programas personalizados', desc: 'Según condición física de cada asegurado' },
    { title: 'Soporte humano', desc: 'Especialistas disponibles cuando los necesites' },
    { title: 'Hábitos sostenibles', desc: 'Adquisición de hábitos saludables duraderos' },
  ]

  const soluciones = [
    { 
      name: 'Prevención y Bienestar',
      desc: 'Rutinas personalizadas para objetivos de salud y calidad de vida.',
      color: 'from-emerald-500/20 to-emerald-500/5'
    },
    { 
      name: 'FisifyWork',
      desc: 'Programas de salud laboral para prevenir lesiones en el entorno de trabajo.',
      color: 'from-blue-500/20 to-blue-500/5'
    },
    { 
      name: 'FisifySport',
      desc: 'Planes específicos para deportistas y práctica deportiva segura.',
      color: 'from-orange-500/20 to-orange-500/5'
    },
  ]

  const beneficios = [
    {
      title: 'Diferenciación competitiva',
      subtitle: 'Posicionamiento único',
      items: [
        'Producto innovador que destaca en el mercado',
        'Valor agregado tangible e inmediato',
        'Posicionamiento como aseguradora preventiva'
      ]
    },
    {
      title: 'Cartera más saludable',
      subtitle: 'Reducción de siniestralidad',
      items: [
        'Menor frecuencia siniestral',
        'Menor severidad por episodio',
        'Menor tasa de recurrencia'
      ]
    },
    {
      title: 'Fidelidad y engagement',
      subtitle: 'Relación continua',
      items: [
        'Mayor frecuencia de interacción digital',
        'Integración en la vida diaria del usuario',
        'Mayor captación y fidelización'
      ]
    },
  ]

  const kpis = [
    { metric: '% usuarios activos', desc: 'Ratio de asegurados usando Fisify' },
    { metric: 'Frecuencia semanal', desc: 'Sesiones por usuario / semana' },
    { metric: 'Nivel de adherencia', desc: 'Completitud de programas' },
    { metric: 'Evolución del dolor', desc: 'Reducción reportada' },
    { metric: '↓ Episodios recurrentes', desc: 'Comparativa antes / después' },
    { metric: 'NPS activos vs no activos', desc: 'Mejora de satisfacción medible' },
  ]

  const roadmapExito = [
    {
      phase: 'Estrategia de lanzamiento',
      items: ['Campaña multicanal coordinada', 'Email marketing personalizado', 'Tutorial de onboarding']
    },
    {
      phase: 'Comunicación',
      items: ['Plan anual estratégico', 'Soporte para diseño de campañas', 'Mensajería segmentada']
    },
    {
      phase: 'Dinamización',
      items: ['Competiciones gamificadas', 'Sorteos e incentivos', 'Webinars temáticos']
    },
    {
      phase: 'Gestión dedicada',
      items: [`Account Manager para ${clientName}`, 'Equipo de kinesiólogos asignado', 'Tiempos de respuesta optimizados']
    },
  ]

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      
      {/* Hero Header */}
      <section className="mb-32 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'
          }}
        />
        
        <span className="section-label mb-8 inline-block">Enfoque Bienestar</span>
        <h1 className={`heading-display text-[4rem] lg:text-[5.5rem] leading-[0.95] mb-8 max-w-4xl ${textMain}`}>
          Bienestar
          <br />
          <span className="text-gradient">inteligente</span>
        </h1>
        <p className={`text-2xl max-w-2xl font-light leading-relaxed ${textMuted}`}>
          Activamos la prevención y el bienestar en tu póliza de salud.
          De un modelo reactivo a uno preventivo, continuo y basado en hábitos.
        </p>
      </section>

      {/* Situación Actual vs Cambio */}
      <section className="mb-32">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Situación actual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${cardBg} border ${borderColor} p-10 relative overflow-hidden`}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 via-red-400/30 to-transparent" />
            <h3 className={`text-xs uppercase tracking-[0.3em] font-light mb-8 ${textMuted}`}>
              Situación actual en aseguradoras
            </h3>
            <p className={`text-sm font-light mb-8 leading-relaxed ${textMuted}`}>
              Uso digital reactivo vinculado a la gestión del siniestro, no se concibe la aseguradora como una herramienta de bienestar y de prevención diaria:
            </p>
            <div className="space-y-4">
              {situacionActual.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 p-4 border ${borderColor} ${isDark ? 'bg-red-500/5' : 'bg-red-50/50'}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`text-sm font-light ${isDark ? 'text-cream/60' : 'text-[#0a1628]/60'}`}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cambio de paradigma */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${cardBg} border ${borderColor} p-10 relative overflow-hidden`}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/70 via-emerald-400/40 to-transparent" />
            <h3 className={`text-xs uppercase tracking-[0.3em] font-light mb-8 ${textMuted}`}>
              Cambio de paradigma con Fisify
            </h3>
            <p className={`text-sm font-light mb-8 leading-relaxed ${textMuted}`}>
              Fisify convierte la póliza en una herramienta activa de bienestar diario para el asegurado:
            </p>
            <div className="space-y-4">
              {cambioParadigma.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 border ${borderColor} ${isDark ? 'bg-emerald-500/5' : 'bg-emerald-50/50'} hover:border-emerald-500/30 transition-colors`}
                >
                  <h4 className={`text-sm font-medium mb-1 ${textMain}`}>{item.title}</h4>
                  <p className={`text-xs font-light ${textMuted}`}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ¿Cómo lo consigue? */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-16">
          <div className={`w-16 h-px ${isDark ? 'bg-accent/50' : 'bg-[#1a3a6e]/50'}`} />
          <h3 className={`text-xs uppercase tracking-[0.3em] font-light ${textMuted}`}>¿Cómo lo consigue?</h3>
        </div>

        {/* Evaluación y personalización */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${cardBg} border ${borderColor} p-12 mb-8`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`text-xs tracking-[0.3em] block mb-4 ${textAccent}`}>01 · EVALUACIÓN</span>
              <h3 className={`heading-display text-3xl mb-6 ${textMain}`}>Evaluación y personalización</h3>
              <ul className="space-y-4">
                <li className={`flex items-start gap-3 text-sm font-light ${textMuted}`}>
                  <span className={`w-1.5 h-1.5 mt-2 ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`}></span>
                  Triaje inicial y diseño de planes de bienestar/tratamientos
                </li>
                <li className={`flex items-start gap-3 text-sm font-light ${textMuted}`}>
                  <span className={`w-1.5 h-1.5 mt-2 ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`}></span>
                  Programas adaptados a necesidades específicas de cada asegurado
                </li>
                <li className={`flex items-start gap-3 text-sm font-light ${textMuted}`}>
                  <span className={`w-1.5 h-1.5 mt-2 ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`}></span>
                  BodyOS: Tests para medir fuerza y movilidad, detectando áreas de mejora
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className={`aspect-[4/3] ${isDark ? 'bg-[#0a1628]' : 'bg-[#f5f5f5]'} border ${borderColor} overflow-hidden`}>
                <img 
                  src="/images/bienestar-taller-1.webp" 
                  alt="Taller de bienestar"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-[#0a1628] via-transparent to-transparent' : 'bg-gradient-to-t from-white via-transparent to-transparent'}`} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Soluciones especializadas */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {soluciones.map((sol, i) => (
            <motion.div
              key={sol.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} border ${borderColor} p-8 relative overflow-hidden group hover:border-accent/30 transition-all`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <span className={`text-xs tracking-[0.3em] block mb-4 ${textAccent}`}>0{i + 2} · SOLUCIÓN</span>
                <h4 className={`font-display text-lg mb-3 ${textMain}`}>{sol.name}</h4>
                <p className={`text-sm font-light leading-relaxed ${textMuted}`}>{sol.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Educación y Equipo humano */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${cardBg} border ${borderColor} p-8`}
          >
            <span className={`text-xs tracking-[0.3em] block mb-4 ${textAccent}`}>05 · EDUCACIÓN</span>
            <h4 className={`font-display text-lg mb-4 ${textMain}`}>Educación continua</h4>
            <p className={`text-sm font-light leading-relaxed ${textMuted}`}>
              Píldoras diarias de salud con consejos prácticos, hábitos saludables y prevención.
              Contenido adaptado al perfil y necesidades de cada asegurado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className={`${cardBg} border ${borderColor} p-8`}
          >
            <span className={`text-xs tracking-[0.3em] block mb-4 ${textAccent}`}>06 · EQUIPO HUMANO</span>
            <h4 className={`font-display text-lg mb-4 ${textMain}`}>Equipo al alcance del asegurado</h4>
            <ul className="space-y-2">
              {['One-to-one con fisioterapeuta', 'Chat profesional en tiempo real', 'Programas post-consulta personalizados', 'Seguimiento semanal proactivo'].map((item, i) => (
                <li key={i} className={`flex items-center gap-2 text-sm font-light ${textMuted}`}>
                  <span className={`w-1 h-1 ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`}></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Beneficios estratégicos */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <span className="section-label mb-6 inline-block">Tres palancas para {clientName}</span>
          <h2 className={`heading-display text-4xl lg:text-5xl ${textMain}`}>Beneficios estratégicos</h2>
        </div>

        <div className={`grid md:grid-cols-3 gap-px ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
          {beneficios.map((ben, i) => (
            <motion.div
              key={ben.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`${cardBg} p-10 relative`}
            >
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${
                i === 0 ? 'from-emerald-500/50' : i === 1 ? 'from-blue-500/50' : 'from-purple-500/50'
              } to-transparent`} />
              
              <span className={`text-xs tracking-[0.3em] block mb-2 ${textAccent}`}>{ben.subtitle}</span>
              <h3 className={`font-display text-xl mb-6 ${textMain}`}>{ben.title}</h3>
              
              <ul className="space-y-3">
                {ben.items.map((item, j) => (
                  <li key={j} className={`flex items-start gap-3 text-sm font-light ${textMuted}`}>
                    <span className={`w-1.5 h-1.5 mt-1.5 flex-shrink-0 ${
                      i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-blue-500' : 'bg-purple-500'
                    }`}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-8 p-8 border ${borderColor} ${cardBg} text-center`}
        >
          <p className={`text-lg font-display ${textMain}`}>
            En definitiva, <span className={textAccent}>una cartera más saludable</span>.
          </p>
        </motion.div>
      </section>

      {/* Imágenes de talleres */}
      <section className="mb-32">
        <div className="grid lg:grid-cols-3 gap-4">
          {['bienestar-taller-1.webp', 'bienestar-taller-2.png', 'bienestar-taller-3.png'].map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`aspect-[4/3] ${cardBg} border ${borderColor} overflow-hidden group`}
            >
              <img 
                src={`/images/${img}`}
                alt={`Taller de bienestar ${i + 1}`}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Análisis en tiempo real */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <div className={`w-16 h-px ${isDark ? 'bg-accent/50' : 'bg-[#1a3a6e]/50'}`} />
          <h3 className={`text-xs uppercase tracking-[0.3em] font-light ${textMuted}`}>Análisis en tiempo real</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${cardBg} border ${borderColor} p-12 mb-8`}
        >
          <div className="max-w-3xl">
            <h3 className={`heading-display text-3xl mb-6 ${textMain}`}>Toma de decisiones basada en datos</h3>
            <p className={`text-sm font-light leading-relaxed ${textMuted}`}>
              Gracias a FisifyEyes monitorizamos y mostramos los datos en tiempo real para analizar el impacto 
              de las acciones realizadas y determinar los próximos pasos para una buena ejecución.
            </p>
          </div>
        </motion.div>

        {/* KPIs */}
        <div className={`grid md:grid-cols-3 lg:grid-cols-6 gap-px ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.metric}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`${cardBg} p-6 text-center`}
            >
              <span className={`block text-sm font-medium mb-2 ${textMain}`}>{kpi.metric}</span>
              <span className={`text-xs font-light ${textMuted}`}>{kpi.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roadmap para el éxito */}
      <section>
        <div className="text-center mb-16">
          <span className="section-label mb-6 inline-block">Recursos que aporta Fisify</span>
          <h2 className={`heading-display text-4xl lg:text-5xl ${textMain}`}>Roadmap para el éxito</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapExito.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} border ${borderColor} p-8 relative`}
            >
              <span className={`text-6xl font-display absolute top-4 right-4 ${isDark ? 'text-white/5' : 'text-black/5'}`}>
                0{i + 1}
              </span>
              <h4 className={`font-display text-lg mb-6 ${textMain}`}>{phase.phase}</h4>
              <ul className="space-y-3">
                {phase.items.map((item, j) => (
                  <li key={j} className={`flex items-start gap-2 text-sm font-light ${textMuted}`}>
                    <span className={`w-1 h-1 mt-2 flex-shrink-0 ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-16 p-16 border ${borderColor} ${cardBg} text-center relative overflow-hidden`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-accent/5 to-transparent' : 'from-[#1a3a6e]/5 to-transparent'}`} />
          <div className="relative">
            <p className={`text-2xl lg:text-3xl font-display leading-relaxed max-w-3xl mx-auto ${textMain}`}>
              Fisify convierte la póliza de salud en una 
              <span className={`${textAccent}`}> herramienta activa de bienestar diario</span>.
            </p>
            <p className={`mt-6 text-lg font-light ${textMuted}`}>
              Una palanca estratégica, no un complemento digital.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

import { motion } from 'framer-motion'
import { AlertTriangle, Scale, Smartphone, X, Check } from 'lucide-react'

interface ObjetivoTabProps {
  isDark: boolean
  clientName?: string
}

/* ─── Fade-in preset ─── */
const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
}

export default function ObjetivoTab({ isDark: _isDark, clientName = 'Medicus' }: ObjetivoTabProps) {

  /* ══════════════════════════════════════════════════ */
  /*  SITUACIÓN ACTUAL — DATA                          */
  /* ══════════════════════════════════════════════════ */
  const situacionCards = [
    {
      num: 'a',
      icon: <AlertTriangle size={18} strokeWidth={1.5} />,
      title: 'Más presión por demostrar valor',
      body: 'El afiliado ya no evalúa solo cobertura; evalúa experiencia, utilidad y valor cotidiano.',
    },
    {
      num: 'b',
      icon: <Scale size={18} strokeWidth={1.5} />,
      title: 'Más necesidad de eficiencia clínica',
      body: 'La buena medicina no es hacer más, sino hacer lo adecuado, evitando tanto el defecto como el exceso.',
    },
    {
      num: 'c',
      icon: <Smartphone size={18} strokeWidth={1.5} />,
      title: 'Más urgencia por educar y trabajar desde la prevención',
      body: 'Sin educación para la salud, el sistema sigue siendo reactivo, imprevisible y más costoso.',
    },
  ]

  /* ══════════════════════════════════════════════════ */
  /*  COMPARACIÓN — DATA                               */
  /* ══════════════════════════════════════════════════ */
  const modeloActual = [
    { label: 'Interacción reactiva', desc: 'El afiliado interactúa principalmente para resolver un problema. La experiencia digital tiende a ser transaccional (gestión), no de hábito.' },
    { label: 'Intervención tardía', desc: 'Las dolencias MSK se abordan cuando ya escalaron (más sesiones, más recurrencia, mayor costo).' },
    { label: 'Competencia por precio', desc: 'El plan compite por precio porque el "valor" se percibe poco en el día a día.' },
    { label: 'Prevención aislada', desc: 'La prevención queda como "contenido" o iniciativas aisladas, sin continuidad ni medición.' },
  ]

  const conFisify = [
    { label: 'Valor diario', desc: 'Valor tangible y diario para el afiliado.' },
    { label: 'Hábito integrado', desc: 'El afiliado incorpora una rutina simple de prevención y autocuidado (micro-acciones) que "vive" dentro del plan.' },
    { label: 'Acceso universal', desc: 'Acceso desde cualquier lugar y dispositivo: baja fricción, más adopción.' },
    { label: 'Intervención temprana', desc: 'Primer nivel de acompañamiento sin desplazamientos: reduce barreras y acelera intervención temprana.' },
    { label: 'Personalización real', desc: 'Programas personalizados por perfil y objetivo: evita el enfoque genérico.' },
    { label: 'Propuesta diferencial', desc: `${clientName} pasa a tener una propuesta diferencial: prevención medible, no solo cobertura.` },
  ]

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">

      {/* ══════════════════════════════════════════════════ */}
      {/*  SECTION 1 — HERO OBJECTIVE                       */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="mb-40">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-5 mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium">
            Objetivo estratégico
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
        </motion.div>

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h2
            className="text-[2rem] md:text-[2.6rem] lg:text-[3.2rem] leading-[1.2] font-light text-cream tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Consolidar <span className="text-gradient font-medium">Fisify</span> como pilar de la{' '}
            <span className="text-cream font-medium">prevención activa</span> de dolencias
            musculoesqueléticas (MSK) para los asegurados de{' '}
            <span className="text-gradient font-medium">{clientName}</span>.
          </h2>
        </motion.div>

        {/* Decorative accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 w-32 h-px bg-gradient-to-r from-accent to-accent/0 origin-left"
        />
      </section>


      {/* ══════════════════════════════════════════════════ */}
      {/*  SECTION 2 — CAMBIO DE PARADIGMA                  */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="mb-40">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-12">
          <div className="flex items-center gap-5 mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50 font-medium">01</span>
            <div className="flex-1 h-px bg-cream/[0.08]" />
          </div>
          <h3
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-light text-cream tracking-tight mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Cambio de paradigma
          </h3>
          <p className="text-lg text-cream/60 font-light max-w-3xl">
            De &lsquo;pagador de prestaciones&rsquo; a gestor activo de salud musculoesquelética y bienestar
          </p>
        </motion.div>

        {/* Intro text */}
        <motion.p
          {...fadeUp}
          className="text-lg text-cream/70 font-light leading-[1.8] max-w-3xl mb-20"
        >
          Fisify permite que {clientName} evolucione de un modelo donde el afiliado &lsquo;aparece&rsquo; cuando hay
          dolor, a uno donde la prepaga acompaña y previene de forma continua. El plan deja de ser una
          promesa y pasa a ser un valor tangible en el día a día.
        </motion.p>

        {/* Comparison */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* LEFT — Modelo actual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-400/60" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-cream/60 font-medium">
                Modelo actual
              </span>
            </div>

            <div className="space-y-3">
              {modeloActual.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-[#0d1a2e]/50 border border-white/[0.04] rounded-xl p-5 lg:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 shrink-0 w-6 h-6 rounded-lg bg-red-400/10 flex items-center justify-center">
                      <X size={12} className="text-red-400/70" strokeWidth={2} />
                    </div>
                    <div>
                      <span className="text-[13px] font-medium text-cream/70 block mb-1">{item.label}</span>
                      <p className="text-[14px] text-cream/45 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Con Fisify */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium">
                Con Fisify
              </span>
            </div>

            <div className="space-y-3">
              {conFisify.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative bg-[#0d1a2e]/70 border border-accent/[0.1] rounded-xl p-5 lg:p-6 overflow-hidden"
                >
                  {/* Subtle gold shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.02] to-transparent pointer-events-none" />
                  <div className="flex items-start gap-4 relative">
                    <div className="mt-0.5 shrink-0 w-6 h-6 rounded-lg bg-accent/15 flex items-center justify-center">
                      <Check size={12} className="text-accent" strokeWidth={2.5} />
                    </div>
                    <div>
                      <span className="text-[13px] font-medium text-accent block mb-1">{item.label}</span>
                      <p className="text-[14px] text-cream/75 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════ */}
      {/*  SECTION 3 — SITUACIÓN ACTUAL                     */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="mb-32">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="flex items-center gap-5 mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50 font-medium">02</span>
            <div className="flex-1 h-px bg-cream/[0.08]" />
          </div>
          <h3
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-light text-cream tracking-tight mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Situación actual
          </h3>
          <p className="text-lg text-cream/60 font-light">
            Medicina prepagada en Argentina
          </p>
        </motion.div>

        {/* Editorial cards */}
        <div className="space-y-px">
          {situacionCards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              viewport={{ once: true, margin: '-40px' }}
              className="group bg-[#0d1a2e]/50 border border-white/[0.06] p-8 md:p-10 lg:p-12 hover:bg-[#0d1a2e]/80 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Number + icon */}
                <div className="lg:col-span-1 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-accent/80 font-medium">
                    {card.num}
                  </span>
                  <span className="text-cream/50 group-hover:text-accent/70 transition-colors duration-500">
                    {card.icon}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h4
                    className="text-xl lg:text-[1.35rem] text-cream font-normal leading-snug tracking-tight"
                    style={{ fontFamily: 'Philosopher, Georgia, serif' }}
                  >
                    {card.title}
                  </h4>
                </div>

                {/* Body */}
                <div className="lg:col-span-7">
                  <p className="text-[15px] text-cream/70 font-light leading-[1.8]">
                    {card.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Concluding statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20"
        >
          <div className="relative pl-8 border-l border-accent/30">
            <p className="text-lg lg:text-xl text-cream/70 font-light leading-[1.7] max-w-4xl">
              En un mercado con más competencia y más transparencia de precios, la prepaga necesita dejar
              de ser{' '}
              <span className="text-cream/60 italic">&lsquo;gestor de prestaciones&rsquo;</span> y convertirse en{' '}
              <span className="text-accent font-normal">&lsquo;plataforma de salud cotidiana&rsquo;</span>:{' '}
              prevención activa + acompañamiento continuo + evidencia de impacto{' '}
              <span className="text-cream/55">(para retención y renovación)</span>.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer mark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pt-12 border-t border-cream/[0.08] flex items-center justify-between"
      >
        <span className="text-[11px] text-cream/30 tracking-[0.15em] uppercase">
          Fisify · {clientName}
        </span>
        <span className="text-[11px] text-cream/30 tracking-[0.15em] uppercase">
          Propuesta estratégica · 2025
        </span>
      </motion.div>
    </div>
  )
}

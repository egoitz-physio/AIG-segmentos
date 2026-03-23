import { motion } from 'framer-motion'
import { useState } from 'react'

interface ImplementTabProps {
  isDark: boolean
  clientName?: string
}

/* ─── Reusable fade-in variant ─── */
const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
}

/* ─── Thin horizontal rule ─── */
function Divider({ isDark }: { isDark: boolean }) {
  return (
    <div className={`w-full h-px ${isDark ? 'bg-gradient-to-r from-transparent via-cream/[0.06] to-transparent' : 'bg-gradient-to-r from-transparent via-[#0a1628]/[0.06] to-transparent'}`} />
  )
}

export default function ImplementTab({ isDark, clientName = 'Medicus' }: ImplementTabProps) {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0)

  const textMain = isDark ? 'text-cream' : 'text-[#0a1628]'
  const textMuted = isDark ? 'text-cream/75' : 'text-[#0a1628]/65'
  const textAccent = isDark ? 'text-accent' : 'text-[#1a3a6e]'
  const borderColor = isDark ? 'border-white/[0.10]' : 'border-black/[0.08]'
  const cardBg = isDark ? 'bg-[#0d1a2e]/60' : 'bg-white/80'

  /* ══════════════════════════════════════════════════════ */
  /*  DATA                                                  */
  /* ══════════════════════════════════════════════════════ */
  const phases = [
    {
      num: '01',
      title: 'Kick-off + escalado digital nacional',
      months: 'M1–M3',
      period: 'Abril — Junio',
      deliverables: 'Gobernanza, protocolos, activación, reporting base',
      actions: [
        `Campaña multicanal: web ${clientName} + app + email + push (coordinado)`,
        'Email marketing segmentado por perfil, dolor y objetivo',
        'Onboarding tutorial + "primer plan en 2 minutos"',
        'Primer ciclo de retos e incentivos (activación)',
      ],
    },
    {
      num: '02',
      title: 'Optimización conversión + campañas por segmento',
      months: 'M4–M6',
      period: 'Julio — Septiembre',
      deliverables: 'Campañas, funnels, playbooks, primeros QBR',
      actions: [
        'Plan anual de comunicación (campañas trimestrales)',
        'Segmentación avanzada: cohort por dolor, edad, plan, uso',
        'Campañas de reactivación: nudges + contenidos + webinars + sorteos e incentivos',
        `Optimización del circuito de derivación a red ${clientName}`,
      ],
    },
    {
      num: '03',
      title: 'Expansión comercialización',
      months: 'M7–M12',
      period: 'Octubre — Marzo',
      deliverables: 'Paquetes por segmento, mejoras producto, QA',
      actions: [
        'Toolkit comercial: slides, one-pagers, casos del piloto',
        'Paquetes corporativos por industria (call center / logística / sedentarismo)',
        'Campañas in-company + webinars para colectivos',
        'Mejoras producto basadas en uso real (iteraciones trimestrales)',
        'Ampliación de biblioteca de contenido según requerimiento',
      ],
    },
    {
      num: '04',
      title: 'Optimización outcomes + estandarización',
      months: 'M13–M24',
      period: 'Año 2',
      deliverables: 'Escala + mejora continua',
      actions: [
        'Estandarización de journeys por plan y por vertical',
        'Automatización de reactivación (mensajes + triggers por uso/dolor)',
        'Reporting v3: insights ejecutivos y playbooks por segmento',
        'Programa "return-to-activity" y continuidad post-consulta',
        'Engranaje con campañas 360 del programa "Cuidarte"',
        'Renovación bianual con business case consolidado',
      ],
    },
  ]

  const governance = [
    {
      area: 'Kick-off, implementación y seguimiento',
      medicus: clientName,
      fisify: 'Customer Success Executive',
    },
    {
      area: 'Operación: Soporte, SLAs y coordinación',
      medicus: '—',
      fisify: 'Inhar (CTO) + Iñaki (COO) + Equipo Kinesiólogos',
    },
    {
      area: 'Activación: comunicación y engagement',
      medicus: '—',
      fisify: 'Laura Valbuena + Equipo Marketing',
    },
    {
      area: 'Datos: reporting y seguimiento',
      medicus: '—',
      fisify: 'Customer Success Executive',
    },
    {
      area: 'Comercial colectivos: enablement y playbooks',
      medicus: '—',
      fisify: 'Customer Success Executive',
    },
  ]

  const kpis = [
    { id: '01', name: '% Afiliados activos', desc: 'Ratio de afiliados que utilizan Fisify sobre el total habilitado' },
    { id: '02', name: 'Frecuencia semanal', desc: 'Sesiones completadas por afiliado activo por semana' },
    { id: '03', name: 'Nivel de adherencia', desc: 'Completitud de los programas asignados a cada afiliado' },
    { id: '04', name: 'Evolución del dolor', desc: 'Reducción de la intensidad del dolor reportado por los usuarios activos' },
    { id: '05', name: 'Episodios recurrentes', desc: 'Comparativa de recurrencia de consultas MSK antes y después de Fisify' },
    { id: '06', name: 'NPS diferencial', desc: 'Diferencia de NPS entre afiliados usuarios de Fisify y el resto de la cartera' },
  ]

  const pricingTiers = [
    { users: '100.000', cost: '1,48€', highlighted: false },
    { users: '200.000', cost: '1,36€', highlighted: true },
    { users: '300.000', cost: '1,27€', highlighted: false },
    { users: '400.000', cost: '1,19€', highlighted: false },
    { users: '500.000', cost: '1,14€', highlighted: false },
  ]

  return (
    <div className="relative">
      {/* ══════════════════════════════════════════════════════ */}
      {/*  SECTION 1 — FASES DEL PLAN                           */}
      {/* ══════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-32">
        {/* Header */}
        <motion.div {...fadeUp} className="mb-20">
          <span className="section-label mb-10 inline-block">Plan de implementación</span>
          <h2 className={`heading-display text-display-lg max-w-4xl ${textMain}`}>
            Hoja de ruta para escalar valor, adopción y resultados
          </h2>
          <p className={`text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mt-6 ${textMuted}`}>
            Plan de 24 meses para activar el servicio, optimizar su uso, convertirlo en una palanca comercial y consolidarlo como una capacidad estratégica dentro de {clientName}.
          </p>
        </motion.div>

        {/* Timeline progress bar */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-0">
            {phases.map((phase, i) => (
              <div key={phase.num} className="flex-1 flex items-center">
                <button
                  onClick={() => setExpandedPhase(expandedPhase === i ? null : i)}
                  className={`relative flex items-center gap-3 transition-all duration-500 group`}
                >
                  <div className={`w-11 h-11 flex items-center justify-center border transition-all duration-500 ${
                    expandedPhase === i
                      ? isDark ? 'border-accent bg-accent/10' : 'border-[#1a3a6e] bg-[#1a3a6e]/10'
                      : isDark ? 'border-cream/25 hover:border-cream/40' : 'border-[#0a1628]/20 hover:border-[#0a1628]/35'
                  }`}>
                    <span className={`text-xs font-medium tracking-wider transition-colors ${
                      expandedPhase === i ? textAccent : textMuted
                    }`}>
                      {phase.num}
                    </span>
                  </div>
                  <div className="hidden lg:block text-left">
                    <span className={`text-xs uppercase tracking-[0.15em] block ${
                      expandedPhase === i ? textAccent : textMuted
                    }`}>
                      {phase.months}
                    </span>
                  </div>
                </button>
                {i < phases.length - 1 && (
                  <div className={`flex-1 h-px mx-4 ${isDark ? 'bg-cream/[0.12]' : 'bg-[#0a1628]/[0.10]'}`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phase cards */}
        <div className="space-y-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setExpandedPhase(expandedPhase === i ? null : i)}
                className={`w-full text-left transition-all duration-500 ${cardBg} backdrop-blur-sm border ${
                  expandedPhase === i
                    ? isDark ? 'border-accent/20' : 'border-[#1a3a6e]/20'
                    : borderColor
                }`}
              >
                {/* Top accent line */}
                <div className={`h-px transition-all duration-500 ${
                  expandedPhase === i
                    ? isDark ? 'bg-accent' : 'bg-[#1a3a6e]'
                    : 'bg-transparent'
                }`} />

                <div className="p-8 lg:p-10">
                  {/* Phase header row */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                    {/* Phase number + title */}
                    <div className="flex items-center gap-6 flex-1 min-w-0">
                      <span className={`text-sm tracking-[0.3em] flex-shrink-0 ${
                        expandedPhase === i ? textAccent : textMuted
                      }`}>
                        {phase.num}
                      </span>
                      <h3 className={`font-display text-xl lg:text-2xl ${textMain} truncate`}>
                        {phase.title}
                      </h3>
                    </div>

                    {/* Meta tags */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className={`text-xs uppercase tracking-[0.15em] px-3 py-1.5 border ${
                        isDark ? 'border-accent/25 text-accent' : 'border-[#1a3a6e]/25 text-[#1a3a6e]'
                      }`}>
                        {phase.months}
                      </span>
                      <span className={`text-sm font-light ${textMuted}`}>
                        {phase.period}
                      </span>
                      <motion.span
                        animate={{ rotate: expandedPhase === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`text-base ${textMuted}`}
                      >
                        ↓
                      </motion.span>
                    </div>
                  </div>

                  {/* Expanded content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedPhase === i ? 'auto' : 0,
                      opacity: expandedPhase === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className={`pt-8 mt-8 border-t ${borderColor}`}>
                      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
                        {/* Deliverables */}
                        <div className="lg:col-span-4">
                          <span className={`text-xs uppercase tracking-[0.2em] block mb-4 ${textAccent}`}>
                            Entregables
                          </span>
                          <p className={`text-base font-light leading-relaxed ${isDark ? 'text-cream/85' : 'text-[#0a1628]/75'}`}>
                            {phase.deliverables}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="lg:col-span-8">
                          <span className={`text-xs uppercase tracking-[0.2em] block mb-4 ${textAccent}`}>
                            Acciones clave
                          </span>
                          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                            {phase.actions.map((action, actionIdx) => (
                              <div key={actionIdx} className="flex items-start gap-3">
                                <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDark ? 'bg-accent/60' : 'bg-[#1a3a6e]/60'}`} />
                                <span className={`text-[15px] font-light leading-relaxed ${isDark ? 'text-cream/85' : 'text-[#0a1628]/75'}`}>
                                  {action}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider isDark={isDark} />

      {/* ══════════════════════════════════════════════════════ */}
      {/*  SECTION 2 — MODELO OPERATIVO + GOBERNANZA            */}
      {/* ══════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <motion.div {...fadeUp} className="mb-20">
          <span className="section-label mb-10 inline-block">Gobernanza</span>
          <h2 className={`heading-display text-display-lg max-w-3xl ${textMain}`}>
            Modelo operativo
          </h2>
          <p className={`text-xl font-light leading-relaxed max-w-2xl mt-6 ${textMuted}`}>
            Roles y responsabilidades claras entre {clientName} y Fisify para una ejecución impecable.
          </p>
        </motion.div>

        {/* Governance table */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`border ${borderColor} overflow-hidden`}
        >
          {/* Table header */}
          <div className={`grid grid-cols-12 gap-0 ${isDark ? 'bg-[#0d1a2e]' : 'bg-[#f5f5f5]'}`}>
            <div className="col-span-5 p-6 lg:p-8">
              <span className={`text-xs uppercase tracking-[0.2em] font-medium ${textMuted}`}>Área</span>
            </div>
            <div className={`col-span-3 p-6 lg:p-8 border-l ${borderColor}`}>
              <span className={`text-xs uppercase tracking-[0.2em] font-medium ${textAccent}`}>{clientName}</span>
            </div>
            <div className={`col-span-4 p-6 lg:p-8 border-l ${borderColor}`}>
              <span className={`text-xs uppercase tracking-[0.2em] font-medium ${textAccent}`}>Fisify</span>
            </div>
          </div>

          {/* Table rows */}
          {governance.map((row, i) => (
            <motion.div
              key={row.area}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.05 * i }}
              viewport={{ once: true }}
              className={`grid grid-cols-12 gap-0 border-t ${borderColor} ${
                isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'
              } transition-colors`}
            >
              <div className="col-span-5 p-6 lg:p-8">
                <span className={`text-[15px] font-light ${textMain}`}>{row.area}</span>
              </div>
              <div className={`col-span-3 p-6 lg:p-8 border-l ${borderColor}`}>
                <span className={`text-[15px] font-light ${row.medicus === '—' ? (isDark ? 'text-cream/45' : 'text-[#0a1628]/40') : (isDark ? 'text-cream/90' : 'text-[#0a1628]/85')}`}>
                  {row.medicus}
                </span>
              </div>
              <div className={`col-span-4 p-6 lg:p-8 border-l ${borderColor}`}>
                <span className={`text-[15px] font-light ${isDark ? 'text-cream/90' : 'text-[#0a1628]/85'}`}>
                  {row.fisify}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Committee cadence */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <span className={`text-xs uppercase tracking-[0.2em] ${textMuted}`}>Comités</span>
          {['Weekly ops', 'Monthly steering', 'QBR trimestral'].map((item, i) => (
            <span
              key={item}
              className={`text-sm tracking-[0.03em] px-4 py-2 border ${
                isDark ? 'border-cream/[0.12] text-cream/80' : 'border-[#0a1628]/[0.10] text-[#0a1628]/70'
              }`}
            >
              {i === 0 && <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${isDark ? 'bg-accent/60' : 'bg-[#1a3a6e]/60'}`} />}
              {i === 1 && <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${isDark ? 'bg-accent/40' : 'bg-[#1a3a6e]/40'}`} />}
              {i === 2 && <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${isDark ? 'bg-accent/20' : 'bg-[#1a3a6e]/20'}`} />}
              {item}
            </span>
          ))}
        </motion.div>
      </section>

      <Divider isDark={isDark} />

      {/* ══════════════════════════════════════════════════════ */}
      {/*  SECTION 3 — KPIs DE IMPACTO                          */}
      {/* ══════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <motion.div {...fadeUp} className="mb-20">
          <span className="section-label mb-10 inline-block">Medición</span>
          <h2 className={`heading-display text-display-lg max-w-3xl ${textMain}`}>
            KPIs de impacto
          </h2>
          <p className={`text-xl font-light leading-relaxed max-w-2xl mt-6 ${textMuted}`}>
            Indicadores clave para medir el éxito del proyecto y demostrar resultados tangibles.
          </p>
        </motion.div>

        {/* KPI grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-px ${isDark ? 'bg-white/[0.03]' : 'bg-black/[0.03]'}`}>
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`${cardBg} backdrop-blur-sm p-8 lg:p-10 group`}
            >
              {/* KPI number */}
              <span className={`stat-value text-4xl lg:text-5xl tracking-tight block mb-5`}>
                {kpi.id}
              </span>

              {/* KPI name */}
              <h4 className={`font-display text-lg mb-3 ${textMain}`}>
                {kpi.name}
              </h4>

              {/* KPI description */}
              <p className={`text-[15px] font-light leading-relaxed ${textMuted}`}>
                {kpi.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider isDark={isDark} />

      {/* ══════════════════════════════════════════════════════ */}
      {/*  SECTION 4 — PROPUESTA DE INVERSIÓN                   */}
      {/* ══════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <motion.div {...fadeUp} className="mb-20">
          <span className="section-label mb-10 inline-block">Inversión</span>
          <h2 className={`heading-display text-display-lg max-w-4xl ${textMain}`}>
            Una inversión diseñada para escalar junto a {clientName}
          </h2>
          <p className={`text-xl font-light leading-relaxed max-w-3xl mt-6 ${textMuted}`}>
            Una propuesta económica pensada para acompañar el volumen, facilitar la adopción y consolidar una relación de largo plazo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Pricing table */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className={`text-xs uppercase tracking-[0.2em] block mb-2 ${textMuted}`}>Para individuales</span>
              <h3 className={`font-display text-2xl lg:text-3xl ${textMain}`}>Tabla de precios</h3>
              <span className={`text-sm font-light mt-2 block ${textMuted}`}>(EUR* usuario/año)</span>
            </div>

            <div className={`border ${borderColor} overflow-hidden`}>
              {/* Table header */}
              <div className={`grid grid-cols-2 gap-0 ${isDark ? 'bg-[#0d1a2e]' : 'bg-[#f5f5f5]'}`}>
                <div className="p-5 lg:p-6">
                  <span className={`text-xs uppercase tracking-[0.15em] font-medium ${textAccent}`}>N.º de asegurados</span>
                </div>
                <div className={`p-5 lg:p-6 border-l ${borderColor}`}>
                  <span className={`text-xs uppercase tracking-[0.15em] font-medium ${textAccent}`}>Coste</span>
                </div>
              </div>

              {/* Table rows */}
              {pricingTiers.map((tier, i) => (
                <motion.div
                  key={tier.users}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-2 gap-0 border-t ${borderColor} ${
                    tier.highlighted
                      ? isDark ? 'bg-accent/[0.06] border-l-2 border-l-accent' : 'bg-[#1a3a6e]/[0.06] border-l-2 border-l-[#1a3a6e]'
                      : isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'
                  } transition-colors`}
                >
                  <div className="p-5 lg:p-6 flex items-center gap-3">
                    <span className={`text-base font-light ${tier.highlighted ? textMain : (isDark ? 'text-cream/85' : 'text-[#0a1628]/75')}`}>
                      {tier.users}
                    </span>
                    {tier.highlighted && (
                      <span className={`text-[10px] uppercase tracking-[0.15em] px-2 py-1 font-medium ${
                        isDark ? 'bg-accent/15 text-accent' : 'bg-[#1a3a6e]/15 text-[#1a3a6e]'
                      }`}>
                        {clientName}
                      </span>
                    )}
                  </div>
                  <div className={`p-5 lg:p-6 border-l ${borderColor}`}>
                    <span className={`text-base ${tier.highlighted ? `font-medium ${textAccent}` : `font-light ${isDark ? 'text-cream/85' : 'text-[#0a1628]/75'}`}`}>
                      {tier.cost}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Pricing cards + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Pricing cards */}
            <div className="space-y-4 mb-12">
              {/* Reference price */}
              <div className={`${cardBg} backdrop-blur-sm border ${borderColor} p-10 lg:p-12`}>
                <span className={`text-xs uppercase tracking-[0.2em] block mb-6 ${textMuted}`}>
                  Coste licencia (200.000 asegurados)
                </span>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`stat-value text-5xl lg:text-6xl tracking-tight`}>1,36</span>
                  <span className={`text-xl font-light ${textMuted}`}>€</span>
                </div>
                <span className={`text-base font-light ${textMuted}`}>por licencia / año</span>
              </div>

              {/* Client price */}
              <div className={`relative border overflow-hidden ${
                isDark ? 'border-accent/20 bg-accent/[0.04]' : 'border-[#1a3a6e]/20 bg-[#1a3a6e]/[0.04]'
              } p-10 lg:p-12`}>
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-px ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`} />

                <span className={`text-xs uppercase tracking-[0.2em] block mb-6 ${textAccent}`}>
                  Pricing {clientName}
                </span>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`stat-value text-5xl lg:text-6xl tracking-tight`}>1,10</span>
                  <span className={`text-xl font-light ${textMuted}`}>€</span>
                </div>
                <span className={`text-base font-light ${isDark ? 'text-cream/85' : 'text-[#0a1628]/75'}`}>por licencia / año</span>

                {/* Savings badge */}
                <div className={`mt-6 inline-flex items-center gap-2 px-4 py-2 ${
                  isDark ? 'bg-accent/10' : 'bg-[#1a3a6e]/10'
                }`}>
                  <span className={`text-sm tracking-[0.03em] font-medium ${textAccent}`}>
                    −19% sobre precio estándar
                  </span>
                </div>
              </div>
            </div>

            {/* Contract terms */}
            <div className={`space-y-4 mt-2`}>
              <div className={`flex items-center gap-4 py-4 border-t ${borderColor}`}>
                <span className={`text-xs uppercase tracking-[0.2em] w-40 flex-shrink-0 ${textAccent}`}>Duración</span>
                <span className={`text-base font-light ${isDark ? 'text-cream/90' : 'text-[#0a1628]/85'}`}>Dos años</span>
              </div>
              <div className={`flex items-center gap-4 py-4 border-t ${borderColor}`}>
                <span className={`text-xs uppercase tracking-[0.2em] w-40 flex-shrink-0 ${textAccent}`}>Facturación</span>
                <span className={`text-base font-light ${isDark ? 'text-cream/90' : 'text-[#0a1628]/85'}`}>Mensual</span>
              </div>
              <div className={`py-4 border-t ${borderColor}`}>
                <p className={`text-base font-light ${textMuted}`}>
                  Propuesta válida hasta el 31 de marzo
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Piloto Kinesiología Híbrida ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className={`relative border overflow-hidden ${
            isDark ? 'border-accent/20 bg-accent/[0.04]' : 'border-[#1a3a6e]/20 bg-[#1a3a6e]/[0.04]'
          } p-10 lg:p-12`}>
            {/* Accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-px ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`} />

            <span className={`text-xs uppercase tracking-[0.2em] block mb-2 ${textAccent}`}>
              Piloto Kinesiología Híbrida — FisifyPro
            </span>
            <h3 className={`font-display text-2xl lg:text-3xl mb-10 ${textMain}`}>
              Propuesta económica para el piloto
            </h3>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Duración */}
              <div>
                <span className={`text-xs uppercase tracking-[0.2em] block mb-4 ${textMuted}`}>Duración</span>
                <span className={`stat-value text-4xl lg:text-5xl tracking-tight block`}>12</span>
                <span className={`text-base font-light ${textMuted}`}>meses</span>
              </div>

              {/* Volumen */}
              <div>
                <span className={`text-xs uppercase tracking-[0.2em] block mb-4 ${textMuted}`}>Volumen</span>
                <span className={`stat-value text-4xl lg:text-5xl tracking-tight block`}>∞</span>
                <span className={`text-base font-light ${textMuted}`}>Ilimitado</span>
              </div>

              {/* Coste */}
              <div>
                <span className={`text-xs uppercase tracking-[0.2em] block mb-4 ${textMuted}`}>Coste</span>
                <div className="flex items-baseline gap-1">
                  <span className={`stat-value text-4xl lg:text-5xl tracking-tight`}>2.500</span>
                  <span className={`text-xl font-light ${textMuted}`}>€</span>
                </div>
                <span className={`text-base font-light ${textMuted}`}>por mes</span>
              </div>
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Users, LogIn, Star, Activity, Dumbbell, CheckCircle2, Stethoscope, UserCheck, ClipboardList, TrendingUp, Heart, Target, Building2, Calendar, Monitor, Lightbulb, Zap, Award } from 'lucide-react'

interface ResultsTabProps {
  isDark: boolean
}

/* ─── Section header ─── */
function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/30 font-medium">{number}</span>
        <div className="flex-1 border-t border-[#0a1628]/[0.06]" />
      </div>
      <h3 className="text-3xl md:text-4xl font-light text-[#0a1628] tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {title}
      </h3>
      {subtitle && (
        <p className="text-lg text-[#0a1628]/40 font-light mt-3 max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  )
}

/* ─── Program badge ─── */
function ProgramBadge({ program }: { program: 'prevencion' | 'rehabilitacion' }) {
  const isP = program === 'prevencion'
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-medium rounded-full ${
      isP ? 'bg-[#1a3a6e]/8 text-[#1a3a6e]' : 'bg-[#c9a96e]/10 text-[#9a7b3a]'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${isP ? 'bg-[#1a3a6e]' : 'bg-[#c9a96e]'}`} />
      {isP ? 'Prevención y Bienestar' : 'Rehabilitación Híbrida'}
    </span>
  )
}

export default function ResultsTab({ isDark: _isDark }: ResultsTabProps) {

  return (
    <div className="bg-[#faf9f7] min-h-screen relative">
      {/* Subtle grid lines background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-[1400px] mx-auto h-full px-6 lg:px-12 flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex-1 border-l border-[#0a1628]/[0.03] first:border-l-0" />
          ))}
          <div className="flex-1 border-l border-r border-[#0a1628]/[0.03]" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative">

        {/* ══════════════════════════════════════ */}
        {/* HEADER                                 */}
        {/* ══════════════════════════════════════ */}
        <section className="mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0a1628]/[0.04] text-[#0a1628]/60 text-[11px] uppercase tracking-[0.15em] font-medium rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a6e]" />
            Medicus · Presentación de resultados 2025
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-[#0a1628] mb-6 max-w-4xl tracking-tight leading-[1.1]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Resultados de los <span className="font-semibold">Pilotos</span>
          </motion.h2>
        </section>


        {/* ══════════════════════════════════════ */}
        {/* 01 — CONTEXTO DEL PILOTO               */}
        {/* ══════════════════════════════════════ */}
        <SectionHeader number="01" title="Contexto del piloto" />

        <div className="grid lg:grid-cols-2 gap-6 mb-24">
          {/* Prevención y Bienestar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1a3a6e] via-[#1a3a6e]/60 to-transparent" />
            <ProgramBadge program="prevencion" />
            <div className="mt-8 space-y-5">
              {[
                { icon: <Building2 size={16} />, label: 'Plan', value: 'Colectivos' },
                { icon: <Users size={16} />, label: 'Población objetivo', value: '600 colaboradores de Medicus' },
                { icon: <Monitor size={16} />, label: 'Plataforma digital', value: 'Estar Bien' },
                { icon: <Calendar size={16} />, label: 'Duración', value: '2,5 meses' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1a3a6e]/[0.06] flex items-center justify-center text-[#1a3a6e] flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#0a1628]/35 font-medium block">{item.label}</span>
                    <span className="text-[#0a1628] text-[15px] font-medium">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rehabilitación Híbrida */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c9a96e] via-[#c9a96e]/60 to-transparent" />
            <ProgramBadge program="rehabilitacion" />
            <div className="mt-8 space-y-5">
              {[
                { icon: <Building2 size={16} />, label: 'Plan', value: 'Salud Individual' },
                { icon: <Stethoscope size={16} />, label: 'Población objetivo', value: '15 kinesiólogos prestadores de la red + Afiliados bajo tratamiento kinesiológico' },
                { icon: <Monitor size={16} />, label: 'Plataforma digital', value: 'FisifyStudio' },
                { icon: <Calendar size={16} />, label: 'Duración', value: '2 meses' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#c9a96e]/[0.08] flex items-center justify-center text-[#c9a96e] flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#0a1628]/35 font-medium block">{item.label}</span>
                    <span className="text-[#0a1628] text-[15px] font-medium">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


        {/* ══════════════════════════════════════ */}
        {/* 02 — OBJETIVOS DEL PILOTO              */}
        {/* ══════════════════════════════════════ */}
        <SectionHeader number="02" title="Objetivos del piloto" />

        <div className="grid lg:grid-cols-2 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10"
          >
            <ProgramBadge program="prevencion" />
            <div className="mt-8 space-y-4">
              {[
                { icon: <Target size={16} />, text: 'Validar la adopción de la plataforma por parte de los colaboradores' },
                { icon: <Heart size={16} />, text: 'Medir el impacto en salud y bienestar de la población objetivo' },
                { icon: <Star size={16} />, text: 'Evaluar la satisfacción y experiencia del usuario' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#1a3a6e]/[0.03]"
                >
                  <div className="w-7 h-7 rounded-full bg-[#1a3a6e]/10 flex items-center justify-center text-[#1a3a6e] flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-[#0a1628]/70 text-sm font-light leading-relaxed">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10"
          >
            <ProgramBadge program="rehabilitacion" />
            <div className="mt-8 space-y-4">
              {[
                { icon: <UserCheck size={16} />, text: 'Validar la adopción por parte de los profesionales de la red prestacional' },
                { icon: <TrendingUp size={16} />, text: 'Mejorar la accesibilidad al servicio para los afiliados en tratamiento' },
                { icon: <Star size={16} />, text: 'Evaluar la satisfacción del afiliado con el nuevo modelo de atención' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#c9a96e]/[0.04]"
                >
                  <div className="w-7 h-7 rounded-full bg-[#c9a96e]/10 flex items-center justify-center text-[#c9a96e] flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-[#0a1628]/70 text-sm font-light leading-relaxed">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


        {/* ══════════════════════════════════════ */}
        {/* 03 — RESULTADOS OBTENIDOS              */}
        {/* ══════════════════════════════════════ */}
        <SectionHeader number="03" title="Resultados obtenidos" />

        <div className="grid lg:grid-cols-2 gap-6 mb-24">
          {/* Prevención y Bienestar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 relative overflow-hidden border border-[#1a3a6e]/10 h-full">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1a3a6e 0%, transparent 70%)' }} />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a3a6e]/8 text-[#1a3a6e] text-[10px] uppercase tracking-[0.15em] font-medium rounded-full mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a6e]" />
                  Programa 01
                </span>
                <h4 className="text-xl font-semibold text-[#0a1628] tracking-tight mb-1">Prevención y Bienestar</h4>
                <p className="text-[#0a1628]/30 text-xs mb-8">Datos 2025 — Póliza de salud – Prevención</p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: '160', label: 'Usuarios activos', icon: <Users size={16} /> },
                    { value: '768', label: 'Logins', icon: <LogIn size={16} /> },
                    { value: '9.82/10', label: 'Satisfacción', icon: <Star size={16} /> },
                    { value: '548', label: 'Sesiones completadas', icon: <CheckCircle2 size={16} /> },
                    { value: '2,344', label: 'Ejercicios', icon: <Dumbbell size={16} /> },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-[#1a3a6e]/[0.04] rounded-2xl p-4 border border-[#1a3a6e]/[0.06]"
                    >
                      <div className="text-[#1a3a6e]/50 mb-2">{stat.icon}</div>
                      <div className="text-[#0a1628] text-2xl font-bold tracking-tight">{stat.value}</div>
                      <span className="text-[#0a1628]/30 text-[10px] uppercase tracking-[0.1em] mt-0.5 block">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rehabilitación Híbrida */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 relative overflow-hidden border border-[#c9a96e]/10 h-full">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #c9a96e 0%, transparent 70%)' }} />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a96e]/10 text-[#9a7b3a] text-[10px] uppercase tracking-[0.15em] font-medium rounded-full mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                  Programa 02
                </span>
                <h4 className="text-xl font-semibold text-[#0a1628] tracking-tight mb-1">Rehabilitación Híbrida</h4>
                <p className="text-[#0a1628]/30 text-xs mb-8">Datos — Programa de Rehabilitación Híbrida</p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: '4', label: 'Kinesiólogos activos', icon: <Stethoscope size={16} /> },
                    { value: '35', label: 'Pacientes activados', icon: <UserCheck size={16} /> },
                    { value: '186', label: 'Sesiones', icon: <Activity size={16} /> },
                    { value: '6.64', label: 'Sesiones por paciente', icon: <TrendingUp size={16} /> },
                    { value: '9.18/10', label: 'Satisfacción', icon: <Star size={16} /> },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-[#c9a96e]/[0.04] rounded-2xl p-4 border border-[#c9a96e]/[0.06]"
                    >
                      <div className="text-[#c9a96e]/50 mb-2">{stat.icon}</div>
                      <div className="text-[#0a1628] text-2xl font-bold tracking-tight">{stat.value}</div>
                      <span className="text-[#0a1628]/30 text-[10px] uppercase tracking-[0.1em] mt-0.5 block">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* ══════════════════════════════════════ */}
        {/* 04 — CONCLUSIONES POR PROGRAMA         */}
        {/* ══════════════════════════════════════ */}
        <SectionHeader number="04" title="Conclusiones por programa" />

        {/* ── Prevención y Bienestar ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ProgramBadge program="prevencion" />
          </div>

          {/* Conclusión 1: Adopción — with adoption curve data */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 mb-4"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1a3a6e]/[0.06] flex items-center justify-center text-[#1a3a6e] mb-5">
                  <Target size={20} />
                </div>
                <h5 className="text-lg font-semibold text-[#0a1628] mb-3">Adopción y uso de la plataforma</h5>
                <p className="text-[#0a1628]/50 text-sm font-light leading-relaxed">
                  La continuidad en el uso más allá del impulso inicial de lanzamiento indica que los colaboradores encontraron valor real en los contenidos, un indicador determinante para escalar cualquier programa de bienestar dentro de una organización.
                </p>
              </div>
              {/* Adoption curve mini-chart */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-xs text-[#0a1628]/35 uppercase tracking-[0.1em]">Curva de adopción</p>
                  <span className="px-2.5 py-1 bg-[#0a1628]/[0.04] text-[#0a1628]/50 text-[9px] uppercase tracking-wider rounded-full">6 semanas</span>
                </div>
                <div className="flex items-end justify-between gap-3 h-32">
                  {[
                    { week: 'S1', percent: 28 },
                    { week: 'S2', percent: 49 },
                    { week: 'S3', percent: 64 },
                    { week: 'S4', percent: 78 },
                    { week: 'S5', percent: 91 },
                    { week: 'S6', percent: 100 },
                  ].map((item, i) => (
                    <div key={item.week} className="flex-1 flex flex-col items-center h-full">
                      <div className="flex-1 w-full flex items-end">
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ duration: 0.6, delay: i * 0.08 }}
                          viewport={{ once: true }}
                          style={{ height: `${item.percent}%`, transformOrigin: 'bottom' }}
                          className="w-full bg-gradient-to-t from-[#1a3a6e] to-[#3d5a8a] rounded-md"
                        />
                      </div>
                      <span className="text-[10px] text-[#0a1628]/25 mt-2 font-medium">{item.week}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-baseline justify-between mt-4 pt-3 border-t border-[#0a1628]/[0.04]">
                  <span className="text-2xl font-bold text-[#1a3a6e] tracking-tight">160</span>
                  <span className="text-xs text-[#0a1628]/35">usuarios activos</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conclusión 2: Impacto — with session/exercise metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 mb-4"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1a3a6e]/[0.06] flex items-center justify-center text-[#1a3a6e] mb-5">
                  <Heart size={20} />
                </div>
                <h5 className="text-lg font-semibold text-[#0a1628] mb-3">Impacto en salud y prevención</h5>
                <p className="text-[#0a1628]/50 text-sm font-light leading-relaxed">
                  El volumen de sesiones realizadas y el tiempo acumulado en movimiento evidencian una exposición continuada a ejercicio terapéutico y preventivo, factor clave para la reducción de molestias musculoesqueléticas y la promoción de hábitos saludables.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '548', label: 'Sesiones completadas' },
                  { value: '2,344', label: 'Ejercicios' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                    viewport={{ once: true }}
                    className="bg-[#1a3a6e]/[0.04] rounded-2xl p-5 text-center"
                  >
                    <span className="text-2xl font-bold text-[#1a3a6e] block tracking-tight">{stat.value}</span>
                    <span className="text-[10px] text-[#0a1628]/35 uppercase tracking-[0.1em] mt-1 block">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Conclusión 3: Satisfacción — with satisfaction bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1a3a6e]/[0.06] flex items-center justify-center text-[#1a3a6e] mb-5">
                  <Star size={20} />
                </div>
                <h5 className="text-lg font-semibold text-[#0a1628] mb-3">Satisfacción del colaborador</h5>
                <p className="text-[#0a1628]/50 text-sm font-light leading-relaxed">
                  Una satisfacción de 9,82/10 correlacionada con el uso real indica que el valor percibido es funcional y no meramente emocional.
                </p>
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs text-[#0a1628]/35 uppercase tracking-[0.1em]">Satisfacción</span>
                  <span className="text-3xl font-bold text-[#1a3a6e] tracking-tight">9.82<span className="text-base text-[#0a1628]/25 font-normal">/10</span></span>
                </div>
                <div className="h-4 bg-[#f5f3f0] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '98.2%' }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-[#1a3a6e] rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Rehabilitación Híbrida ── */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <ProgramBadge program="rehabilitacion" />
          </div>

          {/* Conclusión 1: Adopción profesionales — with kinesiólogos metric */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 mb-4"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/[0.08] flex items-center justify-center text-[#c9a96e] mb-5">
                  <ClipboardList size={20} />
                </div>
                <h5 className="text-lg font-semibold text-[#0a1628] mb-3">Adopción por parte de los profesionales</h5>
                <p className="text-[#0a1628]/50 text-sm font-light leading-relaxed">
                  La adopción de nuevas herramientas digitales en la práctica clínica es un proceso gradual que requiere acompañamiento, tiempo de adaptación y una propuesta de valor clara para el profesional.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-[#c9a96e]/[0.06] flex items-center justify-center mx-auto mb-3">
                    <span className="text-4xl font-bold text-[#c9a96e] tracking-tight">4</span>
                  </div>
                  <span className="text-xs text-[#0a1628]/35 uppercase tracking-[0.1em]">Kinesiólogos activos</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conclusión 2: Accesibilidad — with activation donut */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 mb-4"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/[0.08] flex items-center justify-center text-[#c9a96e] mb-5">
                  <TrendingUp size={20} />
                </div>
                <h5 className="text-lg font-semibold text-[#0a1628] mb-3">Accesibilidad y adherencia del afiliado</h5>
                <p className="text-[#0a1628]/50 text-sm font-light leading-relaxed">
                  La alta tasa de activación y la adherencia registrada confirman que el modelo híbrido reduce de manera efectiva las barreras de acceso al tratamiento rehabilitador, facilitando la continuidad del cuidado más allá del consultorio.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f5f3f0" strokeWidth="10" />
                    <motion.circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#c9a96e"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 * 0.2 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-[#0a1628]">80%</span>
                  </div>
                </div>
                <div className="text-center mt-3 space-y-1">
                  <span className="text-xs text-[#0a1628]/35">28 de 35 pacientes activados</span>
                  <div className="flex items-center gap-4 justify-center">
                    <div className="text-center">
                      <span className="text-lg font-bold text-[#c9a96e]">186</span>
                      <span className="text-[10px] text-[#0a1628]/30 block uppercase tracking-wider">sesiones</span>
                    </div>
                    <div className="w-px h-6 bg-[#0a1628]/[0.06]" />
                    <div className="text-center">
                      <span className="text-lg font-bold text-[#c9a96e]">6.64</span>
                      <span className="text-[10px] text-[#0a1628]/30 block uppercase tracking-wider">ses/pac</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conclusión 3: Satisfacción — with satisfaction bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/[0.08] flex items-center justify-center text-[#c9a96e] mb-5">
                  <Award size={20} />
                </div>
                <h5 className="text-lg font-semibold text-[#0a1628] mb-3">Satisfacción del afiliado</h5>
                <p className="text-[#0a1628]/50 text-sm font-light leading-relaxed">
                  Este grado de aceptación respalda la viabilidad del formato como complemento de la atención presencial, al tiempo que refuerza la propuesta de valor de Medicus en la gestión de la salud de sus afiliados.
                </p>
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs text-[#0a1628]/35 uppercase tracking-[0.1em]">Satisfacción</span>
                  <span className="text-3xl font-bold text-[#c9a96e] tracking-tight">9.18<span className="text-base text-[#0a1628]/25 font-normal">/10</span></span>
                </div>
                <div className="h-4 bg-[#f5f3f0] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '91.8%' }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-[#c9a96e] rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* ══════════════════════════════════════ */}
        {/* 05 — APRENDIZAJES ESTRATÉGICOS         */}
        {/* ══════════════════════════════════════ */}
        <SectionHeader
          number="05"
          title="Aprendizajes estratégicos"
          subtitle="Los pilotos dejan tres certezas que orientan la hoja de ruta conjunta."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Adopción validada',
              desc: 'Los asegurados de Medicus integran la solución en su día a día.',
              icon: <Zap size={24} />,
              gradient: 'from-[#1a3a6e] to-[#2a4a7e]',
            },
            {
              num: '02',
              title: 'Valor en salud',
              desc: 'Es posible activar hábitos saludables de forma digital.',
              icon: <Heart size={24} />,
              gradient: 'from-[#c9a96e] to-[#d4b87e]',
            },
            {
              num: '03',
              title: 'Satisfacción excepcional',
              desc: 'Puntuaciones 9+/10 reflejan el estándar Medicus.',
              icon: <Lightbulb size={24} />,
              gradient: 'from-[#4caf50] to-[#66bb6a]',
            },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 relative overflow-hidden min-h-[220px] flex flex-col"
            >
              <span className="text-[6rem] font-bold text-[#0a1628]/[0.03] absolute -top-2 right-4 leading-none select-none">{item.num}</span>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-5`}>
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-[#0a1628] mb-2">{item.title}</h4>
              <p className="text-[#0a1628]/50 text-sm font-light leading-relaxed flex-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer mark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-[#0a1628]/[0.06] flex items-center justify-between"
        >
          <span className="text-[11px] text-[#0a1628]/25 tracking-[0.15em] uppercase">Fisify · Medicus</span>
          <span className="text-[11px] text-[#0a1628]/25 tracking-[0.15em] uppercase">Resultados confidenciales · 2025</span>
        </motion.div>

      </div>
    </div>
  )
}

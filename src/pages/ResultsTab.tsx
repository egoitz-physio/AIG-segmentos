import { motion } from 'framer-motion'
import { Users, LogIn, Star, Activity, Dumbbell, CheckCircle2, Stethoscope, UserCheck, ClipboardList, TrendingUp, Heart, Target, Building2, Calendar, Monitor, Lightbulb, Zap, Award } from 'lucide-react'

interface ResultsTabProps {
  isDark: boolean
  clientName?: string
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

export default function ResultsTab({ isDark: _isDark, clientName = 'Medicus' }: ResultsTabProps) {

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
            {clientName} · Presentación de resultados 2025
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
                { icon: <Users size={16} />, label: 'Población objetivo', value: `600 colaboradores de ${clientName}` },
                { icon: <Monitor size={16} />, label: 'Plataforma digital', value: 'Fisify' },
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
                { icon: <Monitor size={16} />, label: 'Plataforma digital', value: 'FisifyPro' },
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
        <div
          className="relative overflow-hidden py-24 my-12"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            width: '100vw',
          }}
        >
          {/* Background image */}
          <img
            src="/images/bg-1.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />
          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-[#050d1a]/70" />
          {/* Gradient edges for blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/40 via-transparent to-[#050d1a]/60" />

          {/* Content constrained */}
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">

            {/* Section header — glass inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium">03</span>
                <div className="flex-1 border-t border-white/[0.08]" />
              </div>
              <h3
                className="text-3xl md:text-4xl font-light text-white tracking-tight"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Resultados obtenidos
              </h3>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Prevención y Bienestar — Glass card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div
                  className="rounded-3xl p-8 lg:p-10 relative overflow-hidden h-full border border-white/[0.12]"
                  style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
                >
                  {/* Subtle warm glow */}
                  <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(26,58,110,0.6) 0%, transparent 70%)' }} />

                  <div className="relative">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.08] border border-white/[0.1] text-white/80 text-[10px] uppercase tracking-[0.15em] font-medium rounded-full mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6b9fff]" />
                      Programa 01
                    </span>
                    <h4 className="text-xl font-semibold text-white tracking-tight mb-1">Prevención y Bienestar</h4>
                    <p className="text-white/35 text-xs mb-8">Datos 2025 — Póliza de salud – Prevención</p>

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
                          transition={{ delay: i * 0.06 }}
                          viewport={{ once: true }}
                          className="rounded-2xl p-4 border border-white/[0.08]"
                          style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
                        >
                          <div className="text-[#6b9fff] mb-2">{stat.icon}</div>
                          <div className="text-white text-2xl font-bold tracking-tight">{stat.value}</div>
                          <span className="text-white/60 text-[10px] uppercase tracking-[0.1em] mt-0.5 block">{stat.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Rehabilitación Híbrida — Glass card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="rounded-3xl p-8 lg:p-10 relative overflow-hidden h-full border border-white/[0.12]"
                  style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
                >
                  {/* Subtle warm glow */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-25 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.5) 0%, transparent 70%)' }} />

                  <div className="relative">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.08] border border-white/[0.1] text-white/80 text-[10px] uppercase tracking-[0.15em] font-medium rounded-full mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e8c87a]" />
                      Programa 02
                    </span>
                    <h4 className="text-xl font-semibold text-white tracking-tight mb-1">Rehabilitación Híbrida</h4>
                    <p className="text-white/35 text-xs mb-8">Datos — Programa de Rehabilitación Híbrida</p>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: '4', label: 'Kinesiólogos activos', icon: <Stethoscope size={16} /> },
                        { value: '35', label: 'Pacientes invitados', icon: <UserCheck size={16} /> },
                        { value: '186', label: 'Sesiones', icon: <Activity size={16} /> },
                        { value: '6.64', label: 'Sesiones por paciente', icon: <TrendingUp size={16} /> },
                        { value: '9.18/10', label: 'Satisfacción', icon: <Star size={16} /> },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.06 }}
                          viewport={{ once: true }}
                          className="rounded-2xl p-4 border border-white/[0.08]"
                          style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
                        >
                          <div className="text-[#e8c87a] mb-2">{stat.icon}</div>
                          <div className="text-white text-2xl font-bold tracking-tight">{stat.value}</div>
                          <span className="text-white/60 text-[10px] uppercase tracking-[0.1em] mt-0.5 block">{stat.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>


        {/* ══════════════════════════════════════ */}
        {/* 04 — CONCLUSIONES POR PROGRAMA         */}
        {/* ══════════════════════════════════════ */}
        <SectionHeader number="04" title="Conclusiones por programa" />

        <div className="grid lg:grid-cols-2 gap-6 mb-24">
          {/* ── Prevención y Bienestar ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1a3a6e] via-[#1a3a6e]/60 to-transparent" />
            <ProgramBadge program="prevencion" />

            {/* Adopción */}
            <div className="mt-8 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#1a3a6e]/[0.06] flex items-center justify-center text-[#1a3a6e] mb-4">
                <Target size={18} />
              </div>
              <h5 className="text-base font-semibold text-[#0a1628] mb-2">Adopción y uso</h5>
              <p className="text-[#0a1628]/50 text-sm font-light leading-relaxed mb-5">
                Continuidad en el uso más allá del impulso inicial. Los colaboradores encontraron valor real en los contenidos.
              </p>
              {/* Usage graph */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden bg-[#faf9f7] border border-[#0a1628]/[0.04] p-3"
              >
                <p className="text-[9px] text-[#0a1628]/30 uppercase tracking-[0.1em] mb-2">Uso recurrente semanal</p>
                <img
                  src="/images/grafico_escalado.webp"
                  alt="Gráfico de uso recurrente"
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="flex items-baseline justify-between pt-3 mt-3 border-t border-[#0a1628]/[0.04]">
                <span className="text-xl font-bold text-[#1a3a6e] tracking-tight">160</span>
                <span className="text-[10px] text-[#0a1628]/30 uppercase tracking-wider">usuarios activos</span>
              </div>
            </div>

            {/* Impacto */}
            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#1a3a6e]/[0.06] flex items-center justify-center text-[#1a3a6e] mb-4">
                <Heart size={18} />
              </div>
              <h5 className="text-base font-semibold text-[#0a1628] mb-3">Impacto en salud</h5>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '548', label: 'Sesiones' },
                  { value: '2,344', label: 'Ejercicios' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="bg-[#1a3a6e]/[0.04] rounded-2xl p-4 text-center"
                  >
                    <span className="text-xl font-bold text-[#1a3a6e] block tracking-tight">{stat.value}</span>
                    <span className="text-[9px] text-[#0a1628]/30 uppercase tracking-[0.1em] mt-0.5 block">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Satisfacción */}
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1a3a6e]/[0.06] flex items-center justify-center text-[#1a3a6e] mb-4">
                <Star size={18} />
              </div>
              <h5 className="text-base font-semibold text-[#0a1628] mb-3">Satisfacción</h5>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-[10px] text-[#0a1628]/30 uppercase tracking-[0.1em]">NPS</span>
                <span className="text-2xl font-bold text-[#1a3a6e] tracking-tight">9.82<span className="text-sm text-[#0a1628]/25 font-normal">/10</span></span>
              </div>
              <div className="h-3 bg-[#f5f3f0] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '98.2%' }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-[#1a3a6e] rounded-full"
                />
              </div>
              <p className="text-[#0a1628]/40 text-xs font-light mt-3">
                El valor percibido es funcional y no meramente emocional.
              </p>
            </div>
          </motion.div>

          {/* ── Rehabilitación Híbrida ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c9a96e] via-[#c9a96e]/60 to-transparent" />
            <ProgramBadge program="rehabilitacion" />

            {/* Adopción profesionales */}
            <div className="mt-8 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/[0.08] flex items-center justify-center text-[#c9a96e] mb-4">
                <ClipboardList size={18} />
              </div>
              <h5 className="text-base font-semibold text-[#0a1628] mb-2">Adopción profesional</h5>
              <p className="text-[#0a1628]/50 text-sm font-light leading-relaxed mb-5">
                La adopción de herramientas digitales en la práctica clínica requiere acompañamiento y una propuesta de valor clara.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#c9a96e]/[0.06] flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#c9a96e] tracking-tight">4</span>
                </div>
                <span className="text-xs text-[#0a1628]/35 uppercase tracking-[0.1em]">Kinesiólogos<br />activos</span>
              </div>
            </div>

            {/* Accesibilidad y adherencia */}
            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/[0.08] flex items-center justify-center text-[#c9a96e] mb-4">
                <TrendingUp size={18} />
              </div>
              <h5 className="text-base font-semibold text-[#0a1628] mb-3">Accesibilidad y adherencia</h5>
              <div className="flex items-center gap-6">
                {/* Donut */}
                <div className="relative w-24 h-24 flex-shrink-0">
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-[#0a1628]">80%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] text-[#0a1628]/35 block">28 de 35 pacientes activados</span>
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="text-lg font-bold text-[#c9a96e]">186</span>
                      <span className="text-[9px] text-[#0a1628]/25 block uppercase tracking-wider">sesiones</span>
                    </div>
                    <div className="w-px h-5 bg-[#0a1628]/[0.06]" />
                    <div>
                      <span className="text-lg font-bold text-[#c9a96e]">6.64</span>
                      <span className="text-[9px] text-[#0a1628]/25 block uppercase tracking-wider">ses/pac</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Satisfacción */}
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/[0.08] flex items-center justify-center text-[#c9a96e] mb-4">
                <Award size={18} />
              </div>
              <h5 className="text-base font-semibold text-[#0a1628] mb-3">Satisfacción</h5>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-[10px] text-[#0a1628]/30 uppercase tracking-[0.1em]">NPS</span>
                <span className="text-2xl font-bold text-[#c9a96e] tracking-tight">9.18<span className="text-sm text-[#0a1628]/25 font-normal">/10</span></span>
              </div>
              <div className="h-3 bg-[#f5f3f0] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '91.8%' }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-[#c9a96e] rounded-full"
                />
              </div>
              <p className="text-[#0a1628]/40 text-xs font-light mt-3">
                Respalda la viabilidad del formato como complemento de la atención presencial.
              </p>
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

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              num: '01',
              title: 'Prevención y bienestar: adopción y valor demostrado',
              desc: 'El modelo encaja en el día a día del asegurado como herramienta preventiva y de bienestar, con un uso recurrente y una valoración muy positiva por parte de los colaboradores.',
              aprendizaje: 'Para sostener la adopción y mantener ratios de hábitos en el piloto, es necesario activar campañas constantes, junto con estrategias de gamificación que impulsen una alta adherencia y refuercen el uso periódico.',
              icon: <Zap size={20} />,
              bg: '/images/bg-gradient-3.jpeg',
            },
            {
              num: '02',
              title: 'Rehabilitación de pacientes: buena aceptación y adherencia',
              desc: 'Los pacientes se activan, muestran una elevada satisfacción. El modelo híbrido mejora la accesibilidad y la adherencia al tratamiento.',
              aprendizaje: 'Es clave reforzar el seguimiento y la personalización del tratamiento, combinando el soporte digital con puntos de contacto clínico, para maximizar la adherencia sostenida y asegurar mejores resultados en la recuperación.',
              icon: <Heart size={20} />,
              bg: '/images/bg-gradient-2.png',
            },
            {
              num: '03',
              title: 'Adopción de fisioterapeutas: principal palanca de escalado',
              desc: 'El modelo es clínicamente viable, pero la adopción profesional requiere acciones específicas.',
              aprendizaje: 'Es clave trabajar la integración y el acompañamiento al fisioterapeuta: diseñar un plan para la adopción con incentivos, acciones formativas, seguimiento exhaustivo y soporte continuo para un uso recurrente en la práctica clínica.',
              icon: <Lightbulb size={20} />,
              bg: '/images/bg-gradient-5.png',
            },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden flex flex-col"
            >
              {/* Gradient background image — visible as top strip */}
              <div className="relative h-40 overflow-hidden flex-shrink-0">
                <img
                  src={item.bg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                />
                {/* Number overlay on gradient */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-[7rem] font-bold text-white/[0.12] leading-none select-none"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {item.num}
                  </span>
                </div>
                {/* Bottom fade into white */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* White content area */}
              <div className="relative flex flex-col flex-1 bg-white px-7 pb-7 lg:px-8 lg:pb-8 -mt-4">
                {/* Icon badge */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 -mt-5 shadow-md bg-white">
                  <span className="text-[#0a1628]/30">{item.icon}</span>
                </div>

                {/* Title */}
                <h4
                  className="text-lg font-semibold text-[#0a1628] tracking-tight leading-snug mb-3"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[#0a1628]/55 text-sm font-light leading-relaxed mb-auto">
                  {item.desc}
                </p>

                {/* Aprendizaje box */}
                <div className="mt-6 rounded-2xl p-5 bg-[#0a1628]/[0.03] border border-[#0a1628]/[0.06]">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-semibold mb-2.5 block text-[#c9a96e]">
                    Aprendizaje
                  </span>
                  <p className="text-[#0a1628]/70 text-[13px] font-light leading-relaxed">{item.aprendizaje}</p>
                </div>
              </div>
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
          <span className="text-[11px] text-[#0a1628]/25 tracking-[0.15em] uppercase">Fisify · {clientName}</span>
          <span className="text-[11px] text-[#0a1628]/25 tracking-[0.15em] uppercase">Resultados confidenciales · 2025</span>
        </motion.div>

      </div>
    </div>
  )
}

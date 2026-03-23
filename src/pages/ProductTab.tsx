import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Scan, Eye, User, Play, X } from 'lucide-react'

interface ProductTabProps {
  isDark: boolean
  clientName?: string
}

/* ─── Fade-in wrapper with stagger ─── */
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

export default function ProductTab({ isDark }: ProductTabProps) {
  const [showVideo, setShowVideo] = useState<string | null>(null)

  const textMain = isDark ? 'text-cream' : 'text-[#0a1628]'
  const textMuted = isDark ? 'text-cream/40' : 'text-[#0a1628]/50'
  const textAccent = isDark ? 'text-accent' : 'text-[#1a3a6e]'
  const borderColor = isDark ? 'border-white/[0.04]' : 'border-black/[0.04]'
  const cardBg = isDark ? 'bg-[#0d1a2e]/60' : 'bg-white/80'

  /* ══════════════════════════════════════════════════════ */
  /*  TIMELINE DATA                                        */
  /* ══════════════════════════════════════════════════════ */
  const timeline = [
    {
      quarter: 'Q3 2025',
      subtitle: 'Base clínica y personalización inicial',
      status: 'complete' as const,
      features: [
        { name: 'Triage inicial y diseño de planes personalizados', detail: '' },
        { name: 'Primer modelo de acompañamiento según perfil, dolor y objetivo', detail: '' },
      ],
    },
    {
      quarter: 'Q4 2025',
      subtitle: 'Expansión hacia prevención contextual y hábitos de salud',
      status: 'complete' as const,
      features: [
        { name: 'FisifyWork', detail: 'Para prevenir lesiones en el entorno laboral' },
        { name: 'FisifySport', detail: 'Para práctica deportiva más segura' },
        { name: 'Píldoras diarias de salud', detail: 'Para reforzar hábitos y prevención cotidiana' },
      ],
    },
    {
      quarter: 'Q1 2026',
      subtitle: 'Acompañamiento humano, adherencia y continuidad',
      status: 'current' as const,
      features: [
        { name: 'FisifyOne 1:1 con kinesiólogo asignado', detail: '' },
        { name: 'Chat directo y seguimiento semanal proactivo', detail: '' },
        { name: 'Gamificación e incentivos', detail: 'Para reforzar adherencia sostenida' },
      ],
    },
  ]

  /* ══════════════════════════════════════════════════════ */
  /*  KEY DEVELOPMENTS DATA                                */
  /* ══════════════════════════════════════════════════════ */
  const developments = [
    {
      num: '01',
      icon: <User size={20} strokeWidth={1.5} />,
      title: 'One-to-One',
      subtitle: 'Bienestar digital con enfoque humano',
      body: 'Incorporamos un modelo de acompañamiento individual donde cada afiliado cuenta con un fisioterapeuta asignado desde el inicio. El profesional realiza una valoración inicial, define objetivos (prevención, fortalecimiento o alivio del dolor) y diseña un plan de ejercicios totalmente personalizado. Además, realiza un seguimiento continuo mediante chat, WhatsApp o llamada.',
      process: ['Evaluación', 'Definición de objetivos', 'Plan personalizado', 'Seguimiento continuo'],
      images: ['/images/onetoone1.webp', '/images/onetoone2.webp'],
    },
    {
      num: '02',
      icon: <Scan size={20} strokeWidth={1.5} />,
      title: 'BodyOS',
      subtitle: 'Inteligencia para la prevención personalizada',
      body: 'BodyOS permite realizar un screening integral del estado físico y funcional del afiliado, combinando tests de movilidad, fuerza, análisis postural e integración de datos (incluyendo wearables). A partir de esta evaluación, la plataforma identifica riesgos específicos y genera planes de prevención totalmente personalizados, adaptados a las necesidades reales de cada usuario.',
      showcase: ['/images/bodyos1.webp', '/images/bodyos2.webp'],
      video: '/images/testbodyos.mp4',
      video2: '/images/bodyos.mp4',
    },
    {
      num: '03',
      icon: <Eye size={20} strokeWidth={1.5} />,
      title: 'Movimiento guiado con visión artificial',
      subtitle: 'En tiempo real',
      body: 'Incorporamos tecnología de visión artificial y modelos avanzados de aprendizaje capaces de analizar cómo el afiliado realiza los ejercicios en tiempo real. El sistema no solo corrige la ejecución, sino que proporciona un feedback claro y comprensible, explicando los errores, sus posibles causas y cómo mejorarlos. Además, identifica patrones de movimiento, limitaciones o desequilibrios que permiten ajustar automáticamente el programa de ejercicios.',
      showcase: ['/images/vision-ai.png'],
      video: '/images/vision-ai.mp4',
      videoLabel: 'Ver demo',
    },
  ]

  return (
    <div className="relative">
      {/* ══════════════════════════════════════════════════════ */}
      {/*  SECTION 1 — EVOLUCIÓN DEL PRODUCTO                  */}
      {/* ══════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-32">
        {/* Header */}
        <motion.div {...fadeUp} className="mb-14">
          <span className="section-label mb-10 inline-block">Roadmap de producto</span>
          <h2 className={`heading-display text-display-lg max-w-4xl ${textMain}`}>
            Evolucionamos hacia una nueva forma de prevenir, acompañar y escalar salud de calidad
          </h2>
        </motion.div>

        {/* Compact 3-column timeline */}
        <div className={`grid lg:grid-cols-3 gap-px ${isDark ? 'bg-white/[0.03]' : 'bg-black/[0.03]'}`}>
          {timeline.map((phase, phaseIdx) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: phaseIdx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`${cardBg} backdrop-blur-sm relative`}
            >
              {/* Top accent bar */}
              <div className={`h-px ${
                phase.status === 'current'
                  ? isDark ? 'bg-accent' : 'bg-[#1a3a6e]'
                  : isDark ? 'bg-cream/10' : 'bg-[#0a1628]/10'
              }`} />

              <div className="p-8 lg:p-10">
                {/* Quarter header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`font-display text-xl tracking-tight ${
                      phase.status === 'current' ? textAccent : textMain
                    }`}>
                      {phase.quarter}
                    </span>
                    {phase.status === 'current' && (
                      <span className={`relative flex h-2 w-2`}>
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`} />
                      </span>
                    )}
                  </div>
                  {phase.subtitle && (
                    <p className={`text-[13px] font-light leading-relaxed ${textMuted}`}>
                      {phase.subtitle}
                    </p>
                  )}
                </div>

                {/* Features list */}
                <div className="space-y-4">
                  {phase.features.map((feature, featureIdx) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: phaseIdx * 0.1 + featureIdx * 0.05 + 0.15 }}
                      viewport={{ once: true }}
                    >
                      <h4 className={`text-sm font-medium mb-1 ${textMain}`}>
                        {feature.name}
                      </h4>
                      <p className={`text-[13px] font-light leading-relaxed ${textMuted}`}>
                        {feature.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider isDark={isDark} />

      {/* ══════════════════════════════════════════════════════ */}
      {/*  SECTION 2 — DESARROLLOS CLAVE DEL MODELO            */}
      {/* ══════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-12">
          <span className="section-label mb-10 inline-block">Modelo de bienestar</span>
          <h2 className={`heading-display text-display-lg max-w-4xl mb-10 ${textMain}`}>
            Tres capacidades que consolidan el modelo
          </h2>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className={`text-lg lg:text-xl font-light leading-relaxed max-w-3xl mb-32 ${textMuted}`}
        >
          Consolidamos un modelo de salud digital que combina clínica, acompañamiento humano
          y herramientas de adherencia para mejorar resultados y elevar la experiencia del afiliado.
        </motion.p>

        {/* ── DEVELOPMENT BLOCKS ── */}
        {developments.map((dev, devIdx) => (
          <div key={dev.num}>
            {devIdx > 0 && (
              <div className="my-28">
                <Divider isDark={isDark} />
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-80px' }}
            >
              {/* Dev header */}
              <div className="mb-12">
                <span className={`text-[11px] uppercase tracking-[0.3em] block mb-3 ${textAccent}`}>
                  {dev.num}
                </span>
                <h3 className={`heading-display text-display-lg tracking-tight ${textMain}`}>
                  {dev.title}
                </h3>
                <span className={`text-sm font-light mt-2 block ${textMuted}`}>
                  {dev.subtitle}
                </span>
              </div>

              {/* Showcase — full-width product screens */}
              {dev.showcase && (
                <div className="relative -mx-6 lg:-mx-12 mb-16 overflow-hidden">
                  <div className="flex gap-6 px-6 lg:px-12 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
                    {dev.showcase.map((src, i) => (
                      <motion.div
                        key={src}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="snap-center flex-shrink-0 w-[85vw] lg:w-[70vw]"
                      >
                        <div className={`rounded-lg overflow-hidden border ${borderColor} shadow-2xl ${
                          isDark ? 'shadow-black/40' : 'shadow-black/10'
                        }`}>
                          <img
                            src={src}
                            alt={`${dev.title} ${i + 1}`}
                            className="w-full h-auto"
                          />
                        </div>
                      </motion.div>
                    ))}
                    <div className="flex-shrink-0 w-6 lg:w-12" />
                  </div>
                  <div className="px-6 lg:px-12 mt-6 flex items-center gap-6">
                    <span className={`text-[10px] uppercase tracking-[0.2em] ${textMuted}`}>
                      Desliza para explorar
                    </span>
                    {dev.video && (
                      <button
                        onClick={() => setShowVideo(dev.video!)}
                        className={`inline-flex items-center gap-3 px-5 py-2.5 border transition-all duration-300 ${
                          isDark
                            ? 'border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50'
                            : 'border-[#1a3a6e]/30 text-[#1a3a6e] hover:bg-[#1a3a6e]/10 hover:border-[#1a3a6e]/50'
                        }`}
                      >
                        <Play size={14} />
                        <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
                          {dev.videoLabel || 'Ver ejemplo test'}
                        </span>
                      </button>
                    )}
                    {dev.video2 && (
                      <button
                        onClick={() => setShowVideo(dev.video2!)}
                        className={`inline-flex items-center gap-3 px-5 py-2.5 border transition-all duration-300 ${
                          isDark
                            ? 'border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50'
                            : 'border-[#1a3a6e]/30 text-[#1a3a6e] hover:bg-[#1a3a6e]/10 hover:border-[#1a3a6e]/50'
                        }`}
                      >
                        <Play size={14} />
                        <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
                          Ver Ergonomy Analysis
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Body text */}
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
                  className={`text-[15px] font-light leading-[1.85] lg:col-span-7 mb-16 lg:mb-0 ${
                    isDark ? 'text-cream/55' : 'text-[#0a1628]/55'
                  }`}
                >
                  {dev.body}
                </motion.p>

                {/* Process flow — only for development 1 */}
                {dev.process && (
                  <div className="lg:col-span-5">
                    <span className={`text-[10px] uppercase tracking-[0.25em] block mb-6 ${textMuted}`}>
                      Proceso
                    </span>
                    <div className="flex flex-col gap-0">
                      {dev.process.map((step, stepIdx) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: 12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + stepIdx * 0.08 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-4"
                        >
                          <div className="flex flex-col items-center">
                            <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`} />
                            {stepIdx < dev.process!.length - 1 && (
                              <div className={`w-px h-8 ${isDark ? 'bg-accent/20' : 'bg-[#1a3a6e]/20'}`} />
                            )}
                          </div>
                          <span className={`text-sm font-light py-2 ${textMain}`}>
                            {step}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Images — only for developments with images */}
              {dev.images && (
                <div className="grid grid-cols-2 gap-4 mt-16 items-start">
                  {dev.images.map((src, imgIdx) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + imgIdx * 0.1 }}
                      viewport={{ once: true }}
                      className={`border ${borderColor} overflow-hidden`}
                    >
                      <img
                        src={src}
                        alt={`One-to-One ${imgIdx + 1}`}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              )}

            </motion.div>
          </div>
        ))}
      </section>

      <Divider isDark={isDark} />

      {/* ══════════════════════════════════════════════════════ */}
      {/*  SECTION 3 — DESARROLLOS FUTUROS                     */}
      {/* ══════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <motion.div {...fadeUp} className="mb-12">
          <span className="section-label mb-10 inline-block">Horizonte</span>
          <h2 className={`heading-display text-display-lg max-w-3xl mb-10 ${textMain}`}>
            Desarrollos futuros
          </h2>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className={`text-lg lg:text-xl font-light leading-relaxed max-w-3xl mb-20 ${textMuted}`}
        >
          Fisify continúa evolucionando más allá de Q1 2026, incorporando nuevas capacidades
          que refuerzan la humanización del servicio, amplían la cobertura clínica y aumentan
          el impacto en el bienestar de los afiliados.
        </motion.p>

        {/* 3-column roadmap with golden dots */}
        <div className={`grid lg:grid-cols-3 gap-px ${isDark ? 'bg-white/[0.03]' : 'bg-black/[0.03]'}`}>
          {[
            {
              quarter: 'Q2 2026',
              features: [
                { text: 'Visión artificial con modelo 3 Triangles', image: '/images/vision-ai.png' },
                { text: 'BodyOS 1.0 con integración de wearables' },
                { text: 'Mayor humanización del journey del afiliado con kinesiólogos' },
                { text: 'Mejoras continuas en FisifyStudio' },
              ],
            },
            {
              quarter: 'Q3 2026',
              features: [
                { text: 'Ampliación de contenidos: Gym, Respiratorio, Suelo pélvico y más', video: '/images/gym-compressed.mp4' },
                { text: 'Aurya conversacional' },
              ],
            },
            {
              quarter: 'Q4 2026',
              features: [
                { text: 'BodyOS 2.0' },
                { text: 'Algoritmia de Aurya para FisifyStudio' },
                { text: 'Visión artificial en tiempo real' },
              ],
            },
          ].map((phase, phaseIdx) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: phaseIdx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`${cardBg} backdrop-blur-sm relative`}
            >
              {/* Top accent bar — golden */}
              <div className={`h-[2px] ${isDark ? 'bg-accent/30' : 'bg-[#1a3a6e]/30'}`} />

              <div className="p-8 lg:p-10">
                {/* Quarter header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-accent' : 'bg-[#1a3a6e]'}`} />
                  <span className={`font-display text-xl tracking-tight ${textMain}`}>
                    {phase.quarter}
                  </span>
                </div>

                {/* Features list */}
                <div className="space-y-5">
                  {phase.features.map((feature, featureIdx) => (
                    <motion.div
                      key={featureIdx}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: phaseIdx * 0.1 + featureIdx * 0.06 + 0.15 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${isDark ? 'bg-accent/60' : 'bg-[#1a3a6e]/60'}`} />
                        <span className={`text-sm font-light leading-relaxed ${
                          isDark ? 'text-cream/80' : 'text-[#0a1628]/80'
                        }`}>
                          {feature.text}
                        </span>
                      </div>
                      {'image' in feature && feature.image && (
                        <div className={`rounded-lg overflow-hidden border ${borderColor} mt-3 ml-5`}>
                          <img src={(feature as { image: string }).image} alt={feature.text} className="w-full h-auto" />
                        </div>
                      )}
                      {'video' in feature && feature.video && (
                        <div className={`rounded-lg overflow-hidden border ${borderColor} mt-3 ml-5`}>
                          <video src={(feature as { video: string }).video} autoPlay loop muted playsInline className="w-full h-auto" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ */}
      {/*  VIDEO MODAL                                          */}
      {/* ══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            onClick={() => setShowVideo(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowVideo(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2"
              >
                <span className="text-[10px] uppercase tracking-[0.2em]">Cerrar</span>
                <X size={16} />
              </button>

              <div className="rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                <video
                  key={showVideo}
                  src={showVideo}
                  controls
                  autoPlay
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

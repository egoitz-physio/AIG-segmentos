import { motion } from 'framer-motion'

interface ValueTabProps {
  isDark: boolean
  clientName?: string
}

export default function ValueTab({ isDark: _isDark, clientName = 'Medicus' }: ValueTabProps) {
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

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 relative">

        {/* ══════════════════════════════════════ */}
        {/*  HEADER                                */}
        {/* ══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/30 font-medium">Valor estratégico</span>
            <div className="flex-1 border-t border-[#0a1628]/[0.06]" />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-[#0a1628] tracking-tight leading-[1.1] max-w-4xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Tres oportunidades estratégicas
            <br />
            <span className="font-semibold">para redefinir el valor de {clientName}</span>
          </h2>
        </motion.div>

        {/* ══════════════════════════════════════ */}
        {/*  PALANCA 01 — DIFERENCIACIÓN           */}
        {/* ══════════════════════════════════════ */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section number + rule */}
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/30 font-medium">01</span>
              <div className="flex-1 border-t border-[#0a1628]/[0.06]" />
            </div>

            {/* Two-column layout */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left — Title + body */}
              <div className="lg:col-span-7">
                <h3
                  className="text-3xl md:text-4xl font-light text-[#0a1628] tracking-tight mb-8"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  <span className="font-semibold">Diferenciación</span>
                </h3>

                <p className="text-lg text-[#0a1628]/55 font-light leading-[1.8] max-w-xl">
                  Con Fisify reforzaremos una propuesta de salud más preventiva, más moderna y más coherente con una marca que quiere liderar desde la <span className="text-[#1a3a6e] font-medium">calidad y la innovación</span>.
                </p>
              </div>

              {/* Right — What it enables */}
              <div className="lg:col-span-5">
                <div className="border-l-2 border-[#c9a96e]/40 pl-8">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#c9a96e] font-medium block mb-6">
                    Lo que permite
                  </span>

                  <div className="space-y-5">
                    {[
                      'Más valor percibido de la cobertura',
                      'Un posicionamiento más claro frente a otras prepagas',
                      'Una propuesta más tangible para individuales y colectivos',
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a6e]/40 mt-2.5 flex-shrink-0" />
                        <span className="text-[15px] text-[#0a1628]/70 font-light leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════ */}
        {/*  PALANCA 02 — INTERVENCIÓN PREVENTIVA  */}
        {/* ══════════════════════════════════════ */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section number + rule */}
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/30 font-medium">02</span>
              <div className="flex-1 border-t border-[#0a1628]/[0.06]" />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7">
                <h3
                  className="text-3xl md:text-4xl font-light text-[#0a1628] tracking-tight mb-8"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Intervención
                  <br />
                  <span className="font-semibold">preventiva</span>
                </h3>

                <p className="text-lg text-[#0a1628]/55 font-light leading-[1.8] max-w-xl">
                  Acompañar mejor, prevenir más y ayudar al afiliado a tomar decisiones de salud más inteligentes. Eso no solo mejora experiencia. También se traduce en una población más cuidada, menor progresión de episodios leves y más <span className="text-[#1a3a6e] font-medium">continuidad post-consulta</span>.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="border-l-2 border-[#c9a96e]/40 pl-8">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#c9a96e] font-medium block mb-6">
                    Lo que permite
                  </span>

                  <div className="space-y-5">
                    {[
                      'Prevención más visible y continua',
                      'Mejor orientación del afiliado',
                      'Menor recurrencia y mejor adherencia',
                      'Más capacidad para educar en salud y no solo responder a la demanda',
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a6e]/40 mt-2.5 flex-shrink-0" />
                        <span className="text-[15px] text-[#0a1628]/70 font-light leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════ */}
        {/*  PALANCA 03 — RELACIONAMIENTO          */}
        {/* ══════════════════════════════════════ */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section number + rule */}
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/30 font-medium">03</span>
              <div className="flex-1 border-t border-[#0a1628]/[0.06]" />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7">
                <h3
                  className="text-3xl md:text-4xl font-light text-[#0a1628] tracking-tight mb-8"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  <span className="font-semibold">Relacionamiento</span>
                </h3>

                <p className="text-lg text-[#0a1628]/55 font-light leading-[1.8] max-w-xl">
                  Cuando el afiliado incorpora un servicio útil a su rutina, la prepaga deja de ser algo que aparece solo ante un problema. Pasa a ser un <span className="text-[#1a3a6e] font-medium">aliado más activo en su bienestar diario</span>.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="border-l-2 border-[#c9a96e]/40 pl-8">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#c9a96e] font-medium block mb-6">
                    Lo que permite
                  </span>

                  <div className="space-y-5">
                    {[
                      'Más argumentos de retención y captación',
                      'Más frecuencia de interacción',
                      'Más percepción de utilidad de la cobertura',
                      'Más vínculo con la marca',
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a6e]/40 mt-2.5 flex-shrink-0" />
                        <span className="text-[15px] text-[#0a1628]/70 font-light leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  )
}

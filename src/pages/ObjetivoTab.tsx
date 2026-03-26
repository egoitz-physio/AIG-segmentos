import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircleMore, ScanSearch, Sparkles, Video } from 'lucide-react'

interface ObjetivoTabProps {
  isDark: boolean
  clientName?: string
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
}

const humanFeatures = [
  'Videollamadas con fisioterapeutas para valoraciones personalizadas',
  'Chat directo con fisioterapeutas para seguimiento y resolución de dudas',
  'Acompañamiento humano para sostener la adherencia y la confianza',
]

const aiFeatures = [
  'Valoraciones con IA para personalizar la experiencia',
  'Corrección en tiempo real de los ejercicios',
  'Una experiencia digital que combina datos, precisión y cercanía',
]

const useCases = [
  {
    title: 'Prevención',
    body: 'Programas personalizados para anticipar lesiones y mejorar la calidad de vida.',
  },
  {
    title: 'Tratamiento',
    body: 'Acompañamiento digital para dolencias físicas y optimización de la recuperación.',
  },
  {
    title: 'Hábitos',
    body: 'Educación continua y rutinas que refuerzan prácticas saludables sostenidas.',
  },
]

export default function ObjetivoTab({ isDark: _isDark, clientName = 'Prudential' }: ObjetivoTabProps) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      <section className="mb-24">
        <motion.div {...fadeUp} className="mb-10">
          <span className="section-label mb-8 inline-block">Propuesta de colaboración</span>
          <h2 className="heading-display text-display-lg max-w-5xl text-cream">
            Servicio de fisioterapia digital para <span className="text-gradient">{clientName}</span>
          </h2>
          <p className="text-lg lg:text-xl font-light leading-relaxed max-w-4xl mt-6 text-cream/65">
            La plataforma líder de fisioterapia digital que fusiona la IA con la cercanía humana.
            Fisify personaliza la experiencia y el equipo de fisioterapeutas acompaña a cada persona.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div {...fadeUp} transition={{ delay: 0.05 }} className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-7 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff]">
                <Video size={18} />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">Humano</div>
                <div className="text-sm text-cream/45 font-light">La cercanía que sostiene la adherencia</div>
              </div>
            </div>
            <div className="space-y-4">
              {humanFeatures.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#09162a]/60 px-4 py-3">
                  <CheckCircle2 size={16} className="text-[#9cc2ff] mt-0.5 shrink-0" />
                  <span className="text-sm lg:text-[15px] text-cream/75 font-light leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-7 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff]">
                <ScanSearch size={18} />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">IA</div>
                <div className="text-sm text-cream/45 font-light">Precisión y personalización en cada sesión</div>
              </div>
            </div>
            <div className="space-y-4">
              {aiFeatures.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#09162a]/60 px-4 py-3">
                  <Sparkles size={16} className="text-[#9cc2ff] mt-0.5 shrink-0" />
                  <span className="text-sm lg:text-[15px] text-cream/75 font-light leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mb-24">
        <div className="flex items-center gap-5 mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50 font-medium">01</span>
          <div className="flex-1 h-px bg-cream/[0.08]" />
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-[2.8rem] font-light text-cream tracking-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Desde la prevención hasta el tratamiento
        </h3>
        <p className="text-lg text-cream/60 font-light max-w-3xl mb-10">
          Una solución 360º para una vida activa y sin dolor.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {useCases.map((item, index) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-white/8 bg-[#0d1a2e]/70 p-6"
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#9cc2ff] font-medium mb-3">
                Caso de uso
              </div>
              <h4 className="text-xl font-medium text-cream mb-3">{item.title}</h4>
              <p className="text-sm text-cream/65 font-light leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <div className="rounded-[2rem] border border-[#9cc2ff]/15 bg-gradient-to-r from-[#0d1a2e] via-[#0d1a2e] to-[#10264b] p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#9cc2ff]/12 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff] flex-shrink-0">
              <MessageCircleMore size={20} />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#9cc2ff] font-medium mb-3">
                Conclusión estratégica
              </div>
              <h4 className="text-2xl lg:text-3xl font-light text-cream tracking-tight">
              Fisify convierte la fisioterapia digital en un servicio que el asegurado entiende, usa y valora en su día a día.
              </h4>
              <p className="text-cream/60 font-light leading-relaxed mt-4 max-w-4xl">
                La combinación de videollamadas, chat, corrección en tiempo real y valoraciones con IA crea una experiencia más humana,
                más precisa y más consistente con la promesa de cuidado de {clientName}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

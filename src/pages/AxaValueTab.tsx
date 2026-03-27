import { motion } from 'framer-motion'
import { BarChart3, HeartHandshake, MessageSquareMore, Shield, Smartphone } from 'lucide-react'

interface ValueTabProps {
  isDark: boolean
  clientName?: string
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
}

const valueCards = [
  {
    icon: <Shield size={18} />,
    title: 'AXA Keralty',
    items: [
      'Diferenciación frente a otros seguros similares.',
      'Mejora en venta y retención de pólizas.',
      'Potencial reducción de siniestralidad.',
    ],
  },
  {
    icon: <Smartphone size={18} />,
    title: 'Canales digitales',
    items: [
      'Tangibiliza el valor del seguro en el día a día.',
      'Impulsa el uso de la app y el ecosistema.',
      'Refuerza una propuesta útil, recurrente y preventiva.',
    ],
  },
  {
    icon: <HeartHandshake size={18} />,
    title: 'Asegurados',
    items: [
      'Mejor NPS y percepción de cuidado.',
      'Atención más humana y más accesible.',
      'Una experiencia de salud que acompaña de verdad.',
    ],
  },
]

export default function AxaValueTab({ isDark: _isDark, clientName = 'AXA Keralty' }: ValueTabProps) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      <motion.div {...fadeUp} className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#9cc2ff] font-medium">Valor para cada parte</span>
          <div className="flex-1 border-t border-white/10" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-cream tracking-tight leading-[1.08] max-w-4xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Una propuesta que crea valor para <span className="font-semibold text-[#9cc2ff]">{clientName}</span>, sus canales y los asegurados
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 mb-20">
        {valueCards.map((card, index) => (
          <motion.div
            key={card.title}
            {...fadeUp}
            transition={{ delay: index * 0.08 }}
            className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff] mb-5">
              {card.icon}
            </div>
            <h3 className="text-2xl font-medium text-cream mb-5">{card.title}</h3>
            <div className="space-y-3">
              {card.items.map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-cream/72 font-light leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mb-16">
        <div className="flex items-center gap-5 mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50 font-medium">01</span>
          <div className="flex-1 h-px bg-cream/[0.08]" />
        </div>
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <h3 className="text-3xl md:text-4xl font-light text-cream tracking-tight mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Prevención que se ve y se usa
            </h3>
            <p className="text-lg text-cream/65 font-light leading-[1.85] max-w-2xl">
              La propuesta no solo mejora la experiencia del asegurado. También hace más visible el valor de la cobertura,
              fortalece el argumento comercial y hace que el seguro pase de ser reactivo a formar parte de la rutina diaria.
            </p>
          </div>
          <div className="lg:col-span-5 rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 size={18} className="text-[#9cc2ff]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#9cc2ff] font-medium">KPIs esperados</span>
            </div>
            <div className="grid gap-3">
              {[
                'Mayor uso de la solución y del ecosistema digital',
                'Más conversaciones comerciales con una propuesta clara',
                'Mejor percepción de cuidado y servicio',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-[#09162a]/60 px-4 py-3 text-sm text-cream/70 font-light">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#9cc2ff]/15 bg-gradient-to-r from-[#0d1a2e] via-[#0d1a2e] to-[#10264b] p-8 lg:p-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#9cc2ff]/12 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff] flex-shrink-0">
            <MessageSquareMore size={20} />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#9cc2ff] font-medium mb-3">Lectura final</div>
            <h4 className="text-2xl lg:text-3xl font-light text-cream tracking-tight">
              Fisify convierte el cuidado en una experiencia visible, útil y recurrente.
            </h4>
            <p className="text-cream/60 font-light leading-relaxed mt-4 max-w-4xl">
              Esa recurrencia es la que sostiene la percepción de valor, mejora la relación con el cliente y ayuda a que la promesa de salud se entienda
              en el día a día, no solo en el momento de la contratación. Fisify funciona así como un tangibilizador de valor.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

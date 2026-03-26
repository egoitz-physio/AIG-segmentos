import { motion } from 'framer-motion'
import { BadgeCheck, DollarSign, Package, PlusCircle, ShieldCheck, Users } from 'lucide-react'

interface ResultsTabProps {
  isDark: boolean
  clientName?: string
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
}

const essentialPlan = [
  'Evaluación y personalización',
  'Tecnología de Asistente Virtual (VA)',
  'Soluciones especializadas',
  'Educación continua',
]

const advancedPlan = [
  'Plan esencial + seguimiento proactivo',
  'Atención multicanal',
  'Acciones de dinamización',
  'Modelo de gestión dedicada + inteligencia de datos',
]

const pricing = [
  { insured: '50.000', essential: '1.98€', advanced: '4.48€' },
  { insured: '100.000', essential: '1.76€', advanced: '4.09€' },
  { insured: '200.000', essential: '1.55€', advanced: '3.80€' },
  { insured: '300.000', essential: '1.34€', advanced: '3.59€' },
  { insured: '400.000', essential: '1.20€', advanced: '3.39€' },
  { insured: '+500.000', essential: '1.08€', advanced: '3.27€' },
]

export default function ResultsTab({ isDark: _isDark, clientName = 'Prudential' }: ResultsTabProps) {
  return (
    <div className="relative">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-32">
        <motion.div {...fadeUp} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-[11px] uppercase tracking-[0.22em] text-[#9cc2ff] font-medium mb-6">
            <ShieldCheck size={12} />
            {clientName} + Mercado Libre · Prevención y bienestar
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light text-cream tracking-tight leading-[1.05] max-w-5xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Fisify se integra como servicio de prevención y bienestar en el nuevo producto de <span className="font-semibold text-[#9cc2ff]">{clientName}</span>
          </h2>
          <p className="text-lg lg:text-xl text-cream/60 font-light leading-relaxed max-w-4xl mt-6">
            Tratamiento de dolencias físicas, prevención de lesiones y adquisición de hábitos saludables que mejoren la calidad de vida y tangibilicen el valor del seguro.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 mb-24">
          {[
            {
              icon: <Package size={18} />,
              title: 'Servicio 360º',
              body: 'Desde la prevención hasta el tratamiento: una propuesta completa para una vida activa, útil y cotidiana.',
            },
            {
              icon: <Users size={18} />,
              title: 'Uso diario',
              body: 'El valor se activa dentro del nuevo seguro con una experiencia simple, digital y acompañada.',
            },
            {
              icon: <PlusCircle size={18} />,
              title: 'Valor visible',
              body: 'La fisioterapia digital se convierte en un elemento tangible que refuerza el producto, la marca y la recurrencia.',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 lg:p-7">
              <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff] mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-medium text-cream mb-3">{card.title}</h3>
              <p className="text-sm text-cream/65 font-light leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          <motion.div {...fadeUp} transition={{ delay: 0.05 }} className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff]">
                <BadgeCheck size={18} />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">Plan esencial</div>
                <div className="text-sm text-cream/45 font-light">Modelo de gestión dedicada + inteligencia de datos</div>
              </div>
            </div>

            <div className="grid gap-3 mb-6">
              {essentialPlan.map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-[#09162a]/60 px-4 py-3 text-cream/75 font-light text-sm">
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[#9cc2ff]/15 bg-[#9cc2ff]/8 p-4 mb-5">
              <div className="text-xs uppercase tracking-[0.18em] text-[#9cc2ff] mb-2">Coste / licencia / año</div>
              <div className="text-3xl font-light text-cream">1.08€ - 1.98€</div>
              <p className="text-xs text-cream/50 mt-2">*IVA incluido, según número de asegurados</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {pricing.map((tier) => (
                <div key={tier.insured} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-cream/40 mb-2">{tier.insured}</div>
                  <div className="text-sm text-[#9cc2ff] font-medium">{tier.essential}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff]">
                <DollarSign size={18} />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">Plan avanzado</div>
                <div className="text-sm text-cream/45 font-light">Plan esencial + seguimiento proactivo</div>
              </div>
            </div>

            <div className="grid gap-3 mb-6">
              {advancedPlan.map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-[#09162a]/60 px-4 py-3 text-cream/75 font-light text-sm">
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[#9cc2ff]/15 bg-[#9cc2ff]/8 p-4 mb-5">
              <div className="text-xs uppercase tracking-[0.18em] text-[#9cc2ff] mb-2">Coste / licencia / año</div>
              <div className="text-3xl font-light text-cream">3.27€ - 4.48€</div>
              <p className="text-xs text-cream/50 mt-2">*IVA incluido, según número de asegurados</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {pricing.map((tier) => (
                <div key={tier.insured} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-cream/40 mb-2">{tier.insured}</div>
                  <div className="text-sm text-[#9cc2ff] font-medium">{tier.advanced}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-7 lg:p-8">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff]">
              <Users size={18} />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">Lectura ejecutiva</div>
              <div className="text-sm text-cream/45 font-light">Más valor en producto, más claridad en negocio</div>
            </div>
          </div>
          <p className="text-cream/70 font-light leading-relaxed max-w-5xl">
            El objetivo no es sumar una funcionalidad aislada, sino convertir la fisioterapia digital en un servicio que mejore la propuesta de valor,
            refuerce la percepción del nuevo seguro y ayude a que el asegurado lo use y lo valore cada día.
          </p>
        </div>
      </section>
    </div>
  )
}

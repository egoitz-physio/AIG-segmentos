import { motion } from 'framer-motion'
import { CalendarRange, Globe2, GraduationCap, Sparkles, Users2 } from 'lucide-react'

interface ImplementTabProps {
  isDark: boolean
  clientName?: string
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
}

const leaders = [
  {
    name: 'David Díaz',
    detail: 'C. Milan, 2024-actualidad · FC Barcelona Baloncesto, 2020-actualidad',
    highlight: 'Fisioterapeuta de élite con experiencia en alto rendimiento.',
  },
  {
    name: 'Maialen Aldalur',
    detail: 'FC Barcelona, 2020-2022',
    highlight: 'Trayectoria contrastada en entornos de máxima exigencia.',
  },
]

const roadmap = [
  {
    quarter: 'Q1',
    months: 'Ene - Mar',
    title: 'Diseño y activación',
    summary: 'Aterrizar el relato, alinear a los equipos y lanzar la primera ola de visibilidad.',
    actions: [
      'Definir mensajes de prevención, bienestar y valor cotidiano.',
      'Alinear a AXA Keralty en el plan de activación.',
      'Preparar piezas de lanzamiento, argumentario comercial y calendario de contenidos.',
    ],
  },
  {
    quarter: 'Q2',
    months: 'Abr - Jun',
    title: 'Educación y adopción',
    summary: 'Convertir la propuesta en uso real con formación, webinars y acompañamiento.',
    actions: [
      'Webinars para equipos comerciales y clientes.',
      'Campañas de onboarding y materiales de uso diario.',
      'Seguimiento con reportes mensuales y primeros aprendizajes.',
    ],
  },
  {
    quarter: 'Q3',
    months: 'Jul - Sep',
    title: 'Escalado y dinamización',
    summary: 'Impulsar más interacción con acciones recurrentes y foco en la recurrencia.',
    actions: [
      'Nudges, newsletters y recordatorios segmentados.',
      'Acciones de dinamización para reforzar adherencia y hábito.',
      'Optimización de contenidos en función del uso y del feedback.',
    ],
  },
  {
    quarter: 'Q4',
    months: 'Oct - Dic',
    title: 'Consolidación y valor',
    summary: 'Cerrar el año con resultados, aprendizajes y un business case sólido para el siguiente ciclo.',
    actions: [
      'Informe anual de KPIs, impacto y recomendaciones.',
      'Plan de continuidad y priorización de mejoras.',
      'Refuerzo del relato de valor para renovación y crecimiento.',
    ],
  },
]

export default function AxaImplementTab({ isDark: _isDark, clientName = 'AXA Keralty' }: ImplementTabProps) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      <motion.div {...fadeUp} className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#9cc2ff] font-medium">Modelo de gestión dedicada</span>
          <div className="flex-1 border-t border-white/10" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-cream tracking-tight leading-[1.08] max-w-5xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Inteligencia de datos + equipo experto para escalar una propuesta de prevención y bienestar con <span className="font-semibold text-[#9cc2ff]">{clientName}</span>
        </h2>
        <p className="text-lg lg:text-xl text-cream/60 font-light leading-relaxed max-w-4xl mt-6">
          La ejecución necesita una cadencia clara, un equipo con experiencia y una lectura de datos constante para transformar la adopción en hábitos y valor percibido.
        </p>
      </motion.div>

      <section className="mb-20">
        <div className="flex items-center gap-5 mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50 font-medium">01</span>
          <div className="flex-1 h-px bg-cream/[0.08]" />
        </div>

        <h3 className="text-3xl md:text-4xl lg:text-[2.8rem] font-light text-cream tracking-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Plan de implementación de 12 meses
        </h3>
        <p className="text-lg text-cream/60 font-light max-w-4xl mb-10">
          Un recorrido anual para activar la propuesta, generar uso diario y consolidar el valor de Fisify dentro del producto de AXA Keralty.
        </p>

        <div className="grid lg:grid-cols-2 gap-5">
          {roadmap.map((phase, index) => (
            <motion.div
              key={phase.quarter}
              {...fadeUp}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-6 lg:p-7"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">{phase.quarter}</span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-cream/45">{phase.months}</span>
                  </div>
                  <h4 className="text-2xl font-medium text-cream">{phase.title}</h4>
                </div>
              </div>

              <p className="text-sm text-cream/60 font-light leading-relaxed mb-4">{phase.summary}</p>

              <div className="space-y-3">
                {phase.actions.map((action) => (
                  <div key={action} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#09162a]/60 px-4 py-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#9cc2ff] flex-shrink-0" />
                    <span className="text-sm text-cream/72 font-light leading-relaxed">{action}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-6 mb-20">
        <motion.div {...fadeUp} transition={{ delay: 0.05 }} className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff]">
              <Users2 size={18} />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">Gestión dedicada</div>
              <div className="text-sm text-cream/45 font-light">Coordinación, seguimiento y rapidez de respuesta</div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              'Account Manager para AXA Keralty con conocimiento profundo del negocio y los asegurados.',
              'Equipo de fisioterapeutas para garantizar continuidad, calidad y tiempos de respuesta optimizados.',
              'Reportes mensuales detallados sobre uso de plataforma y evolución de los asegurados.',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-[#09162a]/60 px-4 py-3 text-sm text-cream/72 font-light leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff]">
              <Globe2 size={18} />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">Inteligencia de datos</div>
              <div className="text-sm text-cream/45 font-light">Monitorización y lectura continua</div>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              'Monitorización del estado de salud y evolución de asegurados.',
              'KPIs de impacto: adherencia, satisfacción y resultados clínicos.',
              'Dashboards para decidir el siguiente paso sobre evidencia real.',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-[#09162a]/60 px-4 py-3 text-sm text-cream/72 font-light leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-5 mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50 font-medium">02</span>
          <div className="flex-1 h-px bg-cream/[0.08]" />
        </div>

        <h3 className="text-3xl md:text-4xl lg:text-[2.8rem] font-light text-cream tracking-tight mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Fisioterapeutas de élite
        </h3>

        <div className="grid lg:grid-cols-2 gap-5">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              {...fadeUp}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 lg:p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff]">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="text-xl font-medium text-cream">{leader.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-cream/45">{leader.detail}</div>
                </div>
              </div>
              <p className="text-sm text-cream/70 font-light leading-relaxed">{leader.highlight}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-6">
        <motion.div {...fadeUp} transition={{ delay: 0.05 }} className="lg:col-span-8 rounded-[2rem] border border-[#9cc2ff]/15 bg-gradient-to-r from-[#0d1a2e] via-[#0d1a2e] to-[#10264b] p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#9cc2ff]/12 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff] flex-shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#9cc2ff] font-medium mb-3">Cierre ejecutivo</div>
              <h4 className="text-2xl lg:text-3xl font-light text-cream tracking-tight">
                Cuida el activo más importante de tu aseguradora.
              </h4>
              <p className="text-cream/60 font-light leading-relaxed mt-4 max-w-4xl">
                Te lo agradecerán: una combinación de experiencia humana, evidencia clínica y capacidad operativa que convierte la fisioterapia digital
                en una ventaja para el asegurado y para el negocio.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="lg:col-span-4 rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 lg:p-7">
          <div className="flex items-center gap-3 mb-4">
            <CalendarRange size={18} className="text-[#9cc2ff]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">Cadencia</span>
          </div>
          <div className="space-y-3">
            {[
              'Mensual: KPIs, acciones y oportunidades.',
              'Continuo: seguimiento con reportes dinámicos.',
              'Foco: activar, acompañar y escalar con datos.',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-[#09162a]/60 px-4 py-3 text-sm text-cream/72 font-light leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

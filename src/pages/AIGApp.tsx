import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  CircleCheck,
  Globe2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'

const accent = '#1399ff'
const accentSoft = 'rgba(19, 153, 255, 0.18)'

const sectionFade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
}

type ActiveSection = 'coberturas' | 'nichos' | 'modulos' | 'roadmap'

const sectionTabs: Array<{ id: ActiveSection; label: string }> = [
  { id: 'coberturas', label: 'Coberturas' },
  { id: 'nichos', label: 'Nichos' },
  { id: 'modulos', label: 'Módulos' },
  { id: 'roadmap', label: 'Hoja de ruta' },
]

const heroStats = [
  {
    value: '↓23%',
    label: 'Reducción de reclamaciones en programas de prevención activa integrados en seguros.',
  },
  {
    value: '3×',
    label: 'Mayor retención cuando el seguro incluye beneficios de uso frecuente.',
  },
  {
    value: '48h',
    label: 'Acceso garantizado a fisioterapeuta desde el momento del siniestro.',
  },
  {
    value: '100%',
    label: 'Digital y remoto. Sin desplazamiento, sin lista de espera, en cualquier país.',
  },
]

const referenceVisuals = [
  {
    src: '/images/aig-reference/aig-cover.png',
    title: 'Portada AIG',
    body: 'El azul institucional y la fotografía humana marcan el tono visual de la propuesta.',
  },
  {
    src: '/images/aig-reference/aig-accidents-health.png',
    title: 'Accidentes y salud',
    body: 'La arquitectura de cobertura y la lectura médica ayudan a estructurar el relato comercial.',
  },
  {
    src: '/images/aig-reference/aig-graves.png',
    title: 'Coberturas complejas',
    body: 'Un layout muy claro para explicar diagnósticos, beneficios y acompañamiento clínico.',
  },
  {
    src: '/images/aig-reference/aig-alliances.png',
    title: 'Alianzas estratégicas',
    body: 'La lógica de socios, retail y verticales encaja con una propuesta distribuida por canales.',
  },
]

const coverageCards = [
  {
    title: 'Accidente',
    coverage: 'Gastos médicos, invalidez, muerte',
    value: 'Rehabilitación precoz',
    body:
      'Protocolo de rehabilitación funcional activado en las primeras 48h tras el siniestro. El fisioterapeuta trabaja en paralelo con el médico tratante para recuperar movilidad, reducir dolor y acortar la baja.',
  },
  {
    title: 'Accidente colectivo',
    coverage: 'Múltiples asegurados simultáneos',
    value: 'Atención simultánea ilimitada',
    body:
      'Capacidad de atender a múltiples afectados a la vez sin colapsar. Al ser 100% digital, cada asegurado recibe su plan personalizado de forma independiente.',
  },
  {
    title: 'Accidente en viaje',
    coverage: 'Viaje nacional o internacional',
    value: 'Accesible desde cualquier país',
    body:
      'El asegurado recibe atención desde el destino, con orientación inmediata, ejercicios para el dolor y seguimiento hasta el regreso a casa.',
  },
  {
    title: 'Accidente en tránsito',
    coverage: 'Transporte privado y público',
    value: 'Especialidad cervical y columna',
    body:
      'Protocolo específico para lesiones cervicales y de columna, con foco en evitar dolor crónico y reclamaciones más costosas.',
  },
  {
    title: 'Accidente en viaje aéreo',
    coverage: 'Vuelos nacionales e internacionales',
    value: 'Activación inmediata en destino',
    body:
      'Atención disponible desde el aeropuerto de destino. El asegurado conecta antes de llegar al hospital local y recibe orientación inicial para no agravar la lesión.',
  },
  {
    title: 'Lesiones por robo',
    coverage: 'Robo, robo en cajero automático',
    value: 'Trauma físico post-incidente',
    body:
      'Además del impacto psicológico, los robos con violencia generan lesiones musculoesqueléticas. Fisify ofrece evaluación y protocolo de recuperación física.',
  },
  {
    title: 'Hospitalización',
    coverage: 'Enfermedad y accidente',
    value: 'Pre y post-alta hospitalaria',
    body:
      'Fisioterapia respiratoria y de movilización temprana durante la hospitalización, más un protocolo completo de rehabilitación post-alta.',
  },
  {
    title: 'Enfermedades graves',
    coverage: 'Infarto, ACV, cáncer, EM, parálisis…',
    value: 'Fisio especializada por patología',
    body:
      'Programas de fisioterapia cardiorrespiratoria, neurológica y oncológica supervisados, con seguimiento quincenal por fisioterapeuta especializado.',
  },
]

const niches = [
  {
    label: 'Nicho 01',
    title: 'Deportistas activos',
    description:
      'Runners, ciclistas, jugadores de pádel, crossfit y deportes de equipo. Perfil 25-50 años, alta propensión digital y lesiones recurrentes y predecibles.',
    profiles: ['Runner', 'Ciclista', 'Pádel', 'CrossFit', 'Fútbol', 'Natación'],
    insight:
      'Mayor adopción digital, gasto más alto en salud y ROI medible. El piloto enseña resultados visibles en 6 meses.',
    points: [
      'Prevención específica por deporte: rodilla del runner, hombro del nadador, zona lumbar del ciclista y codo del tenista.',
      'Rehabilitación activada automáticamente cuando el asegurado entra en cobertura.',
      'Teleconsulta de urgencia en menos de 24h para cortar la lesión antes de que escale.',
      'Biblioteca FisifyLabs con más de 500 ejercicios validados clínicamente.',
      'Valoración funcional de ingreso para estratificar riesgo y afinar pricing.',
    ],
  },
  {
    label: 'Nicho 02',
    title: 'Mujeres y amas de casa',
    description:
      'Perfil 30-55 años con alta exposición a lesiones domésticas y dolencias musculoesqueléticas crónicas, especialmente en etapas como post-parto y menopausia.',
    profiles: ['30-55 años', 'Post-parto', 'Menopausia', 'Cuidadoras', 'Trabajadoras'],
    insight:
      'La fisioterapia de suelo pélvico y el módulo post-parto son un diferenciador real que hoy casi ningún seguro masivo ofrece.',
    points: [
      'Fisioterapia de suelo pélvico 100% online, privada y sin lista de espera.',
      'Programa digital de recuperación post-parto integrado en la póliza.',
      'Espalda, cervical y hombro como zonas prioritarias por carga doméstica.',
      'Prevención de accidentes domésticos con ergonomía y hábitos posturales.',
      'Sin desplazamiento, sin tiempo de espera y desde casa.',
    ],
  },
]

const modules = [
  {
    num: '01',
    title: 'Prevención activa',
    tag: 'Antes del siniestro',
    body: 'Programas de ejercicio terapéutico preventivo personalizados al perfil de riesgo para reducir la frecuencia del siniestro.',
  },
  {
    num: '02',
    title: 'Teleconsulta fisio',
    tag: 'Atención inmediata global',
    body: 'Acceso a fisioterapeuta especializado en 24-48h ante primeros síntomas o tras el alta médica, desde cualquier país.',
  },
  {
    num: '03',
    title: 'Rehabilitación digital',
    tag: 'Post-siniestro',
    body: 'Protocolos de recuperación con seguimiento por fisioterapeuta asignado e integración con el flujo de siniestros de AIG.',
  },
  {
    num: '04',
    title: 'Valoración de ingreso',
    tag: 'Suscripción',
    body: 'Assessment funcional digital al contratar el seguro para personalizar coberturas y mejorar el pricing por perfil.',
  },
  {
    num: '05',
    title: 'Adherencia y engagement',
    tag: 'Retención',
    body: 'App con planes, seguimiento de progreso y recordatorios inteligentes. Genera interacción semanal y valor recurrente.',
  },
  {
    num: '06',
    title: 'Datos clínicos para AIG',
    tag: 'Inteligencia de riesgo',
    body: 'Dashboard de métricas de uso, adherencia y recuperación para alimentar modelos de riesgo y afinar la segmentación.',
  },
]

const valueActors = [
  {
    title: 'Para AIG',
    subtitle: 'Rentabilidad técnica y diferenciación',
    items: [
      'Menor siniestralidad por prevención activa.',
      'Menor coste medio por siniestro con rehabilitación precoz.',
      'Mayor retención en renovación anual.',
      'Datos clínicos para mejorar modelos de riesgo.',
      'Diferenciación frente a competidores en canal retail.',
    ],
  },
  {
    title: 'Para Fisify',
    subtitle: 'Canal de distribución masivo',
    items: [
      'Acceso a la base de clientes AIG y retail partners.',
      'Ingresos recurrentes B2B por asegurado activo.',
      'Validación del modelo en aseguradoras.',
      'Posicionamiento como referente insurtech salud en México.',
    ],
  },
  {
    title: 'Para el retailer',
    subtitle: 'Producto con beneficio tangible',
    items: [
      'Seguro con valor percibido muy alto frente al precio de venta.',
      'Diferenciación en la oferta de servicios financieros.',
      'Mayor fidelización del cliente final.',
      'NPS superior frente a seguros estándar.',
    ],
  },
  {
    title: 'Para el asegurado',
    subtitle: 'Un seguro que cuida, no solo protege',
    items: [
      'Fisioterapeuta disponible siempre y en cualquier lugar.',
      'Programas de prevención personalizados.',
      'Rehabilitación cuando la necesita, sin coste extra.',
      'Valor percibido semanal, no solo cuando hay siniestro.',
    ],
  },
]

const pilotMetrics = [
  { value: '≥40%', label: 'Tasa de activación de Fisify por asegurado en los primeros 30 días.' },
  { value: '↓15%', label: 'Reducción de reclamaciones menores vs grupo control sin Fisify.' },
  { value: '+20pt', label: 'Mejora en NPS del seguro vs producto estándar AIG sin beneficio Fisify.' },
  { value: '+18%', label: 'Tasa de renovación esperada vs cartera base en el mismo segmento.' },
]

const roadmap = [
  {
    step: '01',
    title: 'One-pager ejecutivo',
    body: 'Documento de 1 página para circulación interna en AIG, con foco en reducción de siniestralidad y NPS.',
  },
  {
    step: '02',
    title: 'Definir nicho piloto',
    body: 'Recomendado: deportistas. Mayor adopción digital y ROI más visible en el primer año.',
  },
  {
    step: '03',
    title: 'Modelo comercial',
    body: 'Definir si encaja como proveedor de servicios, co-branding AIG + Fisify o revenue share por asegurado activo.',
  },
  {
    step: '04',
    title: 'Retailer ancla',
    body: 'Coppel o Liverpool como primer canal. El volumen de su base justifica el piloto con estadística significativa.',
  },
  {
    step: '05',
    title: 'Métricas acordadas',
    body: 'Tasa de uso, NPS del seguro, reducción de reclamaciones y coste de rehabilitación vs grupo control.',
  },
]

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <motion.div {...sectionFade} className="mb-10 lg:mb-14">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[11px] uppercase tracking-[0.28em] text-white/45">{eyebrow}</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <h2 className="max-w-5xl text-4xl md:text-5xl lg:text-[3.6rem] font-light leading-[1.04] text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-4xl text-base md:text-lg lg:text-xl font-light leading-relaxed text-white/62">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 lg:p-6">
      <div className="text-3xl md:text-4xl font-medium tracking-tight text-white" style={{ color: accent }}>
        {value}
      </div>
      <p className="mt-3 text-sm md:text-[15px] font-light leading-relaxed text-white/66">{label}</p>
    </div>
  )
}

function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/70">
      {children}
    </span>
  )
}

export default function AIGApp() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<ActiveSection>('coberturas')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Fisify × AIG | Propuesta estratégica 2025'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09131f] text-white">
      <div className="noise" />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="glow-spot w-[900px] h-[900px] -top-48 -right-48 opacity-80" />
        <div className="glow-spot w-[720px] h-[720px] bottom-0 -left-48 opacity-60" />
        <div
          className="absolute top-1/4 right-1/4 w-[460px] h-[460px] rounded-full blur-[120px] opacity-50"
          style={{ background: `radial-gradient(circle, ${accentSoft} 0%, transparent 70%)` }}
        />
      </div>

      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#09131f]/82 backdrop-blur-2xl border-b border-white/8' : 'bg-gradient-to-b from-black/32 to-transparent'}`}>
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="flex h-18 lg:h-20 items-center justify-between gap-6">
            <button onClick={() => setActiveSection('coberturas')} className="flex items-center gap-4 group">
              <img src="/images/fisify-logo-white.png" alt="Fisify" className="h-6 brightness-0 invert transition-opacity group-hover:opacity-70" />
              <span className="text-white/20">×</span>
              <img src="/images/logo-aig.svg" alt="AIG" className="h-7 brightness-0 invert transition-opacity group-hover:opacity-70" />
            </button>

            <nav className="hidden lg:flex items-center gap-8">
              {sectionTabs.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveSection(link.id)}
                  className={`text-[11px] uppercase tracking-[0.22em] transition-colors hover:text-white ${
                    activeSection === link.id ? 'text-white' : 'text-white/58'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setActiveSection('roadmap')}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#08101a] transition-transform hover:-translate-y-0.5"
            >
              Agendar reunión
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </header>

      <main className="relative pt-24 lg:pt-28">
        <section id="hero" className="mx-auto max-w-[1440px] px-5 lg:px-10 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <motion.div {...sectionFade} className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/70">
                <Sparkles size={12} style={{ color: accent }} />
                Propuesta estratégica · Confidencial · 2025
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl md:text-6xl lg:text-[5.4rem] font-light leading-[0.95] tracking-tight text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Fisioterapia dentro de cada cobertura AIG
              </h1>

              <p className="mt-6 max-w-3xl text-lg md:text-xl font-light leading-relaxed text-white/68">
                Fisify integra prevención, rehabilitación y atención fisioterapéutica directamente en el seguro de accidentes y salud de AIG, accesible 24/7 desde cualquier lugar del mundo.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>Disponible 24/7</Pill>
                <Pill>Desde cualquier ubicación</Pill>
                <Pill>Prevención activa</Pill>
                <Pill>Rehabilitación digital</Pill>
              </div>

              <div className="mt-8 max-w-4xl rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 lg:p-8">
                <div className="grid md:grid-cols-2 gap-5">
                  {heroStats.map((stat) => (
                    <MetricCard key={stat.value} value={stat.value} label={stat.label} />
                  ))}
                </div>
              </div>

              <div className="mt-6 max-w-4xl rounded-[2rem] border border-white/8 bg-white/[0.03] p-5 lg:p-6">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Cita estratégica</div>
                <p className="mt-3 text-xl lg:text-2xl font-light leading-[1.28] text-white">
                  Un seguro que cuida al asegurado todos los días compite en valor, no solo en precio.
                </p>
              </div>
            </motion.div>

            <motion.div {...sectionFade} transition={{ delay: 0.08 }} className="lg:col-span-5 flex flex-col gap-5">
              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white">
                <div className="relative aspect-[16/11]">
                  <img
                    src={referenceVisuals[0].src}
                    alt={referenceVisuals[0].title}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#09131f]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#09131f]">
                      {referenceVisuals[0].title}
                    </div>
                    <p className="mt-3 max-w-xl text-sm lg:text-[15px] font-light leading-relaxed text-white/85">
                      {referenceVisuals[0].body}
                    </p>
                  </div>
                </div>
              </article>

              <div className="grid sm:grid-cols-2 gap-5">
                {[referenceVisuals[1], referenceVisuals[2]].map((visual) => (
                  <article key={visual.title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#eef4ff]">
                    <div className="relative aspect-[16/10]">
                      <img src={visual.src} alt={visual.title} className="h-full w-full object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#09131f]/15 via-transparent to-transparent" />
                    </div>
                    <div className="p-4 lg:p-5">
                      <div className="text-[11px] uppercase tracking-[0.24em]" style={{ color: accent }}>
                        {visual.title}
                      </div>
                      <p className="mt-2 text-sm font-light leading-relaxed text-[#0d1b2a]/78">
                        {visual.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 lg:px-10 pb-8">
          <div className="flex flex-wrap gap-3 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-3">
            {sectionTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all ${
                  activeSection === tab.id
                    ? 'bg-white text-[#08101a]'
                    : 'text-white/62 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {activeSection === 'coberturas' && (
        <section id="coberturas" className="mx-auto max-w-[1440px] px-5 lg:px-10 py-10 lg:py-16">
          <SectionHeader
            eyebrow="Cobertura por cobertura"
            title="Cómo Fisify potencia cada producto AIG"
            subtitle="Para cada situación que AIG cubre, Fisify añade una capa de atención fisioterapéutica que acelera la recuperación, reduce la reclamación media y fideliza al asegurado."
          />

          <div className="grid lg:grid-cols-12 gap-8">
            <motion.div {...sectionFade} className="lg:col-span-4">
              <div className="sticky top-28 rounded-[2rem] border border-white/8 p-6 lg:p-8" style={{ background: 'linear-gradient(180deg, rgba(19,153,255,0.20), rgba(255,255,255,0.03))' }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                  <Globe2 size={12} style={{ color: accent }} />
                  Fisify siempre disponible - 24 / 7 / 365
                </div>
                <p className="mt-5 text-base lg:text-lg font-light leading-relaxed text-white/70">
                  Tanto si el accidente ocurre en México, en un viaje de negocios por Europa o en un viaje de aventura en Asia, el asegurado accede al mismo nivel de atención desde su móvil, sin coste de desplazamiento y sin burocracia.
                </p>
                <p className="mt-4 text-base lg:text-lg font-light leading-relaxed text-white/70">
                  Eso convierte a Fisify en el único beneficio del seguro que es tan global como la cobertura de AIG.
                </p>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.05] px-4 py-3 text-sm text-white/75">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-1">Texto clave</div>
                    El único beneficio del seguro disponible donde ocurra el siniestro.
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#eef4ff]">
                  <div className="grid grid-cols-12">
                    <div className="col-span-5 relative min-h-[150px]">
                      <img
                        src={referenceVisuals[1].src}
                        alt={referenceVisuals[1].title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="col-span-7 p-4 lg:p-5 flex flex-col justify-center">
                      <div className="text-[11px] uppercase tracking-[0.24em]" style={{ color: accent }}>
                        {referenceVisuals[1].title}
                      </div>
                      <p className="mt-2 text-sm font-light leading-relaxed text-[#0d1b2a]/78">
                        {referenceVisuals[1].body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-4 lg:gap-5">
              {coverageCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  {...sectionFade}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 lg:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Cobertura AIG</div>
                      <h3 className="mt-2 text-2xl font-medium text-white">{card.title}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em]" style={{ color: accent, background: accentSoft }}>
                      {card.value}
                    </span>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/8 bg-[#0b1220]/70 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-2">Cobertura</div>
                    <p className="text-sm leading-relaxed text-white/72">{card.coverage}</p>
                  </div>

                  <p className="mt-4 text-sm lg:text-[15px] font-light leading-relaxed text-white/68">{card.body}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            {...sectionFade}
            transition={{ delay: 0.05 }}
            className="mt-8 rounded-[2rem] border p-6 lg:p-8"
            style={{
              borderColor: 'rgba(19, 153, 255, 0.24)',
              background: 'linear-gradient(135deg, rgba(19, 153, 255, 0.18), rgba(255, 255, 255, 0.04))',
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border" style={{ borderColor: 'rgba(19, 153, 255, 0.24)', background: accentSoft, color: accent }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Tarjeta destacada global</div>
                <h3 className="mt-2 text-2xl lg:text-3xl font-light text-white">Fisify es tan global como la cobertura de AIG</h3>
                <p className="mt-3 max-w-4xl text-white/68 font-light leading-relaxed">
                  AIG cubre al asegurado en cualquier país. Ningún beneficio de salud del seguro podía acompañarle con la misma cobertura geográfica. Fisify es el primero: 100% digital, en español, sin importar dónde esté el asegurado cuando necesite atención.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['App móvil', 'Web', 'En cualquier país', '24 horas', 'En español', 'Fisioterapeuta real', 'Plan personalizado', 'Sin lista de espera'].map((pill) => (
                    <span key={pill} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-white/70">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        )}

        {activeSection === 'nichos' && (
        <section id="nichos" className="mx-auto max-w-[1440px] px-5 lg:px-10 py-10 lg:py-16">
          <SectionHeader
            eyebrow="Dos nichos prioritarios"
            title="Propuesta específica por segmento"
            subtitle="Dentro de la vertical de accidentes y salud, AIG quiere potenciar dos perfiles concretos. Fisify tiene propuesta de valor diferencial y productos ya validados para ambos."
          />

          <motion.article
            {...sectionFade}
            className="mb-6 overflow-hidden rounded-[2rem] border border-white/10 bg-[#eef4ff]"
          >
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[200px]">
                <img
                  src={referenceVisuals[3].src}
                  alt={referenceVisuals[3].title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="lg:col-span-7 p-6 lg:p-8 flex flex-col justify-center">
                <div className="text-[11px] uppercase tracking-[0.24em]" style={{ color: accent }}>
                  {referenceVisuals[3].title}
                </div>
                <h3 className="mt-3 text-2xl lg:text-3xl font-light text-[#0d1b2a]">
                  Un beneficio que acompaña el crecimiento por canales y socios
                </h3>
                <p className="mt-4 max-w-3xl text-sm lg:text-[15px] font-light leading-relaxed text-[#0d1b2a]/78">
                  La propuesta encaja con una distribución más amplia: aseguradora, retail y partners convierten la fisioterapia digital en un valor de uso frecuente.
                </p>
              </div>
            </div>
          </motion.article>

          <div className="grid lg:grid-cols-2 gap-6">
            {niches.map((niche, nicheIndex) => (
              <motion.article
                key={niche.title}
                {...sectionFade}
                transition={{ delay: nicheIndex * 0.08 }}
                className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 lg:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">{niche.label}</div>
                    <h3 className="mt-2 text-3xl font-medium text-white">{niche.title}</h3>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em]" style={{ background: accentSoft, color: accent }}>
                    Segmento
                  </div>
                </div>

                <p className="mt-5 text-white/68 font-light leading-relaxed">{niche.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {niche.profiles.map((profile) => (
                    <span key={profile} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-white/72">
                      {profile}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/8 bg-[#0b1220]/70 p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-2">Insight clave</div>
                  <p className="text-sm lg:text-[15px] font-light leading-relaxed text-white/70">{niche.insight}</p>
                </div>

                <div className="mt-6 grid gap-3">
                  {niche.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                      <CircleCheck size={16} style={{ color: accent }} className="mt-0.5 shrink-0" />
                      <p className="text-sm lg:text-[15px] font-light leading-relaxed text-white/72">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
        )}

        {activeSection === 'modulos' && (
        <section id="modulos" className="mx-auto max-w-[1440px] px-5 lg:px-10 py-10 lg:py-16">
          <SectionHeader
            eyebrow="Arquitectura del producto"
            title="6 módulos que Fisify integra en el seguro AIG"
            subtitle="Cada módulo es activable de forma independiente según el diseño del producto y el canal de distribución elegido."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {modules.map((module) => (
              <motion.article
                key={module.num}
                {...sectionFade}
                className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] uppercase tracking-[0.26em] text-white/45">{module.num}</div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em]" style={{ background: accentSoft, color: accent }}>
                    {module.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-medium text-white">{module.title}</h3>
                <p className="mt-4 text-sm lg:text-[15px] font-light leading-relaxed text-white/68">{module.body}</p>
              </motion.article>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-5">
            {valueActors.map((actor, index) => (
              <motion.article
                key={actor.title}
                {...sectionFade}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6"
              >
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">{actor.title}</div>
                <h3 className="mt-3 text-2xl font-medium text-white">{actor.subtitle}</h3>
                <div className="mt-5 grid gap-3">
                  {actor.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#0b1220]/70 px-4 py-3">
                      <BadgeCheck size={16} style={{ color: accent }} className="mt-0.5 shrink-0" />
                      <p className="text-sm font-light leading-relaxed text-white/72">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
        )}

        {activeSection === 'roadmap' && (
        <section className="mx-auto max-w-[1440px] px-5 lg:px-10 py-10 lg:py-16">
          <SectionHeader
            eyebrow="Métricas del piloto"
            title="Antes del lanzamiento hay que acordar cómo se mide el éxito"
            subtitle="Estas son las métricas que recomendamos acordar con AIG para el primer piloto."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {pilotMetrics.map((metric) => (
            <motion.article
              key={metric.value}
              {...sectionFade}
              className="rounded-[1.6rem] border p-6"
              style={{
                  borderColor: 'rgba(19, 153, 255, 0.20)',
                  background: 'linear-gradient(180deg, rgba(19, 153, 255, 0.14), rgba(255, 255, 255, 0.03))',
              }}
            >
                <div className="text-4xl font-medium tracking-tight text-white" style={{ color: accent }}>
                  {metric.value}
                </div>
                <p className="mt-4 text-sm lg:text-[15px] font-light leading-relaxed text-white/68">{metric.label}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-14">
            <SectionHeader
              eyebrow="Hoja de ruta"
              title="De la conversación al piloto"
              subtitle="5 pasos para pasar de la reunión inicial a un primer piloto midiendo resultados reales en mercado."
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-4">
            {roadmap.map((step) => (
              <motion.article
                key={step.step}
                {...sectionFade}
                className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5"
              >
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">{step.step}</div>
                <h3 className="mt-3 text-xl font-medium text-white">{step.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/68">{step.body}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 rounded-[2.25rem] border p-7 lg:p-10" style={{ borderColor: 'rgba(19, 153, 255, 0.24)', background: 'linear-gradient(135deg, rgba(19, 153, 255, 0.22), rgba(255, 255, 255, 0.04))' }}>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border" style={{ borderColor: 'rgba(19, 153, 255, 0.25)', background: accentSoft, color: accent }}>
                <Workflow size={20} />
              </div>
              <div className="max-w-5xl">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Siguiente paso</div>
                <h2 className="mt-3 text-3xl md:text-4xl lg:text-[3.3rem] font-light leading-[1.05] text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  ¿Construimos el seguro que el mercado no tiene todavía?
                </h2>
                <p className="mt-5 max-w-4xl text-base md:text-lg lg:text-xl font-light leading-relaxed text-white/68">
                  AIG tiene la distribución y la póliza. Fisify tiene la plataforma clínica y el equipo de fisioterapeutas. Juntos, podemos crear el primer seguro de accidentes y salud con fisioterapia activa integrada, accesible 24/7 desde cualquier país del mundo.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@fisify.com?subject=Reuni%C3%B3n%20AIG%20x%20Fisify"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                    style={{ background: accent }}
                  >
                    Agendar reunión con AIG
                    <ArrowRight size={16} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveSection('coberturas')}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/[0.07]"
                  >
                    Ver propuesta completa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}
      </main>

      <footer className="border-t border-white/10 bg-[#050810]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10 py-8 lg:py-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/fisify-logo-white.png" alt="Fisify" className="h-5 brightness-0 invert" />
            <span className="text-white/20">×</span>
            <img src="/images/logo-aig.svg" alt="AIG" className="h-6 brightness-0 invert" />
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-white/45">
            Propuesta confidencial · Digital & Direct Marketing · 2025
          </div>
        </div>
      </footer>
    </div>
  )
}

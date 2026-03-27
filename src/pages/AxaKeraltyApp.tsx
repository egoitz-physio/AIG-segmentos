import ClientPresentationAxa from '../components/ClientPresentationAxa'
import type { TabId } from '../components/ClientPresentationApp'

const CLIENT_NAME = 'AXA Keralty'
const CLIENT_LOGO = '/images/axa-keralty-logo-v3.svg'

export default function AxaKeraltyApp() {
  const visibleTabs: TabId[] = ['objetivo', 'product', 'value', 'implement']

  return (
    <ClientPresentationAxa
      clientName={CLIENT_NAME}
      clientLogo={CLIENT_LOGO}
      homePath="/"
      visibleTabs={visibleTabs}
      initialTab="objetivo"
      hero={{
        eyebrow: 'Propuesta de colaboración',
        title: (
          <>
            Prevención, bienestar y tratamiento con foco en rehabilitación para <span className="font-semibold">AXA Keralty</span>
          </>
        ),
        description:
          'Fisify convierte la fisioterapia digital en una experiencia de prevención, tratamiento y bienestar que el asegurado usa en su día a día, con especial foco en la rehabilitación y el valor del seguro.',
        image: '/images/new-hero-2.png',
        imageAlt: 'AXA Keralty Fisioterapia Digital',
      }}
      footer={{
        description:
          'Fisify ayuda a tangibilizar el valor del seguro con una experiencia de prevención y bienestar que el asegurado utiliza en su día a día.',
        bottomText: '© 2026 Fisify. Propuesta de colaboración para AXA Keralty.',
      }}
    />
  )
}

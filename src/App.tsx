import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientPresentationApp from './components/ClientPresentationApp'
import OmintApp from './pages/OmintApp'
import AIGApp from './pages/AIGApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientPresentationApp clientName="Medicus" clientLogo="/images/medicus-logo-white.png" />} />
        <Route path="/omint" element={<OmintApp />} />
        <Route path="/AIG" element={<AIGApp />} />
        <Route path="/aig" element={<AIGApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

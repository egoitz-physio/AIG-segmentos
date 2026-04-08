import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import AIGApp from './pages/AIGApp'
import ClientPresentationApp from './components/ClientPresentationApp'
import PrudentialApp from './pages/PrudentialApp'
import ZurichApp from './pages/ZurichApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/aig" replace />} />
        <Route path="/axa-keralty" element={<Navigate to="/aig" replace />} />
        <Route path="/axa" element={<Navigate to="/aig" replace />} />
        <Route path="/medicus" element={<ClientPresentationApp clientName="Medicus" clientLogo="/images/medicus-logo-white.png" homePath="/medicus" />} />
        <Route path="/prudential" element={<PrudentialApp />} />
        <Route path="/AIG" element={<AIGApp />} />
        <Route path="/aig" element={<AIGApp />} />
        <Route path="/Zurich" element={<ZurichApp homePath="/Zurich" />} />
        <Route path="/zurich" element={<ZurichApp homePath="/zurich" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

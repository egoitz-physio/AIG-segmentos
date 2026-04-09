import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AIGApp from './pages/AIGApp'
import ClientPresentationApp from './components/ClientPresentationApp'
import PrudentialApp from './pages/PrudentialApp'
import ZurichApp from './pages/ZurichApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrudentialApp />} />
        <Route path="/axa-keralty" element={<PrudentialApp />} />
        <Route path="/axa" element={<PrudentialApp />} />
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

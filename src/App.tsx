import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientPresentationApp from './components/ClientPresentationApp'
import AxaKeraltyApp from './pages/AxaKeraltyApp'
import PrudentialApp from './pages/PrudentialApp'
import AIGApp from './pages/AIGApp'
import ZurichApp from './pages/ZurichApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AxaKeraltyApp />} />
        <Route path="/axa-keralty" element={<AxaKeraltyApp />} />
        <Route path="/axa" element={<AxaKeraltyApp />} />
        <Route path="/medicus" element={<ClientPresentationApp clientName="Medicus" clientLogo="/images/medicus-logo-white.png" homePath="/medicus" />} />
        <Route path="/prudential" element={<PrudentialApp />} />
        <Route path="/AIG" element={<AIGApp homePath="/AIG" />} />
        <Route path="/aig" element={<AIGApp homePath="/AIG" />} />
        <Route path="/Zurich" element={<ZurichApp homePath="/Zurich" />} />
        <Route path="/zurich" element={<ZurichApp homePath="/zurich" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

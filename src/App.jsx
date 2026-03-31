import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App

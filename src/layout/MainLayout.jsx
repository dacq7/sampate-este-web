import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function MainLayout() {
  const { pathname } = useLocation()
  const compactMain = pathname === '/nosotros'

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-900">
      <Navbar />
      <main
        className={`mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8 ${compactMain ? 'py-4 sm:py-5' : 'py-8'}`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout

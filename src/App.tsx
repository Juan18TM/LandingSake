import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Install from './components/Install'
import Features from './components/Features'
import TechStack from './components/TechStack'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import AuthSuccess from './components/AuthSuccess'
import { useEffect, useState } from 'react'

export default function App() {
  const [isAuthSuccess, setIsAuthSuccess] = useState(false)

  useEffect(() => {
    const path = window.location.pathname
    const hash = window.location.hash
    const search = window.location.search

    // Verifica si la URL tiene los parámetros que suele mandar Supabase/Firebase
    if (
      path.includes('/auth/confirm') || 
      hash.includes('access_token=') || 
      hash.includes('type=signup') ||
      hash.includes('type=recovery') ||
      search.includes('code=')
    ) {
      setIsAuthSuccess(true)
    }
  }, [])

  if (isAuthSuccess) {
    return <AuthSuccess />
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
     
      <Install />
       <Gallery />
      <Features />
      <TechStack />
      <Footer />
    </div>
  )
}

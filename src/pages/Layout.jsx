import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

// Envolve as páginas com cabeçalho e rodapé; o conteúdo entra via children
const Layout = ({ children }) => {
  const { pathname } = useLocation()

  // Ao trocar de rota, volta para o topo da página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

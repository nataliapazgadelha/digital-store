import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProductListingPage from './pages/ProductListingPage.jsx'
import ProductViewPage from './pages/ProductViewPage.jsx'
import ComingSoonPage from './pages/ComingSoonPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/product/:id" element={<ProductViewPage />} />
      {/* Categorias, Meus Pedidos, login, cadastro e demais links ainda não têm tela */}
      <Route path="*" element={<ComingSoonPage />} />
    </Routes>
  )
}

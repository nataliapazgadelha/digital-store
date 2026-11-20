import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import miniCart from '../assets/mini-cart.svg'
import './Header.css'

const links = [
  { to: '/', text: 'Home', end: true },
  { to: '/products', text: 'Produtos' },
  { to: '/categories', text: 'Categorias' },
  { to: '/orders', text: 'Meus Pedidos' },
]

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const [term, setTerm] = useState('')

  // Mantém o campo preenchido com o filtro atual da URL
  useEffect(() => {
    setTerm(location.pathname === '/products' ? searchParams.get('filter') ?? '' : '')
  }, [location.pathname, searchParams])

  function handleSearch(event) {
    event.preventDefault() // Enter no input e clique na lupa passam por aqui
    const value = term.trim()
    navigate(value ? `/products?filter=${encodeURIComponent(value)}` : '/products')
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Logo />

          <form className="header__search" role="search" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Pesquisar produto..."
              aria-label="Pesquisar produto"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit" aria-label="Pesquisar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#474747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
          </form>

          <div className="header__actions">
            <Link to="/signup" className="header__signup">Cadastre-se</Link>
            <Link to="/login" className="header__login">Entrar</Link>
            <span className="header__cart" aria-label="Carrinho de compras">
              <img src={miniCart} alt="" width="24" height="24" />
              <span className="header__cart-badge">2</span>
            </span>
          </div>
        </div>

        <nav className="header__nav" aria-label="Navegação principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => 'header__link' + (isActive ? ' header__link--active' : '')}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

import Logo from './Logo.jsx'
import FooterInfo from './FooterInfo.jsx'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import './Footer.css'

const informacoes = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/jobs' },
  { text: 'Meus Pedidos', link: '/orders' },
]

const categorias = [
  { text: 'Camisetas', link: '/products' },
  { text: 'Calças', link: '/products' },
  { text: 'Bonés', link: '/products' },
  { text: 'Headphones', link: '/products' },
  { text: 'Tênis', link: '/products?filter=tenis' },
]

const contato = [
  { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161' },
  { text: '(85) 3051-3411' },
]

const redes = [
  { icon: facebook, name: 'Facebook', href: 'https://www.facebook.com' },
  { icon: instagram, name: 'Instagram', href: 'https://www.instagram.com' },
  { icon: twitter, name: 'Twitter', href: 'https://twitter.com' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <Logo variant="footer" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="footer__social">
              {redes.map((rede) => (
                <a key={rede.name} href={rede.href} target="_blank" rel="noreferrer" aria-label={rede.name}>
                  <img src={rede.icon} alt="" width="30" height="30" />
                </a>
              ))}
            </div>
          </div>

          <FooterInfo title="Informação" informations={informacoes} />
          <FooterInfo title="Categorias" informations={categorias} />
          <FooterInfo title="Contato" informations={contato} />
        </div>

        <hr />
        <p className="footer__copy">© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  )
}

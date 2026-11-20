import Layout from './Layout.jsx'
import Gallery from '../components/Gallery.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import { products } from '../data/products.js'
import './HomePage.css'

const slides = Array.from({ length: 8 }, (_, i) => ({ src: `/home-slide-${i + 1}.jpeg` }))
const collections = [1, 2, 3].map((n) => ({ src: `/collection-${n}.png`, alt: `Coleção em destaque ${n}` }))

export default function HomePage() {
  return (
    <Layout>
      <main>
        <Gallery images={slides} width="1440px" height="681px" className="home-gallery" />

        <div className="container">
          <Section title="Coleções em destaque" titleAlign="center">
            <div className="collections">
              {collections.map((c) => (
                <img key={c.src} src={c.src} alt={c.alt} />
              ))}
            </div>
          </Section>

          <Section title="Produtos em alta" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
            <ProductListing products={products.slice(0, 8)} columns={4} />
          </Section>
        </div>
      </main>
    </Layout>
  )
}

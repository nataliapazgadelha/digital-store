import { Link, useParams } from 'react-router-dom'
import Layout from './Layout.jsx'
import Gallery from '../components/Gallery.jsx'
import BuyBox from '../components/BuyBox.jsx'
import ProductOptions from '../components/ProductOptions.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import { products, getProductById } from '../data/products.js'
import './ProductViewPage.css'

export default function ProductViewPage() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <Layout>
        <main className="container product-view__missing">
          <h1>Produto não encontrado</h1>
          <p>O produto que você procura não existe ou foi removido.</p>
          <Link to="/products">Ver todos os produtos</Link>
        </main>
      </Layout>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <Layout>
      <main className="container">
        <div className="product-view">
          <div className="product-view__gallery">
            <Gallery images={product.images} width="700px" height="570px" radius="4px" showThumbs />
          </div>

          <div className="product-view__buybox">
            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
            >
              <ProductOptions title="Tamanho" options={product.sizes} shape="square" radius="4px" type="text" />
              <ProductOptions title="Cor" options={product.colors} shape="circle" type="color" />
            </BuyBox>
          </div>
        </div>

        <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={related} columns={4} />
        </Section>
      </main>
    </Layout>
  )
}

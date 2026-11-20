import ProductCard from './ProductCard.jsx'
import './ProductListing.css'

// products: array de { name, image, price, priceDiscount? } | columns: colunas no desktop
export default function ProductListing({ products = [], columns = 4 }) {
  return (
    <div className="product-listing" style={{ '--columns': columns }}>
      {products.map((product) => (
        <ProductCard
          key={product.id ?? product.name}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          category={product.category}
        />
      ))}
    </div>
  )
}

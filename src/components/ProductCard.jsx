import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/format.js'
import './ProductCard.css'

// image, name, price, priceDiscount (opcional); id e category são opcionais
export default function ProductCard({ id, image, name, price, priceDiscount, category }) {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null
  const percent = hasDiscount ? Math.round((1 - priceDiscount / price) * 100) : 0

  const content = (
    <>
      <div className="product-card__image">
        <img src={image} alt={name} width="292" height="321" loading="lazy" />
        {hasDiscount && <span className="product-card__tag">{percent}% OFF</span>}
      </div>
      {category && <span className="product-card__category">{category}</span>}
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__prices">
        {hasDiscount ? (
          <>
            <span className="product-card__price product-card__price--old">{formatPrice(price)}</span>
            <span className="product-card__price">{formatPrice(priceDiscount)}</span>
          </>
        ) : (
          <span className="product-card__price">{formatPrice(price)}</span>
        )}
      </p>
    </>
  )

  return id !== undefined ? (
    <Link to={`/product/${id}`} className="product-card">{content}</Link>
  ) : (
    <article className="product-card">{content}</article>
  )
}

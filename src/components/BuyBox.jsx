import { formatPrice } from '../utils/format.js'
import './BuyBox.css'

export default function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }) {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null

  return (
    <div className="buy-box">
      <h1 className="buy-box__name">{name}</h1>
      <p className="buy-box__reference">Ref: {reference}</p>

      <div className="buy-box__rating">
        <span className="buy-box__stars">
          {stars}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        </span>
        <span className="buy-box__reviews">({rating} avaliações)</span>
      </div>

      <p className="buy-box__prices">
        {hasDiscount ? (
          <>
            <span className="buy-box__price">{formatPrice(priceDiscount)}</span>
            <span className="buy-box__price buy-box__price--old">{formatPrice(price)}</span>
          </>
        ) : (
          <span className="buy-box__price">{formatPrice(price)}</span>
        )}
      </p>

      <p className="buy-box__label">Descrição do produto</p>
      <p className="buy-box__description">{description}</p>

      <div className="buy-box__options">{children}</div>

      <button type="button" className="buy-box__cta">COMPRAR</button>
    </div>
  )
}

import { useState } from 'react'
import './ProductOptions.css'

// options | shape: 'square' | 'circle' | type: 'text' | 'color' | radius (só no square)
export default function ProductOptions({ title, options = [], shape = 'square', radius = '4px', type = 'text', onChange }) {
  const [selected, setSelected] = useState(null)

  function choose(option) {
    setSelected(option)
    if (onChange) onChange(option)
  }

  return (
    <div className="product-options">
      {title && <p className="product-options__title">{title}</p>}
      <div className="product-options__list">
        {options.map((option) => {
          const isColor = type === 'color'
          const style = {
            ...(shape === 'square' ? { borderRadius: radius } : {}),
            ...(isColor ? { backgroundColor: option } : {}),
          }
          return (
            <button
              key={option}
              type="button"
              className={
                `product-options__item product-options__item--${shape}` +
                (selected === option ? ' product-options__item--selected' : '')
              }
              style={style}
              onClick={() => choose(option)}
              aria-pressed={selected === option}
              aria-label={isColor ? `Cor ${option}` : `Opção ${option}`}
            >
              {!isColor && option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

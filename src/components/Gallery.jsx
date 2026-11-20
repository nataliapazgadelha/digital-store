import { useState } from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'
import './Gallery.css'

// Aceita 1440, "1440" ou "1440px" e devolve o número (ou null)
const toNumber = (value) => {
  const n = parseFloat(value)
  return Number.isNaN(n) ? null : n
}

export default function Gallery({ images = [], width, height, radius = '0px', showThumbs = false, className = '' }) {
  const [current, setCurrent] = useState(0)
  const w = toNumber(width)
  const h = toNumber(height)
  const isFirst = current === 0
  const isLast = current === images.length - 1

  const rootStyle = { '--radius': radius, ...(w ? { maxWidth: w } : {}) }
  // Com largura e altura informadas, o slide mantém a proporção ao encolher no mobile
  const viewportStyle = w && h ? { aspectRatio: `${w} / ${h}` } : h ? { height: h } : {}

  function handleKey(event) {
    if (event.key === 'ArrowLeft' && !isFirst) setCurrent((i) => i - 1)
    if (event.key === 'ArrowRight' && !isLast) setCurrent((i) => i + 1)
  }

  if (images.length === 0) return null

  return (
    <div className={`gallery ${className}`.trim()} style={rootStyle} onKeyDown={handleKey}>
      <div className="gallery__viewport" style={viewportStyle}>
        <div className="gallery__track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={image.src}
              className="gallery__slide"
              src={image.src}
              alt={`Imagem ${index + 1} de ${images.length}`}
              aria-hidden={index !== current}
            />
          ))}
        </div>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--left"
          onClick={() => setCurrent((i) => i - 1)}
          disabled={isFirst}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>
        <button
          type="button"
          className="gallery__arrow gallery__arrow--right"
          onClick={() => setCurrent((i) => i + 1)}
          disabled={isLast}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={'gallery__thumb' + (index === current ? ' gallery__thumb--active' : '')}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagem ${index + 1}`}
              aria-current={index === current}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

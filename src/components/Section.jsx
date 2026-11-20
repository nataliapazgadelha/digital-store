import { Link } from 'react-router-dom'
import './Section.css'

// title | titleAlign: 'left' (padrão) ou 'center' | link: { text, href } | children
export default function Section({ title, titleAlign = 'left', link, children }) {
  const isInternal = link?.href?.startsWith('/')

  return (
    <section className="section">
      <div className={`section__header section__header--${titleAlign}`}>
        <h2 className="section__title">{title}</h2>
        {link &&
          (isInternal ? (
            <Link className="section__link" to={link.href}>{link.text}</Link>
          ) : (
            <a className="section__link" href={link.href}>{link.text}</a>
          ))}
      </div>
      {children}
    </section>
  )
}

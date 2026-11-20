import { Link } from 'react-router-dom'

// title: título do bloco | informations: [{ text, link? }]
export default function FooterInfo({ title, informations = [] }) {
  return (
    <div className="footer__info">
      <h3 className="footer__info-title">{title}</h3>
      <ul>
        {informations.map((item) => (
          <li key={item.text}>
            {item.link ? <Link to={item.link}>{item.text}</Link> : item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

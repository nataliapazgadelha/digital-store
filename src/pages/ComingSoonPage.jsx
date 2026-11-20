import { Link } from 'react-router-dom'
import Layout from './Layout.jsx'

export default function ComingSoonPage() {
  return (
    <Layout>
      <main className="container" style={{ padding: '80px 0 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 32, color: 'var(--dark-gray)', marginBottom: 12 }}>Página em construção</h1>
        <p style={{ marginBottom: 24 }}>Esta área ainda não está disponível na Digital Store.</p>
        <Link to="/" style={{ color: 'var(--primary)', fontWeight: 700 }}>Voltar para a Home</Link>
      </main>
    </Layout>
  )
}

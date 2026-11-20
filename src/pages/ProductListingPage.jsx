import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Layout from './Layout.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import FilterGroup from '../components/FilterGroup.jsx'
import { products, filterOptions, effectivePrice } from '../data/products.js'
import './ProductListingPage.css'

// Remove acentos e deixa minúsculo: "Tênis" e "tenis" passam a casar
const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

const toOptions = (list) => list.map((text) => ({ text }))

export default function ProductListingPage() {
  const [searchParams] = useSearchParams()
  const searchTerm = (searchParams.get('filter') ?? '').trim()

  const [sort, setSort] = useState('relevance')
  const [brand, setBrand] = useState([])
  const [category, setCategory] = useState([])
  const [gender, setGender] = useState([])
  const [state, setState] = useState(['Todos'])

  const visible = useMemo(() => {
    const term = normalize(searchTerm)
    const list = products.filter((p) => {
      const text = normalize(`${p.name} ${p.brand} ${p.category} ${p.type}`)
      return (
        (!term || text.includes(term)) &&
        (brand.length === 0 || brand.includes(p.brand)) &&
        (category.length === 0 || category.includes(p.category)) &&
        (gender.length === 0 || gender.includes(p.gender)) &&
        (state[0] === 'Todos' || p.state === state[0])
      )
    })
    if (sort === 'asc') return [...list].sort((a, b) => effectivePrice(a) - effectivePrice(b))
    if (sort === 'desc') return [...list].sort((a, b) => effectivePrice(b) - effectivePrice(a))
    return list
  }, [searchTerm, sort, brand, category, gender, state])

  function clearFilters() {
    setBrand([])
    setCategory([])
    setGender([])
    setState(['Todos'])
  }

  const count = `${visible.length} ${visible.length === 1 ? 'produto' : 'produtos'}`
  const title = searchTerm ? `Resultados para "${searchTerm}" - ${count}` : count

  return (
    <Layout>
      <main className="container listing">
        <aside className="listing__sidebar">
          <div className="listing__sort">
            <label htmlFor="sort">Ordenar por</label>
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="relevance">Mais relevantes</option>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </div>

          <div className="listing__filters">
            <h2>Filtrar por</h2>
            <hr />
            <FilterGroup title="Marca" inputType="checkbox" options={toOptions(filterOptions.brand)} selected={brand} onChange={setBrand} />
            <FilterGroup title="Categoria" inputType="checkbox" options={toOptions(filterOptions.category)} selected={category} onChange={setCategory} />
            <FilterGroup title="Gênero" inputType="checkbox" options={toOptions(filterOptions.gender)} selected={gender} onChange={setGender} />
            <FilterGroup title="Estado" inputType="radio" options={toOptions(filterOptions.state)} selected={state} onChange={setState} />
          </div>
        </aside>

        <div className="listing__results">
          <Section title={title} titleAlign="left">
            {visible.length > 0 ? (
              <ProductListing products={visible} columns={3} />
            ) : (
              <div className="listing__empty">
                <p>Nenhum produto encontrado com esses filtros.</p>
                <button type="button" onClick={clearFilters}>Limpar filtros</button>
              </div>
            )}
          </Section>
        </div>
      </main>
    </Layout>
  )
}

const IMAGES = [1, 2, 3, 4, 5].map((n) => ({ src: `/produc-image-${n}.jpeg` }))

const description =
  'Tênis confortável e resistente, ideal para o dia a dia. Cabedal em material respirável, ' +
  'solado com boa aderência e acabamento premium. Lorem ipsum dolor sit amet, consectetur ' +
  'adipiscing elit, sed do eiusmod tempor incididunt ut labore.'

const base = [
  ['K-Swiss V8 - Masculino', 'K-Swiss', 'Casual', 'Masculino', 'Novo', 1, 200, 149.9],
  ['Air Jordan Mid Red', 'Nike', 'Esporte e lazer', 'Masculino', 'Novo', 2, 520, 429.9],
  ['Tênis Vans Authentic Marrom', 'Vans', 'Casual', 'Unisex', 'Novo', 3, 249.9, null],
  ['Sneaker Retrô Azul e Caramelo', 'Adidas', 'Casual', 'Feminino', 'Usado', 4, 349.9, 279.9],
  ['Nike SuperRep Go Verde Neon', 'Nike', 'Corrida', 'Unisex', 'Novo', 5, 399.9, null],
  ['Air Jordan 1 Mid Preto e Branco', 'Nike', 'Esporte e lazer', 'Masculino', 'Novo', 1, 699.9, 599.9],
  ['Tênis Casual Urbano Vermelho', 'Puma', 'Casual', 'Feminino', 'Usado', 2, 289.9, 219.9],
  ['Vans Old Skool Caramelo', 'Vans', 'Casual', 'Masculino', 'Usado', 3, 329.9, null],
  ['Adidas Runner Azul', 'Adidas', 'Corrida', 'Feminino', 'Novo', 4, 459.9, 389.9],
  ['Nike Training Flex Verde', 'Nike', 'Corrida', 'Masculino', 'Novo', 5, 379.9, 329.9],
  ['K-Swiss Classic Preto', 'K-Swiss', 'Casual', 'Unisex', 'Novo', 1, 259.9, null],
  ['Puma Street Vermelho e Branco', 'Puma', 'Esporte e lazer', 'Unisex', 'Usado', 2, 310, 249.9],
]

export const products = base.map(
  ([name, brand, category, gender, state, thumb, price, priceDiscount], i) => ({
    id: i + 1,
    name,
    type: 'Tênis',
    brand,
    category,
    gender,
    state,
    image: `/product-thumb-${thumb}.jpeg`,
    images: IMAGES,
    price,
    ...(priceDiscount ? { priceDiscount } : {}),
    reference: String(38416700 + i + 11),
    stars: [4.7, 4.5, 4.8, 4.2, 4.9, 4.6][i % 6],
    rating: 60 + ((i * 17) % 90),
    description,
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'],
  })
)

export const filterOptions = {
  brand: ['Adidas', 'K-Swiss', 'Nike', 'Puma', 'Vans'],
  category: ['Casual', 'Corrida', 'Esporte e lazer'],
  gender: ['Masculino', 'Feminino', 'Unisex'],
  state: ['Todos', 'Novo', 'Usado'],
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id))
}

export function effectivePrice(p) {
  return p.priceDiscount ?? p.price
}

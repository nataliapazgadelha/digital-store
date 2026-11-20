# Digital Store

Projeto final de Front-end do **Digital College**: uma loja virtual de tênis feita com **React**, seguindo a documentação do [repositório base](https://github.com/digitalcollegebr/projeto-digital-store) e o design do Figma.

## Integrantes

- Natália Paz Gadelha <!-- adicione aqui o nome completo de todos os integrantes da equipe -->

## Deploy

<!-- cole aqui o link do projeto publicado (Vercel/Netlify) -->

## Tecnologias

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router DOM 6](https://reactrouter.com/) para as rotas
- CSS puro (um arquivo por componente, com as cores da documentação como variáveis em `src/index.css`)

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install     # instala as dependências
npm run dev     # abre em http://localhost:5173
npm run build   # gera a versão de produção na pasta dist
npm run preview # testa a versão de produção localmente
```

## Páginas e rotas

| Rota            | Página                                                                 |
| --------------- | ---------------------------------------------------------------------- |
| `/`             | Home: galeria de imagens, coleções em destaque e produtos em alta       |
| `/products`     | Listagem: ordenar, filtrar e busca por `?filter=termo`                  |
| `/product/:id`  | Visualização do produto: galeria, Buy Box, opções e recomendados        |
| demais rotas    | "Página em construção" (Categorias, Meus Pedidos, Entrar, Cadastre-se…) |

> A documentação cita `/products` (busca e "Ver todos") e `/produtos` (seção 6). Foi usada `/products` em todo o projeto para manter a busca consistente.

## Estrutura

```
src/
├── assets/        # logos e ícones SVG
├── components/    # Header, Footer, FooterInfo, Logo, Section, ProductCard,
│                  # ProductListing, Gallery, FilterGroup, ProductOptions, BuyBox
├── data/          # produtos de exemplo (products.js)
├── pages/         # Layout, HomePage, ProductListingPage, ProductViewPage, ComingSoonPage
├── utils/         # formatação de preço
├── App.jsx        # rotas
└── main.jsx
public/            # imagens do projeto (slides, coleções, produtos)
```

## Requisitos atendidos

- **Layout** com `children` entre `Header` e `Footer`.
- **Header**: logo 253x44, busca (Enter ou clique na lupa → `/products?filter=...`), "Cadastre-se", botão "Entrar" 114x40, carrinho e navegação com `NavLink` (item ativo destacado).
- **Footer**: logo branca, descrição, redes sociais, blocos dinâmicos com `title` e `informations`, `<hr />` e direitos autorais com o ano atual.
- **Section** (`title`, `titleAlign`, `link`, `children`), **ProductCard** (preço riscado com desconto), **ProductListing**, **Gallery** (setas desabilitadas nas pontas, miniaturas com borda `primary`).
- **Listagem**: ordenar por preço, filtros por marca, categoria, gênero e estado (`FilterGroup`), total de produtos no título e busca por termo.
- **Produto**: `Gallery` com miniaturas, `BuyBox`, `ProductOptions` (quadrado/círculo, texto/cor, borda de 2px ao selecionar) e produtos recomendados.
- Responsivo para tablet e celular.

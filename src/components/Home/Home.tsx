import type { Pages } from '../../types/pages'
import GenericBody from '../GenericBody/GenericBody'
import { products } from '../../db/db'
import { CardHome } from './styles/CardHome.styled'
import { ContainerCard } from './styles/ContainerCard.styled'
import { MarkButton } from './styles/MarkButton.styled'

type HomeProps = {
  onNavigate: (newPage: Pages) => void
  cart: Record<number, number>         // id → quantidade
  setCart: React.Dispatch<React.SetStateAction<Record<number, number>>>
}

const Home = ({ onNavigate, cart, setCart }: HomeProps) => {
  // Lista de produtos com marcação se estão no carrinho
  const productList = products.map(product => ({
    ...product,
    marked: cart[product.id] > 0
  }))

  // Alterna seleção de produto
  const toggleSelect = (id: number) => {
    setCart(prev => {
      // Se já existe, remove (quantidade 0), senão adiciona com quantidade 1
      if (prev[id]) {
        const newCart = { ...prev }
        delete newCart[id]
        return newCart
      }
      return { ...prev, [id]: 1 }
    })
  }

  // Quantidade de itens selecionados
  const selectedCount = Object.keys(cart).length

  return (
    <GenericBody
      pageTitle="Produtos"
      showCont={true}
      couter={selectedCount}
      positionButton="flex-end"
      onButtonClick={() => onNavigate("carrinho")}
      buttonText="Ir para Carrinho"
      showTotal={false}
    >
      <ContainerCard>
        {productList.map(product => (
          <CardHome key={product.id}>
            <img src={product.image} alt={product.name} width={200} />
            <MarkButton>
              <button
                className={product.marked ? "active" : ""}
                onClick={() => toggleSelect(product.id)}
              />
            </MarkButton>
          </CardHome>
        ))}
      </ContainerCard>
    </GenericBody>
  )
}

export default Home

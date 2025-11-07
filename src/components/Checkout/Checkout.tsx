import type { Pages } from "../../types/pages"
import GenericBody from "../GenericBody/GenericBody"
import { products } from "../../db/db"
import { CheckoutContent } from "./styles/CheckoutContent.styled"

type CheckoutProps = {
  onNavigate: (newPage: Pages) => void
  cart: Record<number, number>
  setCart: React.Dispatch<React.SetStateAction<Record<number, number>>>
}

const Checkout = ({ onNavigate, cart, setCart }: CheckoutProps) => {
  // Filtra produtos que estão no carrinho
  const cartProducts = products.filter(product => cart[product.id] > 0)

  // Calcula valor total
  const total = cartProducts.reduce((acc, product) => {
    const qty = cart[product.id] || 0
    return acc + product.price * qty
  }, 0)

  // Calcula quantidade total de itens
  const totalItems = cartProducts.reduce((acc, product) => {
    const qty = cart[product.id] || 0
    return acc + qty
  }, 0)

  return (
    <GenericBody
      pageTitle="Checkout"
      showCont={false}
      positionButton="center"
      onButtonClick={() => onNavigate("home")}
      buttonText="Finalizar Compra"
      showTotal={false}           // mostrar total no botão/footer
      totalValue={total}         // valor total passado para o footer
    >
      <CheckoutContent>
        <h1>Produtos Escolhidos:</h1>
        {cartProducts.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {cartProducts.map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} width={100} />
                <p>Quantidade: {cart[product.id]}</p>
              </li>
            ))}
          </ul>
        )}
        <h2>Total de produtos: {totalItems}</h2>
        <h2>Total: R$ {total.toFixed(2)}</h2>
      </CheckoutContent>
    </GenericBody>
  )
}

export default Checkout

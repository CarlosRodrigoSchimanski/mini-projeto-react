import type { Pages } from "../../types/pages"
import { products } from "../../db/db"
import { List } from "./styles/List.styled"
import { Item } from "./styles/Item.styled"
import GenericBody from "../GenericBody/GenericBody"
import Add from "./assets/+.png"
import Remove from "./assets/-.png"


type CartProps = {
  onNavigate: (newPage: Pages) => void
  cart: Record<number, number>          // id → quantidade
  setCart: React.Dispatch<React.SetStateAction<Record<number, number>>>
}


const Cart = ({ cart, setCart, onNavigate }: CartProps) => {
  const cartProducts = products.filter(product => cart[product.id] > 0)

  // Atualiza quantidade do item (mínimo 0)
  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => {
      const newQty = Math.max((prev[id] || 0) + delta, 0)
      return { ...prev, [id]: newQty }
    })
  }

  // Remove produto completamente
  const removeItem = (id: number) => {
    setCart(prev => {
      const newCart = { ...prev }
      delete newCart[id]
      return newCart
    })
  }

  // Total geral
  const total = cartProducts.reduce((acc, product) => {
    const qty = cart[product.id] || 0
    return acc + product.price * qty
  }, 0)

  return (
    <GenericBody
      pageTitle="Carrinho"
      showCont={true}
      couter={cartProducts.length}
      positionButton="flex-start"
      onButtonClick={() => onNavigate("checkout")}
      buttonText="Finalizar Compra"
      showTotal={true}
      totalValue={total}
    >
      {cartProducts.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <List>
          {cartProducts.map(product => (
            <Item key={product.id}>
              <img src={product.image} alt={product.name} width={100} />
              <div className="info">
                <span className="name">{product.name}</span>
                <span className="price">Valor: R$ {product.price.toFixed(2)}</span>
                <div className="quantity">
                  <button onClick={() => updateQuantity(product.id, -1)}><img src={Remove} alt="remover"/></button>
                  <span>{cart[product.id]}</span>
                  <button onClick={() => updateQuantity(product.id, +1)}><img src={Add} alt="remover"/></button>
                </div>
                <button className="remove" onClick={() => removeItem(product.id)}>
                  Remover
                </button>
              </div>
            </Item>
          ))}
        </List>
      )}
    </GenericBody>
  )
}

export default Cart

import type { Pages } from "../../types/pages"
import { products } from "../../db/db"

type CartProps = {
  onNavigate: (newPage: Pages) => void
  cartItens: number[]
  setItens: React.Dispatch<React.SetStateAction<number[]>>
}

const Cart = ({ cartItens, setItens, onNavigate }: CartProps) => {
  const cartProducts = products.filter(product => cartItens.includes(product.id))
  const removeItem = (id: number) => {
    setItens(prev => prev.filter(itemId => itemId !== id))
  }

  return (
    <div>
      <h2>Carrinho</h2>

      {cartProducts.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <ul>
          {cartProducts.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} width={100} />
              <span>{product.name}</span>
              <span>R$ {product.price.toFixed(2)}</span>
              <button onClick={() => removeItem(product.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => onNavigate("home")}>Voltar às compras</button>
    </div>
  )
}

export default Cart

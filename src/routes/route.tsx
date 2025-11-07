import { useState } from "react"
import type { Pages } from "../types/pages"
import Home from "../components/Home/Home"
import Cart from "../components/Cart/Cart"
import Checkout from "../components/Checkout/Checkout"

// Estrutura do state centralizado do carrinho
// { [id: number]: quantidade }
type CartState = Record<number, number>

const Routes = () => {
  const [page, setPage] = useState<Pages>("home")
  const [cart, setCart] = useState<CartState>({}) // state único para todo o carrinho

  const goTo = (newPage: Pages) => setPage(newPage)

  // Passa cart e setCart para as páginas filhas
  if (page === "home") {
    return (
      <Home
        onNavigate={goTo}
        cart={cart}
        setCart={setCart}
      />
    )
  }

  if (page === "carrinho") {
    return (
      <Cart
        onNavigate={goTo}
        cart={cart}
        setCart={setCart}
      />
    )
  }

  if (page === "checkout") {
    return (
      <Checkout
        onNavigate={goTo}
        cart={cart}
        setCart={setCart}
      />
    )
  }

  return null
}

export default Routes

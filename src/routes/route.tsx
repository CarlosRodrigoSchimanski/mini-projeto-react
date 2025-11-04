import Home from "../components/Home/Home"
import { useState } from "react"
import type { Pages } from "../types/pages"
import Cart from "../components/Cart/Cart";

const Routes = () => {
  const [page, setPage] = useState<Pages>("home")
  const [cartItems, setCartItems] = useState<number[]>([])

  const goTo = (newPage: Pages) => setPage(newPage)

  if (page === "home") {
    return (
      <Home
        onNavigate={goTo}
        setItens={setCartItems}
        cartItens={cartItems}
      />
    )
  }

  if (page === "carrinho") {
    return (
      <Cart
        onNavigate={goTo}
        setItens={setCartItems}
        cartItens={cartItems}
      />
    )
  }

  return null
}

export default Routes

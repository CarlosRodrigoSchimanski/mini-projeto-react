import Home from "../components/Home/Home"
import { useState } from "react";
import type { Pages } from "../types/pages";



const Routes = () => {
  const [page, setPage] = useState<Pages>("home");

  const goTo = (newPage: Pages) => setPage(newPage);

  if (page === "home") return <Home onNavigate={goTo} />;
  if (page === "carrinho") return <h1>produtos</h1>;
  //if (page === "produtos") return <Produtos onNavigate={goTo} />;
  //if (page === "checkout") return <Checkout onNavigate={goTo} />;

  return null;
};

export default Routes
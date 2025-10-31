import Home from "../components/Home/Home"
import { useState } from "react";


type Page = "home" | "produtos" | "checkout";

const Routes = () => {
  const [page, setPage] = useState<Page>("home");

  const goTo = (newPage: Page) => setPage(newPage);

  if (page === "home") return <Home onNavigate={goTo} />;
  if (page === "produtos") return <h1>produtos</h1>;
  //if (page === "produtos") return <Produtos onNavigate={goTo} />;
  //if (page === "checkout") return <Checkout onNavigate={goTo} />;

  return null;
};

export default Routes
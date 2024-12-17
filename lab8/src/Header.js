import React, { useState } from "react";
import { useSelector } from "react-redux";
import Basket from "./Basket";
import ProductsList from "./ProductsList";

function Header() {
  const productsInBasket = useSelector((state) => state.productsInBasket);
  const [view, setView] = useState("products");
  return (
    <div>
      <div className="buttons is-centered">
        <button
          className={`button is-info ${
            view === "products" ? "is-selected" : ""
          }`}
          onClick={() => setView("products")}
        >
          Products
        </button>
        <button
          className={`button is-info ${
            view === "basket" ? "is-selected" : ""
          }`}
          onClick={() => setView("basket")}
        >
          Basket ({productsInBasket.length})
        </button>
      </div>
      {view === "products" ? <ProductsList /> : <Basket />}
    </div>
  )
}

export default Header
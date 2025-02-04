import "./bottles.css";
import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

export default function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div>
      <h3>Bottles Available : {bottles.length}</h3>
      <h4>Cart : {cart.length}</h4>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            handleAddToCart={handleAddToCart}
            key={bottle.id}
          ></Bottle>
        ))}
      </div>
    </div>
  );
}

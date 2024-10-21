import "./Bottle.css";

export default function Bottle({ bottle, handleAddToCart }) {
  const { name, img, price } = bottle;

  
  return (
    <div className="bottle-container">
      <p>Bottle name: {name}</p>
      <img src={img} alt="" />
      <p>Price: {price} $</p>
      <button onClick={() => handleAddToCart(bottle)}>Add Cart</button>
    </div>
  );
}

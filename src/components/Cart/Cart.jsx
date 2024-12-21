import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CartItem from "../CartItem/CartItem";

function Cart() {
  const {cart ,clearCart , getTotal , totalQuantity} = useCart()
  const total =getTotal()

  if(totalQuantity === 0){
    return  <h1>No hay items en el carrito</h1>
  }
  
  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <h3 className="cart-total">Total: ${total}</h3>
      <div className="cart-actions">
        <button onClick={clearCart} className="cart-clear-btn">
          Limpiar Carrito
        </button>
        <Link to="/checkout" className="cart-checkout-btn">
          Comprar
        </Link>
      </div>
    </div>
  );
}

export default Cart

import { Link } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
import ItemCount from "../ItemCount/ItemCount"
import"./itemDetail.css"


export default function ItemDetail({id,name, img, description, category, price, stock}) {
  const {addItem , isInCart} = useCart()
  const handleAdd = (count) => {
    const productToAdd = {
      id, name, price, quantity: count
  }
  addItem(productToAdd)
}
  return (
   <div className="item-detail-container">
      <h2 className="item-title">{name}</h2>
      <div className="item-card">
        <img src={img} className="item-img" alt={name} />

        <div className="item-info">
          <p className="item-description">{description}</p>
          <p className="item-category"><strong>Categoría:</strong> {category}</p>
          <p className="item-price"><strong>Precio:</strong> ${price}</p>
          <p className="item-stock"><strong>Disponible:</strong> {stock}</p>

          {isInCart(id) ? (
            <Link to="/cart" className="item-link">Finalizar compra</Link>
          ) : (
            <ItemCount stock={stock} onAdd={handleAdd} />
          )}
        </div>
      </div>
    </div>
  );
}


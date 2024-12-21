import { useState } from "react";
import "./ItemCount.css"

export default function ItemCount({initialValue=1, stock, onAdd}) {
    const [cantidad, setCantidad] = useState(initialValue)
    
  
    const decrement = () => {
        if(cantidad>1){
            setCantidad(cantidad => cantidad -1)
        }
    }
    const increment = () => {
        if(stock > cantidad){
            setCantidad((cantidad) => cantidad + 1);
        }
    }

    return (
        <div className="item-count">
      <h1 className="item-count-value">{cantidad}</h1>
      <div className="item-count-buttons">
        <button className="item-btn" onClick={decrement}>
          Quitar producto
        </button>
        <button className="item-btn primary" onClick={() => onAdd(cantidad)}>
          Agregar al carrito
        </button>
        <button className="item-btn" onClick={increment}>
          Añadir producto
        </button>
      </div>
    </div>
  );
}
     

import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";
import "./Checkout.css";


const Checkout = () => {
 
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);

  const { cart, totalQuantity, getTotal, clearCart } = useCart();
  const total = getTotal();

  const createOrder = async () => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          firstName: nombre,
          lastName: apellido,
          phone: telefono,
          addres: direccion,
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };

      const ids = cart.map((item) => item.id);
      

      const productRef = collection(db, "productos");

      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddedFromFirestore;

      const outOfStock = [];
      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDB = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const productQuantity = productAddedToCart?.quantity;

        if (stockDB >= productQuantity) {
          batch.update(doc.ref, { stock: stockDB - productQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        console.log(`El id de su orden es ${orderAdded.id}`);
        
        setOrderCreated(true);
        clearCart();
      } else {
        
        console.log("Hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.log("");
    } finally {
      setLoading(false);
    }

    if (loading) {
      return <h1>Se esta generando la orden</h1>;
    }

    if (orderCreated) {
      return <h1>La orden fue creada correctamente</h1>;
    }
  };

  return (
    <>
      {/* form de checkout */}
      <div className="checkout-container">
    <h1>Checkout</h1>
    <div className="form-group">
      <label htmlFor="nombre">Nombre</label>
      <input
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />
    </div>
    <div className="form-group">
      <label htmlFor="apellido">Apellido</label>
      <input
        onChange={(e) => setApellido(e.target.value)}
        value={apellido}
      />
    </div>
    <div className="form-group">
      <label htmlFor="telefono">Teléfono</label>
      <input
        onChange={(e) => setTelefono(e.target.value)}
        value={telefono}
      />
    </div>
    <div className="form-group">
      <label htmlFor="direccion">Dirección</label>
      <input
        onChange={(e) => setDireccion(e.target.value)}
        value={direccion}
      />
    </div>
    <div>
      {cart.map((item) => (
        <article key={item.id}>
          <header>
            <h2>
              {item.name}{" "}
              <span className="badge">Cantidad: {item.quantity}</span>
            </h2>
          </header>
        </article>
      ))}
    </div>
    <div className="button-container">
      <button onClick={createOrder}>Generar Orden</button>
    </div>
  </div>
 );
    </>
  );
}

export default Checkout
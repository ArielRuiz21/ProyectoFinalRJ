import { useParams } from "react-router-dom";
/*import { getProductByID } from "../../asyncMock"; */
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
export default function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const {productId} = useParams()


  useEffect(()=>{
    getDoc(doc(db, 'productos', productId))
    .then((querySnapshot)=>{
      const prod = {id: querySnapshot.id, ...querySnapshot.data()}
      setProduct(prod)

    })
    .catch((err)=>{

    }, [productId])
  })

  return (
    <div>
      <h2>Detalle del producto</h2>
      <hr />
      <ItemDetail {...product} />
    </div>
  );
}

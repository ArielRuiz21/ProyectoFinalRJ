import { useEffect, useState } from "react";
/*import { getProducts, getProductsByCategory } from "../../asyncMock"; */
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import "./ItemListContainer.css"
export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    

     useEffect(()=>{
      const collectionRef = categoryId
      ? query(collection(db, "productos"), where("category","==", categoryId ))
      :collection(db, "productos")
      getDocs( collectionRef)
      .then((querySnapshot)=>{
        const response = querySnapshot.docs.map((doc)=>{
          return {id: doc.id, ...doc.data() }
        })
        setProducts(response)

      })
      .catch((error)=>{})
      
     },[categoryId])

  return (
    <div>
      <h2>Bienvenidos a Tienda Star</h2>
      <ItemList products={products} />
    </div>
  );
}

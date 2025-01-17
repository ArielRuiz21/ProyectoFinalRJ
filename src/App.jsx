import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Card from './components/Card';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar title="Tienda Star" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Card />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App

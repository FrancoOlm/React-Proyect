import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import {CartProvider} from "./CartContext/CartContext.js"
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import {NotificationProvider} from './services/NotificationService/NotificationService'

function App() {
  return (
    <div className="App">
      <NotificationProvider>
      <BrowserRouter>
      <CartProvider>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Budgie Tech'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path= '/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/> 
          </Routes>
          </CartProvider>
      </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;

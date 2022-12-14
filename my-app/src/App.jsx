import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx';
// import ControlledCarousel from './components/navbar/Carousel';
import ItemDetailContainer from './components/ItemDetailContainer/IndexDetail.jsx'
import ItemListContainer from './container/ItemListContainer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import CartWidget from './components/navbar/CartWidget';
import CartProvider from './context/CartContext.jsx';
import Cart from './components/Cart/Cart'
import './firebase/config';
import Formu from './components/form/form';
import Formbuy from './components/form/Formbuy'
import Footer from './components/navbar/Footer';

function App() {

  return (
    <>
    <div className="App">

      <BrowserRouter>
      <CartProvider>
        <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/product/:idProduct' element={<ItemDetailContainer />}/>
              <Route path='/category/:idCategory' element={<ItemListContainer />} />
              <Route path='/detail' element={<ItemDetailContainer />}/>
              <Route path='/Cart' element={<Cart />}/>
              <Route path='/Form' element={<Formu />}/>
              <Route path='/Footer' element={<Footer />}/>
              <Route path='/Formbuy' element={<Formbuy />}/>
            </Routes>
            <Footer />
        </CartProvider>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;

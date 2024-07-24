import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';


function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/products/:id" element={<Product></Product>} />
        </Routes>
   
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Functional_Components/Home';
import AboutPage from './Functional_Components/AboutPage';
import ContactUs from './Functional_Components/ContactUs';
import ProductDetails from './Functional_Components/ProductDetails';
import ProductMain from './Functional_Components/ProductMain';
import Cart from './Functional_Components/Cart';
import Checkout from './Functional_Components/Checkout';
import PageNotFound from './Functional_Components/PageNotFound';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/productlist" element={<ProductMain />} />
      <Route path="/productDetails" element={<ProductDetails />} />
      {/* <Route path="/Header" element={<Header />} /> */}
     
      
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/product/*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

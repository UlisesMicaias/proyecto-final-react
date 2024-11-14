// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/navBar/Layout";
import ItemListContainer from "./components/container/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import NotFound from "./components/NotFound";
import { CartProvider } from "./components/cart/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/genres/:genresId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


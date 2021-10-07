import { useState, useEffect } from 'react'
import './App.css';
import ProductList from './components/Products/ProductList';



function App() {

  return (
    <div className="App">

      <h1>Our products</h1>

      <ProductList />


    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Homescreen from './components/content/Homescreen';
//import {Routes, Route} from 'react-router-dom'
//import Layout from './components/Mainheader/Layout';
import Header from './components/Mainheader/Header';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div>
      <Header />
      <Cart />
      <Homescreen />
    </div>
  )
     
}

export default App;

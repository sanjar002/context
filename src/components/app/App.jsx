import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Auth from '../../pages/auth/Auth';
import Home from '../../pages/home/Home';
import NotPages from '../../pages/not-pages/NotPages';
import Products from '../../pages/products/Products';
import Header from '../header/Header';
import "./App.css";

const App = () => {
  return (
    <div>
        <Header />
        <Routes>
              <Route path='/' element={ <Home /> }/>
              <Route path='/products' element={ <Products /> }/>
              <Route path='/auth' element={ <Auth /> }/>
              <Route path='*' element={ <NotPages /> }/>
        </Routes>
    </div>
  );
};

export default App;
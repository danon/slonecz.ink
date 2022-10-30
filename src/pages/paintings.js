import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductsContent from '../components/shop/ProductsContent';

export default function Paintings() {
  return <>
    <Navbar/>
    <div className="page-title-area item-bg2">
      <div className="container">
        <h1>My Latest Paintings</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shop</li>
        </ul>
      </div>
    </div>
    <ProductsContent/>
    <Footer/>
  </>;
}

import React from 'react';
import {Link} from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartContent from '../components/shop/CartContent';

export default function Cart() {
  return <>
    <Navbar/>

    <div className="page-title-area item-bg2">
      <div className="container">
        <h1>Cart</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>

    <CartContent/>

    <Footer/>
  </>;
}

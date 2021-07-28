import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CheckoutForm from '../components/checkout/CheckoutForm';

export default function Checkout() {
  return <>
    <Navbar/>
    <div className="page-title-area item-bg2">
      <div className="container">
        <h1>Checkout</h1>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>Checkout</li>
        </ul>
      </div>
    </div>
    <CheckoutForm/>
    <Footer/>
  </>;
}

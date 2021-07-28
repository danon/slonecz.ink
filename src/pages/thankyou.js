import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function ThankYou() {
  return <>
    <Navbar/>
    <div className="thank-you-area">
      <div className="container">
        <h1>Thank You</h1>
        <Link to="/">
          <a className="btn btn-primary">Go Home</a>
        </Link>
      </div>
    </div>
    <Footer/>
  </>;
};

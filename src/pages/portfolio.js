import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PortfolioContent from '../components/portfolio/PortfolioContent';

export default function Portfolio() {
  return <>
    <Navbar/>
    <div className="page-title-area item-bg2">
      <div className="container">
        <h1>My Portfolio</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>My Portfolio</li>
        </ul>
      </div>
    </div>
    <PortfolioContent/>
    <Footer/>
  </>;
}

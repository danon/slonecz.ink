import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutMe from '../components/about/AboutMe';
import Cta from '../components/about/Cta';
import FunFacts from '../components/freelancer/FunFacts';

export default function AboutMePage() {
  return <>
    <Navbar/>
    <div className="page-title-area item-bg1">
      <div className="container">
        <h1>About Me</h1>
        <ul>
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>About Me</li>
        </ul>
      </div>
    </div>
    <AboutMe/>
    <Cta/>
    <FunFacts/>
    <Footer/>
  </>;
};

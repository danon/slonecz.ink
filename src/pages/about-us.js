import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutUsArea from '../components/about/AboutUsArea';
import Cta from '../components/about/Cta';
import WhyChooseUs from '../components/about/WhyChooseUs';
import FunFacts from '../components/about/Funfacts';
import Skills from '../components/about/Skills';
import Team from '../components/about/Team';
import Contact from '../components/about/Contact';

export default function AboutUs() {
  return <>
    <Navbar/>
    <div className="page-title-area item-bg1">
      <div className="container">
        <h1>About Us</h1>
        <ul>
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>About Us</li>
        </ul>
      </div>
    </div>

    <AboutUsArea/>
    <Cta/>
    <WhyChooseUs/>
    <FunFacts/>
    <Skills/>
    <Team/>
    <Contact/>
    <Footer/>
  </>;
}

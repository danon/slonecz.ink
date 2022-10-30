import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Banner from '../components/freelancer/Banner';
import About from '../components/freelancer/About';
import Cta from '../components/freelancer/Cta';
import Works from '../components/freelancer/Works';
import Blog from '../components/freelancer/Blog';
import FunFacts from '../components/freelancer/FunFacts';

export default function Homepage() {
  return <>
    <Navbar/>
    <Banner/>
    <About/>
    <Cta/>
    <FunFacts/>
    <Works/>
    <Blog/>
    <Footer/>
  </>;
}

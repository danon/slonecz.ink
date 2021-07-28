import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Banner from '../components/freelancer/Banner';
import Features from '../components/freelancer/Features';
import About from '../components/freelancer/About';
import Services from '../components/freelancer/Services';
import Cta from '../components/freelancer/Cta';
import Skills from '../components/freelancer/Skills';
import FunFacts from '../components/freelancer/FunFacts';
import Works from '../components/freelancer/Works';
import Feedback from '../components/freelancer/Feedback';
import Blog from '../components/freelancer/Blog';

export function index() {
  return <>
    <Navbar/>
    <Banner/>
    <Features/>
    <About/>
    <Services/>
    <Cta/>
    <Skills/>
    <FunFacts/>
    <Works/>
    <Feedback/>
    <Blog/>
    <Footer/>
  </>;
}

export default index;

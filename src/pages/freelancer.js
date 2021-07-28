import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Banner from '../components/freelancer/Banner';
import Features from '../components/freelancer/Features';
import About from '../components/freelancer/About';
import Cta from '../components/freelancer/Cta';
import Skills from '../components/freelancer/Skills';
import FunFacts from '../components/freelancer/FunFacts';
import Works from '../components/freelancer/Works';
import Blog from '../components/freelancer/Blog';

export default function Freelancer() {
  return <>
    <Navbar/>
    <Banner/>
    <Features/>
    <About/>
    <Cta/>
    <Skills/>
    <FunFacts/>
    <Works/>
    <Blog/>
    <Footer/>
  </>;
}

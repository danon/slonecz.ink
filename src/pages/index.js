import React from 'react';
import Navbar from '../components/layout/Navbar';
import Banner from '../components/digital-agency/Banner';
import About from '../components/digital-agency/About';
import Footer from '../components/layout/Footer';
import ChooseUs from '../components/digital-agency/ChooseUs';
import Works from '../components/digital-agency/Works';
import HowWeWork from '../components/digital-agency/HowWeWork';
import Team from '../components/digital-agency/Team';
import Cta from '../components/digital-agency/Cta';
import Skills from '../components/digital-agency/Skills';
import FunFacts from '../components/digital-agency/FunFacts';
import Blog from '../components/digital-agency/Blog';
import Partner from '../components/digital-agency/Partner';
import Contact from '../components/digital-agency/Contact';

export default function Homepage() {
  return <>
    <Navbar/>
    <Banner/>
    <About/>
    <ChooseUs/>
    <Works/>
    <HowWeWork/>
    <Team/>
    <Cta/>
    <Skills/>
    <FunFacts/>
    <Blog/>
    <Partner/>
    <Contact/>
    <Footer/>
  </>;
};

import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Banner from '../components/agency-portfolio/Banner';
import Portfolio from '../components/agency-portfolio/Portfolio';
import Partner from '../components/agency-portfolio/Partner';

export default function AgencyPortfolio() {
  return <>
    <Navbar/>
    <Banner/>
    <Portfolio/>
    <Partner/>
    <Footer/>
  </>;
}

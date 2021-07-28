import React, {Component} from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Banner from '../components/creative-blog/Banner';
import BlogBody from '../components/creative-blog/BlogBody';

export class index extends Component {
  render() {
    return <>
      <Navbar/>
      <Banner/>
      <BlogBody/>
      <Footer/>
    </>;
  }
}

export default index;

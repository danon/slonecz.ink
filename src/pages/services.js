import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function services() {
  return <>
    <Navbar/>

    <div className="page-title-area item-bg1">
      <div className="container">
        <h1>Our Services</h1>
        <ul>
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>Our Services</li>
        </ul>
      </div>
    </div>

    <section className="services-area ptb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="icofont-pie-chart"/>
              </div>
              <h3>Branding</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="icofont-brand-designfloat"/>
              </div>
              <h3>Web Design</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="icofont-stock-mobile"/>
              </div>
              <h3>Photography</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="icofont-live-support"/>
              </div>
              <h3>Live Support</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="icofont-travelling"/>
              </div>
              <h3>Content Writing</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="icofont-delivery-time"/>
              </div>
              <h3>Timely Deliverables</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="icofont-pie-chart"/>
              </div>
              <h3>Branding</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="iconfont-brand-designfloat"/>
              </div>
              <h3>Web Design</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="icofont-stock-mobile"/>
              </div>
              <h3>Photography</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="icofont-live-support"/>
              </div>
              <h3>Live Support</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="icofont-travelling"/>
              </div>
              <h3>Content Writing</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="icofont-delivery-time"/>
              </div>
              <h3>Timely Deliverables</h3>
              <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
  </>;
}

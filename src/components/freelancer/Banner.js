import React from 'react';
import {Link} from "react-router-dom";

export default function Banner() {
  return <div className="main-banner freelancer-portfolio-home">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="banner-image">
                <img src="/images/homepage.picture.png" alt="man"/>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="hero-content">
                <h1>I am a <br/>Painter</h1>

                <ul>
                  <li>
                    <a href="#" className="facebook" target="_blank">
                      <i className="icofont-facebook"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest" target="_blank">
                      <i className="icofont-pinterest"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/slonecz.ink/" className="instagram" target="_blank">
                      <i className="icofont-instagram"/>
                    </a>
                  </li>
                </ul>

                <p>
                  Dam Ci uczucia i emocje jakich właśnie teraz potrzebujesz
                </p>

                <span>
                  <Link to="/about-me" className="btn btn-primary">About me</Link>
                  &nbsp;
                  <Link to="/paintings" className="btn btn-primary">Order a painting</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="circle-shape1"><img src="/images/shapes/circle1.png" alt="shape"/></div>
    <div className="circle-shape2"><img src="/images/shapes/circle2.png" alt="shape"/></div>
    <div className="circle-shape3"><img src="/images/shapes/circle3.png" alt="shape"/></div>
  </div>;
}

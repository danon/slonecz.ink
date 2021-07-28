import React from 'react';
import {Link} from 'react-router-dom';

import image from "../../images/cta-about.jpg";

export default function About() {
  return <section className="cta-about">
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="cta-about-image">
            <img src={image} alt="cta-image"/>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="cta-about-content ptb-120">
            <div className="section-title">
              <span>About Us</span>
              <h2>We are a Creative Agency <br/> from the USA</h2>
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo.</p>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo.</p>

            <Link to="/contact" className="btn btn-primary">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

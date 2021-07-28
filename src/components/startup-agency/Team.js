import React from 'react';

export default function Team() {
  return <section className="team-area bg-image ptb-120">
    <div className="container">
      <div className="section-title">
        <span>That's me</span>
        <h2>Paintings author</h2>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-team-box">
            <div className="team-image">
              <img src="/images/team-image/2.jpg" alt="team"/>
            </div>
            <div className="team-content">
              <h3>Pelagia Kozielska</h3>
              <span>Painter</span>
              <ul className="social">
                <li><a href="#"><i className="icofont-facebook"/></a></li>
                <li><a href="#"><i className="icofont-twitter"/></a></li>
                <li><a href="#"><i className="icofont-linkedin"/></a></li>
                <li><a href="#"><i className="icofont-instagram"/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

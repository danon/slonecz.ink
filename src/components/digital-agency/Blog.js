import React from 'react';
import {Link} from 'react-router-dom';

export default function Blog() {
  return <section className="blog-area ptb-120">
    <div className="container">
      <div className="section-title">
        <span>Latest Blog</span>
        <h2>Read Inspirational Story every week</h2>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-post">
            <div className="blog-image">
              <Link to="#">
                <img src="/images/blog-image/1.jpg" alt="image"/>
              </Link>

              <div className="post-tag">
                <a href="#">Technology</a>
              </div>
            </div>

            <div className="blog-post-content">
              <span className="date">25 Feb, 2019</span>
              <h3><a href="#">The Most Popular New top Business Apps</a></h3>
              <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-blog-post">
            <div className="blog-image">
              <Link to="#">
                <img src="/images/blog-image/2.jpg" alt="image"/>
              </Link>

              <div className="post-tag">
                <a href="#">Agency</a>
              </div>
            </div>

            <div className="blog-post-content">
              <span className="date">27 Feb, 2019</span>
              <h3><a href="#">The Best Marketing top Management Tools</a></h3>
              <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
          <div className="single-blog-post">
            <div className="blog-image">
              <Link to="#">
                <img src="/images/blog-image/3.jpg" alt="image"/>
              </Link>

              <div className="post-tag">
                <a href="#">IT</a>
              </div>
            </div>

            <div className="blog-post-content">
              <span className="date">28 Feb, 2019</span>
              <h3><a href="#">3 WooCommerce Plugins to Boost Sales</a></h3>
              <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
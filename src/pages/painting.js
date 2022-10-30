import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import OwlCarousel from 'react-owl-carousel3';
import {connect} from "react-redux";
import {addToCart} from "../store/actions/cartActions";
import {success} from "../utils/toast";
import {ToastContainer} from "react-toastify";
import {paintings} from "../paintings/paintings.js";

const owlOptions = {
  items: 1,
  nav: true,
  dots: false,
  touchDrag: false,
  mouseDrag: true,
  autoplay: true,
  smartSpeed: 500,
  loop: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>"
  ]
};

function useIntegerParams() {
  return map(useParams(), param => parseInt(param));
}

function map(object, mapper) {
  const result = {};
  Object.keys(object).forEach(key => {
    result[key] = mapper(object[key]);
  });
  return result;
}

function paintingById(id) {
  return paintings.filter(painting => painting.id === parseInt(id))[0];
}

function Painting({addToCart}) {
  const {id} = useIntegerParams();

  const handleAddToCartFromView = () => {
    addToCart(id);
    success('Added to the cart');
  };

  const painting = paintingById(id);

  return <>
    <Navbar/>
    <div className="page-title-area item-bg2">
      <div className="container">
        <h1>Painting</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Paintings</li>
          <li>#{id}</li>
        </ul>
      </div>
    </div>

    <section className="portfolio-details ptb-120">
      <ToastContainer/>

      <div className="container">
        <div className="row h-100 align-items-center">
          <div className="col-lg-8 col-md-12">
            <OwlCarousel
              className="portfolio-details-slides owl-carousel owl-theme"
              {...owlOptions}
            >
              <div className="item" key={painting.id}>
                <img src={painting.image} alt={painting.title}/>
              </div>
            </OwlCarousel>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="project-info">
              <ul>
                <li>
                  Client:
                  <span>David Warner</span>
                </li>
                <li>
                  Category:
                  <span><a href="#">Portfolio</a></span>
                </li>
                <li>
                  Date:
                  <span>21 March, 2019</span>
                </li>
                <li>
                  Share:
                  <ul>
                    <li><a href="#"><i className="icofont-facebook"/></a></li>
                    <li><a href="#"><i className="icofont-pinterest"/></a></li>
                    <li><a href="#"><i className="icofont-instagram"/></a></li>
                  </ul>
                </li>
                <li>
                  <button type="button" className="btn btn-primary" onClick={handleAddToCartFromView}>
                    Add to Cart
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-8">
            <div className="portfolio-details-content">
              <h3>{painting.title}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas accumsan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </>;
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Painting);

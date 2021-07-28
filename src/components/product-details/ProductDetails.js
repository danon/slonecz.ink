import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addToCart} from '../../store/actions/cartActions';
import {ToastContainer} from 'react-toastify';
import {success} from '../../utils/toast';

import OwlCarousel from 'react-owl-carousel3';

const options = {
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

export class ProductDetails extends Component {

  state = {
    display: false,
    qty: 1,
    max: 10,
    min: 1
  };

  handleAddToCartFromView = () => {
    success('Added to the cart');
  };

  handleAddToCart = (id) => {
    this.props.addToCart(id);
    success('Added to the cart');
  };

  IncrementItem = () => {
    this.setState(prevState => {
      if (prevState.qty < 10) {
        return {qty: prevState.qty + 1};
      } else {
        return null;
      }
    });
  };

  DecreaseItem = () => {
    this.setState(prevState => {
      if (prevState.qty > 1) {
        return {
          qty: prevState.qty - 1
        };
      }
      return null;
    });
  };

  componentDidMount() {
    this.setState({display: true});
  }

  openTabSection = (evt, tabName) => {
    let tabcontent = document.getElementsByClassName("tabs_item");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    let tablinks = document.getElementsByTagName("li");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "inactive");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className = "active";
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <section className="shop-details-area ptb-120">
        <ToastContainer/>

        <div className="container">
          <div className="shop-details">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-4 col-md-12">
                {this.state.display ? <OwlCarousel
                  className="product-img-slides owl-carousel owl-theme"
                  {...options}
                >
                  <div className="product-img">
                    <a href="#"><img src="/images/shop-image/1.jpg" alt="product-img"/></a>
                  </div>

                  <div className="product-img">
                    <a href="#"><img src="/images/shop-image/2.jpg" alt="product-img"/></a>
                  </div>

                  <div className="product-img">
                    <a href="#"><img src="/images/shop-image/3.jpg" alt="product-img"/></a>
                  </div>
                </OwlCarousel> : ''}
              </div>

              <div className="col-lg-8 col-md-12">
                <div className="product-entry-summary">
                  <h3>Gold Buyer's Survival Manual</h3>
                  <h4>
                    <span>$44.00</span>
                    $30.00
                  </h4>

                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when
                    an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.</p>

                  <form onClick={this.handleSubmit}>
                    <div className="input-counter">
                      <span
                        className="minus-btn"
                        onClick={this.DecreaseItem}
                      >
                        <i className="icofont-minus"></i>
                      </span>
                      <input
                        type="text"
                        value={this.state.qty}
                        min={this.state.min}
                        max={this.state.max}
                        onChange={e => this.setState({qty: e.target.value})}
                      />
                      <span
                        className="plus-btn"
                        onClick={this.IncrementItem}
                      >
                        <i className="icofont-plus"></i>
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.handleAddToCartFromView}
                    >
                      Add to Cart
                    </button>
                  </form>

                  <ul className="share-social">
                    <li>Share:</li>
                    <li><a href="#"><i className="icofont-facebook"></i></a></li>
                    <li><a href="#"><i className="icofont-twitter"></i></a></li>
                    <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                    <li><a href="#"><i className="icofont-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="shop-description">
                  <h3>Description</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductDetails);

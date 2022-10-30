import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';
import {ToastContainer} from 'react-toastify';
import {success} from '../../utils/toast';

export class ProductDetails extends Component {
  handleAddToCartFromView = () => {
    this.props.addToCart(1);
    success('Added to the cart');
  };

  render() {
    return (
      <section className="shop-details-area ptb-120">
        <ToastContainer/>

        <div className="container">
          <div className="shop-details">
            <div className="row h-100 justify-content-center align-items-center">

              <div className="col-lg-8 col-md-12">
                <div className="product-entry-summary">

                  <button type="button" className="btn btn-primary" onClick={this.handleAddToCartFromView}>
                    Add to Cart
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);

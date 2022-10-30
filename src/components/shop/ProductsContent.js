import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import {addToCart} from '../../store/actions/cartActions';
import {success, ToastContainer} from '../../utils/toast';

const ProductsContent = ({products, addToCart}) => {
  const handleAddToCart = id => {
    addToCart(id);
    success('Added to the cart');
  };

  return <section className="product-area ptb-120">
    <ToastContainer/>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="shop-topbar">
            <div className="row h-100 align-items-center">
              <div className="col-lg-9 col-md-7">
                <div className="woocommerce-result-count">
                  <p>Showing 1–9 of 11 results</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-5">
                <div className="select-box">
                  <select className="form-select">
                    <option value="latest">Sort by Latest</option>
                    <option value="oldest">Sort by Oldest</option>
                    <option value="price-asc">Sort by price: Low to High</option>
                    <option value="price-desc">Sort by price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {products.map(data => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={data.id}>
            <div className="single-product">
              <div className="product-image">
                <Link to={"/paintings/" + data.id}>
                  <img src={data.image} alt="image"/>
                </Link>
              </div>
              <div className="product-content">
                <h3>
                  <Link to={"/paintings/" + data.id}>{data.title}</Link>
                </h3>
                <span className="price">{data.price}zł</span>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(data.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>;
}

const mapStateToProps = state => ({products: state.products});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContent);

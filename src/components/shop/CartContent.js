import React, {Component} from 'react';
import {connect} from 'react-redux';

import {removeItem} from '../../store/actions/cartActions';
import {info, ToastContainer} from '../../utils/toast';
import {Link} from 'react-router-dom';

class CartContent extends Component {
  handleRemove = (id) => {
    this.props.removeItem(id);

    info('Removed from cart');
  };

  handleSubmit = e => e.preventDefault();

  render() {
    let cartItems;
    if (this.props.products.length) {
      cartItems = this.props.products.map((data, idx) => <tr key={idx}>
        <td className="product-thumbnail">
          <a href="#">
            <img src={data.image} alt="item"/>
          </a>
        </td>

        <td className="product-name">
          <a href="#">{data.title}</a>
        </td>

        <td className="product-price">
          <span className="unit-amount">${data.price}</span>
        </td>

        <td className="product-remove">
          <Link to="#">
            <i className="icofont-ui-delete"/>
          </Link>
        </td>
      </tr>);
    } else {
      cartItems = <EmptyRow/>;
    }

    return <section className="cart-area ptb-120">
      <ToastContainer/>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <form onSubmit={this.handleSubmit}>
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                  </thead>

                  <tbody>
                  {cartItems}
                  </tbody>
                </table>
              </div>

              <div className="cart-buttons">
                <div className="row h-100">
                  <div className="col-lg-5 col-md-5">
                    <div className="cart-totals">
                      <h3>Cart Totals</h3>
                      <ul>
                        <li>Total: <span>${this.props.total}</span></li>
                      </ul>
                      <Link to="/checkout">
                        <a className="btn btn-primary">Proceed to Checkout</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
  }
}

function EmptyRow() {
  return <tr>
    <td className="product-thumbnail" colSpan="6">
      <p>Empty.</p>
    </td>
  </tr>;
}

const mapStateToProps = ({addedItems, total}) => ({products: addedItems, total});

const mapDispatchToProps = dispatch => {
  return {
    removeItem(id) {
      dispatch(removeItem(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContent);

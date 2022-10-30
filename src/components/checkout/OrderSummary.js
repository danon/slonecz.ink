import React, {Component} from 'react';
import {connect} from 'react-redux';
import Payment from '../payments/Payment';

export class OrderSummary extends Component {
  render() {
    let totalAmount = (this.props.total + this.props.shipping).toFixed(2);
    let {disabled} = this.props;
    return <div className="col-lg-6 col-md-12">
      <div className="order-details">
        <h3 className="title">Your Order</h3>

        <div className="order-table table-responsive">
          <table className="table table-bordered">
            <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Total</th>
            </tr>
            </thead>

            <tbody>
            {this.props.products.map((data, idx) => (
              <tr key={idx}>
                <td className="product-name">
                  <a href="#">{data.title}</a>
                </td>

                <td className="product-total">
                  <span className="subtotal-amount">{data.price}zł</span>
                </td>
              </tr>
            ))}

            <tr>
              <td className="order-subtotal">
                <span>Cart Subtotal</span>
              </td>

              <td className="order-subtotal-price">
                <span className="order-subtotal-amount">{this.props.total}zł</span>
              </td>
            </tr>

            <tr>
              <td className="order-shipping">
                <span>Shipping</span>
              </td>

              <td className="shipping-price">
                <span>{this.props.shipping}zł</span>
              </td>
            </tr>
            <tr>
              <td className="total-price">
                <span>Order Total</span>
              </td>

              <td className="product-subtotal">
                <span className="subtotal-amount">{this.props.total}zł</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <Payment amount={totalAmount * 100} title={"title"} disabled={disabled}/>
      </div>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
    total: state.total,
    shipping: state.shipping
  };
};

export default connect(mapStateToProps)(OrderSummary);

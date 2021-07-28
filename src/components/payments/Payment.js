import React from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {resetCart} from '../../store/actions/cartActions';
import {success} from '../../utils/toast';

function Payments({amount, resetCart, disabled}) {
  let history = useHistory();

  const handleClick = () => {
    resetCart();
    success('Order has been confirmed');

    setTimeout(function () {
      history.push("/thankyou");
    }, 3000);
  };

  const onToken = async token => {
    await axios.post("/api/stripe/checkout", {amount, token});
  };

  return <>
    <ToastContainer/>

    <div className="order-btn">
      <StripeCheckout
        name="slonecz.ink"
        description="React Next eCommerce Templates"
        amount={amount}
        currency="PLN"
        token={onToken}
        stripeKey="pk_test_51HqoWmLMOeXThmueTbzTgGBGcw54CExVLvNs1HRI7ehVNZ1qNk1yCXNfp2IYfnoPyBUmUp0ckJ8L081dHmNQeRWx0049eVkWvQ"
        billingAddress={false}
        closed={handleClick}
      >
        <button disabled={disabled} className={`btn btn-primary order-btn ${disabled ? 'btn-disabled' : ''}`}>
          Place Order
        </button>
      </StripeCheckout>
    </div>
  </>;
}

const mapDispatchToProps = (dispatch) => ({
  resetCart: () => {
    dispatch(resetCart());
  }
});

export default connect(null, mapDispatchToProps)(Payments);

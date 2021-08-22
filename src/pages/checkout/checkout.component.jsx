import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, cartTotal}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
    }
    <div className='total'>
      <span>Total: &#x20B9; {cartTotal}</span>
    </div>
    <div className='test-warning'>
      * Please use following test credit card payments *<br/>
      4242 4242 4242 4242 - exp 01/22 cvv 123<br/>
    </div>
    <StripeCheckoutButton price={cartTotal}/>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);
import React from 'react';
import './cart-item.styles.scss';
import {DOLLAR_TO_INR} from '../../redux/cart/cart.utils';

const CartItem = ({ item: {imageUrl, price, name, quantity}}) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item'/>
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x {price * DOLLAR_TO_INR}</span>
    </div>
  </div>
);

export default CartItem
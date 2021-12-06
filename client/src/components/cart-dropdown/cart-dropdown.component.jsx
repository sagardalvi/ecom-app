import React from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect, useDispatch, useSelector} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.action';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length
            ?
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem}/>
            ))
            :
            (<span className='empty-message'>Your cart is empty</span>)
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default CartDropdown;
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from './header.styles';
import {signOutStart} from '../../redux/user/user.action';

const Header = ({currentUser, hidden, signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        Contact
      </OptionLink>
      {
        currentUser ?
          // <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
          <OptionLink as='div' onClick={() => signOutStart()}>Sign Out</OptionLink>
          :
          <OptionLink className='option' to='/signin'>Sign In</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown/>
    }

  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);
  

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100 ;
  const publishableKey = 'pk_test_51JQtCJSGClin87TkqzOMGd7FbnMRBPyHujz4edna2APZ5alwiHMUz6UTngjqcxiZssEUSZ4DYi8pU9VxEqgSARe5007jJVlQDy';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='E-Commerce App'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is INR${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      currency='INR'
      locale='en'
      stripeKey={publishableKey}>

    </StripeCheckout>
  )
}

export default StripeCheckoutButton;
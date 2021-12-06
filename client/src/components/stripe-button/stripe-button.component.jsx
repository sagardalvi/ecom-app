import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100 ;
  const publishableKey = 'pk_test_51JQtCJSGClin87TkqzOMGd7FbnMRBPyHujz4edna2APZ5alwiHMUz6UTngjqcxiZssEUSZ4DYi8pU9VxEqgSARe5007jJVlQDy';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data : {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful')
    }).catch(error=> {
      console.log('Payment Error: ', JSON.parse(error));
      alert('There was a issue with your payment. Please sure you use provided credit card');
    })
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
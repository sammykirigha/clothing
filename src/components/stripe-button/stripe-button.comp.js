import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Gvg1sLqttHkO7w4SwcwTH6xMQEFqySdz3FbJIZP2p2LFqctsi9rPQL3lwsPqfi8wwYXBl4iILwyYwNwZObiWDOv003ZlsTswC";
     
const onToken = token => {
    console.log(token);
    alert('Payment Successful')
}    
   return (
    <StripeCheckout 
      label='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
   )
}

export default StripeCheckoutButton;
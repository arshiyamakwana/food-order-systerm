import React from 'react'
import  {Elements, useCartElement} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import {loadStripe} from '@stripe/stripe-js';
import useCart from '../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
const [cart]= useCart()
console.log(cart)
// cal

  
const calculatePrice=(item)=>{
  return item.price * item.quantity
}
const cartSubTotal=cart.reduce((total,item)=>{
  return total + calculatePrice(item)
    },0)
    const orderTotalEqual= cartSubTotal
    console.log(orderTotalEqual)
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28'>
    <Elements stripe={stripePromise}>
      <CheckoutForm price={orderTotalEqual} cart={cart}/>
    </Elements>
    </div>
  )
}

export default Payment
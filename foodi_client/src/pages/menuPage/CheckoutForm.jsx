/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CheckoutForm = ({price,cart}) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user}= useAuth()

  const [cardError,setError]=useState('')
  const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {price},{
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({}),
  //   })
  //     .then((res) => {console.log(res.data.clientSecret)
  //     setClientSecret(res.data.clientSecret)});
  // }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // create card ele
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)
    } else {
      setError("sucess")
      console.log('[PaymentMethod]', paymentMethod);
      
    }
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user ?.displayName||"abboymo",
            email:user?.email||'unknown',
          },
        },
      },
    )
    // if(confirmError){
    //   console.log(confirmError)
    // }
    // console.log(paymentIntent)
    // if(paymentIntent.status==="succeeded"){
    //   console.log(paymentIntent.id)
    // }
  }
  return (
    <div className='flex flex-col sm:flex-row justify-start items-start gap-8'>

    <div className='md:w-1/2 w-full space-y-3'
    >
        <h4 className='text-lg  font-semibold'>Order summary</h4>
        <p>Total Price : Rs{price}</p>
        <p>Number of items:{cart.length}</p>
    </div>
    <div className='md:w-1/3 w-full space-y-3-5 card shrink-0  max-w-sm shadow-2xl bg-base-100 px-4 py-8'>
    <h4 className='text-lg  font-semibold'>Process Your Payment</h4>
    <h5 className=' font-medium'>Credit/Debit Card</h5>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     <Link to='/'> <button type="submit" disabled={!stripe}className='btn btn-sm mt-5 btn-primary w-full text-white'>
        Pay
      </button>
      </Link>
    </form>
    {
      cardError ? <p className='text-red'>{cardError}</p>:""
    }
    {/* paypal */}

    <div className='mt-5 text-center'>
      <hr/>
      <button type="submit" disabled={!stripe}className='btn btn-sm mt-5 bg-orange-500 text-white'>

        Pay with paypal
      </button>


    </div>
    </div>
    </div>
  )
}


export default CheckoutForm
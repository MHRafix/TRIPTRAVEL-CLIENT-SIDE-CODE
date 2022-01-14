import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = ({feeAmount, travelerAmount}) => {

        const totalAmount = feeAmount * travelerAmount;

         const stripePromise = loadStripe('pk_test_51Jy986Fp0BiFtInNOEHC9OKJqS8ZxsvPVSpODrGL7ipWsSSii2mFo8LlY3BQC0bkzWqnZNW1x0lgIGxSYIiiwtgJ00Hshw7nKQ');

    return (
        <div className="wrapper">
            <div className="container">
            <h5 className="heading mb-3">Please pay</h5>

            <Elements stripe={stripePromise}>
               <CheckoutForm payableAmount={totalAmount} />
            </Elements>

        </div>
     </div>
    );
};

export default Payment;
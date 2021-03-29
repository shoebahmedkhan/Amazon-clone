import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../axios';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';

import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import "./payment.css"
import { getCartTotal } from '../reducer';
import { db } from '../firebase';

const Payment = () => {
    const [{cart,user},dispatch] = useStateValue();
    const history = useHistory();
   

    const [error , setError] = useState(null);
    const [disabled , setDisabled]=useState(true);

    const [succeeded ,setSucceeded] = useState(false);
    const [processing , setProcessing]=useState("");
    const [clientSecret , setClientSecret]=useState(true);

    useEffect(()=>{
        // generate the special stripe secret which allow us to charge the customer
        const getClientSecret = async()=>{
            const response = await axios({
                method : "post",
                // stripe expects the total in a currencies su units 
                url : `/payments/create?total=${getCartTotal(cart)*100}`   
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event)=>{
        // do all the fancy stripe stuff Here
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret ,{
            payment_method :{
                card: elements.getElement(CardElement)
            }
        }).then(({PaymentIntent})=>{
            // paymentIntent is nothing but the = payment Confirmation
            db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(PaymentIntent?.id)
            .set({
                cart : cart,
                amount :PaymentIntent.amount,
                created : PaymentIntent.created,
            })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type : 'EMPTY_CART'
            })
            history.replace('./Orders')

                })
    }
    const handleChange = (event)=>{
        // listen for changes in card element 
        //and display any errors as the customer types theire card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className="payment">
            <div className="payment_container">
                {/* payment section for delivery address */}
                <h1>
                    Checkout (<Link to="/Checkout" >{cart?.length} items</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Deliver Address</h3>
                    </div>
                    <div className="paymen_address">
                        <p>{user?.email}</p>
                        <p>8-4-404 sidhnathpuri, chaupala</p>
                        <p>Nanded, Maharashtra</p>

                    </div>

                </div>


                {/* payment section for delivery Review item */}
             
            <div className="payment_section">
                    <div className="payment_title">
                        <h3>Deliver Address</h3>
                    </div>
                    <div className="paymen_address">
                    {cart.map(item=>(
                                <CheckoutProduct id={item.id}
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                price={item.price}/>
                            ))}

                    </div>

                </div>
                {/* payment section for Payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* strip method use in this section */}
                        <form onClick={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                renderText={(value)=>(
                                    <>
                                    <h3>Order Total:{value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}/>
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p>: "Confirm"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Payment;
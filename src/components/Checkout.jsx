import React from 'react';
import { useStateValue } from '../StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{cart,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmJ-zwd_15KiUnxc1sAZ-J2KcdaWczsE5lHNV3qIOlTh58kWsqLJRDYTLXQjyqBAs900&usqp=CAU"
                 alt=""/>
                 <div>
                     <h3>hello,{user?.email}</h3>
                     <h2 className="checkout_title">
                         Your Shopping Cart
                     </h2>
                     {cart.map(item =>(
                         <CheckoutProduct 
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         rating={item.rating}
                         price={item.price}/>
                     ))}
                 </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
            
        </div>
    );
};

export default Checkout;
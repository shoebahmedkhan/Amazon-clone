import React from 'react';
import { useStateValue } from '../StateProvider';
import "./Checkoutproduct.css";
const CheckoutProduct = ({id,price,title,rating,image}) => {
    const [{cart},dispatch]=useStateValue();

    const removeCartItem =()=>{
        dispatch({
            type: "REMOVE_FROM_CART",
            id:id,
        })
    }
    return (
        <div className="Checkoutproduct">
            <img src={image} className="Checkoutproduct_image" />

            <div className="Checkoutproduct_info">
                <p className="Checkoutproduct_title">
                    {title}
                </p>
                <p className="Checkoutproduct_price">
                   <small>$</small>
                   <strong>{price}</strong>
                </p>
                <div className="Checkoutproduct_rating">
                    {Array(rating)
                    .fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeCartItem} >Remove From Cart</button>
            </div>
            
        </div>
    );
};

export default CheckoutProduct;
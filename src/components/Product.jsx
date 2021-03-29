import React from 'react';
import { useStateValue } from '../StateProvider';
import "./product.css"
const Product = ({id,title,price,rating,image}) => {

    const [{cart} ,dispatch] = useStateValue();
    // console.log("his is my cart",cart)
    const addToCart = ()=>{
        dispatch({
            type: "ADD_TO_CART",
            item:{
                id:id,
                image:image,
                title: title,
                price:price,
                rating:rating,
            },
        });
    };
   
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                     <small><b>$</b></small>
                     <strong>{price}</strong>
                 </p>
                 <div className="product_rating">
                     {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                     ))}
                     
                     
                 </div>
            </div>
            <img src={image}alt="" />
                 <button onClick={addToCart} >Add To Cart</button>
        </div>
    );
};

export default Product;
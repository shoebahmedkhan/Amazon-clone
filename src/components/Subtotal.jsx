import React from 'react';
import "./subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider';

import { useHistory } from 'react-router-dom';
import {  getCartTotal } from '../reducer';
const Subtotal = () => {
    const history = useHistory();
    const [{cart },dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value)=>(
                <>
                <p>
                    Subtotal ({cart.length} items): <strong>{value}</strong>
                  
                </p>
                
                <small className="subtotal_gift"><input type="checkbox"/>This Order Contain a gift
                </small>
                 </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}/>
    
            <button onClick={e=>history.push('/Payment')}>Proceed To Checkout</button>
        </div>
    );
};

export default Subtotal;
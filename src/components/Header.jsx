import React from 'react';
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
const Header = () => {
    const[{cart,user} , dispatch]= useStateValue();

    const handleAuthentication=()=>{
        if (user){
            auth.signOut();
        }
    }
    return (
        <div className="main_header">
            <Link to="/">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header_logo"/>
            </Link>
           
            <div className="header_Search">
                <input type="text" className="header_SearchInput"/>
               <SearchIcon className="Search_Icon"/>
            </div>
            <div className="header_Nav">
                <Link to={!user && './LoginPage'}>
                <div className="header_NavOptions" onClick={handleAuthentication}>
                     <span className="Header_Optionone"> {!user? 'Guest':user.email}
                    </span>
                    <span className="Header_OptioTwo">{user ? "Sign Out" : "Sign In"}
                    </span>                   
                </div>
                </Link>
                <div className="header_NavOptions">
                    <span className="Header_Optionone">Returns
                    </span>
                    <span className="Header_OptioTwo">Orders
                    </span>
                </div>
                <div className="header_NavOptions">
                    <span className="Header_Optionone">Your
                    </span>
                    <span className="Header_OptioTwo">Prime
                    </span>
                </div>
            </div>
            <Link to="/Checkout">
            <div className="Header_Bascketicon">
                <ShoppingBasketIcon/>
                <span className="header_OptionTwo header_basketCount">{cart?.length}</span>
            </div>
            </Link>
            
            
        </div>
    );
};

export default Header;
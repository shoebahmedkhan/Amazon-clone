import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Checkout from './components/Checkout';
import LoginPage from './components/LoginPage';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './components/Orders';

function App() {

  const promise = loadStripe("pk_test_51IZXefSHEh9sygvajHwStDMKrERS0UxX2RRXe3eXj1021o4Bk0o3jGxVkGADbvY5V1ktqelCTnOhVLl5nyoJaugK00VNB2DkPN")

const[{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      // console.log("the user is ", authUser);


      if(authUser){
        dispatch({
          type : "SET_USER",
          user : authUser
        })
      }else{
        dispatch({
          type : "SET_USER",
          user : null
        })
      }
    })

  }, [])
  return (
    <Router>
 <div className="app"> 
   <Switch>
<Route path="/LoginPage">
  <LoginPage/>
</Route>
<Route path="/Orders">
  <Header/>
  <Orders/>
</Route>

   <Route path="/Checkout">
   <Header/>
      <Checkout/>
     </Route>
     <Route path="/Payment">
       <Header/>
       <Elements stripe={promise}>
       <Payment/>
       </Elements>
      
     </Route>
     <Route path="/">
     <Header/>
      <Home/>
     </Route>
    </Switch>
      </div>
    </Router>
   
  );
}

export default App;

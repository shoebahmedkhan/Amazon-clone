import React, { useState } from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import { auth } from '../firebase';


const LoginPage = () => {
    const [email , setEmail] = useState("");
    const [passwword , setPassword] = useState("");
    const history = useHistory();

    const signIn =(e)=>{
        // preventDefault is use to stop the refereshing 
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,passwword)
        .then((auth)=>{
            history.push('./')
        })
        .catch(error=>alert(error.message))
    }
    const Regster =(e)=>{
        e.preventDefault();
        //it successfully created a new user with email and password.
        auth.createUserWithEmailAndPassword(email,passwword)
        .then((auth)=>{
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            className="login_logo"/>
            </Link>
           <div className="login_container">
               <h1>Sign-in</h1>
               <form>
                   <h5>E-mail</h5>
                   <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                   <h5>Passwword</h5>
                   <input type="password" value={passwword} onChange={e=>setPassword(e.target.value)}/>
                   <button className="login_signin" type="submit" onClick={signIn}>Sign In</button>
                  
               </form>
               <p>
                   By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                   </p>
                   <button className="login_register" type="submit" onClick={Regster}>Create Your Amazone Account</button>
           </div>
        </div>
    );
};

export default LoginPage;
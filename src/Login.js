import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

function Login() {
 const history= useHistory(); 
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 
 

 const login = event =>{
  	event.preventDefault(); //this stops refresh 
    
    auth.signInWithEmailAndPassword(email,password)
      .then((auth)=>{
      	//logged in
      	history.push("/");
      })
      .catch(e=>alert(e.message));
  }
  
 const register = event =>{
  	event.preventDefault(); //this stops refresh 
    auth.createUserWithEmailAndPassword(email,password)
      .then((auth)=>{
      	//logged in
      	history.push("/");
      })
      .catch(e=>alert(e.message));
  	
  }

  return (
    <div className='login'>
      <Link to='/'>
	     <img className='login__logo' src='images/amazon_PNG24.png'/>
	  </Link>
	  <div className='login__container'>
         <h1>Sign in</h1>
         <form>
          <h5>Email</h5>
          <input type='Email' value={email} onChange={event=>setEmail(event.target.value)}/>
          <h5>Password</h5>
          <input type='Password' value={password} onChange={event=>setPassword(event.target.value)}/>
          <button onClick={login} type="submit" className='login__signInButton'>Sign in</button>
         </form>

         <p>
         By continuing, you agree to Amazon's 
         Conditions of Use and Privacy Notice.
         </p>

         <button onClick={register} className='login__register'>Create your Amazon account</button>


	  </div>
    </div>
  	);
}

export default Login;
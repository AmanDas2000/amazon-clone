import React from 'react';
import './Home.css';
import Product from './Product';
import { Link } from 'react-router-dom';

function Home(){
	return(
       <div className='home'>
       
        <img className='home__image' src='images/Banner.jpg'/>
       
        <div className='home__row'>
         <Product
          id="12345678"
          title="Apple Ipad"
          price={59999}
          rating={5}
          image="images/ipad.jpg"
          /> 
          <Product
          id="87654321"
          title="Apple iphone"
          price={49999}
          rating={5}
          image="images/iphone.jpeg"
          /> 

        </div>
        <div className='home__row'>
         <Product
          id="12345679"
          title="Asus Zephyrus G14"
          price={96999}
          rating={5}
          image="images/g14.jpg"
          /> 
          <Product
          id="12345677"
          title="HP Omen 15"
          price={89999}
          rating={5}
          image="images/omen.webp"
          /> 
          <Product
          id="12345671"
          title="Dell XPS 15"
          price={119999}
          rating={5}
          image="images/xps.jpg"
          /> 

        </div>
        <div className='home__row'>
         <Product
          id="12345671"
          title="Samsung Ultrawide Monitor"
          price={249999}
          rating={5}
          image="images/samsung.jpg"
          /> 


        </div>
        

       </div>
	)
}

export default Home
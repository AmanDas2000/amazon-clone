import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

    console.log(basket);

	return(
       <nav className='header'>
	          <Link to='/'>
	           <img className='header__logo' src='images/amazon_PNG11.png'/>
	          </Link>
	          
	          <div className='header__search'>
		          <input type='text' className='header__searchInput'/> 
		          <SearchIcon className='header__searchIcon'/>
	          </div>

	          <div className='header__nav'>
	             
	             <Link to={!user && '/login'} className='header__link'>
                  <div onClick={handleAuthenticaton} className="header__option">
		            <span className="header__optionalLineOne">Hello {!user ? 'Guest' : user.email}</span>
		            <span className="header__optionalLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
		          </div>
		        </Link>

	             <Link to='/' className='header__link'>
	               <div className='header__option'>
	                <span className='header__optionalLineOne'>Returns</span>
	                <span className='header__optionalLineTwo'>& Orders</span>
	               </div>
	             </Link>

	             <Link to='/' className='header__link'>
	               <div className='header__option'>
	                <span className='header__optionalLineOne'>Your</span>
	                <span className='header__optionalLineTwo'>Prime</span>
	               </div>
	             </Link>

	             <Link to='/checkout' className='header__link'>
                    <div className='header__optionBasket'>
                      <ShoppingCartIcon />
                      <span className='header__optionalLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
	             </Link>
                  
	          </div>
       </nav>
	)
}

export default Header
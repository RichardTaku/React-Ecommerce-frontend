import React, { useContext } from 'react'
//import React from 'react';
//import {Link} from 'react-router-dom';
import classes from '../Mainheader/nav.module.css'
import CartContext from '../Context/cart/Cartcontext'
import responsive from './responsive'

const Header = () => {

const {cartItem, showHideCart}= useContext(CartContext);

  return (
      <responsive>
    <nav>
        <div className={classes.nave_left}>store</div>
        <div className={classes.nav_middle}>
          <div className={classes.input_wrapper}>
            <input type='text' />
            <i className='fas fa-search' />
          </div>
        </div>
        <div className={classes.nav_right}>
          <div className={classes.cart_icon}>
            <i className='fa fa-shopping-cart' 
            aria-hidden='true' onClick={showHideCart} />
            { cartItem.length > 0 &&  <div className={classes.item_count} >
              <span>{cartItem.length}</span> 
            </div>}
          </div>
        </div>
    </nav>
        </responsive>
  
  )
}

export default Header
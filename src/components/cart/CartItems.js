import React, { useContext }  from 'react'
import './cartItem.css';
import CartContext from '../Context/cart/Cartcontext';
import formatCurrency from 'format-currency';

const CartItems = ( {item} ) => {
  
    const {removeItem} = useContext(CartContext);

    let opts = {format: '%s%v', symbol: '€'}

  return (

      <li className='cart_item'>  
    
      <img src={item.image} alt='' />

        <div className='disp'>
            {item.name} {formatCurrency(`${item.price}` , opts)}
        </div>

        <button className='cartitem_button' onClick = {()=> removeItem(item._id)}
        >remove </button>
    </li>

);
};
export default CartItems;
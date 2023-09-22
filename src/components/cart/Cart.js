import React, { useContext } from "react";
import CartContext from "../Context/cart/Cartcontext";
import formatCurrency from "format-currency";
import './cart.css';
import CartItems from "./CartItems";
const Cart = () => {

const {showCart, cartItem, showHideCart} = useContext(CartContext);

let opts = {format: '%s%v', symbol: '€'}


  return (
    <div>
        {showCart && (
            <div className="cart_wrapper"> 
                <div style={{textAlign: 'right'}}>
                    <i 
                        style={{cursor:'pointer'}} className="fa  fa-times-circle" 
                        aria-hidden='true'
                        onClick={showHideCart}
                    > </i>
                </div>
                {/*****************setting cart***************** */}
                <div className='cart_innerwrapper'>
                    {cartItem.lenght === 0 ? (<h4 >cart is empty</h4>):(
                        <ul>
                        {cartItem.map( item => (
                            <CartItems  key={item._id} item={item} />
                        ))} 
                        </ul>

                    )}
                </div>
                {/*****************end setting cart***************** */}

                <div className="cart_carttotal">
                    <div> 
                       <b>Total</b> 
                    </div>
                    <div></div>
                    <div style={{marginLeft: 5}}>
                        {formatCurrency(cartItem.reduce((amount, 
                        item)=> item.price + amount, 0),
                         opts
                         )}
                         </div>
                    
                </div>
            </div>
        )}

    </div>
  )
}

export default Cart
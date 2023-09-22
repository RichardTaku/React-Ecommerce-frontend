import React, { useContext } from 'react';
import classes from '../productcard.module.css';
import Rating from '../rating/Rating';
import CartContext from '../Context/cart/Cartcontext';
import formatCurrency from 'format-currency'

const ProductCard = ({product}) => {

  let opts = {format: '%s%v', symbol: '€'}
  
  const { addToCart } = useContext(CartContext);
  
  return (
    <div className={classes.productcard_wrapper}>
        <div>
           <img  src={product.image} alt='' className={classes.productcard_img} />
           <h1>{product.name}</h1>
           

           <div className={classes.productcard_price}>
             <h4>{product.description}</h4>
             <h5>{formatCurrency(`${product.price}`, opts)}</h5>
            

           <div className={classes.Productcard_rating}>
             <Rating 
             value={product.rating } 
             text={ `${product.numReviews} reviews`}
             />
            </div>
           <button className={classes.productcard_button}
           onClick={() => addToCart(product) }
           >Add to cart</button>
           
          
           </div>
        </div>

    </div>
  )
}

export default ProductCard
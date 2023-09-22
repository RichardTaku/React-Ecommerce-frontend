import React from 'react';
import products from './data';
import classes from './homescreen.module.css';
import ProductCard from './ProductCard';

const Homescreen = () => {
  return (
    <div className={classes.product_wrapper}>

    {products.map((product) => ( <ProductCard  key={product.id}
     product={product}

    />
       

    ))}
    </div>
  )
}

export default Homescreen
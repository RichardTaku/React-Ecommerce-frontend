import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import classes from '../productcard.module.css'



const Rating = ({value, text, color}) => {
  return (
    <div className={classes.rating}>

{[1, 2, 3, 4, 5].map((rate) =>(

    <span key={uuidv4()}>
        <i style={{color}} className={
         value + 1 === rate + 0.5 
         ? 'fas fa-star-half-alt' 
         : value >= rate 
         ? 'fas fa-star' 
         : 'far fa-star'

        }></i>
    </span>
 )) }
  <br/>
<span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps={
    color: '#ffa41c'
};
export default Rating
import {SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM} from './Type';



const CartRducer = (state, action) => {
  
    switch (action.type){

        case SHOW_HIDE_CART: { 

          return{
                ...state,
                showCart: !state.showCart,
            };
        }

        case ADD_TO_CART: {

            return{
                ...state,
                cartItem: [...state.cartItem, action.payload],
            };
        }

        case REMOVE_ITEM: {

            return{
                ...state,
                cartItem : state.cartItem.filter(item => item._id 
                !== action.payload ),
            };
        }
            
        


        default:
        return state
    }
}
  


export default CartRducer
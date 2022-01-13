import React,{useContext} from 'react'
import CartContext from '../../../../Store/CartContext';
import classes from './Mealitem.module.css'
import MealitemForm from './MealitemForm';

const Mealitem = (props) => {
    const Cartctx=useContext(CartContext)
    const price=`$${props.price.toFixed(2)}`;
    const addtoCartHandler=(quantity)=>
    {
        
           Cartctx.addItem({
               id:props.id,
               name:props.name,
               quantity:quantity,
            // amount:amount,
               price:props.price
           });
           
    }
    // console.log(addItem); 
    

    return (
        <div>
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                
                <div className={classes.desciption}>{props.descrp}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
            <MealitemForm id={props.id} onAddtoCart={addtoCartHandler}/>
           
            </div>
        </li>
            
        </div>
    )
}

export default Mealitem

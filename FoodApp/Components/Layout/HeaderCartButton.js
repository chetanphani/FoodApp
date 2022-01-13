import React,{useContext} from 'react'
import CartIcon from './CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../../Store/CartContext'

const HeaderCartButton = (props) => {
    const cartCtx=useContext(CartContext)
    console.log(cartCtx);

    const numberofItemsinCart=cartCtx.items.reduce((a,b)=>
    {
        return a+b.quantity;
    },0)
    // const len= cartCtx.items.length
    return (
        <button className={classes.button} onClick={props.onclick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberofItemsinCart}</span>
            {/* <h1>chetan</h1> */}
        </button>
    )
}

export default HeaderCartButton

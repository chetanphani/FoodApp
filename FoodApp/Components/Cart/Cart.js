import React from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../../Store/CartContext';
import { useContext } from 'react/cjs/react.development';
import CartItem from './CartItem';

const Cart = (props) => {
    const Cartctx=useContext(CartContext);
    console.log(Cartctx.items);
     
   const hasItems=Cartctx.items.length>0
   const Totalamount=Cartctx.totalAmount.toFixed(2)

   const cartItemRemoveHandler=()=>
   {

   }
   const cartItemaddHandler=()=>
   {

   }
    const cartitems=
    (
        <ul className={classes['cart-items']}>
        {Cartctx.items.map((val)=>
        (
            <CartItem key={val.id} name={val.name} amount={val.amount} price={val.price} onRemove={cartItemRemoveHandler.bind(null,val.id)} onAdd={cartItemaddHandler.bind(val)}/>
             
        ))}
        
    </ul>
    );
    return (
        <>
        <Modal close={props.close}>
        {cartitems}
            <div className={classes.total}>
                 <span>Total Amount</span>
                 <span>{Totalamount}</span>
            </div>
            <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.close}>close</button>
                   {hasItems==0?'': <button className={classes.button}>Order</button>}
            </div>
        </Modal>
         <div>
        <h1>huiii</h1>
    </div>
    </>
    )
   
    
}

export default Cart

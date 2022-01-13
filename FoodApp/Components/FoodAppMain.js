import React,{useState} from 'react'
import Header from './Layout/Header'
import Meals from './Meals/Meals'
import Cart from './Cart/Cart'
import CartProvider from '../../Store/CartProvider'

const FoodAppMain = (props) => {
  const [Errmodal, setErrmodal] = useState(false)

  const Showcart=()=>
  {
          setErrmodal(true);
  }
  const Hidecart=()=>
  {
    setErrmodal(false);
  }
    return (
        <div>
        <CartProvider>
        {Errmodal==true? <Cart close={Hidecart}/> :''}
          <Header onShowcart={Showcart}/>
          <main>
             <Meals/>
          </main>
          </CartProvider>
        </div>
    )
}

export default FoodAppMain

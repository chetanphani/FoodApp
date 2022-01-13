import React from 'react'
import { Fragment } from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
document.title="10+5"

const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
          <h1>10+5 </h1>
          {/* <button style={{color:'red'}}>click me</button> */}
         
         <HeaderCartButton onclick={props.onShowcart}/>
         </header>
         <div className={classes['main-image']}> 
        <img src='https://drlesliekorn.com/wp-content/uploads/2020/12/shutterstock_526142515-1024x411.jpg' alt="Good Food..Good Day!"></img>

        </div> 
        </Fragment>
    )
}

export default Header

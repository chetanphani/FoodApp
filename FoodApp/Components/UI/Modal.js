import React from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'


const Backdrop=(props)=>
{
         return<div className={classes.backdrop} onClick={props.onclose}></div>
}
const ModerOverlay=(props)=>
{
    return<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>

}

const Modal = (props) => {
    const portal=document.getElementById('Over-lays')
    return (
        <div>
        {ReactDom.createPortal(<Backdrop onclose={props.close}/>,portal)}
        {ReactDom.createPortal(<ModerOverlay>{props.children}</ModerOverlay>,portal)}
            
        </div>
    )
}

export default Modal

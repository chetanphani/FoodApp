import React,{useRef, useState} from 'react'
import Input from '../../UI/Input'
import classes from './MealitemForm.module.css'

const MealitemForm = (props) => {
    console.log(props);
   const Amountinput= useRef()
//    console.log(Amountinput);
   const [Error, setError] = useState(false)

    const SubmitHandler=(event)=>
    {
        event.preventDefault()
      console.log( Amountinput.current.value);
    const EnteredQauantity=Amountinput.current.value;
    console.log(EnteredQauantity);
    const EnteredQuantityToatal= +EnteredQauantity

    if(EnteredQauantity.trim().length<0 || EnteredQuantityToatal<1 || EnteredQuantityToatal>5)
    {
        setError(true)
        return
    }
    props.onAddtoCart(EnteredQuantityToatal);
    console.log(EnteredQuantityToatal);
     
    }
    return (
    
        <form className={classes.form} onSubmit={SubmitHandler} >
        <Input label="Quantity"   ref={Amountinput} input={{
            
            id:  props.id,
            type:'number',
            min:1,
            max:5,
            step:1,
            defaultValue:1
        }}/>
        <button>Add</button>
        {Error==true? <p>Plz enter valid input..</p> : ''}
        </form>
            
        
    )
}

export default MealitemForm

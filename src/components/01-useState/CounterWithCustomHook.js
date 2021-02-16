import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const [counter, increment, decrement, reset] = useCounter()

    return (
        <>
            <h1>Counter with custom hook: {counter}</h1>
            <hr/> 

            <button 
            onClick = {() => increment(2)}
            className = "btn btn-warning mr-2"
            > +1 </button>  
            <button 
            onClick = {reset}
            className = "btn btn-primary mr-2"
            > 🔄 </button>  
            <button 
            onClick = {() => decrement(2)}
            className = "btn btn-warning"
            > -1 </button>  
        </>
    )
}

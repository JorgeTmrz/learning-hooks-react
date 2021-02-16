import React, { useState } from 'react'
import "../02-useEffect/effects.css"
import {useCounter} from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const [counter, increment] = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter <Small counter = {counter} /> </h1>
            <hr/>

            <button 
            onClick = {increment}
            className = "btn btn-outline-dark">
                +1
            </button>
            <button 
            onClick = {() => setShow(prev => !prev)}
            className = "ml-2 btn btn-outline-warning">
                👁 : <strong>{JSON.stringify(show)}</strong>
            </button>

        </div>
    )
}

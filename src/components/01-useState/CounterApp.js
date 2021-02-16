import React, { useState } from 'react'
import "./counter.css"
export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    })

    const {counter1, counter2} = counter;

    const increaseCounter = () => setCounter(({counter1, counter2}) => {
        return {
            ...counter,
            counter1: counter1 + 1
        }
    })

    return (
        <>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <hr/>

            <button onClick = {increaseCounter} className = "btn btn-primary">+1</button>
        </>
    )
}

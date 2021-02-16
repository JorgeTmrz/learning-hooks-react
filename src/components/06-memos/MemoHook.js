import React, { useMemo, useState } from 'react'
import "../02-useEffect/effects.css"
import {useCounter} from '../../hooks/useCounter'
import { heavyProcess } from '../../helpers/heavyProcess'

export const MemoHook = () => {

    const [counter, increment] = useCounter(50)
    const [show, setShow] = useState(true)

    const heavyProcessMemo = useMemo(() => heavyProcess(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter <small>{counter}</small> </h3>
            <hr/>

            <p>{heavyProcessMemo}</p>

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

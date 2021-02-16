import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [state, setstate] = useState(initialState);

    const increment = () => {
        setstate(prev => prev + 1)
    }

    const decrement = () => {
        setstate(prev => prev - 1)
    }

    const reset = () => {
        setstate(initialState);
    }

    return [state, increment, decrement, reset]

}
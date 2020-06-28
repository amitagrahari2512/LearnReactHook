import React, { useState } from 'react'

const HooksCounterTwo = () => {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i = 0; i<5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment five</button>
        </div>
    )
}

export default HooksCounterTwo
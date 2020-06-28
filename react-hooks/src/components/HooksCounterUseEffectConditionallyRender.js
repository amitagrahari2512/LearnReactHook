import React, { useState, useEffect } from 'react'

const HooksCounterUseEffectConditionallyRender = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log("UseEffect : Updating Document Title")
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type = 'text' onChange = {(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HooksCounterUseEffectConditionallyRender
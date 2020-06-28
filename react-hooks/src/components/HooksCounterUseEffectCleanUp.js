import React, { useState, useEffect } from 'react'
import HookMouseUseEffectCleanUp from './HookMouseUseEffectCleanUp'

const HooksCounterUseEffectCleanUp = () => {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick = {() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouseUseEffectCleanUp/>}
        </div>
    )
}

export default HooksCounterUseEffectCleanUp
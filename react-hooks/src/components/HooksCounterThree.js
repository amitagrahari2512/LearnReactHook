import React, { useState } from 'react'

const HooksCounterThree = () => {

    const [name, setName] = useState({firstName : '' , lastName : ''})

    return (
        <div>
            <label>First Name : </label>
            <input type='text' onChange={e => setName({...name, firstName : e.target.value})} />

            <label>Last Name : </label>
            <input type='text' onChange={e => setName({...name, lastName : e.target.value})} />

            <h2>Your first name is {name.firstName}</h2>
            <h2>Your last name is {name.lastName}</h2>

            <div>{JSON.stringify(name)}</div>
        </div>
    )
}

export default HooksCounterThree
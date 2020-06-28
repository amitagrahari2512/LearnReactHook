import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetchingPerId = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error => console.log(error))
    },[idFromButtonClick])

    const buttonClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type = 'text' value = {id} onChange = {e => setId(e.target.value)} />
            <button onClick = {buttonClick} >Fetch Post</button>
            <ul>
                    <li key = {post.id}>{post.title}</li>
            </ul>
        </div>
    )
}

export default DataFetchingPerId
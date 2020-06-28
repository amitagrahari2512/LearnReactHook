import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetching = () => {

    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
            console.log(response)
            setPosts(response.data)
        })
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key = {post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching
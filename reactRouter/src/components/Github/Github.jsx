import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    //const[data, setData] = useState([])

    // useEffect( () => {
    //     fetch('https://api.github.com/users/afran18')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()  
  return (
    <div className="text-center m-5 p-4 text-3xl">Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} className="mx-auto my-10 rounded-full" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/afran18')
    return response.json()
}
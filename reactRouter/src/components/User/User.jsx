import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center text-3xl text-orange-500 m-10 font-bold'>User: {userid}</div>
  )
}

export default User
import React, { useState } from 'react'
import UserContext from '../context/userContext'


function Login() {

const [username, setUserName] = useState('');
const [password, setPassword] = useState('');

    const handleSubmit = () => {

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='username' />

        <input type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login
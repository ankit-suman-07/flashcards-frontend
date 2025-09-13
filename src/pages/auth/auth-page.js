import React, { useState } from 'react'

const AuthPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    // function toggleShow() {
        
    // }
  return (
    <div>
        <input 
            type='text' 
            placeholder='enter username'
            onChange={(e) => setUsername(e.target.value)}
        />
        
        <br></br>
        <input 
            type='password'  
            placeholder='enter password'
            onChange={(e) => setPassword(e.target.value)}
        />
        
        <button onClick={() => setShow(!show)} >Submit</button>
        {
            show && <div>
                {username}
                {password}
                </div>
        }
    </div>
  )
}

export default AuthPage
import React, { useState } from 'react'
import { useUserData } from '../../store/user-store';

const AuthPage = () => {
  const username = useUserData((state) => state.username);
  const updateUser = useUserData((state) => state.updateUser);
  
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div>
      <input 
        type='text' 
        placeholder='enter username'
        value={username}
        onChange={(e) => updateUser(e.target.value)}
      />
      <br/>
      <input 
        type='password'
        placeholder='enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShow(!show)}>Submit</button>
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

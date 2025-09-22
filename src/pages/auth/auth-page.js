import React, { use, useState, useEffect } from 'react'
import axios from 'axios';

const AuthPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [user, setUser] = useState(null);

    // function toggleShow() {
        
    // }
    useEffect(() => {
        if(user) {
            window.location.href = "/home";
        }
    }, [user]);

    useEffect(() => {
        axios.post('http://localhost:5555/api/auth/login', {
            email: email,
            passwordHash: password
        })
        .then((response) => {
            console.log(response.data);
            setUser(response.data);

        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
    }, [show]);
  return (
    <div>
        <input 
            type='text' 
            placeholder='enter username'
            onChange={(e) => setEmail(e.target.value)}
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
                {email}
                {password}
                </div>
        }
    </div>
  )
}

export default AuthPage
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import WelcomeImage from '../assets/img/welcome.png';


const Welcome = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  if(loggedIn) {
    setInterval(() => {
      window.location.href = "/home";
    }, 1000);
    
  } else {
    setInterval(() => {
      window.location.href = "/auth";
    }, 1000);
  
  }

  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/home">Homepage</Link> |{" "}
        <Link to="/auth">Auth</Link> |{" "}
      </nav> */}
        <h3>Welcome to the FlashCard App</h3>
        <img src={WelcomeImage} alt="FlashCard App" style={{height: '600px'}}/>
    </div>
  )
}

export default Welcome
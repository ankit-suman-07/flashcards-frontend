import React from 'react'
import { Link } from 'react-router-dom'
import WelcomeImage from '../assets/img/welcome.png';


const Welcome = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/auth">Auth</Link> |{" "}
      </nav>
        <h3>Welcome to the FlashCard App</h3>
        <img src={WelcomeImage} alt="FlashCard App" style={{height: '600px'}}/>
    </div>
  )
}

export default Welcome
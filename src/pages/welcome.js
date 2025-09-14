import React from 'react'
import { Link } from 'react-router-dom'


const Welcome = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/auth">Auth</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
      </nav>
        <h3>Welcome to the FlashCard App</h3>
    </div>
  )
}

export default Welcome
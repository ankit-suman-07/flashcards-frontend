import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <h3>Welcome to the FlashCard App HOMEPAGE</h3>
        <div>
            <Link to="/collection">Collections</Link> |{" "}
            <Link to="/last">Last Revised</Link> |{" "}
            <Link to="/create">Create Deck</Link>
        </div>
    </div>
  )
}

export default Homepage
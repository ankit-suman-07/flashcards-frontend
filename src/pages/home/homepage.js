import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <h3>Welcome to the FlashCard App HOMEPAGE</h3>
        <div>
            <Link to="/all-decks">All Decks</Link> |{" "}
            <Link to="/create-deck">Last Revised</Link> |{" "}
            <Link to="/history">Create Deck</Link> |{" "}
        </div>
    </div>
  )
}

export default Homepage
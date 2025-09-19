import React from 'react'
import { Link } from 'react-router-dom'

const CreateDeck = () => {
  return (
    <div>
        <Link to="/home">Home</Link> |{" "}
        <h3>Create Deck Page</h3>
    </div>
  )
}

export default CreateDeck
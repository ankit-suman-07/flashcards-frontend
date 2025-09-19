import React from 'react'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <div>
        <Link to="/home">Home</Link> |{" "}
        <h3>History Page</h3>
    </div>
  )
}

export default History
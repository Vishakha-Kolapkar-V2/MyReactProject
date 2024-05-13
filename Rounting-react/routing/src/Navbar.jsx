import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link> &nbsp;&nbsp;
        <Link to="/about">About</Link>&nbsp;&nbsp;
        <Link to="/forms">Forms</Link>&nbsp;&nbsp;
        <Link to="/user/anil">Anil</Link>&nbsp;&nbsp;
        <Link to="/user/peter">peter</Link>
    </div>
  )
}

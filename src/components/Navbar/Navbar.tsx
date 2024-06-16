import React from 'react'
import './Navbar.css'

function Navbar() {

  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li><a>Quem Somos</a></li>
          <li><a>Nossa História</a></li>
          <li><a>Participe do CAUSP!</a></li>
          <li><a>Blog</a></li>
          <li><a>Cartilhas</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

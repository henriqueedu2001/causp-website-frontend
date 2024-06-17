import React from 'react'
import './Navbar.css'

function Navbar() {

  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li><a>Quem Somos?</a></li>
          <li><a>Nossa História</a></li>
          <li><a>Descubra</a></li>
          <li><a>Cultura</a></li>
          <li><a>Participe</a></li>
          <li><a>Siga-nos!</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

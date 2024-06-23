import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav className="navbar">
      <div className="container">
        <div className='causp-container'>
          <Link to='/'>CAUSP</Link>
        </div>
        <ul>
          <li><Link to='/sobrenos'>QUEM SOMOS?</Link></li>
          <li><Link to='/historia'>NOSSA HISTÓRIA</Link></li>
          <li><Link to='/descubra'>DESCUBRA</Link></li>
          <li><Link to='/cultura'>CULTURA</Link></li>
          <li><Link to='/participe'>PARTICIPE</Link></li>
          <li><Link to='/contatos'>SIGA-NOS!</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

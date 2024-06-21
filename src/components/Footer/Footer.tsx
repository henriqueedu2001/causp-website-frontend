import React from 'react'
import './Footer.css'

import CAUSP_LOGO from './../../assets/imgs/LOGO SEM FUNDO.png'

function Footer() {

  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-content'>
          <ImageContainer/>
          <FooterLinks/>
        </div>
        <div className='copyright'>
          <p>&copy; 2024 Coletivo Autista da USP - CAUSP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

class FooterLinks extends React.Component {
  render() {
    return (
      <div className='footer-columns'>
        <div className='footer-column'>
          <h3 className='column-title'>Mapa do site</h3>
          <hr></hr>
          <ul>
            <li><a>Quem somos?</a></li>
            <li><a>Nossa História</a></li>
            <li><a>Descubra</a></li>
            <li><a>Cultura</a></li>
            <li><a>Participe</a></li>
          </ul>
        </div>
        <div className='footer-column'>
          <h3 className='column-title'>Descubra!</h3>
          <hr></hr>
          <ul>
            <li><a>Cartilhas</a></li>
            <li><a>Cultura</a></li>
          </ul>
        </div>
        <div className='footer-column'>
          <h3 className='column-title'>Redes Sociais</h3>
          <hr></hr>
          <ul>
            <li><a>Instagram</a></li>
            <li><a>Facebook</a></li>
            <li><a>Discord</a></li>
          </ul>
        </div>
        <div className='footer-column'>
          <h3 className='column-title'>Siga-nos!</h3>
          <hr></hr>
          <ul>
            <li><a>Instagram</a></li>
            <li><a>Facebook</a></li>
            <li><a>Discord</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

class ImageContainer extends React.Component {
  render() {
    return (
      <div className='footer-img-container'>
        <img src={CAUSP_LOGO}></img>
      </div>
    )
  }
}

export default Footer

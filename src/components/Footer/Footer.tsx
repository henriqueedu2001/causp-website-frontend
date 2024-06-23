import React from 'react'
import { Link } from 'react-router-dom'

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
          <h3 className='column-title'>Mapa do Site</h3>
          <hr></hr>
          <ul>
            <li><Link to='/'>Início</Link></li>
            <li><Link to='/sobrenos'>Quem Somos?</Link></li>
            <li><Link to='/historia'>Nossa História</Link></li>
            <li><Link to='/descubra'>Descubra</Link></li>
          </ul>
        </div>
        <div className='footer-column'>
          <h3 className='column-title'>Conteúdo</h3>
          <hr></hr>
          <ul>
            <li><Link to='/artigos'>Artigos</Link></li>
            <li><Link to='/pesquisas'>Pesquisas</Link></li>
            <li><Link to='/pesquisas'>Censos</Link></li>
            <li><Link to='/cultura'>Cultura</Link></li>
          </ul>
        </div>
        <div className='footer-column'>
          <h3 className='column-title'>Institucional</h3>
          <hr></hr>
          <ul>
            <li><Link to='/membros'>Membros</Link></li>
            <li><Link to='/regimento'>Regimento</Link></li>
            <li><Link to='/participe'>Participe</Link></li>
            <li><Link to='/visual'>Identidade Visual</Link></li>
          </ul>
        </div>
        <div className='footer-column'>
          <h3 className='column-title'>Contatos</h3>
          <hr></hr>
          <ul>
            <li><Link to='https://www.instagram.com/coletivoautista/'>Instagram</Link></li>
            <li><Link to='https://discord.com/invite/6ZHU5Ta92y'>Discord</Link></li>
            <li><Link to='https://www.facebook.com/coletivoautista/'>Facebook</Link></li>
            <li><Link to='https://linktr.ee/cautistausp'>Link Tree</Link></li>
            <li><Link to='https://github.com/henriqueedu2001/causp-website-frontend'>Github do Site</Link></li>
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

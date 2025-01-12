import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'
import CAUSP_LOGO from './../../assets/imgs/LOGO SEM FUNDO.png'

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-content'>
          <ImageContainer />
          <FooterLinks />
        </div>
        <div className='copyright'>
          <p>&copy; 2025 Coletivo Autista da USP - CAUSP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

class FooterLinks extends React.Component {
  render() {
    return (
      <div className='footer-columns'>
        {SiteMap()}
        {ContentLinks()}
        {InstitutionalLinks()}
        {SocialMediaLinks()}
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

function SiteMap() {
  return (
    <div className='footer-column'>
      <h3 className='column-title'>Mapa do Site</h3>
      <hr></hr>
      <ul className='links-list'>
        <li><Link to='/'>Início</Link></li>
        <li><Link to='/sobrenos'>Quem Somos?</Link></li>
        <li><Link to='/historia'>Nossa História</Link></li>
        <li><Link to='/descubra'>Descubra</Link></li>
      </ul>
    </div>
  )
}

function ContentLinks() {
  return (
    <div className='footer-column'>
      <h3 className='column-title'>Conteúdo</h3>
      <hr></hr>
      <ul className='links-list'>
        <li><Link to='/artigos'>Artigos</Link></li>
        <li><Link to='/pesquisas'>Pesquisas</Link></li>
        <li><Link to='/pesquisas'>Censos</Link></li>
        <li><Link to='/cultura'>Cultura</Link></li>
      </ul>
    </div>
  )
}

function InstitutionalLinks() {
  return (
    <div className='footer-column'>
      <h3 className='column-title'>Institucional</h3>
      <hr></hr>
      <ul className='links-list'>
        <li><Link to='/membros'>Membros</Link></li>
        <li><Link to='/regimento'>Regimento</Link></li>
        <li><Link to='/participe'>Participe</Link></li>
        <li><Link to='/visual'>Identidade Visual</Link></li>
      </ul>
    </div>
  )
}

function SocialMediaLinks() {
  return (
    <div className='footer-column'>
      <h3 className='column-title'>Redes Sociais</h3>
      <hr></hr>
      <ul className='links-list'>
        {SocialMediaListItem('https://www.instagram.com/coletivoautista/', 'Instagram', 'instagram', true)}
        {SocialMediaListItem('https://discord.com/invite/6ZHU5Ta92y', 'Discord', 'discord', true)}
        {SocialMediaListItem('https://www.facebook.com/coletivoautista/', 'Facebook', 'facebook', true)}
        {SocialMediaListItem('https://github.com/henriqueedu2001/causp-website-frontend', 'Github', 'github', true)}
        {SocialMediaListItem('https://linktr.ee/cautistausp', 'Link Tree', 'link Tree', false)}
      </ul>
    </div>
  )
}

function SocialMediaListItem(link: string, social_media_name: string, social_media_ref: string, has_icon: boolean) {
  return (
    <li>
      <Link to={link}>
        {has_icon ? <div className='social-icon'><i className={`fab fa-${social_media_ref}`}></i></div> : null}
        {social_media_name}
      </Link>
    </li>
  )
}

export default Footer

import React from 'react'
import CAUSP_LOGO from './../../assets/imgs/LOGO SEM FUNDO.png'
import colorful_infinity from './../../assets/imgs/colorful_infinity.png'
import Header from './../../components/Navbar/Navbar.tsx'

import './Home.css'

function Home() {

  return (
    <>
      <Header/>
      <Presentation/>
      <AboutUsSection/>
      <HistorySection/>
      <DiscoverSection/>
      <ContactsSection/>
    </>
  )
}

class Presentation extends React.Component {
  render() {
    return (
      <section className='presentation-section'>
        <div className='presentation-container'>
          <div className='logo-container'>
            <img src={CAUSP_LOGO}></img>
          </div>
          <div className='text-container'>
            <div className='text-div'><h1>Coletivo Autista<br/>da USP (CAUSP)</h1></div>
            <div className='text-div'><h2>Um espaço de conexão de pessoas autistas da comunidade USP!</h2></div>
            <div className='text-div'><p>Nosso coletivo é um grupo de pessoas autistas que procuram criar amizades e compartilhar experiências e ao mesmo tempo ampliar as medidas de inclusão e adaptação no ambiente acadêmico.</p></div>
          </div>
        </div>
      </section>
    )
  }
}

class AboutUsSection extends React.Component {
  render() {
    return (
      <section>
        <div className='section-container'>
          <h1 className='section-title'>Quem Somos?</h1>
          <hr/>
          <p>
          </p>
          <div className='image-text-container'>
            <div className='side-text'>
              <p>Você sabia que existem vários alunos e funcionários com o transtorno do espectro 
                autista (TEA) na Universidade de São Paulo (USP)?
                Apesar de serem muitos, a comunidade autista da USP enfrenta problemas de 
                invisibilidade, acessibilidade e discriminação. A universidade oferecer programas
                de inclusão, mas ainda temos muito a fazer para os alunos e funcionários com TEA.
                Por isso, é essencial ter grupos de apoio e suporte a esta população.
              </p>
            </div>
            <div className='colorful-infinity'>
              <figure>
                <img src={colorful_infinity}></img>
                <figcaption>O símbolo de infinito colorido representa a neurodiversidade.
                  O movimento neurodiverso luta pela aceitação e inclusão de pessoas neurodiversas.</figcaption>
              </figure>
            </div>
          </div>
          <p><b>Coletivo Autista da USP (CAUSP)</b> é uma iniciativa dedicada a esta parte da 
            comunidade USP. Nossos objetivos são discutir o TEA, contribuir para a expansão de 
            pautas relacionadas ao autismo, e criar um local seguro para troca de experiências 
            e apoio mútuo entre membros da comunidade autista.</p>
        </div>
      </section>
    )
  }
}

class HistorySection extends React.Component {
  render() {
    return (
      <section>
        <div className='section-container'>
          <h1 className='section-title'>Nossa História</h1>
          <hr/>
          <p></p>
        </div>
      </section>
    )
  }
}

class DiscoverSection extends React.Component {
  render() {
    return (
      <section>
        <div className='section-container'>
          <h1 className='section-title'>Descubra!</h1>
          <hr/>
        </div>
      </section>
    )
  }
}

class ContactsSection extends React.Component {
  render() {
    return (
      <section>
        <div className='section-container'>
          <h1 className='section-title'>Contate-nos!</h1>
          <hr/>
        </div>
      </section>
    )
  }
}

export default Home

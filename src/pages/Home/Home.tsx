import React from 'react'
import CAUSP_LOGO from './../../assets/imgs/LOGO SEM FUNDO.png'
import Header from './../../components/Navbar/Navbar.tsx'

import './Home.css'

function Home() {

  return (
    <>
      <Header/>
      <Presentation/>
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

export default Home

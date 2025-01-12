import React from 'react'
import CAUSP_LOGO from './../../assets/imgs/LOGO SEM FUNDO.png'
// import colorful_infinity from './../../assets/imgs/colorful_infinity.png'
import Header from './../../components/Navbar/Navbar.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import './Home.css'
import '../../components/PageContent/PageContent.css'

function Home() {

  return (
    <>
      <Header />
      {PageContent()}
      <Footer />
    </>
  )
}

function PageContent() {
  return (
    <div className='page-content'>
      <Presentation/>
      <AboutUsSection/>
      <HistorySection/>
    </div>
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
            <div className='text-div'><h1>Coletivo Autista<br />da USP (CAUSP)</h1></div>
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
          <h2 className='section-title'>Quem Somos?</h2>
          <hr />
          <p>Você sabia que existem vários alunos e funcionários com o transtorno do espectro
            autista (TEA) na Universidade de São Paulo (USP)?
            Apesar de serem muitos, a comunidade autista da USP enfrenta problemas de
            invisibilidade, acessibilidade e discriminação. A universidade oferecer programas
            de inclusão, mas ainda temos muito a fazer para os alunos e funcionários com TEA.
            Por isso, é essencial ter grupos de apoio e suporte a esta população.
          </p>
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
          <h2 className='section-title'>Nossa História</h2>
          <hr />
          <p>O Coletivo Autista da USP (CAUSP) foi fundado em 12 de maio de 2021 por Giulia Jardim
            Martinovic, sendo o primeiro coletivo autista do Brasil!</p>
          <p>Seu objetivo é conscientizar a comunidade acadêmica, promovendo a permanência de autistas
            no Ensino Superior e a defesa de cotas para autistas em todas as universidade brasileiras.
            CAUSP foi logo reconhecido após a criação com o Prêmio Diversidade da Universidade de São
            Paulo em junho de 2021, na categoria Acesso, inclusão e permanência de grupos minoritários
            da USP. A premiação é concedida a iniciativas de incentivo à diversidade, e é realizada em
            junho, para marcar o mês do Orgulho LGBTQIA+.</p>
        </div>
      </section>
    )
  }
}

export default Home

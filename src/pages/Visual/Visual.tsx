import React from 'react'

import Header from '../../components/Navbar/Navbar.tsx'
import Footer from '../../components/Footer/Footer.tsx'

import './Visual.css'

function Visual() {

  return (
    <>
      <Header/>
      <PageContent/>
      <Footer/>
    </>
  )
}

class PageContent extends React.Component {
  render() {
    return (
        <div>

        </div>
    )
  }
}

export default Visual
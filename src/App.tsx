import { Route, Routes } from 'react-router';
import './App.css'
import './assets/fonts/fonts.css'

import Home from './pages/Home/Home.tsx';
import AboutUs from './pages/AboutUs/AboutUs.tsx';
import History from './pages/History/History.tsx';
import Discover from './pages/Discover/Discover.tsx';
import Culture from './pages/Culture/Culture.tsx';
import Articles from './pages/Articles/Articles.tsx';
import Contacts from './pages/Contacts/Contacts.tsx';
import Members from './pages/Members/Members.tsx';
import Subscription from './pages/Subscription/Subscription.tsx';
import Regiment from './pages/Regiment/Regiment.tsx';
import Research from './pages/Research/Research.tsx';
import Visual from './pages/Visual/Visual.tsx';
import Downloads from './pages/Downloads/Downloads.tsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobrenos" element={<AboutUs/>}/>
        <Route path="/historia" element={<History/>}/>
        <Route path="/descubra" element={<Discover/>}/>
        <Route path="/cultura" element={<Culture/>}/>
        <Route path="/artigos" element={<Articles/>}/>
        <Route path="/contatos" element={<Contacts/>}/>
        <Route path="/membros" element={<Members/>}/>
        <Route path="/participe" element={<Subscription/>}/>
        <Route path="/regimento" element={<Regiment/>}/>
        <Route path="/pesquisa" element={<Research/>}/>
        <Route path="/visual" element={<Visual/>}/>
        <Route path="/downloads" element={<Downloads/>}/>
      </Routes>
    </>
  )
}

export default App

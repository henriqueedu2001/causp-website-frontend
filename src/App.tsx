import { Route, Routes } from 'react-router';
import './App.css'
import './assets/fonts/fonts.css'

import Home from './pages/Home/Home.tsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App

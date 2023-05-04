import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Fiche from './pages/Fiche'
import Error from './pages/Error'
import About from './pages/About'
import Header from './components/Header'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/fiche" element={<Fiche/>}/>    
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)


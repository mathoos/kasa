import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './style/index.scss';
import Home from './pages/Home/Home';
import Fiche from './pages/Fiche/Fiche'
import Error from './pages/Error/Error'
import About from './pages/About/About'




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/fiche/:id" element={<Fiche/>}/>          
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)


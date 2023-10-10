import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

import Error from "./components/Error/error"
import Homepage from './components/pages/homepage'
import About from './components/pages/about'

import data from "./datas/annonce.json"
import dataAbout from "./datas/apropos.json"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage i={data} />} />
        <Route path="*" element={<Error/>} />
        <Route path="/about" element={<About i={dataAbout} />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
);


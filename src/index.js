import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

import Error from "./components/Error/error"
import Homepage from "./components/pages/homepage/homepage"
import About from "./components/pages/about/about"
import Logement from "./components/pages/logements/logement"


import data from "./datas/annonce.json"
import dataAbout from "./datas/apropos.json"



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/Projet-8/" element={<Homepage data={data} />} />
        <Route path="/Projet-8/about" element={<About dataAbout={dataAbout} />} />
        <Route path="/Projet-8/logement/:id" element={<Logement data={data} />} />
        <Route path="/Projet-8/*" element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
);


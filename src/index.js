import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

import BannerImg from "./components/BannerImg/bannerimg"
import Location from "./components/Location/location"
import LocationFunction from "./components/Location/locationFunction"
import Dropdown from "./components/Dropdown/dropdown"
import DropdownFunction from "./components/Dropdown/dropdownFunction"
import Error from "./components/Error/error"

import data from "./datas/annonce.json"
import dataAPropos from "./datas/apropos.json"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<><BannerImg /> <LocationFunction i={data} /></>} />
        <Route path="*" element={<Error/>} />
        <Route path="/apropos" element={<DropdownFunction i={dataAPropos} />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
);


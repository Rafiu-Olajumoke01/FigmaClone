import React from 'react'
import Navbar from '../../Component/Navbar'
import { Link } from 'react-router-dom'
import About from "./../About/About"
import "./Home.css"
import AboutTwo from '../AboutTwo/AboutTwo'
import ImagePage from '../ImagePage'
import LastPage from '../LastPage/LastPage'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />

      <div className="banner">
        <div className="banner_text">
          <h1><img src={require("./../../Images/groupedarabictext.png")} alt="" /></h1>

          <div className="btns">
            <Link className="btn1">انشاء حساب</Link>
            <Link className="btn2">عرض الاسعار</Link>
          </div>
        </div>
      </div>

      <About />

      
    </div>
  )
}

export default Home

import React from 'react'
import Header from '../components/global/header/Header'
import Footer from '../components/global/footer/Footer'
const heroBg = require('../assets/img/hero-bg.png')
import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
      <div style={{ overflow: 'auto' }}>
        <div
          style={{ backgroundImage: `url(${heroBg})` }}
          className="hero-section-80 hero-main-container"
        >
          <div className="hero-layer"></div>
          <div className="hero-body">
          <Header />
            <h5 className='con'>Contact Us</h5>
            <br />
            <div className='numa'>
              <h6>+234 803 493 6964</h6>
            </div>
          </div>
        </div> 
        <Footer /> 
      </div>    
    </>
  )
}

export default ContactUs
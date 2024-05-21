import React from 'react'
import Header from '../components/global/header/Header'
import Footer from '../components/global/footer/Footer'
const heroBg = require('../assets/img/hero-bg.png')
import "./Privacy.css"

const Privacy = () => {
  return (
    <>
      <div>
        <div
          style={{ backgroundImage: `url(${heroBg})` }}
          className="hero-section-80 hero-main-container"
        >
          <div className="hero-layer"></div>
          <div className="hero-body">
          <Header />
            <h5 className='vac'>Privacy Policy</h5>
            <div className='pri'>
            <p className='pol'>
                At Aprokopay, we are committed to safeguarding the privacy and confidentiality of our users. This privacy statement outlines how we collect, use, disclose, and protect the personal information provided by our users. By using our website and services, you agree to the terms of this Privacy Statement.
                <br />
                <br />
                <b>Information Collection:</b>
                <br />
                We may collect personal information from users when they register on our website, create an account, post information, or make a purchase. The information we collect may include, but is not limited to, name, email address, payment details, and other relevant contact information.
                Use of Personal Information:
                We use the personal information provided by users to facilitate the posting and sharing of information on our platform. Your information may also be used to process transactions, verify your identity, communicate with you regarding our services, and respond to inquiries and requests.
                <br />
                <br />
                <b>Information Sharing:</b>
                <br />
                Users of Aprokopay have the option to post information that may be useful to others and charge a small fe<br />e each time another user purchases their information. However, it is important to understand that any information posted on the platform may be visible to other users, and we do not control the actions of other users with regard to the shared information.
                <br />
                <br />
                <b>Security:</b>
                <br />
                We employ industry-standard security measures to protect the personal information submitted to us. However, it is important to note that no data transmission over the internet or electronic storage method can be guaranteed to be 100% secure. We strive to protect your personal information, but we cannot guarantee its absolute security.
                <br />
                <br />
                <b>Cookies and Tracking Technologies:</b>
                <br />
                We may use cookies and other tracking technologies to enhance user experience on our website. These technologies help us gather information about user interactions with our platform, but no personally identifiable information is stored within cookies.
                <br />
                <br />
                <b>Third-Party Services:</b>
                <br />
                Aprokopay may utilize third-party services and tools to enhance our platform&apos;s functionality. These third-party services may have their own privacy policies, and users should review their policies to understand how their information is handled.
                <br />
                <br />
                <b>Legal Compliance:</b>
                <br />
                We may disclose personal information when required to comply with legal obligations, protect our rights, investigate fraud, or respond to lawful requests from government authorities.
                <br />
                <br />
                <b>Children Privacy:</b>
                <br />
                Aprokopay is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided personal information on our website, please contact us, and we will take appropriate steps to remove the information.
                <br />
                <br />
                <b>Changes to Privacy Statement:</b>
                <br />
                We reserve the right to modify this Privacy Statement at any time. Any updates will be posted on our website, and the date of the last revision will be indicated at the top of the statement.

                If you have any questions or concerns about our privacy practices or the information we hold about you, please contact us at [your contact email or support address]. By using Aprokopay, you acknowledge that you have read, understood, and agreed to this Privacy Statement.
            </p>
            </div>
          </div>
        </div> 
      </div>   
      <div className='foo'>
        <Footer />
      </div>  
    </>
  )
}

export default Privacy
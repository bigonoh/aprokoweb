import React from 'react'
import Header from '../components/global/header/Header'
import Footer from '../components/global/footer/Footer'
const heroBg = require('../assets/img/hero-bg.png')
import "./AboutUs.css"

const AboutUs = () => {
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
            <h5 className='con'>About Us</h5>
            <div className='abou'>
                <p className='para'>
                    <p style={{textAlign:'center'}}><b>Welcome to aprokopay.com - Your Gateway to Business Growth and Information Exchange!</b></p>
                    <br />
                    At Aprokopay.com, we believe in empowering businesses and individuals alike, fostering an environment where valuable information and opportunities can be shared seamlessly. Our platform provides a dynamic space for users to advertise their businesses, exchange knowledge, and access valuable insights to thrive in the ever-evolving digital landscape.
                    <br />
                    <br />
                    <b>For Businesses:</b> Are you looking to expand your reach and connect with your target audience? aprokopay.com offers a user-friendly space to showcase your products and services through engaging posts. Our platform allows you to captivate potential customers and drive growth by creating posts that stand out from the crowd.
                    <br />
                    <br />
                    <b>Earn and Grow:</b> Monetize your expertise! aprokopay.com enables users to sell useful information, guiding others towards success. Whether you have insider knowledge, specialized skills, or unique insights, you can offer your expertise for sale. Additionally, our commission-based referral system allows you to earn by directing customers to another person&apos;s business. At aprokopay.com, success is a collaborative journey.
                    <br />
                    <br />
                    <b>Inquiry Solutions:</b> Got questions? Find answers! aprokopay.com facilitates an exchange of knowledge, allowing users to seek valuable insights by offering payment for answers to their questions. Discover solutions, seek guidance, and learn from the collective wisdom of our vibrant community.
                    <br />
                    <br />
                    <b>Secure Transactions:</b> At aprokopay.com, your safety and convenience are paramount. Our robust payment system ensures seamless and secure transactions using your ATM card. Once you&apos;ve made a purchase, the information you&apos;ve acquired will be stored securely in your inbox, allowing easy access whenever you need it.
                    <br />
                    <br />
                    <b>Join our Community:</b> aprokopay.com is more than just a platform; it&apos;s a community of ambitious individuals and businesses committed to growth and success. Connect with like-minded individuals, share experiences, and explore new opportunities together. As you engage with aprokopay.com, you become part of a network that fosters knowledge sharing and empowers growth.
                    <br />
                    <br />
                    <b>Our Mission:</b> At aprokopay.com, we are dedicated to promoting innovation, entrepreneurship, and knowledge exchange. Our mission is to create an inclusive and accessible platform that bridges the gap between businesses and individuals seeking growth and those willing to share their expertise. We strive to be the catalyst that propels you towards your goals and aspirations.
                    <br />
                    <br />
                    Join aprokopay.com today and unlock a world of opportunities. Together, let&apos;s build a brighter future for businesses and individuals alike!
                </p>
            </div>
          </div>
        </div>  
      </div>
      {/* about us text */}
      
          {/* footer  */}
      <div>
        <Footer />
      </div>
    </>
  )
}

export default AboutUs
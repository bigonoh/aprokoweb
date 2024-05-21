import React from 'react'
import Header from '../components/global/header/Header'
import Footer from '../components/global/footer/Footer'
const heroBg = require('../assets/img/hero-bg.png')
import "./Tutorial.css"

const Tutorial = () => {
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
            <h5 className='ori'>Tutorials</h5>
            <div className='tut'>
                <p className='al'>
                    <b>How to submit your bank details for payments</b>
                    <br />
                    <br />
                    <li>Under Menu, click settings</li><br />
                    <li>Click withdrawals and payouts tab</li><br />
                    <li>Input your bank details</li><br />
                    <li>Click update account</li>
                    <br />

                    <b>How to place ad</b>
                    <br />
                    <br />
                    <li>Sign in to your account</li><br />
                    <li>Click on place ad on your dashboard</li><br /> 
                    <li>Fill in the details of your ad</li><br /><br />
                    <li>Click submit</li><br />

                    <b>How to sell information</b>
                    <br />
                    <br /> 
                    <li>Sign in to your account</li><br /> 
                    <li>Click sell on your dashboard</li><br /> 
                    <li>Fill in details of the information you want to sell including the price</li><br />
                    <li>Click submit</li><br />

                    <b>How to buy information</b> 
                    <br />
                    <br />
                    <li>Sign in to your account</li><br />
                    <li>Click information on your dashboard</li><br /> 
                    <li>Search or scroll through the list of posts on the database</li><br />
                    <li>Locate the information that is important to you</li><br /> 
                    <li>Click on buy; it proceeds to paystack payment gateway</li><br />
                    <li>Input your card details and make payment</li><br /> 
                    <li>Click menu</li><br />
                    <li>Click information from menu</li><br />
                    <li>Click on purchased information tab</li><br />
                    <li>Under Actions click * and select View to view details of the information</li><br />

                    <b>How to ask for information</b>
                    <br />
                    <br /> 
                    <li>Sign in to your account</li><br /> 
                    <li>Click ask Aprokopay</li><br />
                    <li>Type the title of the information you are looking for</li><br />
                    <li>Input the price you wish to pay for that information</li><br /> 
                    <li>Make sure status is set to public</li><br />
                    <li>Click submit</li><br />
                    <li>How to view answers to your question that may have been submitted</li><br /> 
                    <li>Sign in to your account</li><br />
                    <li>Click menu icon and click information under menu</li><br />
                    <li>Click proposals tab</li><br />
                    <li>Click the title of the question you wish to see the answer</li><br />
                    <li>Click Buy and proceed to Paystack payment portal and complete your payment</li><br />
                    <li>The answer to your question will be found under menu – information – purchased information tab</li><br />

                    <b>How to view your sales</b>
                    <br />
                    <br /> 
                    <li>Click Menu</li><br />
                    <li>Click Sales under menu</li><br />
                    <li>How to withdraw your funds</li><br />
                    <li>On your dashboard click withdraw</li><br />
                    <li>Input the amount you wish to withdraw</li><br />

                    <b>Click Complete request</b>
                    <br />
                    <br />
                    If after 24hrs you do not get an alert you can contact customer care via mail or whatsapp
                </p>
            </div>
          </div>
        </div>  
      </div>  

        {/* footer */}
      <div className='ter'>
        <Footer />
      </div>  
    </>
  )
}

export default Tutorial
import React from 'react'
const heroBg = require('../assets/img/hero-bg.png')
import logo from '../assets/img/logo.svg'
import { ButtonPrimary } from '../components/buttons/ButtonReuse';
import Select from 'react-select';
import { icons } from '../assets/icons/icons';
import Footer from '../components/global/footer/Footer';
require('./style.css')
function Homepage() {

  return (
    <div>
        <div style={{backgroundImage: `url(${heroBg})`}} className="hero-section-80">
            <div className="hero-layer"></div>
            <div className="hero-body">
            <header className="hero-navbar flex justify-between pt-10 pb-10 container-140">
            <div className="nav-right gap-10 text-sm justify-center align-center flex">
                <figure>
                    <img src={logo}  alt="" />
                </figure>

                <div className="nav-menu">
                <ul className="flex">
                 <li className="ml-10 text-4 text-white text-xs text-hover-secondary"><a href="#work">Services</a></li>
                 <li className="ml-10  text-4 text-white  text-xs text-hover-secondary"><a href="#about">Location</a></li>
                 <li className="ml-10  text-4 text-white text-xs text-hover-secondary"><a href="#about">About</a></li>
                 <li className="ml-10  text-4 text-white text-xs text-hover-secondary"><a href="#about">FAQs</a></li>
                </ul>

                </div>
            </div>

            <div className="flex gap-10">
                <button className='col-30 btn-outlined-primary-sm text-white'>
                    Ask Aprokopay
                </button>
                <button className='col-30 btn-outlined-primary-sm text-white'>
                    Sell info
                </button>
                <button className='col-30 btn-primary-sm text-white'>
                    Login
                </button>
                {/* <ButtonPrimary
                btnStyle="btn-primary-lg"
                >Login</ButtonPrimary> */}
            </div>

            </header>
            <section className="container align-center mt-40 text-center flex flex-column ">
                <h5 className="wp-60 text-white md:lg sm:xm" >Buy & Sell your “INFORMATION” with Aproko Pay, Anytime, Anywhere </h5>
                <p className="wp-60 text-white font-200 mt-20 text-sm">Know something about a product or service in your area? Need information about a particular service or product in your area? Look no further aproko pay your #1 info exchange market got you covered.</p>
                <div className="flex  mt-50 wp-60 flex-row gap-10">
                <input 
                className='text-xs font-100'
                placeholder='Search for...'
                type="text"/>
                <Select
                placeholder="Choose your location"
                className='select-react' 
                />
                <div className="grid-center bg-white cursor-pointer curved p-10">
                    {icons.search}
                </div>
                </div>
            </section>
            </div>
    
        </div>
        {/* End of Hero Section, Begin info quick view section */}
        <section className=" mt-20 p-10  flex flex-column">

            {/* cards start here */}
                <div className="flex mt-10 pb-20 mb-10 pr-50 pl-50   border-b-primary justify-between">
                    <div className="flex align-center gap-30">
                            <img className="avatar rounded bg-primary-light-8" src="https://api.dicebear.com/5.x/adventurer/svg?seed=Casper" alt="d" />
                            <div className="flex wp-75 flex-column gap-20 align-start">
                                <span className='text-md'>
                                I know so and so who sells so and so in so and so location Iron and leather work...
                                </span>
                                <div className="flex gap-20">
                                    <button className="btn-outlined-secondary">
                                        N200
                                    </button>
                                    <button className="btn-outlined-secondary">
                                        See More
                                    </button>
                                </div>
                            </div>
                    </div>
                    <button className="btn-secondary text-white">
                        Buy Info
                    </button>
 
                </div>

                <div className="flex mt-10 pb-20 mb-10 pr-50 pl-50   border-b-primary justify-between">
                    <div className="flex align-center gap-30">
                            <img className="avatar rounded bg-primary-light-8" src="https://api.dicebear.com/5.x/adventurer/svg?seed=Casper" alt="d" />
                            <div className="flex wp-75 flex-column gap-20 align-start">
                                <span className='text-md'>
                                I know so and so who sells so and so in so and so location Iron and leather work...
                                </span>
                                <div className="flex gap-20">
                                    <button className="btn-outlined-secondary">
                                        N200
                                    </button>
                                    <button className="btn-outlined-secondary">
                                        See More
                                    </button>
                                </div>
                            </div>
                    </div>
                    <button className="btn-secondary text-white">
                        Buy Info
                    </button>
 
                </div>

                <div className="flex mt-10 pb-20 mb-10 pr-50 pl-50   border-b-primary justify-between">
                    <div className="flex align-center gap-30">
                            <img className="avatar rounded bg-primary-light-8" src="https://api.dicebear.com/5.x/adventurer/svg?seed=Casper" alt="d" />
                            <div className="flex wp-75 flex-column gap-20 align-start">
                                <span className='text-md'>
                                I know so and so who sells so and so in so and so location Iron and leather work...
                                </span>
                                <div className="flex gap-20">
                                    <button className="btn-outlined-secondary">
                                        N200
                                    </button>
                                    <button className="btn-outlined-secondary">
                                        See More
                                    </button>
                                </div>
                            </div>
                    </div>
                    <button className="btn-secondary text-white">
                        Buy Info
                    </button>
 
                </div>
             {/* cards end here here */}

             <div className="align-center mt-30 justify-center  flex">
                <button className="btn-primary text-white">
                    See More
                </button>
             </div>

             
        </section>

        {/* how aproko pay works section */}
        <section className="flex flex-column bg-accent-primary mt-30 curved-top pt-30 pb-20 mb-20">
            <div className="flex flex-column justify-center wv-100 ">
                <h6 className='text-center '>How Aprokopay works</h6>

                {/* grid starts here*/}
            <div className="grid-row wp-100 justify-center p-30 gap-20">
        <div className="col-12-xs curved bg-white  col-5-sm col-2-xl">
            <div className="card pt-20 justify-center align-center wp-100 flex flex-column gap-20">
                <span className="rounded bg-primary text-white font-500 text-sm w-30 h-30 flex center">
                    1
                </span> 

                <div className="wp-50 flex justify-center text-center">
                Sign up on Aprokopay and input your preferred bank details for receiving payments
                </div>

                <ul className='w-150 border-secondary mt-30 mb-30'></ul>
      
            </div>
        </div>

        <div className="col-12-xs curved bg-white  col-5-sm col-2-xl">
            <div className="card pt-20 justify-center align-center wp-100 flex flex-column gap-20">
                <span className="rounded bg-primary text-white font-500 text-sm w-30 h-30 flex center">
                    2
                </span> 

                <div className="wp-50 flex justify-center text-center">
                Sign up on Aprokopay and input your preferred bank details for receiving payments
                </div>

                <ul className='w-150 border-secondary mt-30 mb-30'></ul>
      
            </div>
        </div>

        <div className="col-12-xs curved bg-white  col-5-sm col-2-xl">
            <div className="card pt-20 justify-center align-center wp-100 flex flex-column gap-20">
                <span className="rounded bg-primary text-white font-500 text-sm w-30 h-30 flex center">
                    3
                </span> 

                <div className="wp-50 flex justify-center text-center">
                Sign up on Aprokopay and input your preferred bank details for receiving payments
                </div>

                <ul className='w-150 border-secondary mt-30 mb-30'></ul>
      
            </div>
        </div>

        <div className="col-12-xs curved bg-white col-5-sm col-2-xl">
            <div className="card pt-20 justify-center align-center wp-100 flex flex-column gap-20">
                <span className="rounded bg-primary text-white font-500 text-sm w-30 h-30 flex center">
                    4
                </span> 

                <div className="wp-50 flex justify-center text-center">
                Sign up on Aprokopay and input your preferred bank details for receiving payments
                </div>

                <ul className='w-150 border-secondary mt-30 mb-30'></ul>
      
            </div>
        </div>

        
        


             </div>
             {/* end of grid */}
                <div className="flex mt-50 wp-100 justify-center">
                <button className="btn-primary-sm text-white">
                Sign Up
             </button>
                </div>
             

            </div>

            
        </section>

        {/* <======= Middle Section Begins ======> */}
        <section className="container-140 flex flex-column gap-50 mb-30 mt-30">
            <h4 className='text-primary'>FAQS</h4>
                <div className="flex mb-50 mt-30 gap-40">
                    <div className="flex flex-column wp-50">
                    <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
                            <p className="text-md">Question 1</p>
                            <p className="text-dmd text-primary font-200">
                                +
                            </p>
                        </span>

                        <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
                            <p className="text-md">Question 1</p>
                            <p className="text-dmd text-primary font-200">
                                +
                            </p>
                        </span>

                        <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
                            <p className="text-md">Question 1</p>
                            <p className="text-dmd text-primary font-200">
                                +
                            </p>
                        </span>
                        
                    </div>
                    
                    <div className="flex flex-column wp-50">
                    <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
                            <p className="text-md">Question 1</p>
                            <p className="text-dmd text-primary font-200">
                                +
                            </p>
                        </span>

                        <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
                            <p className="text-md">Question 1</p>
                            <p className="text-dmd text-primary font-200">
                                +
                            </p>
                        </span>

                        <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
                            <p className="text-md">Question 1</p>
                            <p className="text-dmd text-primary font-200">
                                +
                            </p>
                        </span>
                        
                    </div>               
                     </div>
                     <div className="flex container mt-72 p-30 pr-60  flex-column mb-30 bg-orange-light-8 curved invite_banner">
                            <h6 className='wp-50 mt-30'>
                            Join Aprokopay and start earning from the comfort of your home.
                            </h6>

                            <p className="mb-50 mt-30">
                            Aprokopay allows you earn money whilst sharing the informations you know.
                            </p>
                            
                            <button className="btn-primary mb-30 text-white">
                                Start Selling
                            </button>
                     </div>
        </section>

         {/* <======= Middle Section Ends ======> */}
        
        {/* Footer section begins */}
        <Footer />
    </div>
  )
}

export default Homepage
import React from 'react'
const heroBg = require('../assets/img/hero-bg.png')
import logo from '../assets/img/logo.svg'
import { ButtonPrimary } from '../components/buttons/ButtonReuse';
import Select from 'react-select';
import { icons } from '../assets/icons/icons';
import Footer from '../components/global/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLocations } from '../redux/home';
import { formatNumWithoutCommaNaira, reactSelectStyleTable } from '../utils/Helpers';
import { getInfos } from '../redux/info';
import { RavenButton, RavenModal, toast } from 'raven-bank-ui';
import { useState } from 'react';
import formatNaira from '../utils/currency';
import usePay from '../hooks/usePay';
import { makePurchase } from '../redux/transaction';
import { FaBars, FaHamburger } from 'react-icons/fa';
import { getUser } from '../redux/user';
require('./style.css')
function Homepage() {

    const navigate= useNavigate()

    const dispatch = useDispatch()

    const [view, onView] = useState({
        active: false,
        content: ''
    })

    const {content} = view


    const [pay, reference] = usePay();
    const [payData, setPayData] = useState({})

    let makePay = async (e, data) => {
        await setPayData(data)
        onView({
            active: false,
            content: '',
    
          })
        if (!user.email) toast.error("Please login to purchase information")
        pay({ amount: e, email: user.email });
      }      

      let trigger = false
      if (reference){
        console.log('ref', payData)
        const payload = {
            title: payData.title,
            amount: payData.price,
            info_id: payData.id,
            information: JSON.stringify(payData),
            seller : payData.user,
            ref: reference.trxref,
            payment_ref: reference.transaction
        }

        if (reference.status === "success" && trigger === false){
            dispatch(makePurchase(payload))
            trigger = true
        }
        // toast.success("Your purchase was successful")
      }
 
    useEffect(() => {
        dispatch(getLocations())
        dispatch(getInfos({limit: '5'}))
        // dispatch(getUser())
    }, [])
    
    const { location } = useSelector((state) => state?.home);
    const { infos } = useSelector((state) => state?.info);
    const { user } = useSelector((state) => state?.user);

    const posts = infos?.results
      // format select option for react select
  const formatSelectOption = (param) => {
    param = param ? param : [{}]
    const list = param?.map((chi) => {
      const { locals, name } = chi.states;
      return { label: name, value: name , locals: locals};
    });
    return list;
  };

  const author = (e) => {
    dispatch(getUser(e))
  }

  return (
    <div style={{overflow: 'auto'}}>
        <div style={{backgroundImage: `url(${heroBg})`}} className="hero-section-80 hero-main-container">
            <div className="hero-layer"></div>
            <div className="hero-body">
            <header className="mobile_header">
                <figure>
                    <img src={logo}  alt="" />
                </figure>

                <div className="menu_icon">
                <FaBars />
                </div>

            </header>
            <header className="hero-navbar flex justify-between pt-10 pb-10 container-140">
            <div className="nav-right gap-10 text-sm just ify-center align-center flex">
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

            <div className="flex nav-right gap-10">
                <button onClick={() => navigate('/dashboard')} className='col-30 btn-outlined-primary-sm text-white'>
                    Ask Aprokopay
                </button>
                <button onClick={() => navigate('/sell')} className='col-30 btn-outlined-primary-sm text-white'>
                    Sell info
                </button>
                <button onClick={() => navigate(user ? "/dashboard" : "/login")} className='col-30 btn-primary-sm text-white'>
                   {user ? "Dashboard" : "Login"}
                </button>
                {/* <ButtonPrimary
                btnStyle="btn-primary-lg"
                >Login</ButtonPrimary> */}
            </div>

            </header>
            
            <section className="container hero-text-container align-center mt-40 text-center flex flex-column ">
                <h5 className="wp-60 text-white md:lg sm:xm" >Buy & Sell your “INFORMATION” with Aproko Pay, Anytime, Anywhere </h5>
                <p className="wp-60 text-white font-200 mt-20 text-sm">Know something about a product or service in your area? Need information about a particular service or product in your area? Look no further aproko pay your #1 info exchange market got you covered.</p>
                <div className="flex search-container  mt-50 wp-60 flex-row gap-10">
                <input 
                className='text-xs font-100'
                placeholder='Search for...'
                type="text"/>
                <Select
                placeholder="Choose your location"
                styles={reactSelectStyleTable}
                className='select-react' 
                    options={formatSelectOption(location)}
                />
                <div className="grid-center bg-white cursor-pointer curved p-10">
                    {icons.search}
                </div>
                </div>
            </section>
            </div>
    
        </div>
        {/* End of Hero Section, Begin info quick view section */}
        {posts?.map((chi, idx) => {

            const { selling, price, title, } = chi

            console.log(chi)
            return (
                <section key ={idx}  className=" mt-20 p-10  flex flex-column">

                {/* desktop cards start here */}
                    <div className="timeline-items flex mt-10 pb-20 mb-10 pr-50 pl-50   border-b-primary justify-between">
                        <div className="flex align-center gap-30">
                                <img className="avatar rounded bg-primary-light-8" src="https://api.dicebear.com/5.x/adventurer/svg?seed=Casper" alt="d" />
                                <div className="flex wp-75 flex-column gap-20 align-start">
                                    <span className='text-md'>
                                    {title}
                                    </span>
                                    <div className="flex gap-20">
                                        <button className="btn-outlined-secondary">
                                            {formatNumWithoutCommaNaira(String(price))}
                                        </button>
                                        <button onClick={() => onView({
                                            active: true,
                                            content: chi
                                        })} className="btn-outlined-secondary">
                                            See More
                                        </button>
                                    </div>
                                </div>
                        </div>
                        <button className={`${selling ? "btn-primary" :"btn-secondary"} text-white`}>
                             {selling ? "Buy Info" : 'Answer'}
                        </button>
          
                    </div>

                    <div className="timeline-mobile">
                        <div className="profile">
                            <div className="avatar">
                                <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${chi?.user?.name}`} alt="" />
                            </div>

                            <div className="name">
                                <p>{chi?.user?.name} </p>
                                <span>Selling &#x2022; {chi?.location?.state}</span>
                            </div>

                            <div className="info_price">
                            <span>
                            <h6>{formatNaira(chi.price)}</h6>
                            </span>
                            </div>
                        </div>

                        <div className="modal_content_wrapper">

            <div className="info_content">
            <span>
                <h6>Title:</h6>
                <p>{chi?.title}</p>
            </span>
            <span>
                <h6>Summary:</h6>
                <p>{chi?.description}</p>
            </span>
            </div>

            <div className="author_section">
            <span>
                <h6>Verified {icons.verified}: </h6>
                <p>No</p>
            </span>

            <div className="mobile_act_btn">
                <RavenButton size="small" color="orange-dark" onClick={() => makePay(chi?.price, chi)}>
                    Buy
                </RavenButton>
            </div>
            </div>
            

        
            </div>
                    </div>
          
                 
            </section>
            )
        })}
         <div className="align-center mt-30 justify-center  flex">
                <button onClick={() => navigate('/informations')} className="btn-primary text-white">
                    See More
                </button>
             </div>
  

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
         <RavenModal
      visble={view.active}
      btnColor="orange-dark"
      btnLabel={'Pay'}
      onBtnClick={() => makePay(content?.price, content)}
      >

        {console.log(content)}
    <div className="modal_content_wrapper">
          <div className="modal_title">
            <p>{`Information Details:`}</p>
            <span>
            <h6>{formatNaira(content.price)}</h6>
            <p>{`${content?.location?.city}, ${content?.location?.state}`}</p>
            </span>
            </div>

            <div className="info_content">
            <span>
                <h6>Title:</h6>
                <p>{content?.title}</p>
            </span>
            <span>
                <h6>Summary:</h6>
                <p>{content?.description}</p>
            </span>
            </div>

            <div className="author_section">
            <span>
                <h6>Posted by: </h6>
                <p>{content?.user?.name}</p>
            </span>

            <span>
                <h6>Verified {icons.verified}: </h6>
                <p>No</p>
            </span>
            </div>
            

        
            </div>
      </RavenModal>
        {/* Footer section begins */}
        <Footer />
    </div>
  )
}

export default Homepage
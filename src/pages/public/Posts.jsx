import React, { useEffect, useState } from 'react'
const heroBg = require('../../assets/img/hero-bg.png')
import logo from '../../assets/img/logo.svg'
import Select from 'react-select';
import { icons } from '../../assets/icons/icons';
import Footer from '../../components/global/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { RavenPagination } from 'raven-bank-ui';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from '../../redux/home';
import { formatNumWithoutCommaNaira } from '../../utils/Helpers';
import { getInfos } from '../../redux/info';
require('./style.css')
function PublicPosts() {

    const navigate= useNavigate()
    const dispatch = useDispatch()

    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getInfos({page: page}))
    }, [page])
    
    const { infos } = useSelector((state) => state.info);

    const posts = infos.results

  return (
    <div style={{overflow: 'auto'}}>
   <header className="bg-black pl-30 pr-30 flex justify-between pt-10 pb-10 wp-100">
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

            <div className="flex gap-10">
                <button onClick={() => navigate('/dashboard')} className='col-30 btn-outlined-primary-sm text-white'>
                    Ask Aprokopay
                </button>
                <button onClick={() => navigate('/sell')} className='col-30 btn-outlined-primary-sm text-white'>
                    Sell info
                </button>
                <button onClick={() => navigate('/login')} className='col-30 btn-primary-sm text-white'>
                    Login
                </button>
                {/* <ButtonPrimary
                btnStyle="btn-primary-lg"
                >Login</ButtonPrimary> */}
            </div>

            </header>
        {/* End of Hero Section, Begin info quick view section */}
        <section className=" mt-20 p-10  flex flex-column">

            {/* cards start here */}

            <React.Fragment>
                {posts?.map((chi, idx) => {
                const {description, price, title, } = chi
                return (
                <section key ={idx}  className=" mt-20 p-10  flex flex-column">

                    {/* cards start here */}
                        <div className="flex mt-10 pb-20 mb-10 pr-50 pl-50   border-b-primary justify-between">
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

                    
                </section>
                )
                })}
            </React.Fragment>
              
             {/* cards end here here */}

             <div className="align-center mb-30 mt-30 justify-center  flex">
             <RavenPagination 
          currentPage={page}
          onNumView={d =>setPage(d)}
          totalPage={infos.totalPages}
          color={`black-light`}
          blackHover
        />
             </div>

             
        </section>
        {/* Footer section begins */}
        <Footer />
    </div>
  )
}

export default PublicPosts
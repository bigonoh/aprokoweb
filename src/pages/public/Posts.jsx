import React, { useEffect, useState } from 'react'
const heroBg = require('../../assets/img/hero-bg.png')
import logo from '../../assets/img/logo.svg'
import Select from 'react-select';
import { icons } from '../../assets/icons/icons';
import Footer from '../../components/global/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { RavenPagination, toast } from 'raven-bank-ui';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from '../../redux/home';
import { formatNumWithoutCommaNaira } from '../../utils/Helpers';
import { getInfos } from '../../redux/info';
import { usePaystackPayment } from 'react-paystack';
import env from '../../env';
import usePay from '../../hooks/usePay';
import { makePurchase } from '../../redux/transaction';
import Feed from '../../components/mobile/timeline/Feed';
import Header from '../../components/global/header/Header';
require('./style.css')

function PublicPosts() {

    const navigate= useNavigate()
    const dispatch = useDispatch()

    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getInfos({page: page}))
    }, [page])
    
    const { infos } = useSelector((state) => state.info);
    const { user } = useSelector((state) => state.user);

    const posts = infos.results


    const [pay, reference] = usePay();
    const [payData, setPayData] = useState({})

    let makePay = async (e, data) => {
        setPayData(data)
        if (!user.email)  {
            toast.error("Please login to purchase information")
        } else {
            pay({ amount: e, email: user.email });
      
        }
      }

      console.log(payData)
      

      let trigger = false
      if (reference){
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

  return (
    <div style={{overflow: 'auto'}}>
        <Header bg/>
        {/* End of Hero Section, Begin info quick view section */}
        <section className=" mt-20 p-10  flex flex-column">

            {/* cards start here */}

            <React.Fragment>
                {posts?.map((chi, idx) => {
                const {description, price, title, } = chi
                return (
                <section key ={idx}  className="  mt-20 p-10  flex flex-column">


                    {/*desktop cards start here */}
                        <div className="desktop-feed flex mt-10 pb-20 mb-10 pr-50 pl-50   border-b-primary justify-between">
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
                            <button onClick={() =>  makePay(price, chi)} 
                                className="btn-secondary text-white">
                                Buy Info
                            </button>

                        </div>
                    {/* desktop card ends here */}

                    <Feed item={chi} />

                    
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
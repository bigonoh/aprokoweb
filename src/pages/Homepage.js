import React from 'react'
const heroBg = require('../assets/img/hero-bg.png')
import Select from 'react-select'
import { icons } from '../assets/icons/icons'
import Footer from '../components/global/footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getLocations } from '../redux/home'
import { reactSelectStyleTable } from '../utils/Helpers'
import { getInfos } from '../redux/info'
import { RavenModal, toast } from 'raven-bank-ui'
import { useState } from 'react'
import formatNaira from '../utils/currency'
import usePay from '../hooks/usePay'
import { makePurchase } from '../redux/transaction'
import { getUser } from '../redux/user'
import Feed from '../components/mobile/timeline/Feed'
import Header from '../components/global/header/Header'
require('./style.css')
function Homepage() {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [view, onView] = useState({
    active: false,
    content: '',
  })

  const { content } = view

  const [pay, reference] = usePay()
  const [payData, setPayData] = useState({})

  let makePay = async (e, data) => {
    await setPayData(data)
    onView({
      active: false,
      content: '',
    })
    if (!user.email) toast.error('Please login to purchase information')
    pay({ amount: e, email: user.email })
  }

  let trigger = false
  if (reference) {
    const payload = {
      title: payData.title,
      amount: payData.price,
      info_id: payData.id,
      information: JSON.stringify(payData),
      seller: payData.user,
      ref: reference.trxref,
      payment_ref: reference.transaction,
    }

    if (reference.status === 'success' && trigger === false) {
      dispatch(makePurchase(payload))
      trigger = true
    }
    // toast.success("Your purchase was successful")
  }

  useEffect(() => {
    dispatch(getLocations())
    dispatch(getInfos({ limit: '5' }))
    // dispatch(getUser())
  }, [])

  const { location } = useSelector((state) => state?.home)
  const { infos } = useSelector((state) => state?.info)
  const { user } = useSelector((state) => state?.user)

  const posts = infos?.results
  // format select option for react select
  const formatSelectOption = (param) => {
    param = param ? param : [{}]
    const list = param?.map((chi) => {
      const { locals, name } = chi.states
      return { label: name, value: name, locals: locals }
    })
    return list
  }

  const author = (e) => {
    dispatch(getUser(e))
  }

  return (
    <div style={{ overflow: 'auto' }}>
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="hero-section-80 hero-main-container"
      >
        <div className="hero-layer"></div>
        <div className="hero-body">
          <Header />

          <section className="container hero-text-container align-center mt-40 text-center flex flex-column ">
            <h5 className="wp-60 text-white md:lg sm:xm">
              Buy & Sell your “INFORMATION” with Aproko Pay, Anytime, Anywhere{' '}
            </h5>
            <p className="wp-60 text-white font-200 mt-20 text-sm">
              Know something about a product or service in your area? Need
              information about a particular service or product in your area?
              Look no further aproko pay your #1 info exchange market got you
              covered.
            </p>
            <div className="flex search-container  mt-50 wp-60 flex-row gap-10">
              <input
                className="text-xs font-100"
                placeholder="Search for..."
                type="text"
              />
              <Select
                placeholder="Choose your location"
                styles={reactSelectStyleTable}
                className="select-react"
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

      <div className="latest_feed_container mt-20 p-10  flex flex-column">
        <div className="latest_header">
          <p>Latest Feeds</p>
        </div>
        {posts?.map((chi, idx) => {
          return (
            <section className="flex flex-column  mt-20 p-10 " key={idx}>
              <Feed item={chi} />
            </section>
          )
        })}
      </div>

      <div className="align-center mt-30 justify-center  flex">
        <button
          onClick={() => navigate('/informations')}
          className="btn-primary text-white"
        >
          See More
        </button>
      </div>

      {/* how aproko pay works section */}
      <section className="flex flex-column bg-accent-primary mt-30 curved-top pt-30 pb-20 mb-20">
        <div className="flex flex-column justify-center wv-100 ">
          <h6 className="text-center ">How Aprokopay works</h6>

          {/* grid starts here*/}
          <div className="grid-row wp-100 justify-center p-30 gap-20">
            <div className="col-12-xs curved bg-white  col-5-sm col-2-xl">
              <div className="card pt-20 justify-center align-center wp-100 flex flex-column gap-20">
                <span className="rounded bg-primary text-white font-500 text-sm w-30 h-30 flex center">
                  1
                </span>

                <div className="wp-50 flex justify-center text-center">
                  Sign up on Aprokopay and input your preferred bank details for
                  receiving payments
                </div>

                <ul className="w-150 border-secondary mt-30 mb-30"></ul>
              </div>
            </div>

            <div className="col-12-xs curved bg-white col-5-sm col-2-xl">
              <div className="card pt-20 justify-center align-center wp-100 flex flex-column gap-20">
                <span className="rounded bg-primary text-white font-500 text-sm w-30 h-30 flex center">
                  2
                </span>

                <div className="wp-50 flex justify-center text-center">
                  Share useful Information with Aprokopay community and get paid
                  for it.
                </div>

                <ul className="w-150 border-secondary mt-30 mb-30"></ul>
              </div>
            </div>

            <div className="col-12-xs curved bg-white  col-5-sm col-2-xl">
              <div className="card pt-20 justify-center align-center wp-100 flex flex-column gap-20">
                <span className="rounded bg-primary text-white font-500 text-sm w-30 h-30 flex center">
                  3
                </span>

                <div className="wp-50 flex justify-center text-center">
                  Place Withdrawal request and get your balance in your local
                  bank account.
                </div>

                <ul className="w-150 border-secondary mt-30 mb-30"></ul>
              </div>
            </div>

            <div className="col-12-xs curved bg-white col-5-sm col-2-xl">
              <div className="card pt-20 justify-center align-center wp-100 flex flex-column gap-20">
                <span className="rounded bg-primary text-white font-500 text-sm w-30 h-30 flex center">
                  4
                </span>

                <div className="wp-50 flex justify-center text-center">
                  Rinse and Repeat Step 2 & 3 &nbsp; 😎
                </div>

                <ul className="w-150 border-secondary mt-30 mb-30"></ul>
              </div>
            </div>
          </div>
          {/* end of grid */}
          <div className="flex mt-50 wp-100 justify-center">
            <button className="btn-primary-sm text-white">Sign Up</button>
          </div>
        </div>
      </section>

      {/* <======= Middle Section Begins ======> */}
      <section className="container-140 flex flex-column gap-50 mb-30 mt-30">
        <h4 className="text-primary">FAQS</h4>
        <div className="flex mb-50 mt-30 gap-40">
          <div className="flex flex-column wp-50">
            <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
              <p className="text-md">Question 1</p>
              <p className="text-dmd text-primary font-200">+</p>
            </span>

            <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
              <p className="text-md">Question 2</p>
              <p className="text-dmd text-primary font-200">+</p>
            </span>

            <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
              <p className="text-md">Question 3</p>
              <p className="text-dmd text-primary font-200">+</p>
            </span>
          </div>

          <div className="flex flex-column wp-50">
            <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
              <p className="text-md">Question 4</p>
              <p className="text-dmd text-primary font-200">+</p>
            </span>

            <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
              <p className="text-md">Question 5</p>
              <p className="text-dmd text-primary font-200">+</p>
            </span>

            <span className="flex wp-100 pb-10 pt-20 border-b-primary-1 justify-between align-center">
              <p className="text-md">Question 6</p>
              <p className="text-dmd text-primary font-200">+</p>
            </span>
          </div>
        </div>
        <div className="flex container mt-72 p-30 pr-60  flex-column mb-30 bg-orange-light-8 curved invite_banner">
          <h6 className="wp-50 mt-30">
            Join Aprokopay and start earning from the comfort of your home.
          </h6>

          <p className="mb-50 mt-30">
            Aprokopay allows you earn money whilst sharing the informations you
            know.
          </p>

          <button
            onClick={() => navigate('/register?r=seller')}
            className="btn-primary mb-30 text-white"
          >
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

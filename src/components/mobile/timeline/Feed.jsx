import React, { useState } from 'react'
import formatNaira from '../../../utils/currency'
import { RavenButton, RavenInputField, RavenModal, toast } from 'raven-bank-ui'
import { icons } from '../../../assets/icons/icons'
import usePay from '../../../hooks/usePay'
import { useDispatch, useSelector } from 'react-redux'
import { makePurchase } from '../../../redux/transaction'
import './style.css'
import { formatNumWithoutCommaNaira } from '../../../utils/Helpers'
import { sendProposal } from '../../../redux/info'

function Feed({ item, dash }) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state?.user)

  const [view, onView] = useState({
    active: false,
    content: '',
  })

  const { content } = view

  const [pay, reference] = usePay()
  const [payData, setPayData] = useState({})
  const [proposal, setProposal] = useState({
    info_id: '',
    message: '',
  })



  let makePay = async (e, data) => {
    await setPayData(data)
    onView({
      active: false,
      content: '',
    })
    if (!user.email) toast.error('Please login to purchase information')
    pay({ amount: e, email: user.email })
  }

  let makeProposal = async (chi) => {
   const data = {
      ...proposal,
      buyer: chi.user.id,
      info_title: chi.title
    }
    const response = await dispatch(sendProposal(data))

    if (response.payload.status === 'success') {
      onView({
        active: false,
        content: '',
      })
      setProposal({
        info_id: '',
        message: '',
      })
    }
   
    if (!user.email) toast.error('Please login to send proposal')
  }

  let trigger = false
  if (reference) {

    const payload = {
      title: payData.title,
      amount: payData.price,
      info_id: payData.id,
      information: JSON.stringify(payData),
      seller: payData.user.id,
      ref: reference.trxref,
      payment_ref: reference.transaction,
    }

    if (reference.status === 'success' && trigger === false) {
      dispatch(makePurchase(payload))
      trigger = true
    }
    // toast.success("Your purchase was successful")
  }

  // console.log(item)

  return (
    <>
      {/* desktop cards start here */}
      <div className={`desktop-timeline ${dash && 'dashboard-view'}`} >
        <div className="profile">
          <div className="avatar">
            <img
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${item?.user?.name}`}
              alt=""
            />
          </div>

          <div className="name">
            <p>{item?.user?.name} </p>
            <span>{item.selling ? 'Selling' : 'Asking'} &#x2022; {item?.location?.state}</span>
          </div>

          <div className="info_price">
            <span>
              <h6 style={{color:  !item.selling && '#0b8376'}}>{formatNaira(item.price)}</h6>
            </span>
          </div>
        </div>

        <div className="modal_content_wrapper">
          <div className="info_content">
            <span>
              {/* <h6>Title:</h6> */}
              <p>{item?.title}</p>
            </span>
            <span>
              <h6>Location:</h6>
              <p>
                {item?.location?.address
                  ? item?.location?.address + ' - '
                  : '' +
                    item?.location?.state +
                    ', ' +
                    item?.location?.city}{' '}
              </p>
            </span>
          </div>

          <div className="author_section">
            <span>
              <h6>Verified {icons.verified}: </h6>
              <p>No</p>
            </span>

            <div className="mobile_act_btn">
              <RavenButton
                size="small"
                color={item.selling ? 'orange-dark' : 'green-dark'}
                onClick={() => {
                  item.selling ? makePay(item?.price, item) : onView({
                    active: true,
                    content: item
                  })
                  setProposal({
                    ...proposal,
                    info_id: item.id,
                  })
                }
                }
              >
                {item.selling ? 'Buy' : 'Answer'}
              </RavenButton>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Timeline Ends Here */}

      {/* Mobile Timeline Starts Here */}
      <div className="timeline-mobile">
        <div className="profile">
          <div className="avatar">
            <img
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${item?.user?.name}`}
              alt=""
            />
          </div>

          <div className="name">
            <p>{item?.user?.name} </p>
            <span >{item.selling ? 'Selling' : 'Asking'} &#x2022; {item?.location?.state}</span>
          </div>

          <div  className="info_price">
            <span>
              <h6 style={{color:  !item.selling && '#0b8376'}}>{formatNaira(item.price)}</h6>
            </span>
          </div>
        </div>

        <div className="modal_content_wrapper">
          <div className="info_content">
            <span>
              {/* <h6>Title:</h6> */}
              <p>{item?.title}</p>
            </span>
            <span>
              <h6>Location:</h6>
              <p>
                {item?.location?.address
                  ? item?.location?.address + ' - '
                  : '' +
                    item?.location?.state +
                    ', ' +
                    item?.location?.city}{' '}
              </p>
            </span>
          </div>

          <div className="author_section">
            <span>
              <h6>Verified {icons.verified}: </h6>
              <p>No</p>
            </span>

            <div className="mobile_act_btn">
              <RavenButton
                size="small"
                color={item.selling ? 'orange-dark' : 'green-dark'}
                onClick={() => {
                  item.selling ? makePay(item?.price, item) : onView({
                    active: true,
                    content: item
                  })
                }}
              >
                {item.selling ? 'Buy' : 'Answer'}
              </RavenButton>
            </div>
          </div>
        </div>
      </div>

      {/* Answer Proposal Modal */}
      <RavenModal
        visble={view.active}
        btnColor="orange-dark"
        btnLabel={'Submit Proposal'}
        onClose={() => onView({
          active: false,
          content: ''
        })}
        onBtnClick={() => {
          makeProposal(content)
          
        }}
      >

        <div className="modal_content_wrapper">
          <div className="modal_title">
            <p>{`Send a Proposal`}</p>
            <span>
              <h6>{formatNaira(content.price)}</h6>
              <p>{`${content?.location?.city}, ${content?.location?.state}`}</p>
            </span>
          </div>

          <div className="ask_input_container">
             
              <RavenInputField 
              label={"Information ID"}
              color={"orange-dark"}
              labelSpanText='What this ?'
              labelColor={'orange-dark'}
              value={content.id}
              // onChange={e => {setProposal({
              //   ...proposal,
              //   info_id: e.target.value
              // })}}
              placeholder='i.e 644b95bbd9b4e71cf40a01dc'
              type={"text"} />
            <span>
              <RavenInputField 
              color={'orange-dark'} 
              label={"Proposal Message"}
              value={proposal.message}
              placeholder='This plumber am going to introduce you to is very good at what....'
              labelSpanText='What this ?'
              onChange={e => {setProposal({
                ...proposal,
                message: e.target.value
              })}}
              labelColor={'orange-dark'}
              type={"textarea"} />
            </span>
          </div>

        </div>
      </RavenModal>
    </>
  )
}

export default Feed

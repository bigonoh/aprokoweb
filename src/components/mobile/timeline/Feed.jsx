import React, { useState } from 'react'
import formatNaira from '../../../utils/currency'
import { RavenButton, RavenInputField, RavenModal, toast } from 'raven-bank-ui'
import { icons } from '../../../assets/icons/icons'
import usePay from '../../../hooks/usePay'
import { useDispatch, useSelector } from 'react-redux'
import { makePurchase } from '../../../redux/transaction'
import './style.css'
import { formatNumWithoutCommaNaira } from '../../../utils/Helpers'
import { getProposal, getUserInfos, sendProposal } from '../../../redux/info'

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
      asker: chi.user.id,
      ask_info_id: chi.id,
      answered_info_id: proposal.info_id,
      message: proposal.message
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

  function handleFreeItem(payData) {
    const payload = {
      title: payData.title,
      amount: payData.price,
      info_id: payData.id,
      information: JSON.stringify(payData),
      seller: payData.user.id,
      ref: '-',
      payment_ref: '-',
      isAd: true,
    }

    dispatch(makePurchase(payload))
    trigger = true
  }



const loggedIn = useSelector((state) => state.user)?.user
const {userInfos, proposals} = useSelector((state) => state.info)

function getAUserInfo() {
  const payload = {
   user: loggedIn?.id,
  }

  loggedIn && dispatch(getUserInfos(payload))
  loggedIn && dispatch(getProposal({
    answerer: loggedIn?.id,
    limit: 5000,
  }))
}

React.useEffect(() => {
  getAUserInfo()
}, [])


const formatSelectOption = (param) => {
  param = param ? param : [{}]
  const list = param?.map((chi) => {
    const { id, title } = chi
    return { label: title, value: id }
  })
  return list
}

function proposalExists(e){

  if (proposals?.results){
    for (let item of proposals.results){
      if(item.ask_info_id === e){
        return true;
      } else return false
     }
  } else return false

}
  return (
    <>
      {/* desktop cards start here */}
      <div className={`desktop-timeline ${dash && 'dashboard-view'}`}>
        <div className="profile">
          <div className="avatar">
            <img
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${item?.user?.name}`}
              alt=""
            />
          </div>

          <div className="name">
            <p>{item?.user?.name} </p>
            <span>
              {item.selling ? 'Selling' : 'Asking'} &#x2022;{' '}
              {item?.location?.state}
            </span>
          </div>

          {item.price === 0 ? (
            <div className="advert">
              <p>Advert</p>
            </div>
          ) : (
            <div className="info_price">
              <span>
                <h6 style={{ color: !item.selling && '#0b8376' }}>
                  {formatNaira(item.price)}
                </h6>
              </span>
            </div>
          )}
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
              <p>{item?.verified ? 'Yes' : 'No'}</p>
            </span>

            <div className="mobile_act_btn">
              <RavenButton
                size="small"
                color={item.selling ? 'orange-dark' : 'green-dark'}
                onClick={() => {
                  proposalExists(item.id) ? '' :
                  item.price === 0
                    ? handleFreeItem(item)
                    : item.selling
                    ? makePay(item?.price, item)
                    : !loggedIn ? toast.error('You must be logged in, to answer.') : onView({
                        active: true,
                        content: item,
                      })
                  setProposal({
                    ...proposal,
                    info_id: item.id,
                  })
                }}
              >
                {item.price === 0 ? 'Save Ad' : item.selling ? 'Buy' : proposalExists(item.id) ? 'Proposal Submitted': 'Answer'}
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
            <span>
              {item.selling ? 'Selling' : 'Asking'} &#x2022;{' '}
              {item?.location?.state}
            </span>
          </div>

          {item?.price === 0 ? (
            <div className="advert">
              <p>Advert</p>
            </div>
          ) : (
            <div className="info_price">
              <span>
                <h6 style={{ color: !item.selling && '#0b8376' }}>
                  {formatNaira(item.price)}
                </h6>
              </span>
            </div>
          )}
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
              <p>{item?.verified ? 'Yes' : 'No'}</p>
            </span>

            <div className="mobile_act_btn">
              <RavenButton
                size="small"
                color={item.selling ? 'orange-dark' : 'green-dark'}
                onClick={() => {
                  item.price === 0
                    ? handleFreeItem(item)
                    : item.selling
                    ? makePay(item?.price, item)
                    : (onView({
                        active: true,
                        content: item,
                      }), getAUserInfo(item.seller))
                }}
              >
                {item?.price === 0
                  ? 'Save Ad'
                  : item.selling
                  ? 'Buy'
                  : 'Answer'}
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
        onClose={() =>
          onView({
            active: false,
            content: '',
          })
        }
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

          <div style={{zIndex: 100000}} className="ask_input_container">
            <RavenInputField
              label={'Corresponding Information'}
              color={'deep-green-dark'}
              style={{zIndex: 100000}}
              labelSpanText="What this ?"
              labelColor={'orange-dark'}
              value={content?.info}
              type="select"
              onChange={e => {setProposal({
                ...proposal,
                info: e,
                info_id: e.value
              })}}
              placeholder="Select an info that matches."
              selectOption={formatSelectOption(userInfos?.results)}

            />
            <span>
              <RavenInputField
                color={'orange-dark'}
                label={'Proposal Message'}
                value={proposal.message}
                placeholder="This plumber am going to introduce you to is very good at what...."
                labelSpanText="What this ?"
                onChange={(e) => {
                  setProposal({
                    ...proposal,
                    message: e.target.value,
                  })
                }}
                labelColor={'orange-dark'}
                type={'textarea'}
              />
            </span>
          </div>
        </div>
      </RavenModal>
    </>
  )
}

export default Feed

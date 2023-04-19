import React, { useState } from 'react'
import formatNaira from '../../../utils/currency'
import { RavenButton, toast } from 'raven-bank-ui';
import { icons } from '../../../assets/icons/icons';
import usePay from '../../../hooks/usePay';
import { useDispatch, useSelector } from 'react-redux';
import { makePurchase } from '../../../redux/transaction';
import "./style.css"

function Feed({item}) {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state?.user);

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

  return (
    <div className="timeline-mobile">
    <div className="profile">
        <div className="avatar">
            <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${item?.user?.name}`} alt="" />
        </div>

        <div className="name">
            <p>{item?.user?.name} </p>
            <span>Selling &#x2022; {item?.location?.state}</span>
        </div>

        <div className="info_price">
        <span>
        <h6>{formatNaira(item.price)}</h6>
        </span>
        </div>
    </div>

    <div className="modal_content_wrapper">

<div className="info_content">
<span>
<h6>Title:</h6>
<p>{item?.title}</p>
</span>
<span>
<h6>Summary:</h6>
<p>{item?.description}</p>
</span>
</div>

<div className="author_section">
<span>
<h6>Verified {icons.verified}: </h6>
<p>No</p>
</span>

<div className="mobile_act_btn">
<RavenButton size="small" color="orange-dark" onClick={() => makePay(item?.price, item)}>
Buy
</RavenButton>
</div>
</div>



</div>
</div>
  )
}

export default Feed
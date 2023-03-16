import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { icons } from '../../assets/icons/icons';
import formatNaira from '../../utils/currency';
import { formatNumWithCommaNaira } from '../../utils/Helpers';
import { RavenButton, RavenInputField, RavenModal } from 'raven-bank-ui';
import { useNavigate } from 'react-router-dom';
import { requestWithdrawal } from '../../redux/transaction';
import { useDispatch } from 'react-redux';
require('./style.css')

const Balance = () => {

  const { wallet } = useSelector((state) => state.user);
  const [showFund, setShowFund] = useState(false)
  const [showWithdraw, setShowWithdraw] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState('')

  const dispatch = useDispatch()

  const onWithdraw = async() => {
    let amount =  withdrawAmount.split(" ")[1]
   let result = await dispatch(requestWithdrawal({
      amount: amount.replaceAll(',', '')
    }) )

    if (result.payload.status === "success") setShowWithdraw(false)
  }

  return (
    <div className='balance'>
        <div className='mainBalance'>
          
        <div className='left'>
        <p>Aporoko Pay Balance</p>
        {/* {icons.salary} */}
        <h2>{formatNumWithCommaNaira(String(wallet?.balance))}</h2>
        </div>
        <div className='right'>
        {/* <RavenButton onClick={() => setShowFund(true)} width="100%" className='btn-add-money bg-black' color ="black" label="Fund" /> */}
        <RavenButton onClick={() => setShowWithdraw(true)} label="Withdraw" color="orange" className='btn-add-money btn-primary-orange'/> 
        </div> 
        </div>

        <div className='details'>
            <div className='withdrawn'>
                <div className='left'>
                {icons.wave}
                </div>
                <div className='right'>
                <p>Withdrawn</p>
                <h2>NGN 0.00</h2>
                </div>
            </div>
            <div className='pending'>
            <div className='left icon'>
            {icons.wave}
                </div>
                <div className='right'>
                <p>Pending</p> 
                <h2>NGN 0.00</h2> 
            </div>
        </div>
        </div>

        <RavenModal
      visble={showFund}
      btnColor="black-light"
      btnLabel={'I have sent the money'}
      onClose={() => setShowFund(false)}
      >
    <div className="modal_content_wrapper">
          <div className="modal_title">
            <p>Topup your wallet</p>
            <small>Add money to your Aprokopay wallet to allow buy informations.</small>
            </div>

          <div className="payment_details">

            <p className="note">
              Pls send the amount inputed below to the provided account details, we confirm and update your wallet balance in 20mins.
            </p>

            <div className="bank">
              <p>GT Bank</p>
              <p>00379201983</p>
              <p>Aprokopay LTD</p>
            </div>


          </div>
            <div className="amount_contain">
              <RavenInputField color="black-light" label="Amount" type="number" placeholder='e.g ₦ 4000' thousandFormat numberPrefix={'₦ '}/>
            </div>
            </div>
      </RavenModal>

      <RavenModal
      visble={showWithdraw}
      btnColor="black-light"
      btnLabel={'Complete Request'}
      onBtnClick={() => onWithdraw()}
      onClose={() => setShowWithdraw(false)}
      >
    <div className="modal_content_wrapper">
          <div className="modal_title">
            <p>Request withdrawal</p>
            <small>Get your earnings directly in your bank account.</small>
            </div>

          <div className="payment_details">

            <p className="note">
              When you request a withdrawal you get the specified amount in your bank account on file in less than 24hrs
            </p>



          </div>
            <div className="amount_contain">
              <RavenInputField onChange={(e) => setWithdrawAmount(e.target.value)} value = {withdrawAmount} color="black-light" label="Amount" type="number" placeholder='e.g ₦ 4000' thousandFormat numberPrefix={'₦ '}/>
            </div>
            </div>
      </RavenModal>
    </div>
  )
}

export default Balance
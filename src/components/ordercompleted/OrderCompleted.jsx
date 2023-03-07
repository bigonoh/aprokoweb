import React from 'react'
import { icons } from '../../assets/icons/icons';
require ('./style.css')

const OrderCompleted = () => {
  return (
    <div className='orderCompleted'>
        <h2>ORDER COMPLETED</h2>
     {icons.popular}
     <p>Thank you for your order. You have 4hrs <br/> to confirm if the information you've bought is legit</p>

    </div>
  )
}

export default OrderCompleted
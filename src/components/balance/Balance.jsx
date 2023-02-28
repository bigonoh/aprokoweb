import React from 'react'
import { icons } from '../../assets/icons/icons';
require('./style.css')

const Balance = () => {
  return (
    <div className='balance'>
        <div className='mainBalance'>
        <div className='left'>
        {icons.coin}
<h2>NGN 15,000</h2>
<p>Aporoko Pay Balance</p>
                </div>
                <div className='right'>
                {icons.vector}
                </div> 
        </div>

        <div className='details'>
            <div className='withdrawn'>
                <div className='left'>
                {icons.wave}
                </div>
                <div className='right'>
                <p>withdrawn</p>
                <h2>NGN 25,000</h2>
                </div>
            </div>
            <div className='pending'>
            <div className='left icon'>
            {icons.wave}
                </div>
                <div className='right'>
                <p>pending</p> 
                <h2>NGN 6,000</h2> 
            </div>
        </div>
        </div>

    </div>
  )
}

export default Balance
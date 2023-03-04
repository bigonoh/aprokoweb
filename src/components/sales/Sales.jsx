import React from 'react'
import { icons } from '../../assets/icons/icons'
require ('./style.css')

const Sales = () => {
  return (
    <div className='sales'>

      <div className='wrapper'>
      <div className='wave'>
          {icons.longwave}
        </div>
        <div className='sale'>
            <p>Cash in Today</p>
            <span>NGN4,000.00</span>
        </div>
      </div>
        
    </div>
  )
}

export default Sales
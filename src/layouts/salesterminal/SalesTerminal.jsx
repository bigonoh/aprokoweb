import React from 'react'
require ('./style.css')
import Sales from '../../components/sales/Sales'
import Balance from  '../../components/balance/Balance'
import Table from '../../components/table/Table'
import { icons } from '../../assets/icons/icons'

const SalesTerminal = () => {
  return (
    <div className='salesTerminal'>
        <div className="text">
            <p className='heading'>Sales Terminal</p>
            <p>view sales and pending transactions</p>
        </div>
        
       <div className='top'>
        <div className="balance">
            {/* <Balance/> */}
            <div className='mainBalance'>
        <div className='left'>
        {icons.salary}
<h2>NGN 15,000</h2>
<p>Aporoko Pay Balance</p>
                </div>
                <div className='right'>
                {icons.vector}
                </div> 
        </div>
        </div>
        <div className='saleCard'>
            <Sales/>
        </div>
        <div className='saleCards'>
            <Sales/>
           </div>

       </div>
       
       <div className="bottom">
            <div className='middle'>       

            <input 
                 className='search'
                placeholder='  Search transactions'
                type="search"/>

<div className='searchIcon'>
                    {icons.search}
                </div>
                
                <input 
                 className='dates'
                placeholder='Date/Time'
                type="date"/>
                
            </div>
            <div className='table'><Table/></div>
        </div>
    </div>
  )
}

export default SalesTerminal
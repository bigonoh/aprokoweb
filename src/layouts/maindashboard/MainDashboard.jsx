import React from 'react'
import { Link } from 'react-router-dom';  
require('./style.css')
import SellInfo from  '../../components/sellinfo/SellInfo'
import Balance from '../../components/balance/Balance'
import Widget from    '../../components/widget/Widget'
import { icons } from '../../assets/icons/icons';
import Table from 'rc-table';


const MainDashboard = () => {
   const styles = {
    button: {
      backgroundColor: 'blue'}, };

      const data = [
        { name: 'Purchase of information from jack', age: 28, address: 'some where', key: '1' },
        { name: 'Rose', age: 36, address: 'some where', key: '2' },
      ];

  return (
    <div className='mainDashboard'>

        <div className='right'>
            <div className='topBalance'>
                <Balance />
                {/* <button className='text-white wp-100 btn-secondary'>Request Withdrawal</button> */}
            </div>
            <div className='bottom_wrapper'>
              <p className='text-md font-600 '>Quick Actions</p>
              <div className="flex gap-10  mt-20 justify-between">
                <div className="p-20 flex align-start actions justify center">
                  Sell info
                </div>
                <div className="p-20 flex align-start actions justify center">
                  Buy info
                </div>
                <div className="p-20 flex align-start actions justify center">
                  Withdraw
                </div>
                <div className="p-20 flex align-start actions justify center">
                  Deposit
                </div>
              </div>

              <p className='text-md font-600 mt-50 '>Recent Transaction</p>
                  <div className=" mt-20">
                 <table cellSpacing="0" cellPadding="0" className="table" >
                  <thead>
                    <tr>
                    <th>Summary</th>
                    <th>Date</th>
                    </tr>
                    
                  </thead>
                  <tbody>
                    {data?.map((chi, idx) => {
                      return (
                        <tr key={idx}>
                          <td>
                            <div className="table_content_wrap">
                            {chi.name}
                            </div>
                          </td>
                          <td>
                            <div className="table_content_wrap">
                            {chi.age}
                            </div>
                          </td>
                      
                        </tr>

                      )
                   
                    })}
                  </tbody>
                 </table>
                  </div>
            </div>
         
        </div>


        <div className='left-dashboard'>
        
            <div className='widget'>
            <h2>Latest Posts</h2>
            <div className="wrapper">
            <div className='comment'>
            <p>I know so and so who sells so and so in so and so location Iron and leather work...</p>
            <div className='button'>
                <button>N200</button>
                <button className='info'>More info</button> 
            </div>
            </div>
            <div className='comment'>
            <p>I know so and so who sells so and so in so and so location Iron and leather work...</p>
            <div className='button'>
                <button>N200</button>
                <button className='info'>More info</button> 
            </div>
            </div>
            <div className='comment'>
            <p>I know so and so who sells so and so in so and so location Iron and leather work...</p>
            <div className='button'>
                <button>N200</button>
                <button className='info'>More info</button> 
            </div>
            </div>

            </div>
            </div>
        
            <div className="p-20 home-dash-ad bg-primary-light-9 mt-30 curved">
                    <p>
                      Start Earning on Aprokopay, Share information that matters.
                    </p>
                    <span>
                      Aprokopay pays you for every bit of information you sell, click the button below to start selling
                    </span>

                    <btn className="btn-create">
                      Create post
                      {icons.chevron_right}
                    </btn>
            </div>
       </div>
    </div>
  )
}

export default MainDashboard
import React from 'react'
import { Link } from 'react-router-dom';  
require('./style.css')
import SellInfo from  '../../components/sellinfo/SellInfo'
import Balance from '../../components/balance/Balance'
import Widget from    '../../components/widget/Widget'


const MainDashboard = () => {
   const styles = {
    button: {
      backgroundColor: 'blue'}, };

  return (
    <div className='mainDashboard'>

        <div className='top'>
            <div className='topBalance'>
                <Balance />
                <button className='submit'>Request Withdrawal</button>
            </div>
            <div className='topwidget'>  
       <Widget/>
       </div>
        </div>


        <div className='bottom'>

            <div className='bottomInfo'>
            <SellInfo type="bottom"/>
            </div>

            <div  className='bottomWidget' >
            <Widget  style={styles} />
            </div>

        </div>
        

    </div>
  )
}

export default MainDashboard
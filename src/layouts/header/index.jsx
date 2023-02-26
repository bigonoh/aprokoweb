import React from 'react'
import logo from '../../assets/img/logo.svg'
import { icons } from '../../assets/icons/icons';
import { FaBell } from '../../../node_modules/react-icons/fa/index.esm';
require('./style.css')

function DashboardHeader() {
  return (
    <div className='dashboard_header_wrap gap-20 p-20 align-center flex '>
        <div className="notification_icon">
       <FaBell
       className="notification" 
       color="orange"
       />
        </div>

        <div className="avatar-xs flex rounded">
        <img className='rounded' src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg" alt="" />
        </div>
    </div>
  )
}

export default DashboardHeader
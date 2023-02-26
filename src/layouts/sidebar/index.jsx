import React from 'react'
import { icons } from '../../assets/icons/icons'
require('./style.css')

function Sidebar() {
  return (
    <div className='flex flex-column p-30 wv-20 hv-100  main_sidebar_wrapper'>
        <div className="logo mb-20">
        {icons.logo_white} 
        </div>
        <div className="flex flex-column gap-20 align-start mt-30">
            <div className="p-15 curved text-md menu-item text-white">
                Dashboard
            </div>
            <div className="p-15 curved text-md menu-item text-white">
                Buy
            </div>
            <div className="p-15 curved text-md menu-item text-white">
                Sell
            </div>
            <div className="p-15 curved text-md menu-item text-white">
                Sales
            </div> 
            <div className="p-15 curved text-md menu-item text-white">
                Transaction
            </div>
            <div className="p-15 curved text-md menu-item text-white">
                Settings
            </div>
            
            <div className="menu_footer curved align-center  mb-10  text-black flex flex-row">
                <div className="avatar-sm flex">
                    <img className='rounded' src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg" alt="" />
                </div>
                <div className="flex flex-column gap-5 profile-box ml-10">
                    <p className='text-b'>Ezeani Emmanuel</p>
                    <span className='p-5 curved'>View Profile</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sidebar
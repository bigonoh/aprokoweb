/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { icons } from '../../assets/icons/icons'
import { useSelector } from 'react-redux'
import { RavenButton, toast } from 'raven-bank-ui'
require('./style.css')

function Sidebar() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state?.user)

  const handleLogout = () => {
    localStorage.clear()
    toast.success('You have been logged out successfully')
    setTimeout(() => {
      window.location.reload()
    }, 5000)
  }

  return (
    <div className="flex flex-column p-30 wv-20 hv-100  main_sidebar_wrapper">
      <div className="logo mb-20">{icons.logo_white}</div>
      <div className="flex flex-column gap-20 align-start mt-30">
        <div
          onClick={() => navigate('/dashboard')}
          className="p-15 curved text-md menu-item text-white"
        >
          Dashboard
        </div>
        <div
          onClick={() => navigate('/buy')}
          className="p-15 curved text-md menu-item text-white"
        >
          Ask Aprokopay
        </div>
        <div
          onClick={() => navigate('/sell')}
          className="p-15 curved text-md menu-item text-white"
        >
          Sell
        </div>
        <div
          onClick={() => navigate('/sales')}
          className="p-15 curved text-md menu-item text-white"
        >
          Sales
        </div>
        <div
          onClick={() => navigate('/transaction')}
          className="p-15 curved text-md menu-item text-white"
        >
          Transaction
        </div>
        <div
          onClick={() => navigate('/settings')}
          className="p-15 curved text-md menu-item text-white"
        >
          Settings
        </div>

        {user?.role == 'admin' && (
          <div
            onClick={() => navigate('/admin-panel')}
            className="p-15 curved text-md menu-item text-white"
          >
            Admin Panel
          </div>
        )}

        <div className="desktop_side_actions">
          {user && (
            <RavenButton
              color={'error-light'}
              size="small"
              onClick={handleLogout}
            >
              Logout
            </RavenButton>
          )}
        </div>

        {/* <div className="menu_footer curved align-center  mb-10  text-black flex flex-row">
                <div className="avatar-sm flex">
                    <img className='rounded' src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg" alt="" />
                </div>
                <div className="flex flex-column gap-5 profile-box ml-10">
                    <p className='text-b'>Ezeani Emmanuel</p>
                    <span onClick={() => navigate('/profile')} className='p-5 curved'>View Profile</span>
                </div>
            </div> */}
      </div>
    </div>
  )
}

export default Sidebar

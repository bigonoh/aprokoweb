import React, { useEffect } from 'react'
import logo from '../../assets/img/logo.svg'
import { icons } from '../../assets/icons/icons'
import { FaBell } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/user';
require('./style.css')

function DashboardHeader() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)


  
  return (
    <div className="dashboard_header_wrap gap-20 p-20 align-center flex ">
      <div className="user">
        {user?.name}
      </div>

      <div className="avatar-xs flex rounded">
          <img
              className='rounded'
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${user?.name}`}
              alt=""
            />
      </div>
    </div>
  )
}

export default DashboardHeader

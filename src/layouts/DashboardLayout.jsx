import React from 'react'
import DashboardHeader from './header/index'
import Sidebar from './sidebar'
import Header from '../components/global/header/Header'
require('./style.css')

function DashboardLayout({ children }) {
  return (
    <div className="flex  dashboard_layout_wrapper flex-row">
      <div className="header desktop-layout">
        <DashboardHeader />
      </div>
      <div className="sidebar desktop-layout">
        <Sidebar />
      </div>

      <div className="mobile_dashboard_header">
        <Header bg dashboard={true} />
      </div>

      <div className="ml-50 layout_children mt-70">{children}</div>
    </div>
  )
}

export default DashboardLayout

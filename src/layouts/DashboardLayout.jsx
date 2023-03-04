import React from 'react'
import DashboardHeader from './header/index';
import Sidebar from './sidebar';
require('./style.css')

function DashboardLayout({children}) {
  return (
    <div className="flex dashboard_layout_wrapper flex-row">
        <div className="header">
            <DashboardHeader />
        </div>
        <div className="sidebar">
            <Sidebar />
        </div>

        <div className="ml-50 layout_children mt-70">
        {children}
        </div>
    </div>
  )
}

export default DashboardLayout
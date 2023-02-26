import React from 'react'
import DashboardHeader from './header/index';
import Sidebar from './sidebar';

function DashboardLayout({children}) {
  return (
    <div className="flex flex-row">
        <div className="header">
            <DashboardHeader />
        </div>
        <div className="sidebar">
            <Sidebar />
        </div>

        <div className="ml-50 mt-70">
        {children}
        </div>
    </div>
  )
}

export default DashboardLayout
import React from 'react'
import MainDashboard from '../../layouts/maindashboard/MainDashboard'
import DashboardLayout from '../../layouts/DashboardLayout'
import RequestLayout from '../../layouts/requestlayout/RequestLayout'
import SalesTerminal from '../../layouts/salesterminal/SalesTerminal'

function DashboardHome() {
  return (
    <DashboardLayout>
      {/* <RequestLayout/> */}
        {/* <MainDashboard/> */}
        <SalesTerminal/>
    </DashboardLayout>
  )
}

export default DashboardHome
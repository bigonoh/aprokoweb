import React from 'react'
import MainDashboard from '../../layouts/maindashboard/MainDashboard'
import DashboardLayout from '../../layouts/DashboardLayout'
import RequestLayout from '../../layouts/requestlayout/RequestLayout'

function DashboardHome() {
  return (
    <DashboardLayout>
      <RequestLayout/>
        {/* <MainDashboard/> */}
    </DashboardLayout>
  )
}

export default DashboardHome
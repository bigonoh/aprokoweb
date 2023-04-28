import React from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import NoContentReuseable from '../../../components/no-content/NoContentReuseable'
import ErrorModal from '../../../components/modal/ErrorModal'
import { RavenModal } from 'raven-bank-ui'

function Profile() {
  return (
    <DashboardLayout>
      <div>
        <RavenModal
          visble={true}
          btnColor="black-light"
          btnLabel={'Goto dashboard'}
        >
          <div className="coming-soon">Profile is coming soon</div>
        </RavenModal>
      </div>
    </DashboardLayout>
  )
}

export default Profile

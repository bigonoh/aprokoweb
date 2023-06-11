/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { RavenButton, RavenInputField } from 'raven-bank-ui'
import BoughtInfo from './component/purchased'

function UserInformation() {
  const dispatch = useDispatch()

  const [activeSettings, setActivesettings] = useState(1)

  return (
    <DashboardLayout>
      <div className="settings_wrapper">
        <div className="page_top">
          <span className="page_title">
            <h6> Information</h6>
            <p>Take a quick overview of your informations</p>
          </span>
        </div>

        <div className="page_body">
          <div className="settings_card_wrapper">
            <nav className="settings_bar">
              <p
                onClick={() => setActivesettings(1)}
                className={activeSettings === 1 && 'active'}
              >
                Purchased Information
              </p>
              <p
                onClick={() => setActivesettings(2)}
                className={activeSettings === 2 && 'active'}
              >
                Proposals
              </p>
            </nav>

            <main className="settings_main_wrapper">
              {activeSettings === 1 && <BoughtInfo />}

              {activeSettings === 2 && <></>}
            </main>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default UserInformation

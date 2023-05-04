/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { RavenButton, RavenInputField } from 'raven-bank-ui'

function Settings() {
  const dispatch = useDispatch()

  const [activeSettings, setActivesettings] = useState(1)

  return (
    <DashboardLayout>
      <div className="settings_wrapper">
        <div className="page_top">
          <span className="page_title">
            <h6> Settings</h6>
            <p>Take a quick overview at your transactions</p>
          </span>
        </div>

        <div className="page_body">
          <div className="settings_card_wrapper">
            <nav className="settings_bar">
              <p
                onClick={() => setActivesettings(1)}
                className={activeSettings === 1 && 'active'}
              >
                Account Settings
              </p>
              <p
                onClick={() => setActivesettings(2)}
                className={activeSettings === 2 && 'active'}
              >
                Login & Security
              </p>
              <p
                onClick={() => setActivesettings(3)}
                className={activeSettings === 3 && 'active'}
              >
                Withdrawal & Payouts
              </p>
            </nav>

            <main className="settings_main_wrapper">
              {activeSettings === 1 && (
                <section className="account_setting">
                  <RavenInputField
                    label={'Profile Image'}
                    type="upload"
                    className="profile_img"
                    color="black-light"
                    name="upload"
                  />

                  <div className="form_group">
                    <div className="left">
                      <RavenInputField
                        placeholder="e.g Adekunle Ciroma"
                        className={'input'}
                        color="black-light"
                        label={'Full Name'}
                      />
                      <RavenInputField
                        className={'input'}
                        color="black-light"
                        label={'Username'}
                      />
                    </div>
                    <div className="right">
                      <RavenInputField
                        className={'input'}
                        color="black-light"
                        label={'Email'}
                      />
                      <RavenInputField
                        className={'input'}
                        color="black-light"
                        label={'Phone Number'}
                      />
                    </div>
                  </div>

                  <RavenInputField
                    type={'textarea'}
                    className={'input'}
                    color="black-light"
                    label={'Bio'}
                  />

                  <footer className="btn_group">
                    <RavenButton
                      color="orange-light"
                      size={'small'}
                      label="Update Account"
                    />
                    <div className="reset_btn">Reset</div>
                  </footer>
                </section>
              )}

              {activeSettings === 2 && (
                <section className="account_setting security">
                  <div className="title_wrapper">
                    <p className="title">Change Password</p>
                    <p className="sub_title">
                      Quickly change your password for security purposes
                    </p>
                  </div>

                  <div className="form_group">
                    <div className="left">
                      <RavenInputField
                        type={'password'}
                        placeholder="*****"
                        className={'input'}
                        color="black-light"
                        label={'Old Password'}
                      />
                      <RavenInputField
                        type={'password'}
                        placeholder="*****"
                        className={'input'}
                        color="black-light"
                        label={'New Password'}
                      />
                      <RavenInputField
                        type={'password'}
                        className={'input'}
                        color="black-light"
                        label={'Confirm New Password'}
                      />
                    </div>
                  </div>
                  <footer className="btn_group">
                    <RavenButton
                      color="orange-light"
                      size={'small'}
                      label="Update Account"
                    />
                    <div className="reset_btn">Reset</div>
                  </footer>
                </section>
              )}

              {activeSettings === 3 && (
                <section className="account_setting security">
                  <div className="title_wrapper">
                    <p className="title">Payout Account</p>
                    <p className="sub_title">
                      Confirm or Update your payout account
                    </p>
                  </div>

                  <div className="form_group">
                    <div className="left">
                      <RavenInputField
                        type={'select'}
                        placeholder="Wema Bank"
                        className={'input'}
                        color="black-light"
                        label={'Bank'}
                      />
                      <RavenInputField
                        type={'text'}
                        placeholder="Adekunle Ciroma"
                        className={'input'}
                        color="black-light"
                        label={'Account Name'}
                      />
                      <RavenInputField
                        type={'text'}
                        className={'input'}
                        color="black-light"
                        label={'Account Number'}
                      />
                    </div>
                  </div>
                  <footer className="btn_group">
                    <RavenButton
                      color="orange-light"
                      size={'small'}
                      label="Update Account"
                    />
                    <div className="reset_btn">Reset</div>
                  </footer>
                </section>
              )}
            </main>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Settings

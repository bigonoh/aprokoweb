/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { RavenButton, RavenInputField } from 'raven-bank-ui'
import axios from 'axios'
import { getUser, updateUserProfile } from '../../../redux/user'

function Settings() {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state?.user)
  const [activeSettings, setActivesettings] = useState(1)
  const [formData, setFormData] = useState(user)
  const [banks, setBanks] = useState([])

  function handleForm(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function fetchBanks() {
    axios.get('https://nigerianbanks.xyz').then((d) => {
      setBanks(d.data)
    })
  }

  useEffect(() => {
    dispatch(getUser())
    fetchBanks()
    setFormData(user)
  }, [])

  useEffect(() => {
    dispatch(getUser())
    console.log('trigger')
    setFormData(user)
  }, [activeSettings])

  useEffect(() => {
    setFormData([])
  }, [])

  async function update() {
    await dispatch(updateUserProfile(formData))
  }

  function lookupAccount() {
    if (formData?.bank_details?.account_number?.length === 10) {
      axios
        .post(
          `https://maylancer.org/api/nuban/api.php?account_number=${formData.bank_details.account_number}&bank_code=${formData.bank_details.bank_code}&currency`
        )
        .then((d) => {
          setFormData({
            ...formData,
            bank_details: {
              ...formData?.bank_details,
              account_name: d?.data.account_name,
            },
          })
        })
    }
  }

  useEffect(() => {
    lookupAccount()
  }, [
    formData?.bank_details?.account_number,
    formData?.bank_details?.bank_code,
  ])

  const formatBankList = (param) => {
    const list = param?.map((chi) => {
      const { code, name } = chi
      return { label: name, value: code }
    })
    return list
  }

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
                  {/* <RavenInputField
                    label={'Profile Image'}
                    type="upload"
                    className="profile_img"
                    color="black-light"
                    name="upload"
                  /> */}

                  <div className="form_group">
                    <div className="left">
                      <RavenInputField
                        placeholder="e.g Adekunle Ciroma"
                        className={'input'}
                        color="black-light"
                        value={formData?.name}
                        onChange={handleForm}
                        label={'Full Name'}
                        name="name"
                      />
                      <RavenInputField
                        className={'input'}
                        value={formData?.username}
                        color="black-light"
                        onChange={handleForm}
                        label={'Username'}
                        name="username"
                      />
                    </div>
                    <div className="right">
                      <RavenInputField
                        className={'input'}
                        value={formData?.email}
                        onChange={handleForm}
                        color="black-light"
                        label={'Email'}
                        name="email"
                      />
                      <RavenInputField
                        className={'input'}
                        value={formData?.phone}
                        color="black-light"
                        label={'Phone Number'}
                        onChange={handleForm}
                        name="phone"
                      />
                    </div>
                  </div>

                  <RavenInputField
                    type={'textarea'}
                    className={'input'}
                    onChange={handleForm}
                    name="bio"
                    value={formData?.bio}
                    color="black-light"
                    label={'Bio'}
                  />

                  <footer className="btn_group">
                    <RavenButton
                      color="orange-light"
                      size={'small'}
                      onClick={update}
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
                        name="password"
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
                        name="password"
                        onChange={handleForm}
                        label={'New Password'}
                      />
                      <RavenInputField
                        type={'password'}
                        className={'input'}
                        name="password"
                        onChange={handleForm}
                        color="black-light"
                        label={'Confirm New Password'}
                      />
                    </div>
                  </div>
                  <footer className="btn_group">
                    <RavenButton
                      color="orange-light"
                      size={'small'}
                      onClick={update}
                      label="Update Account"
                    />
                    <div onClick={() => setFormData([])} className="reset_btn">
                      Reset
                    </div>
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
                        style={{ zIndex: 3000, color: 'black' }}
                        placeholder="Wema Bank"
                        className={'input'}
                        value={{
                          label: formData?.bank_details?.bank,
                          value: formData?.bank_details?.bank_code,
                        }}
                        selectOption={formatBankList(banks)}
                        name="bank"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            bank_details: {
                              bank: e.label,
                              bank_code: e.value,
                            },
                          })
                        }}
                        color="black-light"
                        label={'Bank'}
                      />

                      <RavenInputField
                        type={'text'}
                        className={'input'}
                        color="black-light"
                        name="account_name"
                        value={formData?.bank_details?.account_number}
                        placeholder="00475*******"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            bank_details: {
                              ...formData?.bank_details,
                              account_number: e.target.value,
                            },
                          })
                        }}
                        label={'Account Number'}
                      />
                      <RavenInputField
                        type={'text'}
                        placeholder="Adekunle Ciroma"
                        className={'input'}
                        readOnly
                        value={formData?.bank_details?.account_name}
                        color="black-light"
                        label={'Account Name'}
                      />
                    </div>
                  </div>
                  <footer className="btn_group">
                    <RavenButton
                      color="orange-light"
                      size={'small'}
                      onClick={update}
                      disabled={!formData?.bank_details?.account_name}
                      label="Update Account"
                    />
                    <div onClick={() => setFormData([])} className="reset_btn">
                      Reset
                    </div>
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

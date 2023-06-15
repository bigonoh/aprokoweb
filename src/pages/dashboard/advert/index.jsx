import React, { useState } from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import Select from 'react-select'
import { RavenInputField, RavenButton } from 'raven-bank-ui'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getLocations } from '../../../redux/home'
import { reactSelectStyleTable } from '../../../utils/Helpers'
import './style.css'
import { createInfo } from '../../../redux/info'

function Advert() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocations())
  }, [])

  const { loading } = useSelector((state) => state.info)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    state: '',
    status: 'public',
    city: '',
  })

  const handleSubmit = async () => {
    let payload = {
      title: formData.title,
      description: formData.description,
      price: 0,
      location: {
        state: formData.state,
        city: formData.city,
      },
      selling: true,
      status: formData.status,
    }
    let response = await dispatch(createInfo(payload))

    if (response.payload.status === 'success') {
      setFormData({
        title: '',
        description: '',
        price: 0,
        state: '',
        status: 'public',
        city: '',
      })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const { location } = useSelector((state) => state.home)
  // format select option for react select
  const formatStateSelect = (param) => {
    const list = param.map((chi) => {
      const { locals, name } = chi.states
      return { label: name, value: name, locals: locals }
    })
    return list
  }

  const formatCitySelect = (param) => {
    let state = param ? param : 'Lagos State'
    const discoverIndex = (element) => element?.states.name === state

    const stateIndex = location.findIndex(discoverIndex)

    const stateLocals = location[stateIndex]?.states?.locals

    const list = stateLocals?.map((chi) => {
      const { name } = chi
      return { label: name, value: name }
    })
    return list
  }

  return (
    <DashboardLayout>
      <div className="create_post_wrapper">
        <div className="create_card">
          <div className="header">
            <h6>Post an Advert</h6>
            <p>
              Take your business to the next level by sharing it with aproko
              community
            </p>
          </div>

          <div className="post_body">
            <div className="input-container">
              <RavenInputField
                type="text"
                label={'Title*'}
                color={'black-light'}
                onChange={handleChange}
                value={formData.title}
                name="title"
                placeholder={
                  "e.g If you need a house agent, I'm the right plug..."
                }
              />
            </div>

            <div className="input-container">
              <RavenInputField
                type="textarea"
                label={'Description*'}
                color={'black-light'}
                onChange={handleChange}
                value={formData.description}
                name="description"
                placeholder={
                  'Give a detailed decription of what you offer, sell your self.'
                }
              />
            </div>

            <div className="grouped-input-container">
              <RavenInputField
                type="select"
                label={'State*'}
                color={'black-light'}
                menuPlacement={'top'}
                selectStyles={reactSelectStyleTable}
                className="select-react"
                selectOption={formatStateSelect(location)}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    state: e.value,
                  })
                }}
                // value={"formData.state"}
                // name="state"
                // placeholder={'Lagos State'}
              />

              <RavenInputField
                type="select"
                label={'City*'}
                name="city"
                menuPlacement={'top'}
                color={'black-light'}
                selectStyles={reactSelectStyleTable}
                className="select-react"
                selectOption={formatCitySelect(formData.state)}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    city: e.value,
                  })
                }}
                // value={formData.city}
                placeholder={'Lagos State'}
              />
            </div>

            <div className="input-container">
              <RavenInputField
                type="text"
                label={'Location'}
                color={'black-light'}
                selectStyles={reactSelectStyleTable}
                className="select-react"
                placeholder="e.g around ogombo road, sangotedo"
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     status: e.value
                //   })
                // }}
                // value={"formData.state"}
                // name="state"
                // placeholder={'Lagos State'}
              />
            </div>
            <div className="input-container">
              <RavenInputField
                type="select"
                label={'Status'}
                color={'black-light'}
                selectStyles={reactSelectStyleTable}
                className="select-react"
                placeholder="Public"
                selectOption={[
                  { label: 'Private', value: 'private' },
                  { label: 'Public', value: 'public' },
                ]}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    status: e.value,
                  })
                }}
                // value={"formData.state"}
                // name="state"
                // placeholder={'Lagos State'}
              />
            </div>

            <div className="submit_btn">
              <RavenButton
                color="orange"
                onClick={handleSubmit}
                loading={loading}
                disabled={
                  !formData.title ||
                  !formData.description ||
                  !formData.city ||
                  !formData.state
                }
                className="btn-primary text-white"
              >
                Submit Advert
              </RavenButton>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Advert

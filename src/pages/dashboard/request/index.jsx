import React from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import Select from 'react-select'
function Request() {
  return (
    <DashboardLayout>
        <div className='create_post_wrapper'>
      <div className="create_card">

<div className="header">
  <h6>Create A New Post</h6>
  </div>

  <div className="post_body">
    <div className="input-container">
    <label id="info-title"> Title</label>
    <input type="text" htmlFor="info-title"/>
    </div>

    <div className="input-container">
    <label id="info-title"> Description</label>
    <textarea type="text" htmlFor="info-title"/>
    </div>

    <div className="input-container">
    <label id="info-title">How much will you pay to get this information(NGN)</label>
    <input type="text" htmlFor="info-title"/>
    </div>

    <div className="input-container">
    <label id="info-title">Location</label>
    <Select className='select-react' type="text" htmlFor="info-title"/>
    </div>

    <div className="submit_btn">
      <button className="btn-primary text-white">
        Submit Information
      </button>
    </div>

  </div>

      </div>
      
    </div>
    </DashboardLayout>
  )
}

export default Request
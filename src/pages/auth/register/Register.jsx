/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { useState } from 'react'
import logo from '../../../assets/img/logo.svg'
import {RavenButton, RavenInputField } from 'raven-bank-ui'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../redux/user'
import { useNavigate } from 'react-router-dom';
require('./style.css')

function Register() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone_no: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    const obj = { ...formData, [name]: value };
    setFormData(obj);
  };

  const handleSubmit = async () => {
    let payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone_no.replace(/\s/g, ''),
      password: formData.password
    }
    let data = await dispatch(registerUser(payload))
    if (data?.payload?.status === 'success') {
      navigate('/dashboard')
    }
  }
  


  return (
    <div className='flex wv-100 hv-100'>
        <div className="wp-30 register-left ">

        </div> 

        <div className="wp-70 register-right flex flex-column ml-20 pl-50 mt-20 ">
          <figure  onClick={() => navigate('/')} className="w-90 cursor-pointer">
          <img src={logo}  alt="" />
          </figure>

          <div className="mt-30 flex  flex-column gap-10">
            <h6>Register</h6>
            <p>Welcome to Aproko pay where you get paid for facts!</p>
          </div>

          <div className="flex mt-50 gap-30 register-form-wrapper wp-50 flex-column">
            <div className="flex align-f-start flex-column wp-100 gap-10">
            <label className='text-b'>Name*</label>
            <RavenInputField 
            type="text"
            color={'black-light'}
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={'Adechukwu Ciroma'}
            />
            </div>
            <div className="flex align-f-start flex-column wp-100 gap-10">
            <label className='text-b'>Email*</label>
            <RavenInputField 
            type="email"
            name="email"
            onChange={handleChange}
            color={'black-light'}
            value={formData.email}
            placeholder={'Enter your email'}
            />
            </div>
            <div className="flex align-f-start flex-column wp-100 gap-10">
            <label className='text-b'>Phone Number*</label>
            <RavenInputField 
            type="phone"
            name="phone_no"
            onChange={handleChange}
            color={'black-light'}
            value={formData.phone_no}
            placeholder={'Enter phone number'}
            />
            </div>
            <div className="flex align-f-start flex-column wp-100 gap-10">
            <label className='text-b'>Password*</label>
            <RavenInputField 
            type="password"
            color={'black-light'}
            onChange={handleChange}
            value={formData.password}
            name="password"
            placeholder={'Enter secure password'}
            />
            </div>

            <div className='wp-100 mt-30'>
              <RavenButton onClick={handleSubmit} className="btn-primary-md text-md text-700 text-white register-btn" label="Register" color="orange"/>

            </div>

            <div className="flex have-account  gap-10">
              <p>Already have an account?</p>
              <p onClick={() => navigate('/login')} className="text-primary cursor-pointer text-700">
                Login
              </p>
            </div>
           
          </div>

        </div>
        
    </div>
  )
}

export default Register
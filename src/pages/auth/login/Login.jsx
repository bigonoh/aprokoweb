import { RavenButton, RavenInputField } from 'raven-bank-ui'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/img/logo.svg'
import { loginUser } from '../../../redux/user'

require('./style.css')

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    const obj = { ...formData, [name]: value };
    setFormData(obj);
  };

  const handleSubmit = async () => {
    let payload = {
      email: formData.email,
      password: formData.password
    }
    let data = await dispatch(loginUser(payload))
    if (data?.payload?.status === 'success') {
      navigate('/dashboard')
    }
  }

  return (
    <div className='flex wv-100 hv-100'>
        <div className="wp-30 login-left ">

        </div>

        <div className="wp-70 login-right flex flex-column ml-20 pl-50 mt-60 pt-60">
          <figure className="w-90">
          <img src={logo}  alt="" />
          </figure>

          <div className="mt-30 flex  flex-column gap-10">
            <h6>Login</h6>
            <p>Welcome to Aproko pay where you get paid for facts!</p>
          </div>

          <div className="flex mt-50 gap-30 login-form-wrapper wp-50 flex-column">
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

            <div className="flex remember-me align-center">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>

            <div className='wp-100 mt-30'>
              <RavenButton label="Login"  onClick={handleSubmit} className="btn-primary-md text-md text-700 login-btn"  color="orange"/>
            </div>

            <div className="flex gap-10">
              <p>Dont have an account?</p>
              <div style={{cursor: 'pointer'}} onClick={() => navigate('/register')}>
              <p  className="text-primary text-700">
                Sign up
              </p>
              </div>
             
            </div>
           
          </div>

        </div>
        
    </div>
  )
}

export default Login
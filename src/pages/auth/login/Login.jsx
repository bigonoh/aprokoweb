import React from 'react'
import logo from '../../../assets/img/logo.svg'

require('./style.css')

function Login() {
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
            <input type="text" className="form-control" />
            </div>
            <div className="flex align-f-start flex-column wp-100 gap-10">
            <label className='text-b'>Password*</label>
            <input type="text" className="form-control" />
            </div>

            <div className="flex remember-me align-center">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>

            <div className='wp-100 mt-30'>
              <button className="btn-primary-md text-md text-700 text-white login-btn">
                Login
              </button>
            </div>

            <div className="flex gap-10">
              <p>Dont have an account?</p>
              <p className="text-primary text-700">
                Sign up
              </p>
            </div>
           
          </div>

        </div>
        
    </div>
  )
}

export default Login
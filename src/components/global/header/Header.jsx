/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../../../assets/img/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'
import { RavenButton } from 'raven-bank-ui'
import { toast } from 'raven-bank-ui'
import Sidebar from '../../../layouts/sidebar'

function Header(props) {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state?.user)

  const handleLogout = () => {
    localStorage.clear()
    toast.success('You have been logged out successfully')
    setTimeout(() => {
      window.location.reload()
    }, 5000)
  }

  return (
    <div className={props.bg && 'bg-black'}>
      {/* mobile header starts here */}
      <header className="mobile_header">
        <figure>
          <img src={logo} alt="" />
        </figure>

        {/* Hamburger icon */}
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="hamb" htmlFor="side-menu">
          <span className="hamb-line"></span>
        </label>
        {/* Menu */}
        <nav className="nav">
          {!props.dashboard && (
            <div className="menu_title">
              <p>Menu</p>
            </div>
          )}

          {!props.dashboard && (
            <ul className="menu">
              <li>
                <a href="#work">Services</a>
              </li>
              <li>
                <a href="#about">Location</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#about">FAQs</a>
              </li>
              <li onClick={() => navigate('/dashboard')}>Ask Aprokopay</li>
              <li onClick={() => navigate('/sell')}>Sell info</li>
            </ul>
          )}

          {props.dashboard && (
            <div className="mobile_sidebar">
              <Sidebar />
            </div>
          )}

          <div className="action_title">
            <p>Quick Actions</p>
          </div>
          <div className="nav_act_btn">
            <RavenButton
              color={'orange-light'}
              size="small"
              onClick={() => navigate(user ? '/dashboard' : '/login')}
              className=" btn-primary-sm "
            >
              {user ? 'Dashboard' : 'Login'}
            </RavenButton>

            {user && (
              <RavenButton
                color={'error-light'}
                size="small"
                onClick={handleLogout}
              >
                Logout
              </RavenButton>
            )}
          </div>
        </nav>
      </header>
      {/* mobile header ends here */}

      {/* desktop header starts here */}
      <header className="hero-navbar desktop-header flex justify-between pt-10 pb-10 container-140">
        <div className="nav-right gap-10 text-sm just ify-center align-center flex">
          <figure>
            <img src={logo} alt="" />
          </figure>

          <div className="nav-menu">
            <ul className="flex">
              <li className="ml-10 text-4 text-white text-xs text-hover-secondary">
                <a href="#work">Services</a>
              </li>
              <li className="ml-10  text-4 text-white  text-xs text-hover-secondary">
                <a href="#about">Location</a>
              </li>
              <li className="ml-10  text-4 text-white text-xs text-hover-secondary">
                <a href="#about">About</a>
              </li>
              <li className="ml-10  text-4 text-white text-xs text-hover-secondary">
                <a href="#about">FAQs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex nav-right gap-10">
          <button
            onClick={() => navigate('/dashboard')}
            className="col-30 btn-outlined-primary-sm text-white"
          >
            Ask Aprokopay
          </button>
          <button
            onClick={() => navigate('/sell')}
            className="col-30 btn-outlined-primary-sm text-white"
          >
            Sell info
          </button>
          <button
            onClick={() => navigate(user ? '/dashboard' : '/login')}
            className="col-30 btn-primary-sm text-white"
          >
            {user ? 'Dashboard' : 'Login'}
          </button>
          {/* <ButtonPrimary
                btnStyle="btn-primary-lg"
                >Login</ButtonPrimary> */}
        </div>
      </header>
      {/* desktop header ends here */}
    </div>
  )
}

export default Header

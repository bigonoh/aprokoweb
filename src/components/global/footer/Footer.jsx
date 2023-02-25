import React from 'react'
import { icons } from '../../../assets/icons/icons'
import ('./style.css')
function Footer() {
  return (
    <footer className="footer text-white flex">
      <div className="footer_content flex wp-100  justify-between gap-30 flex-row">
        <div className="flex flex-column ">
          {icons.logo_white}
        </div>
        <div className="flex flex-column gap-10">
          <p className='text-xsm text-700'>Social</p>
          <p className='text-md pt-10'>Twitter</p>
          <p className="text-md">Instagram</p>
          <p className="text-md">Linkedin</p>
          <p className="text-md">Whatsapp</p>
          <p className="text-md">Facebook</p>
        </div>
        <div className="flex flex-column gap-10">
        <p className='text-xsm'>Product</p>
          <p className='text-md pt-10'>Tutorials</p>
          <p className="text-md">Pricing</p>
        
        </div>
        <div className="flex flex-column gap-10">
        <p className='text-xsm'>Company</p>
          <p className='text-md pt-10'>About us</p>
          <p className="text-md">Contact us</p>
        
        </div>
        <div className="flex flex-column gap-10">
        <p className='text-xsm'>Resources</p>
          <p className='text-md pt-10'>Blog</p>
          <p className="text-md">Newsletter</p>
          <p className="text-md">Help center</p>
          <p className="text-md">Tutorials</p>
          <p className="text-md">Support</p>
        </div>
        <div className="flex flex-column gap-10 ">
        <p className='text-xsm'>Company</p>
          <p className='text-md pt-10'>Terms</p>
          <p className="text-md">Privacy Policy</p>
          <p className="text-md">Cookies</p>
        
        </div>
      </div>

    </footer>
  )
}

export default Footer
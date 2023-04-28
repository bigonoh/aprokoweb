import React from 'react'
import { icons } from '../../../assets/icons/icons'
import('./style.css')
function Footer() {
  return (
    <footer className="footer mobile-footer text-white flex">
      <div className="footer_content flex wp-100  justify-between gap-30 flex-row">
        <div className="flex flex-column ">{icons.logo_white}</div>
        <div className="flex content-items flex-column gap-10">
          <p className="text-xsm footer-header text-700">Social</p>
          <p className="text-md item pt-10">Twitter</p>
          <p className="text-md item">Instagram</p>
          <p className="text-md item">Linkedin</p>
          <p className="text-md item">Whatsapp</p>
          <p className="text-md item">Facebook</p>
        </div>
        <div className="flex content-items flex-column gap-10">
          <p className="text-xsm footer-header">Product</p>
          <p className="text-md pt-10 item">Tutorials</p>
          <p className="text-md item">Pricing</p>
        </div>
        <div className="flex content-items flex-column gap-10">
          <p className="text-xsm footer-header ">Company</p>
          <p className="text-md pt-10 item">About us</p>
          <p className="text-md item">Contact us</p>
        </div>
        <div className="flex content-items flex-column gap-10">
          <p className="text-xsm footer-header">Resources</p>
          <p className="text-md item pt-10">Blog</p>
          <p className="text-md item">Newsletter</p>
          <p className="text-md item">Help center</p>
          <p className="text-md item">Tutorials</p>
          <p className="text-md item">Support</p>
        </div>
        <div className="flex content-items flex-column gap-10 ">
          <p className="text-xsm footer-header">Legal</p>
          <p className="text-md item pt-10">Terms</p>
          <p className="text-md item">Privacy Policy</p>
          <p className="text-md item">Cookies</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

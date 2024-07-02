import React from 'react'
import { NavLink } from 'react-router-dom'
import { icons } from '../../../assets/icons/icons'
import('./style.css')
function Footer() {
  return (
    <footer className="footer mobile-footer text-white flex">
      <div className="footer_content flex wp-100  justify-between gap-30 flex-row">
        <div className="flex flex-column ">{icons.logo_white}</div>
        <div className="flex content-items flex-column gap-10">
          <p className="text-xsm footer-header text-700">Social</p>
          <link to="https://twitter.com/aprokopay"><p className="text-md item pt-10">Twitter</p></link>
          <link to="https://www.instagram.com/therealaprokopay?igsh=Y216OWRhZmRiNm9v"><p className="text-md item">Instagram</p></link>
          <NavLink to="https://www.linkedin.com/company/aprokopay/?lipi=urn%3Ali%3Apage%3Aorganization_admin_admin_feed_index%3Be197d0eb-ced8-4736-a25e-c2a42445a30c"><p className="text-md item">Linkedin</p></NavLink>
          <NavLink to="https://wa.me/qr/ILKFMRF4ZAEAA1"><p className="text-md item">Whatsapp</p></NavLink>
          <NavLink to="https://www.facebook.com/profile.php?id=61558559893434&mibextid=ZbWKwL"><p className="text-md item">Facebook</p></NavLink>
        </div>
        <div className="flex content-items flex-column gap-10">
          <p className="text-xsm footer-header">Product</p>
          {/* <NavLink to="/tutorial"><p className="text-md pt-10 item">Tutorials</p></NavLink> */}
          <p className="text-md item">Pricing</p>
        </div>
        <div className="flex content-items flex-column gap-10">
          <p className="text-xsm footer-header ">Company</p>
          <NavLink to="/aboutus"><p className="text-md pt-10 item">About us</p></NavLink>
          <NavLink to="/contactus"><p className="text-md item">Contact us</p></NavLink>
        </div>
        <div className="flex content-items flex-column gap-10">
          <p className="text-xsm footer-header">Resources</p>
          <NavLink to="https://sunnewsonline.com/aprokopay-com-launches-revolutionary-platform-for-business-growth-and-information-exchange/?amp"><p className="text-md item pt-10">Blog</p></NavLink>
          <p className="text-md item">Newsletter</p>
          <p className="text-md item">Help center</p>
          <NavLink to="/tutorial"><p className="text-md item">Tutorials</p></NavLink>
          <p className="text-md item">Support</p>
        </div>
        <div className="flex content-items flex-column gap-10 ">
          <p className="text-xsm footer-header">Legal</p>
          <p className="text-md item pt-10">Terms</p>
          <NavLink to="/privacypolicy"><p className="text-md item">Privacy Policy</p></NavLink>
          <p className="text-md item">Cookies</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

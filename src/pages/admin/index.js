/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { RavenPagination, RavenTable, RavenTableRow } from 'raven-bank-ui';
import { useDispatch, useSelector } from 'react-redux';
import {DateTime} from 'luxon'
import { icons } from '../../assets/icons/icons';
import  user  from '../../assets/img/user.png';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
require ("./styles.css")
function AdminPanel() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)

  useEffect(() => {
        let payload = {
          page: page,
          limit: 20
        }
  }, [page])

  const { sales } = useSelector((state) => state?.info);

  const sale = sales?.results
  

  const headerList = ["TITLE", "BUYER", "AMOUNT", " DATE"];

  return (
    <DashboardLayout>
    <div className="sales_wrapper">
      <div className="page_top">
        <span className="page_title">
          <h6> Admin Panel</h6>
          <p>Manage everything Aprokopay</p>
        </span>

        <div className="stats_card">
          <div className="stat">
            <span>
              <p>Admin Earning</p>
              {/* <h6>{formatNumWithCommaNaira(String(sales?.amount))}</h6> */}
            </span>
            <figure>
              {icons.chart}
            </figure>
          </div>

          <div className="stat">
            <span>
              <p>Total Users</p>
              {/* <h6>{formatNumWithCommaNaira('5000')}</h6> */}
            </span>
            <figure>
              <img src={user} alt="" />
            </figure>
          </div>

          <div className="stat_minimal">
            <span>
              <p>Information Sold:</p>
              <h6>{sales?.totalResults}</h6>
            </span>
            <span>
              <p>Information Bought:</p>
              <h6>{`10`}</h6>
            </span>
          </div>
        </div>
      </div>

      <div className="page_body">
        <h6>Actions</h6> 

        <div className="action_grid">
        <div onClick={() => navigate('/admin-panel/users')} className="item1">
            <p>Users</p>
            <p>View and Manage Users</p>
        </div>

        <div onClick={() => navigate('/admin-panel/informations')} className="item1">
            <p>Information</p>
            <p>View and Manage Users</p>
        </div>

        <div onClick={() => navigate('/admin-panel/withdrawals')} className="item1">
            <p>Withdrawal </p>
            <p>View and Manage Withdrawal Request</p>
        </div>

        <div onClick={() => navigate('/admin-panel/teams')} className="item1">
            <p>Teams</p>
            <p>View and Manage Team Members</p>
        </div>
        </div>
      </div>
    </div>

    </DashboardLayout>
  )
}

export default AdminPanel
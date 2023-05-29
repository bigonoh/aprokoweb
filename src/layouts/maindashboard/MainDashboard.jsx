import React from 'react'
require('./style.css')
import Balance from '../../components/balance/Balance'
import { icons } from '../../assets/icons/icons'
import { useSelector } from 'react-redux'
import { formatNumWithCommaNaira } from '../../utils/Helpers'
import { useState } from 'react'
import { RavenModal } from 'raven-bank-ui'
import { useNavigate } from 'react-router-dom'

const MainDashboard = ({ trx }) => {
  const styles = {
    button: {
      backgroundColor: 'blue',
    },
  }

  const data = [
    {
      name: 'Purchase of information from jack',
      age: 28,
      address: 'some where',
      key: '1',
    },
    { name: 'Rose', age: 36, address: 'some where', key: '2' },
  ]

  const { infos } = useSelector((state) => state.info)
  const posts = infos?.results

  const navigate = useNavigate()

  return (
    <div className="mainDashboard">
      <div className="right">
        <div className="topBalance">
          <Balance />
          {/* <button className='text-white wp-100 btn-secondary'>Request Withdrawal</button> */}
        </div>
        <div className="bottom_wrapper">
          <p className="text-md font-600 ">Quick Actions</p>
          <div className="flex gap-10  mt-20 justify-between">
            <div onClick={() => navigate('/sell')} className="p-20 flex align-start actions justify center">
              Sell info
            </div>
            <div onClick={() => navigate('/buy')} className="p-20 flex align-start actions justify center">
              Buy info
            </div>
            <div onClick={() => navigate('/withdraw')} className="p-20 flex align-start actions justify center">
              Ask Aprokopay
            </div>
          </div>

          <p className="text-md font-600 mt-50 ">Recent Transaction</p>
          <div className="table-wrapper mt-20">
            <table cellSpacing="0" cellPadding="0" className="table">
              <thead>
                <tr>
                  <th>Summary</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {trx?.results?.map((chi, idx) => {
                  return (
                    <tr key={idx}>
                      <td>
                        <div className="table_content_wrap">{chi?.purpose}</div>
                      </td>
                      <td>
                        <div className="table_content_wrap">
                          {formatNumWithCommaNaira(String(chi?.amount))}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="left-dashboard">
        <div className="widget">
          <h2>Latest Posts</h2>
          <div className="wrapper">
            {posts?.map((chi, idx) => {
              return (
                <div key={idx} className="comment">
                  <p>{chi?.title}</p>
                  <div className="button">
                    <button>
                      {formatNumWithCommaNaira(String(chi?.price))}
                    </button>
                    <button className="info">More info</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="p-20 home-dash-ad bg-primary-light-9 mt-30 curved">
          <p>Start Earning on Aprokopay, Share information that matters.</p>
          <span>
            Aprokopay pays you for every bit of information you sell, click the
            button below to start selling
          </span>

          <btn className="btn-create">
            Create post
            {icons.chevron_right}
          </btn>
        </div>
      </div>
    </div>
  )
}

export default MainDashboard

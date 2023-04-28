import React from 'react'
import Balance from '../../components/balance/Balance'
import WithdrawalForm from '../../components/withdrawalform/WithdrawalForm'
import { icons } from '../../assets/icons/icons'
require('./style.css')

const RequestLayout = () => {
  return (
    <div>
      <div className="iconBack">
        {icons.back}
        <p>Request Withdrawal</p>
      </div>
      <div className="request">
        <div className="requestBalance">
          <Balance />
        </div>
        <div className="requestForm">
          <p>
            You are about to make a Withdrawal request to <br />
            your registered bank account
          </p>

          <div className="requestNote">
            {' '}
            <WithdrawalForm />{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestLayout

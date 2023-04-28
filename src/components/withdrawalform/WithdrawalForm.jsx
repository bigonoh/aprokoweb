import React from 'react'
require('./style.css')

const WithdrawalForm = () => {
  return (
    <div className="withdrawalForm">
      <form>
        <label className="tittle">Bank Name</label>
        <input type="text" className="text" placeholder="WEMA BANK" required />

        <label className="account">Account Name</label>
        <input
          type="text"
          className="text"
          placeholder="Emmanuel Ezeani"
          required
        />

        <label className="amount">Amount</label>
        <input type="text" className="text" placeholder="30000" required />

        <label className="pass">Password</label>
        <input type="text" className="text" placeholder="******" required />

        <input className="button" type="button" value="Withdraw"></input>
      </form>
    </div>
  )
}

export default WithdrawalForm

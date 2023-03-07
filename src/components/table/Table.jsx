import React from 'react'
require ('./style.css')
import { icons } from '../../assets/icons/icons'

const Table = () => {
  return (
    <div className='tables'>
      <table>
      <thead>
          <tr>
            <th>Buyers Name</th>
            <th>Information</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        
        <tbody>
    <tr>
      <td>Emmanuel</td>
      <td>I know so so and so who sells so so and so in so so and so{icons.dots}</td>
      <td>NGN 1500.00</td>
      <td>5 Sept, 2022 — 5:48PM</td>
      <td>Sold</td>
    </tr>
<tr>
    <td>Emmanuel</td>
      <td>I know so so and so who sells so so and so in so so and so{icons.dots}</td>
      <td>NGN 1500.00</td>
      <td>5 Sept, 2022 — 5:48PM</td>
      <td>Sold</td>
</tr>

    <tr>
    <td>Emmanuel</td>
      <td>I know so so and so who sells so so and so in so so and so{icons.dots}</td>
      <td>NGN 1500.00</td>
      <td>5 Sept, 2022 — 5:48PM</td>
      <td>Sold</td>
    </tr>

    <tr>
    <td>Emmanuel</td>
      <td>I know so so and so who sells so so and so in so so and so{icons.dots}</td>
      <td>NGN 1500.00</td>
      <td>5 Sept, 2022 — 5:48PM</td>
      <td>Sold</td>
    </tr>
  </tbody>
      </table>
        
  </div>
  )
}

export default Table
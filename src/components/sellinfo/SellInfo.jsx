import React from 'react'
import { icons } from '../../assets/icons/icons'
require('./style.css')

const SellInfo = () => {
  return (
    <div className="sellInfo">
      <form>
        <label className="tittle">Sellinfo</label>
        <input type="text" className="text" name="name" required />

        <div className="polygon">
          <label className="tittle">State</label>
          <select
            type="dropDown"
            className="dropDown"
            name="dropdown"
            style={{ backgroundImage: `url(${icons.polygon})` }}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          {icons.polygon}
        </div>

        <div className="polygon">
          <label className="tittle">LGA</label>
          <select className="dropDown" name="dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          {icons.polygon}
        </div>

        <label className="tittle">Street</label>
        <input type="text" id="name" name="name" required />

        <input className="button" type="button" value="Post"></input>
      </form>
    </div>
  )
}

export default SellInfo

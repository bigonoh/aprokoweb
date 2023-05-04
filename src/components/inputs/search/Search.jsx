import React from 'react'
import style from './style.module.css'

function Search(props) {
  const searchIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="#011F3D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0004 20.9999L16.6504 16.6499"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <div className={style.searchContainer}>
      <div className={style.search_icon}>{searchIcon}</div>
      <input
        placeholder={props.placeholder ? props.placeholder : 'Search anything'}
        className={style.searchInput}
      />
    </div>
  )
}

export default Search

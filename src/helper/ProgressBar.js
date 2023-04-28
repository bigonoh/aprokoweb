import React from 'react'

const ProgressBar = ({ bgcolor, completed }) => {
  const containerStyles = {
    height: 5,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#E5E6E6',
    borderRadius: 50,
    position: 'relative',
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed > 100 ? 100 : completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const iconStyles = {
    height: '6rem',
    width: '6rem',
    marginLeft: '-6rem',
    position: 'absolute',
    bottom: '-300%',
    left: `${completed}%`,
    color: completed <= 0 ? '#e0e0de' : bgcolor,
  }

  const labelStyles = {
    padding: 7,
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  )
}

export default ProgressBar

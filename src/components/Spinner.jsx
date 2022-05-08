import React from 'react'
import spinner from '../UI/Spin-1s-200px.gif'

function Spinner() {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}

export default Spinner
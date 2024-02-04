import React from 'react'
import load from '../load.gif'
function Spinner() {
  return (
    <div className='text-center'>
    <img src={load} alt="load" />
    </div>
  )
}

export default Spinner

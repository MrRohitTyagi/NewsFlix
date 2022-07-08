import React from 'react'
import loading1 from "../loading1.gif"

function Spinner() {
  return (
    <div className='text-center'>
        <img src={loading1} height="150px" width='150px' alt="Loading" />
      </div>
  )
}

export default Spinner
import React from 'react'

const ErrorMsg = ({text}) => {
  return (
    <div className='p-2 rounded-xl border-2 border-cyan-100 font-bold text-xl text-center my-2'>
        <p className='text-xl text-cyan-100'>{text}</p>

    </div>
  )
}

export default ErrorMsg
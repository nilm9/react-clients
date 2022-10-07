import React from 'react'

const ErrorMsg = ({text}) => {
  return (
    <div className='p-2 rounded-xl border-2 border-indigo-600 font-bold text-xl text-center my-2 bg-cyan-100'>
        <p className='text-xl text-indigo-600'>{text}</p>

    </div>
  )
}

export default ErrorMsg
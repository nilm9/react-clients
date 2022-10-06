import React from 'react'

const Patient = ({patients}) => {
  const {name, date, pet, message, email} = patients


  return (
    <div className='m-8 px-5 py-10 shadow-md rounded-xl border-2 border-cyan-800'>
      <p className='font-bold mb-3 text-cyan uppercase'> 
      Name: {''} <span className='font-normal normal-case'>{pet}</span>
      </p>
      <p className='font-bold mb-3 text-cyan uppercase'> 
      Owner: {''} <span className='font-normal normal-case'>{name}</span>
      </p>    
      <p className='font-bold mb-3 text-cyan'> 
      Email: {''} <span className='font-normal normal-case'>{email}</span>
      </p>   


      <p className='font-bold mb-3 text-cyan'> 
      Date: {''} <span className='font-normal normal-case'>{date}</span>
      </p>


      <p className='font-bold mb-3 text-cyan'> 
      Synthomps: {''} <span className='font-normal normal-case'>{message}</span>
      </p>      



    </div>
  )
}

export default Patient
import React from 'react'
import Patient from './Patient'

const List = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen  overflow-y-scroll '>
      <h2 className='font-black text-3xl text-center mt-10  '>List of Patients</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Manage your apointments
      </p>
      <Patient />
      <Patient />

      <Patient />

    </div>
  )
}

export default List
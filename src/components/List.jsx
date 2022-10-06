import React from 'react'
import Patient from './Patient'

const List = ( {patients}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen  overflow-y-scroll '>

      {patients  ?
        (
          <>
          {console.log("entra")}
            <h2 className='font-black text-3xl text-center mt-10  '>List of Patients</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
            Manage your apointments
            </p>

            {patients.map( patients =>(
            <Patient key={patients.id} patients={patients} />
            ))}
          </>
          )
            
            :
          (
          <>
            {console.log(" no entra")}
            <h2 className='font-black text-3xl text-center mt-10  '>You got 0 Patients</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
            Start adding patients
            </p>
          </>

          )
      
      }
    </div>
// prova

  )
}

export default List
import React from 'react'

const Patient = ({patients ,setPatient, deletePatient}) => {
  const {name, date, pet, message, email, id} = patients

  const handleEliminar = () =>{
    const resp = confirm("Do you really want to delate the patient?")

    if(resp){
      deletePatient(id)
    }


  }

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

      <div className="flex place-content-between">

        <button type="button" className='p-4 bg-cyan-800 hover:bg-cyan-900 text-cyan-100 font-semibold rounded-xl my-2' onClick={()=>setPatient(patients)}> Edit</button>
        <button type="button" className='p-4 bg-indigo-600 hover:bg-indigo-900 text-cyan-100 font-semibold rounded-xl my-2' onClick={handleEliminar}>Delete</button>

      </div>



    </div>
  )
}

export default Patient
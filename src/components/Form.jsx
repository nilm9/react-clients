import React from 'react'
import { useState, useEffect } from 'react'
import ErrorMsg from '../utils/ErrorMsg';

const Form = ({patients, setPatients, patient, setPatient}) => {
  const [name, setName] = useState('');
  const [pet, setPet] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState(false);


  useEffect(() => {
    
    if(Object.keys(patient).length > 0){
      setName(patient.name)
      setPet(patient.pet)
      setEmail(patient.email)
      setDate(patient.date)
      setMessage(patient.messages)
    }
  }, [patient])
  

  const generateId= () =>{
      const random = Math.random().toString(36).substring(2);
      const date = Date.now().toString(36); 
      return random + date;
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if([name, pet, email, message ].includes('')){
      setError(true)
      return;
    }


    const objPatient = {
      name,
      pet, 
      email, 
      date,
      message,

    }



    if(patient.id){
      // Edit the register
      objPatient.id = patient.id
      const patientsUpdate = patients.map(patientState => patientState.id === patient.id ? objPatient  : patientState)
      setPatients(patientsUpdate)
      setPatient({})
    }else {
      objPatient.id = generateId();
      //Spread operator, copies + adds
      setPatients([...patients, objPatient])
    }



    
    //Reset form
    setName('');
    setPet('');
    setEmail('');
    setDate('');
    setMessage('');
    

  }




  return (
    <div className='md:w-1/2 lg:w-2/5 rounded-lg bg-cyan-800 p-8 shadow-md justify-items-center mx-1'>
      <h3 className='text-3xl font-semibold text-cyan-100 pb-8 pt-6'>Manage <span className='capitalize text-white'>clients</span> </h3>

      <form action="post" className='flex flex-col ' onSubmit={handleSubmit}>

        <label className='text-xl font-semibold text-cyan-100 my-2'>Owner's Name</label>
        <input className='my-6 rounded-md p-3 ' type="text" placeholder='Owner' value={name}
        onChange={(e)=>setName(e.target.value)}/>

        <label className='text-xl font-semibold text-cyan-100 mt-3 mb-1'>Pet's Name</label>
        <input type="text" className='my-6 rounded-md p-3' placeholder='Pets name' value={pet} onChange={ (e)=>setPet(e.target.value)}/>

        <label className='text-xl font-semibold text-cyan-100 mt-3 mb-1'>Owner's Email</label>
        <input type="text" className='my-6 rounded-md p-3' placeholder='Email' value={email} onChange={
          (e)=>setEmail(e.target.value) }/>

        <label className='text-xl font-semibold text-cyan-100 mt-3 mb-1'>Date</label>
        <input type="date" id='alta' className='my-6 rounded-md p-3' value={date} onChange={
          (e)=>setDate(e.target.value) } />

        <label className='text-xl font-semibold text-cyan-100 mt-3 mb-1'>Pet's Synthoms</label>
        <textarea className='my-6 p-3 rounded-md' name="synthoms" id="synthoms" cols="10" rows="5" placeholder='Synthoms' value={message} onChange={ 
          (e)=>setMessage(e.target.value)} ></textarea>
        {error && <ErrorMsg text={"All the fields are required"}/> }
        <button type='submit' className='p-2 mt-5 bg-cyan-100 rounded-xl hover:bg-cyan-200 font-semibold ' onClick={ handleSubmit}>{patient.id ? 'Edit patient' : 'Add patient'}</button>
      </form>



    </div>
  )
}

export default Form
import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('');
  const [pet, setPet] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  console.log(name);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if([nombre === 0]){
      console.log('empty fields');
    }
    

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
        <button type='submit' className='p-2 mt-5 bg-cyan-100 rounded-xl hover:bg-cyan-200 ' onClick={ handleSubmit}>Post</button>
      </form>



    </div>
  )
}

export default Form
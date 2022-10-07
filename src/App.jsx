import { useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
function App() {

  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients') ) ?? []);
  const [patient, setPatient] = useState({});

  // Second useEffect to avoid that in the first render removes the 1st patient
  // useEffect(()=>{
  //   const getLS = () => {
  //     const patientsLS = JSON.parse(localStorage.getItem('patients') ) ?? [];
  //     setPatients(patientsLS)
  //   }
  //   getLS();
  // }, [])


  useEffect(()=>{
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = id =>{
    const updatedPatients = patients.filter(patient => patient.id != id);
    setPatients(updatedPatients);
  }


  return (
    <div className="  container mx-auto mt-20">
        <Header/>
        <div className="mt-12 md:flex justify-items-center place-content-center">
            <Form patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient}/>
            <List patients={patients} setPatient={setPatient} deletePatient={deletePatient}/>
        </div>

    </div>
  )
}

export default App

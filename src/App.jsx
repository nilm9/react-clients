import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
function App() {

  const [patients, setPatients] = useState([]);

  return (
    <div className="  container mx-auto mt-20">
        <Header/>
        <div className="mt-12 md:flex justify-items-center place-content-center">
            <Form patients={patients} setPatients={setPatients}/>
            <List patients={patients} setPatients={setPatients}/>
        </div>

    </div>
  )
}

export default App

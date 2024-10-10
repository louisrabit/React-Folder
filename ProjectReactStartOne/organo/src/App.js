
import { useState } from 'react';
import Banner from './component/Banner/banner';
import Form from './component/Form/Form';
import Time from './component/Time/index';

function App() {

const [persons, setPersons] = useState([])

const newPersonObject = (personObject) => {
  console.log(personObject);
  setPersons([...persons, personObject])
}

  return (
    <div className="App">
      <Banner />
      
      <Form objectData = {personObject => newPersonObject(personObject)} />
   
   <Time name="Programming"/>
   <Time name="Data Science"/>
    </div>
  );
}

export default App;

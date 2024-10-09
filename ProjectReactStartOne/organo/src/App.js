
import { useState } from 'react';
import Banner from './component/Banner/banner';
import Form from './component/Form/Form';


function App() {

const [persons, setPersons] = useState([])

const newPersonObject = (personObject) => {
  console.log(personObject);
}

  return (
    <div className="App">
      <Banner />
      
      <Form objectData = {personObject => newPersonObject(personObject)} />
    </div>
  );
}

export default App;


import { useState } from 'react';
import Banner from './component/Banner/banner';
import Form from './component/Form/Form';
import Time from './component/Time';

function App() {

  const teams = [
    {
      name: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
    name: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
  {
    name: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
  },
  {
      name: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
  },
  {
    name: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  },
  {
    name: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
  }
  ]


const [persons, setPersons] = useState([])

const newPersonObject = (personObject) => {
  console.log(personObject);
  setPersons([...persons, personObject])
}

  return (
    <div className="App">
      <Banner />
      
      <Form objectData = {personObject => newPersonObject(personObject)} />
      {teams.map(teamUser =>
       <Time key={teamUser.name}
       name={teamUser.name} 
       corPrimaria={teamUser.corPrimaria}
       corSecundaria={teamUser.corSecundaria}
       /> )}
   
    </div>
  );
}

export default App;

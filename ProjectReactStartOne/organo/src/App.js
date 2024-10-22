
import { useState } from 'react';
import Banner from './component/Banner/banner';
import Form from './component/Form/Form';
import Time from './component/Time/index';

function App() {

const [persons, setPersons] = useState([])

const teams = [
  {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
},
{
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
},
{
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
},
{
    nome: 'UX e Design',
    corPrimaria: '#D86EBF',
    corSecundaria: '#FAE5F5',
},
{
    nome: 'Mobile',
    corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9',
},
{
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF',
}
]

const newPersonObject = (personObject) => {
  console.log(personObject);
  setPersons([...persons, personObject])
}

  return (
    <div className="App">
      <Banner />
      
      <Form objectData = {personObject => newPersonObject(personObject)} />
   
    
     {teams.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)}



    </div>
  );
}



export default App;


import { useState } from 'react';
import Banner from './component/Banner/banner';
import Form from './component/Form/Form';
import Time from './component/Time';
import Employer from './component/Emplyer';

function App() {

const [persons, setPersons] = useState([])

const teams = [
  {
    name: 'Front-End',
    primaryColor: '#82CFFA',
    secndaryColor: '#E8F8FF',
},
{
  name: 'Data Science',
  primaryColor: '#A6D157',
  secndaryColor: '#F0F8E2',
},
{
  name: 'Devops',
  primaryColor: '#E06B69',
  secndaryColor: '#FDE7E8',
},
{
  name: 'UX e Design',
  primaryColor: '#D86EBF',
  secndaryColor: '#FAE5F5',
},
{
  name: 'Mobile',
  primaryColor: '#FEBA05',
  secndaryColor: '#FFF5D9',
},
{
  name: 'Inovação e Gestão',
  primaryColor: '#FF8A29',
  secndaryColor: '#FFEEDF',
}
]

const newPersonObject = (personObject) => {
  console.log(personObject);
  setPersons([...persons, personObject])
}

  return (
    <div className="App">
      <Banner />
      
      <Form  teamsName={teams.map(time => time.name)} objectData = {personObject => newPersonObject(personObject)} />
      {teams.map(teamUser =>
       <Time key={teamUser.name}
       name={teamUser.name} 
       primaryColor={teamUser.primaryColor}
       secndaryColor={teamUser.secndaryColor}
       persons = {persons.filter(personObject => personObject.teamUser === teamUser.name)}
       /> )}
   
   
    
    



    </div>
  );
}



export default App;

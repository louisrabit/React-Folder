import Button from '../Button/Index';
import List from '../List/List';
import TextField from '../TextFields/textField';
import './Form.css';
import { useState } from 'react';

const Form = (props) => {

  const teams = [
    "Programming",
    "Front-end",
    "Data Science",
    "Devops",
    "UX & Design",
    "Mobile",
    "Manager",
  ];

  // State variables
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const submitFunction = (event) => {
    // Prevent page reload
    event.preventDefault();
    // Submit the form data to the parent component via props
    props.objectData({
      name,
      position,
      image,
      team
    });
  };

  return (
    <section className="form">
      <form onSubmit={submitFunction}>
        <h2>Collaborator Details Form</h2>
        
        {/* Name Input */}
        <TextField 
          mandatory={true}  
          label="Name" 
          placeholder="Input Name"
          value={name}
          onChange={value => setName(value)}
        />

        {/* Position Input */}
        <TextField
          mandatory={true} 
          label="Position" 
          placeholder="Position" 
          value={position}
          onChange={value => setPosition(value)}
        />

        {/* Image Input */}
        <TextField
          label="Image" 
          placeholder="Input Image" 
          value={image}
          onChange={value => setImage(value)}
        />

        {/* Team Select */}
        <List 
          label="Team"
          items={teams}
          value={team}
          onChange={value => setTeam(value)}
        />

        {/* Button */}
        <Button>
          Create Card
        </Button>
      </form>
    </section>
  );
}

export default Form;

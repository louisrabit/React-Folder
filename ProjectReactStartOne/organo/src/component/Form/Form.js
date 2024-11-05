import Button from '../Button/Index';
import List from '../List/List';
import TextField from '../TextFields/textField';
import './Form.css';
import { useState } from 'react';

const Form = (props) => {



  // State variables
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [teamUser, setTeamUser] = useState('');

  const submitFunction = (event) => {
    // Prevent page reload
    event.preventDefault();
    // Submit the form data to the parent component via props
    props.objectData({
      name,
      position,
      image,
      teamUser
    });
    setName('')
    setPosition('')
    setImage('')
    setTeamUser('')
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
          items={props.teamsName}
          value={teamUser}
          onChange={value => setTeamUser(value)}
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

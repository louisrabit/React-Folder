import Button from '../Button/Index';
import List from '../List/List';
import TextField from '../TextFields/textField';
import './Form.css';
import { useState } from 'react';

const Form = (props) => {

const Times = [
  "Proggramming",
  "Front-end",
  "Data Science",
  "Devops",
  "UX && Design",
  "Mobile",
  "Manager",
]


// value 
// set to define the value 
// value and state , change at same time --> both 
const [name, setName]  = useState('')
const [position, setPosition]  = useState('')
const [image, setImage]  = useState('')
const [team, setTeam]  = useState('')




const submitFunction = (event) => {
    // to prevent page to reload
event.preventDefault();
//     console.log("Button Clicked => ", name, position, image, team)
props.objectData({
    name,
    position,
    image,
    team
})

}
    return ( 
        <section className="form">
            <form onSubmit={submitFunction}>
                <h2>Collaborator Details Form</h2>
                <TextField 
                 mandatory={true}  
                 label="Name" 
                 placeholder="Input Name"
                 value ={name}
                 chngedFiled={value => setName(value)}
                 />



                <TextField
                 mandatory={true} 
                 label="Position" 
                 placeholder="Position" 
                 value ={position}
                 chngedFiled={value => setPosition(value)}
                 />


                <TextField
                 label="Image" 
                 placeholder="Input Image" 
                 value ={image}
                 chngedFiled={value => setImage(value)}
                 
                 
                 />
                <List 
                label="Team"
                 items={Times}
                 value ={team}
                 chngedFiled={value => setTeam(value)}
                 />
                {/* <Button name="Create Card"/> */}
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )

}

export default Form;
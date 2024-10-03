import Button from '../Button/Index';
import List from '../List/List';
import TextField from '../TextFields/textField';
import './Form.css';


const Form = () => {

const Times = [
  "Proggramming",
  "Front-end",
  "Data Science",
  "Devops",
  "UX && Design",
  "Mobile",
  "Manager",
]

    return (
        <section className="form">
            <form>
                <h2>Collaborator Details Form</h2>
                <TextField label="Name" placeholder="Input Name" />
                <TextField label="Position" placeholder="Position" />
                <TextField label="Image" placeholder="Input Image" />
                <List label="Team" items={Times}/>
                {/* <Button name="Create Card"/> */}
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )

}

export default Form;
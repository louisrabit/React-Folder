import Employer from '../Emplyer';
import './Time.css';


const Time = (props) => {

    const secndaryColor = {backgroundColor: props.secndaryColor};
     const primaryColor = {borderColor: props.primaryColor}


    return (

      props.persons.length > 0 ? (
        // <section className="time" style={{backgroundColor: props.corSecundaria}}>
        <section className="time" style={secndaryColor}>
               <h3 style={primaryColor}>
                 {props.name}
                </h3>

        <div className='employersTeam'>
             {props.persons.map(personObject => 
              <Employer 
                 key={personObject.name} 
                 name={personObject.name} 
                 position={personObject.position}
                 image={personObject.image}
                />
                   )}
        </div>
        </section>

) : "" 

    )
}
export default Time;
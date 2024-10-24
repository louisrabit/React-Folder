import Employer from '../Emplyer';
import './Time.css';


const Time = (props) => {

    const secndaryColor = {backgroundColor: props.secndaryColor};
     const primaryColor = {borderColor: props.primaryColor}


    return (
        // <section className="time" style={{backgroundColor: props.corSecundaria}}>
        <section className="time" style={secndaryColor}>
        <h3 style={primaryColor}>
            {props.name}
        </h3>
        <Employer/>
        </section>
    )
}
export default Time;
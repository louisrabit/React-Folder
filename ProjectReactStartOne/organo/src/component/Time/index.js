import './Time.css';


const Time = (props) => {

    const secndaryColor = {backgroundColor: props.corSecundaria};
     const primaryColor = {borderColor: props.corPrimaria}


    return (
        // <section className="time" style={{backgroundColor: props.corSecundaria}}>
        <section className="time" style={secndaryColor}>
        <h3 style={primaryColor}>
            {props.name}
        </h3>
        </section>
    )
}
export default Time;
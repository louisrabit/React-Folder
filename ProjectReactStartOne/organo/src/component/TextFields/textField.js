// create a function and put inside of a constant
// arrow function
// more organized -
import './textField.css';

//props = properties --> variable
const TextField = (props) => {
    // console.log(props)

const modifyPlaceholder = `${props.placeholder}...`

return(

    
<div className="field-text">
    <label>{props.label}</label>
    {/* <input placeholder={props.placeholder}/> */}
    <input placeholder={modifyPlaceholder}/>
</div>



)


}

export default TextField;
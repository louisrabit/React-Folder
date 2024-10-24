// create a function and put inside of a constant
// arrow function
// more organized -
import './textField.css';



//props = properties --> variable
const TextField = (props) => {
    // console.log(props)

const modifyPlaceholder = `${props.placeholder}...`


// // value 
// // set to define the value 
// // value and state , change at same time --> both 
// const [valor, setValor]  = useState('Luis')

const onChange = (event) => {
    props.onChange(event.target.value)
}

return(

    
<div className="field-text">
    <label>{props.label}</label>
    {/* <input placeholder={props.placeholder}/> */}
    <input value={props.valor} onChange={onChange} required={props.mandatory} placeholder={modifyPlaceholder}/>
</div>



)


}

export default TextField;
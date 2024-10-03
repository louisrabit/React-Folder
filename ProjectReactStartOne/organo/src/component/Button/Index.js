import './Button.css';

const Button = (props) => {
    return(
        <button className="button">
        {/* {props.name} */}
        {props.children}
         
        </button>
    )
}
export default Button;
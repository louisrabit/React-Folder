// import './Employer.css';

// const Employer = (props) => {
// return (

//     <div className='colaborador'>
// <div className='cabecalho'>
// <img src='https://github.com/louisrabit.png'  alt='Luis Coelho'></img>
// </div>

// <div className='rodape'>
//     <h4>{props.name}</h4>
//     <h5>{props.position}</h5>
// </div>
//     </div>


// )}

// export default Employer;


import './Employer.css';

const Employer = ({name, image, position, teamUser }) => {
return (

    <div className='colaborador'>
<div className='cabecalho'>
<img src={image}  alt={name}></img>
</div>

<div className='rodape'>
    <h4>{name}</h4>
    <h5>{position}</h5>
</div>
    </div>


)}

export default Employer;
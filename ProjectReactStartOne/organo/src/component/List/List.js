import './List.css';

const List = (props) => {
  /* todo array / lista do js tem um map --> para cada item da lista ele percorre e da um array novo manipulado*/
  /* percorre a lista de nome e da um retorna algo diferente  */ 
  /*  foreach so percorre e faz algo |||| o map percorre , faz algo e devolve um novo array , com item mapeados com uma transformaçao ! */
   
    return (
        <div className="DropDownList">
            <label>{props.label}</label>
            <select 
             required={props.required} 
             value = {props.value}
             onChange={event => props.onChange(event.target.value)}
             >
               
                    {/* para cada item retorna uma opçao */}

                    {/*Key foreach item of  List --> Important to react knows when he needs to render again */}
                    {/* i can do something like key={item, index} --> na hora de apagar um item de 3 ,
                     e apagar o do meio o 2 item passa para index 1 --> react assume que nao mudou e nao renderiza */}
                    {props.items.map(item => <option key={item}>{item}</option>)}
               
            </select>
        </div>
    )
}

export default List;
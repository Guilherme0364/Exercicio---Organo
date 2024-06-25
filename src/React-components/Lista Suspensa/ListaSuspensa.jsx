import './ListaSuspensa.css';

export const ListaSuspensa = (props) =>{
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option> 
                })} {/* Para cada item retornar uma 'option' e imprimir o item, cada 'option' precisa ter uma key */}        
            </select>
        </div>
    )
}
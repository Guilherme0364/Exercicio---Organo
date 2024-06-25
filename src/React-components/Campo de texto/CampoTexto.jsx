import './CampoTexto.css';
import '../../Css/base.css';

export const CampoTexto = (props) =>{

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value);
    }    

    return (
        <div className='campo-texto'>
            <label className='campo-texto-label block'>
                {props.label} 
            </label>
            
            <input 
                className='campo-texto-input'
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={props.placeholder}
            />
        </div>
    )
}


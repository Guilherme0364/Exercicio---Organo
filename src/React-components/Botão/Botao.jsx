import './Botao.css';

export const Botao = (props) =>{
    return (
        <button className='botao'>
            {props.children} {/* Ao invés de receber o texto via 'props', receberemos como elemento filho, igual HTML */}
        </button>
    )
}
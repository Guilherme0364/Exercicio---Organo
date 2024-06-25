import './Colaborador.css';
import '../../Css/base.css';

const Colaborador = ({nome, imagem, cargo}) => { // Ao invés de usar props, usar um objeto desestruturado
    return (
        <div className='colaboradores'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador
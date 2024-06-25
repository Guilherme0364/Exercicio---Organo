import Colaborador from '../Colaborador/Colaborador'
import './Times.css'
import '../../Css/base.css';

export const Times = (props) =>{
    
    // Style retorna o estilo de cada componente com as 'props' definidas por objeto no 'App.jsx'
    const css = {backgroundColor: props.corFundo} // Lista de estilos CSS que será passados ao componente

    return(                
        (props.colaboradores.length > 0) ? <section className='time flex--centro' style={css}> {/* Se cumprir o 1° parâmetro, retorna o 2° parâmetro da condição */}
            <h3 className='time-titulo' style={{borderColor: props.corDestaque}}> {/* Aqui sempre será duas chaves '{}' */}
                {props.nome}
            </h3>
            <div className='flex colaborador'>
                {props.colaboradores.map(colaborador => 
                <Colaborador 
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
        : '' // Se não cumprir o 1° parâmetro do operador ternário, retorna uma String vazia (ao invés de ternário, pode ser o &&)
    )
}
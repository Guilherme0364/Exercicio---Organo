import { useState } from 'react'
import Botao from "../Botão";
import CampoTexto from "../Campo de texto";
import ListaSuspensa from "../Lista Suspensa";
import './Formulario.css';
import '../../Css/base.css';

export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => { // Variavel 'evento' surge a partir do momento em que a função é executada 
        evento.preventDefault(); // Previne o comportamento padrão de recarregar a página
        props.aoColaboradorCadastrado({
            nome, 
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setImagem('')
    }    

    return (
        <section className="formulario flex--centro">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome: "
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo:"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da sua imagem:"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times} 
                    value={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
};

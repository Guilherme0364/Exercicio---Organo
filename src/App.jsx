import { useState } from 'react';
import './Css/_reset.css';
import './Css/_variaveis.css'
import './Css/base.css'
import Banner from './React-components/Banner';
import Formulario from './React-components/Formulario';
import Times from './React-components/Times';
import Rodape from './React-components/Rodapé/Rodape';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: 'var(--cor-destaque-programacao)',
      corSecundaria: 'var(--cor-fundo-programacao)',
    },
    {
      nome: 'Front-end',
      corPrimaria: 'var(--cor-destaque-frontEnd)',
      corSecundaria: 'var(--cor-fundo-frontEnd)',
    },
    {
      nome: 'Data Science',
      corPrimaria: 'var(--cor-destaque-dataScience)',
      corSecundaria: 'var(--cor-fundo-dataScience)',
    },
    {
      nome: 'Devops',
      corPrimaria: 'var(--cor-destaque-devops)',
      corSecundaria: 'var(--cor-fundo-devops)',
    },
    {
      nome: 'UX e Design',
      corPrimaria: 'var(--cor-destaque-ux)',
      corSecundaria: 'var(--cor-fundo-ux)',
    },
    {
      nome: 'Mobile',
      corPrimaria: 'var(--cor-destaque-mobile)',
      corSecundaria: 'var(--cor-fundo-mobile)',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: 'var(--cor-destaque-inovacao)',
      corSecundaria: 'var(--cor-fundo-inovacao)',
    },

  ];

  const [colaboradores, setColaborador] = useState([]); // Array vazio

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaborador([...colaboradores, colaborador])
  }

  return (

    <div className="App">
      <Banner />

      {/* Para cada objeto do tipo 'times', busca o nome dele e passa para a variavel time */}
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {/* Para cada time da lista, cria um componente 'time' com as informações de um objeto da lista, que no caso seria uma iteração */}
      {times.map(time =>
        <Times
          key={time.nome}
          nome={time.nome}
          corDestaque={time.corPrimaria}
          corFundo={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}

        <Rodape/>
    </div>
  );
}

export default App;

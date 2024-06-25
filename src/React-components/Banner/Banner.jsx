import { Fragment } from 'react';
import './Banner.css'

export const Banner = () =>{
  return ( /* Só podemos retornar um elemento HTML por componente, então caso gostassemos de colocar mais de 
            elemento, podemos engloba-los com o "Fragment" ou simplesmente <> </>*/ 
    <Fragment>
    <header className="banner">
        <img src="./images/banner.png" alt="O banner principal da página Organo" />
    </header>    
    </Fragment>
  );
}


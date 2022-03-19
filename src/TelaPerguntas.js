import React from "react";
import Perguntas from "./Perguntas"

  
  export default function TelaPerguntas() {
    
    const [contador, setContador] = React.useState(0);
    console.log(contador)
    function contadorSoma(){setContador(contador+1)}

    return (
        <div className="tela-perguntas">
            <header className="header">
                <img className="logoPadrao" src="./img/logo.png" ></img>
                <span className="tituloPadrao">ZapRecall</span>
            </header>
            <nav>
                <Perguntas 
                 contadorSoma={contadorSoma}
                 />               
            </nav>
            <footer>
                <span>{contador}/8 CONCLUíDOS</span>
            </footer>

        </div>
    )
}
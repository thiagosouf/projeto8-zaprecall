import React from "react"
import TelaPerguntas from "./TelaPerguntas"

export default function Iniciar() {
    const [pagina,setPagina]=React.useState(false) 
    return (pagina===false) ? (
        <div className="telaInicial">
            <div className="logoInicial">
                <img className="logoGrande" src="./img/logo.png" ></img>
                <span className="tituloGrande">ZapRecall</span>
            </div>
            <div className="botaoInicial">
                <button onClick={()=>setPagina(true)}>Iniciar Recall!</button>
            </div>

        </div>
    ): (
        <TelaPerguntas />
    )
} 
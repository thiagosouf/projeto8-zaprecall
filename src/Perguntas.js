import React from "react"
import Pergunta from "./Pergunta"
import Card from "./Card"

export default function Perguntas(props) {
    
    const [pergunta, setPergunta] = React.useState(<Pergunta  icone={"./img/play.png"} opcao={props.opcao} styleTxt={'none'} styleCor={""}/>)
    

    return (
        <button onClick={() => {
            
            setPergunta(<Card opcao={props.opcao} icone={"./img/play.png"} card={props.card} resposta={props.resposta} contadorSoma={props.contadorSoma} criaIcones={props.criaIcones} />)}} >
            {pergunta}
            
        </button>
    )   
}
import React from "react"



export default function Perguntas(props) {

    const [pergunta, setPergunta] = React.useState(<Pergunta opcao={props.opcao}/>)
    

    return (
        <button onClick={() => setPergunta(<Card card={props.card}/>)} >
            {pergunta}
            
        </button>
    )
}

function Pergunta(props){
    return(
        <div className="botaoPergunta">
            <span>{props.opcao}</span>
            <img src="./img/play.png"></img>
        </div>
    )
}

function Card(props){
    return(
        <div className="card">
            <span>{props.card}</span>
            <img  className="setinha" src="./img/setinha.png"></img>
        </div>
    )
}
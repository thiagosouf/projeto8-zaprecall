import React from "react"


function Perguntas(props) {

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

export default function ChamarPerguntas(){
    const parametros = [
        {opcao:"Pergunta 1", card:"O que é JSX?"},
        {opcao:"Pergunta 2", card:"O React é __"},
        {opcao:"Pergunta 3", card:"Componentes devem iniciar com __"},
        {opcao:"Pergunta 4", card:"Podemos colocar __ dentro do JSX"},
        {opcao:"Pergunta 5", card:"O ReactDOM nos ajuda __"},
        {opcao:"Pergunta 6", card:"Usamos o npm para __"},
        {opcao:"Pergunta 7", card:"Usamos props para __"},
        {opcao:"Pergunta 8", card:"Usamos estado (state) para __"}]
    return(
        <>
        {parametros.map(dados =>
            <Perguntas opcao={dados.opcao} card={dados.card}/>)}
        </>
    )
}
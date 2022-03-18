import React from "react"


function Perguntas(props) {

    const [pergunta, setPergunta] = React.useState(<Pergunta opcao={props.opcao}/>)
    

    return (
        <button onClick={() => setPergunta(<Card resposta={props.resposta} card={props.card} />)} >
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
    const [card, setCard] = React.useState(false)
    return !card ?(
        <div className="card">
            <span>{props.card}</span>
            <button onClick={()=>setCard(true)}><img className="setinha" src="./img/setinha.png"></img></button>
        </div>
    ) :(
        <div className="card">
            <span>{props.resposta}</span>
        </div>
    )


    // ISSO TA FUNCIONANDO SÓ MUDANDO O TEXTO
    // const [texto, setTexto] = React.useState(props.card)
    // return (

    //     <div className="card">
    //         <span>{texto}</span>
    //         <div onClick={()=>setTexto(props.resposta)}><img className="setinha" src="./img/setinha.png"></img></div>
    //     </div>
    // )
}

function CardPergunta(props){
return(
    <>
        <span>{props.card}</span>
        <div><img className="setinha" src="./img/setinha.png"></img></div>
    </>
)
}

// function CardResposta(props){
// return(
//     <div className="card">
//     <span>{props.opcao}</span>
//     </div>
// )
// }




export default function ChamarPerguntas(){
    const parametros = [
        {opcao:"Pergunta 1", card:"O que é JSX?", resposta:"Uma extensão de linguagem do JavaScript"},
        {opcao:"Pergunta 2", card:"O React é __", resposta:"Uma biblioteca JavaScript para construção de interfaces"},
        {opcao:"Pergunta 3", card:"Componentes devem iniciar com __", resposta:"Letra maiúscula"},
        {opcao:"Pergunta 4", card:"Podemos colocar __ dentro do JSX", resposta:"Expressões"},
        {opcao:"Pergunta 5", card:"O ReactDOM nos ajuda __", resposta:"Interagindo com a DOM para colocar componentes React na mesma"},
        {opcao:"Pergunta 6", card:"Usamos o npm para __", resposta:"Gerenciar os pacotes necessários e suas dependências"},
        {opcao:"Pergunta 7", card:"Usamos props para __", resposta:"Passar diferentes informações para componentes "},
        {opcao:"Pergunta 8", card:"Usamos estado (state) para __", resposta:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]


    return(
        <>
        {parametros.map(dados =>
            <Perguntas opcao={dados.opcao} card={dados.card} resposta={dados.resposta}/>)}
        </>
    )
}
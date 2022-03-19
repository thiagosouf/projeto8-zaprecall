import React from "react"



function Perguntas(props) {
    
    const [pergunta, setPergunta] = React.useState(<Pergunta opcao={props.opcao}/>)
      

    return (
        <button onClick={() => setPergunta(<Card resposta={props.resposta} card={props.card} opcao={props.opcao}/>)} >
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
    const [pergunta, setPergunta] = React.useState(<Pergunta opcao={props.opcao}/>)
    return !card ?(
        <div className="card">
            <span>{props.card}</span>
            <button onClick={()=>setCard(true)}><img className="setinha" src="./img/setinha.png"></img></button>
        </div>
    ) :(
        // *******************8*********TEMOS ALGUMA COISA AQUI    O pergunta vai ser a resposta e o set vai ser a volta
        <>{pergunta}</>
        // <div className="card">
        //     <span>{props.resposta}</span>
        //     <div className="botoes">
        //     <button className="nao-lembrei" >Não lembrei</button>
        //     <button className="quase" >Quase não lembrei</button>
        //     <button className="zap" >Zap!</button>
        //     </div>
            
        // </div>
    )
}

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
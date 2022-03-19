import React from "react"
let end = 0
function Perguntas(props) {
    
    const [pergunta, setPergunta] = React.useState(<Pergunta  icone={"./img/play.png"} opcao={props.opcao} styleTxt={'none'} styleCor={""}/>)
    

    return (
        <button onClick={() => {
            
            setPergunta(<Card opcao={props.opcao} icone={"./img/play.png"} card={props.card} resposta={props.resposta} contadorSoma={props.contadorSoma} criaIcones={props.criaIcones} />)}} >
            {pergunta}
            
        </button>
    )   
}

function Pergunta(props){
    return(
        <div className="botaoPergunta" style={{textDecoration: props.styleTxt,color: props.styleCor}}>
            <span>{props.opcao}</span>
            <img src={props.icone}></img>
        </div>
    )
}

function Card(props){
    const [card, setCard] = React.useState(false)
    const [click, setClick] = React.useState({color:"black", icone:"./img/play.png"})
    
    return !card ?(
        <div className="card" >
            <span>{props.card}</span>
            <button onClick={()=>setCard(true)}><img className="setinha" src="./img/setinha.png"></img></button>
        </div>
    ) :
    (click.color==="black")?(
        
        <>
        
        <div className="card">
            <span>{props.resposta}</span>
            <div className="botoes">
            <button onClick={()=>{props.contadorSoma();props.criaIcones("./img/red.png");setClick({color:"#FF3030", icone:"./img/red.png"})}} className="nao-lembrei">Não lembrei</button>
            <button onClick={()=>{props.contadorSoma();props.criaIcones("./img/yellow.png");setClick({color:"#FF922E", icone:"./img/yellow.png"})}}  className="quase">Quase não lembrei</button>
            <button onClick={()=>{props.contadorSoma();props.criaIcones("./img/green.png");end=1;setClick({color:"#2FBE34", icone:"./img/green.png"})}} className="zap">Zap!</button>
            
           
            </div>
            
        </div>
        </>
    ):(<><Pergunta opcao={props.opcao} icone={props.icone}styleTxt={"line-through"} styleCor={click.color} icone={click.icone}/>{console.log(end=end+1)}</>)
}

export default function ChamarPerguntas(props){

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
            <Perguntas contadorSoma={props.contadorSoma} criaIcones={props.criaIcones} opcao={dados.opcao} card={dados.card} resposta={dados.resposta}/>)}
        </>
    )
}
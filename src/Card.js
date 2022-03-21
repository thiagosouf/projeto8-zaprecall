import React from "react"
import Pergunta from "./Pergunta"

export default function Card(props){
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
            <button onClick={()=>{props.contadorSoma();props.criaIcones("./img/green.png");setClick({color:"#2FBE34", icone:"./img/green.png"})}} className="zap">Zap!</button>
            
           
            </div>
            
        </div>
        </>
    ):(<><Pergunta opcao={props.opcao} styleTxt={"line-through"} styleCor={click.color} icone={click.icone}/></>)
}
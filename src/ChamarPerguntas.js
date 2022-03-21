import React from "react"
import Perguntas from "./Perguntas"
import Pergunta from "./Pergunta"

let parametros = [
    {opcao:"Pergunta 1", card:"O que é JSX?", resposta:"Uma extensão de linguagem do JavaScript"},
    {opcao:"Pergunta 2", card:"O React é __", resposta:"Uma biblioteca JavaScript para construção de interfaces"},
    {opcao:"Pergunta 3", card:"Componentes devem iniciar com __", resposta:"Letra maiúscula"},
    {opcao:"Pergunta 4", card:"Podemos colocar __ dentro do JSX", resposta:"Expressões"},
    {opcao:"Pergunta 5", card:"O ReactDOM nos ajuda __", resposta:"Interagindo com a DOM para colocar componentes React na mesma"},
    {opcao:"Pergunta 6", card:"Usamos o npm para __", resposta:"Gerenciar os pacotes necessários e suas dependências"},
    {opcao:"Pergunta 7", card:"Usamos props para __", resposta:"Passar diferentes informações para componentes "},
    {opcao:"Pergunta 8", card:"Usamos estado (state) para __", resposta:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]

parametros = parametros.sort( () => Math.random() -0.5 )

export default function ChamarPerguntas(props){

    
    return(
        <>
        {parametros.map((dados,indice) =>
            <Perguntas contadorSoma={props.contadorSoma} criaIcones={props.criaIcones} opcao={`Pergunta ${indice+1}`} card={dados.card} resposta={dados.resposta}/>)}
                                                                                       
        
        </>
    )
}
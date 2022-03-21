

export default function Pergunta(props){
    return(
        <div className="botaoPergunta" style={{textDecoration: props.styleTxt,color: props.styleCor}}>
            <span>{props.opcao}</span>
            <img src={props.icone}></img>
        </div>
    )
}
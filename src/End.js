

export default function End(props){
    return ((props.x)===-1)?(<><span><img src="./img/parabens.png"></img>PARABÉNS!</span><span className="textoFinal">Você não esqueceu de nenhum flashcard!</span></>)
                :(<><span><img src="./img/putz.png"></img>PUTZ!</span><span className="textoFinal">
                    Ainda faltaram alguns...
                    Mas não desanime!</span></>)
}
import React from "react";
import Perguntas from "./Perguntas"
const maximoCards = 8
let x = false

export default function TelaPerguntas() {

    const [contador, setContador] = React.useState(0);
    function contadorSoma() { setContador(() => contador + 1) }

    const [icones, setIcones] = React.useState([""]);
    function criaIcones(icone) { setIcones([...icones, icone]) }



    return (contador !== maximoCards) ? (
        <div className="tela-perguntas">
            <Header />
            <nav>
                <Perguntas
                    contadorSoma={contadorSoma} criaIcones={criaIcones}
                />
                {console.log(x)}
            </nav>
            <footer>
                <span>{contador}/{maximoCards} CONCLUíDOS</span>

                <div className="icones-footer">
                    {icones.map((i) => (<img src={i}></img>))}
                </div>
            </footer>

        </div>
    ) : (
        <div className="tela-perguntas">
        <Header />
        <nav>
            <Perguntas
                contadorSoma={contadorSoma} criaIcones={criaIcones}
            />
            {console.log(x)}
        </nav>
            <footer style={{height:112, justifyContent:"space-evenly", alignItems:"center"}}>
                <End x={(icones.indexOf('./img/red.png'))} />

                <div className="icones-footer">
                    {icones.map((i) => (<img src={i}></img>))}
                </div>
            </footer>

        </div>
    )
}

function Header() {
    return (
        <header className="header">
            <img className="logoPadrao" src="./img/logo.png" ></img>
            <span className="tituloPadrao">ZapRecall</span>
        </header>
    )
}

function End(){
   
    return (x===-1)?(<><span><img src="./img/parabens.png"></img>PARABÉNS!</span><span className="textoFinal">Você não esqueceu de nenhum flashcard!</span></>)
                :(<><span><img src="./img/putz.png"></img>PUTZ!</span><span className="textoFinal">
                    Ainda faltaram alguns...
                    Mas não desanime!</span></>)
}
import React from "react";
import Header from "./Header";
import ChamarPerguntas from "./ChamarPerguntas";
import End from "./End";
const maximoCards = 8
let x = 0

export default function TelaPerguntas() {

    const [contador, setContador] = React.useState(0);
    function contadorSoma() { setContador(() => contador + 1) }

    const [icones, setIcones] = React.useState([""]);
    function criaIcones(icone) { setIcones([...icones, icone]) }



    return (contador !== maximoCards) ? (
        <div className="tela-perguntas">
            <Header />
            <nav>
                <ChamarPerguntas
                    contadorSoma={contadorSoma} criaIcones={criaIcones}
                />
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
            <ChamarPerguntas
                contadorSoma={contadorSoma} criaIcones={criaIcones}
            />
        </nav>
            <footer style={{height:112, justifyContent:"space-evenly", alignItems:"center"}}>
                <End x={icones.indexOf('./img/red.png')} />
                <div className="icones-footer">
                    {icones.map((i) => (<img src={i}></img>))}
                </div>
            </footer>

        </div>
    )
}




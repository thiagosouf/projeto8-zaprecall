  export default function TelaPerguntas() {
    return (
        <div className="tela-perguntas">
            <header className="header">
                <img className="logoPadrao" src="./img/logo.png" ></img>
                <span className="tituloPadrao">ZapRecall</span>
            </header>
            <nav>
                {/* <Perguntas /> */}
                <button className="botaoPergunta">
                    <span>Pergunta 1</span>
                    <img src="./img/play.png">img7</img>
                </button>
            </nav>
            <footer>
                <span>0/4 CONCLUíDOS</span>
            </footer>

        </div>
    )
}
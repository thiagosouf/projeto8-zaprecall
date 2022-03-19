import Perguntas from "./Perguntas"
let cont = 0;
  export default function TelaPerguntas() {
    

    return (
        <div className="tela-perguntas">
            <header className="header">
                <img className="logoPadrao" src="./img/logo.png" ></img>
                <span className="tituloPadrao">ZapRecall</span>
            </header>
            <nav>
                <Perguntas/>
            </nav>
            <footer>
                <span>{cont}/4 CONCLUíDOS</span>
            </footer>

        </div>
    )
}
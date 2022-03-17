
  import ChamarPerguntas from "./Perguntas"
import Perguntas from "./Perguntas"
  
  export default function TelaPerguntas() {
    

    return (
        <div className="tela-perguntas">
            <header className="header">
                <img className="logoPadrao" src="./img/logo.png" ></img>
                <span className="tituloPadrao">ZapRecall</span>
            </header>
            <nav>
                <Perguntas />
            </nav>
            <footer>
                <span>0/4 CONCLUíDOS</span>
            </footer>

        </div>
    )
}
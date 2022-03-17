
  import Perguntas from "./Perguntas"
  
  export default function TelaPerguntas() {
    

    return (
        <div className="tela-perguntas">
            <header className="header">
                <img className="logoPadrao" src="./img/logo.png" ></img>
                <span className="tituloPadrao">ZapRecall</span>
            </header>
            <nav>
                <Perguntas opcao="Pergunta 1" card="O que é JSX?"/>
                <Perguntas opcao="Pergunta 2" card="O React é __"/>
                <Perguntas opcao="Pergunta 3" card="Componentes devem iniciar com __"/>
                <Perguntas opcao="Pergunta 4" card="Podemos colocar __ dentro do JSX"/>
                <Perguntas opcao="Pergunta 5" card="O ReactDOM nos ajuda __"/>
                <Perguntas opcao="Pergunta 6" card="Usamos o npm para __"/>
                <Perguntas opcao="Pergunta 7" card="Usamos props para __"/>
                <Perguntas opcao="Pergunta 8" card="Usamos estado (state) para __"/>
            </nav>
            <footer>
                <span>0/4 CONCLUíDOS</span>
            </footer>

        </div>
    )
}
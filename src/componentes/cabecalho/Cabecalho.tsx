import Logo from "../logo/Logo"
import './cabecalho.css'

function Cabecalho(){
    return(
        <header className="cabecalho">
                <a href="/"><Logo/></a>
                <a className="link" href="/sobre">Sobre</a>
                <a className="link" href="/arrecadados">Arrecadados</a>
                <a className="link" href="/doados">Doados</a>
            </header>
    )
}

export default Cabecalho
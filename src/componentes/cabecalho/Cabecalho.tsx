import Logo from "../logo/Logo"
import './cabecalho.css'

function Cabecalho(){
    return(
        <header className="cabecalho">
                <Logo/>
                <a className="link" href="#">Sobre</a>
                <a className="link" href="#">Arrecadados</a>
                <a className="link" href="#">Doados</a>
            </header>
    )
}

export default Cabecalho
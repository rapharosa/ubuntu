import { Link } from "react-router-dom"
import Logo from "../logo/Logo"
import './cabecalho.css'

function Cabecalho(){
    return(
        <header className="cabecalho">
                
                <Link to="/"><Logo/></Link>
                <Link className="link" to={"/sobre"}>Sobre</Link>
                <Link className="link" to={"/arrecadados"}>Arrecadados</Link>
                <Link className="link" to={"/doados"}>Doados</Link>
            </header>
    )
}

export default Cabecalho
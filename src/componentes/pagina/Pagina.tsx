import Arrecadados from "../arrecadados/Arrecadados";
import Cabecalho from "../cabecalho/Cabecalho";
import Doados from "../doados/Doados";
import Sobre from "../sobre/Sobre";
import './pagina.css'

function Pagina(){
    return(
        <div className="pagina">
            <Cabecalho/>
            <Sobre/>
            <Arrecadados/>
            <Doados/>
        </div>
    )
}

export default Pagina;
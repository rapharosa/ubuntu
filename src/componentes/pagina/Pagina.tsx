import Arrecadados from "../arrecadados/Arrecadados";
import Cabecalho from "../cabecalho/Cabecalho";
import Sobre from "../sobre/Sobre";
import './pagina.css'

function Pagina(){
    return(
        <div className="pagina">
            <Cabecalho/>
            <Sobre/>
            <Arrecadados/>
        </div>
    )
}

export default Pagina;
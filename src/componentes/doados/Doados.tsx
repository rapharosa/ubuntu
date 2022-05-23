import Cabecalho from '../cabecalho/Cabecalho'
import './doados.css'
function Doados(){
    return(
        <div className='lista-doados'>
            <Cabecalho/>
            <h1>Doados</h1>
            <h2>Doamos até agora:</h2>
            <div className='categoria-doados'>
                <p><strong>Cobertores:</strong></p><b> 6</b>
            </div>
            <div className='categoria-doados'>
                <p><strong>Masculino</strong></p>
                <p>Blusas de frio:</p><b> 4</b>
                <p>Calças:</p><b> 2</b>
            </div>
            <div className='categoria-doados'>
                <p><strong>Feminino</strong></p>
                <p>Blusas de frio:</p><b> 12</b>
                <p>Calças:</p><b> 1</b>
            </div>
            <div className='categoria-doados'>
                <p><strong>Infantil</strong></p>
                <p>Blusas de frio:</p><b> 9</b>
                <p>Calças:</p><b> 6</b>
            </div>
            <div className='categoria-doados'>
                <p><strong>Valor em dinheiro usado</strong></p>
                <b>R$ 0,00</b>
            </div>
        </div>
    )
}

export default Doados
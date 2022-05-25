import Cabecalho from '../cabecalho/Cabecalho'
import Footer from '../footer/Footer'
import './doados.css'
function Doados(){
    return(
        <div className='lista-doados'>
            <Cabecalho/>
            <div className='lista-dados-container'>
                <h1>Doados</h1>
                <h2>Doamos até agora:</h2>
                <div className='container-doados'>
                    <div className='categoria-doados'>
                        <p><strong>Cobertores:</strong></p><b> 6</b>
                    </div>
                    <div className='categoria-doados'>
                        <p><strong>Masculino</strong></p>
                        <div>
                            <p>Blusas de frio:</p><b> 4</b>
                            <p>Calças:</p><b> 2</b>
                        </div>
                    </div>
                    <div className='categoria-doados'>
                        <p><strong>Feminino</strong></p>
                        <div>
                            <p>Blusas de frio:</p><b> 12</b>
                            <p>Calças:</p><b> 1</b>
                        </div>
                    </div>
                    <div className='categoria-doados'>
                        <p><strong>Infantil</strong></p>
                        <div>
                            <p>Blusas de frio:</p><b> 9</b>
                            <p>Calças:</p><b> 6</b>
                        </div>
                    </div>
                    <div className='categoria-doados'>
                        <p><strong>Valor em dinheiro usado</strong></p>
                        <b>R$ 0,00</b>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Doados
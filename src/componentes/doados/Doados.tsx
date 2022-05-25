import Cabecalho from '../cabecalho/Cabecalho'
import Footer from '../footer/Footer'
import './doados.css'
function Doados(){
    return(
        <div className='lista'>
            <Cabecalho/>
            <div className='lista-container'>
                <h1>Doados</h1>
                <h2>Doamos até agora:</h2>
                <div className='lista-doados'>
                    <div className='categoria'>
                        <p><strong>Cobertores:</strong></p><b> 6</b>
                    </div>
                    <div className='categoria'>
                        <p><strong>Masculino</strong></p>
                        <div>
                            <p>Blusas de frio:</p><b> 4</b>
                            <p>Calças:</p><b> 2</b>
                        </div>
                    </div>
                    <div className='categoria'>
                        <p><strong>Feminino</strong></p>
                        <div>
                            <p>Blusas de frio:</p><b> 12</b>
                            <p>Calças:</p><b> 1</b>
                        </div>
                    </div>
                    <div className='categoria'>
                        <p><strong>Infantil</strong></p>
                        <div>
                            <p>Blusas de frio:</p><b> 9</b>
                            <p>Calças:</p><b> 6</b>
                        </div>
                    </div>
                    <div className='categoria'>
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
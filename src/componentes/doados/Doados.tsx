import Cabecalho from '../cabecalho/Cabecalho'
import Footer from '../footer/Footer'
import './doados.css'
function Doados(){
    return(
        <div className='lista'>
            <Cabecalho/>
            <div className='lista-container'>
                <h1 className='titulo-secao'>Doados</h1>
                <h2 className='subtitulo-secao'>Doamos até agora:</h2>
                <div className='lista-doados'>
                    <div className='categoria'>
                        <p className='texto-secao'><strong>Cobertores:</strong></p><b> 12</b>
                    </div>
                    <div className='categoria'>
                        <p className='texto-secao'><strong>Masculino</strong></p>
                        <div>
                            <p className='texto-secao'>Blusas de frio:</p><b> 4</b>
                            <p className='texto-secao'>Calças:</p><b> 4</b>
                        </div>
                    </div>
                    <div className='categoria'>
                        <p className='texto-secao'><strong>Feminino</strong></p>
                        <div>
                            <p className='texto-secao'>Blusas de frio:</p><b> 19</b>
                            <p className='texto-secao'>Calças:</p><b> 2</b>
                        </div>
                    </div>
                    <div className='categoria'>
                        <p className='texto-secao'><strong>Infantil</strong></p>
                        <div>
                            <p className='texto-secao'>Blusas de frio:</p><b> 4</b>
                            <p className='texto-secao'>Calças:</p><b> 5</b>
                        </div>
                    </div>
                    <div className='categoria'>
                        <p className='texto-secao'><strong>Valor em dinheiro usado</strong></p>
                        <b>R$ 50,00</b>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Doados
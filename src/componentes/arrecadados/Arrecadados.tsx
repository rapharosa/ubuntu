import Cabecalho from '../cabecalho/Cabecalho'
import '../doados/doados.css'
import Footer from '../footer/Footer'
function Arrecadados(){
    return(
        <div className="lista">
            <Cabecalho/>
            <div className='lista-container'>
                <h1 className='titulo-secao'>Arrecadados</h1>
                <h2 className='subtitulo-secao'>Arrecadamos até agora:</h2>
                <div className='lista-doados'>
                    <div className='categoria'>
                        <p className='texto-secao'><strong>Cobertores:</strong></p><b>12</b>
                    </div>
                    <div className='categoria'>
                        <p className='texto-secao'><strong>Masculino</strong></p>
                        <div>
                            <p className='texto-secao'>Blusas de frio:</p><b> 18</b>
                            <p className='texto-secao'>Calças:</p><b> 4</b>
                        </div>
                    </div>
                    <div className='categoria'>
                        <p className='texto-secao'><strong>Feminino</strong></p>
                        <div>
                            <p className='texto-secao'>Blusas de frio:</p><b> 40</b>
                            <p className='texto-secao'>Calças:</p><b> 6</b>
                        </div>
                    </div>
                    <div className='categoria'>
                        <p className='texto-secao'><strong>Infantil</strong></p>
                        <div>
                            <p className='texto-secao'>Blusas de frio:</p><b> 12</b>
                            <p className='texto-secao'>Calças:</p><b> 10</b>
                        </div>
                    </div>
                    <div className='categoria'>
                        <p className='texto-secao'><strong>Valor em Dinheiro</strong></p>
                        <b>R$ 320,00</b>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Arrecadados

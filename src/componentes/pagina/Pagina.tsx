import './pagina.css'
import logo from '../../assets/logo/ubuntu-logo-branco.png';
import Cabecalho from '../cabecalho/Cabecalho';
import Footer from '../footer/Footer';

function Pagina(){
    return(
        <div className="pagina">
            <Cabecalho/>
            
            <div>
                <div className='container-pagina'>
                    <img className='logo-pagina' src={logo} alt="Logo do projeto Ubuntu" />
                    <div>
                        <h2 className='subtitulo-pagina'>Nos ajude a aquecer as mais pessoas</h2>
                        <p className='texto-pagina'>Doe agasalhos, cobertores ou faça sua doação pelo PIX</p>
                    </div>
                </div>
                <div className='container-perguntas'>
                    <div className='container-pagina-2'>
                        <p className='pergunta'>Qual é a ideia do projeto?</p>
                        <p className='resposta'>A ideia é arrecadar agasalhos, cobertores e dinheiro para compra desses, e 
                        doar para pessoas em situação de rua. Leia mais na seção sobre.
                        </p>
                    </div>
                    <div className='container-pagina-2'>
                        <p className='pergunta'>Não sou de BH, quero ajudar financeiramente, como faço?</p>
                        <p className='resposta'>Entre em contato comigo pelo WhatsApp 31-991791585</p>
                    </div>
                    <div className='container-pagina-2'>
                        <p className='pergunta'>Estou perto de BH, onde posso deixar as doações?</p>
                        <p className='resposta'>Entre em contato comigo pelo WhatsApp 31-991791585, para combinarmos o dia e 
                        o local de entrega da sua doação!
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Pagina;
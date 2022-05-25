import './footer.css'
import logo from '../../assets/logo/ubuntu-logo.png';
function Footer(){
    return(
        <footer className='footer'>
            <img className='imagem-footer' src={logo} alt='Logo Ubuntu'></img>
            <div className='container-texto-footer'>
                
                <div className='texto-footer-2'>Solidariedade, compaixão com os necessitados,
                e o desejo sincero de felicidade e harmonia entre nós.
                </div>
            </div>
        </footer>
    )
}
export default Footer;
import Cabecalho from '../cabecalho/Cabecalho'
import './sobre.css'
function Sobre(){
    return(
        <div className="conteudo">
            <Cabecalho/>
                <h2 className="titulo">Sobre</h2>
                <p className="texto">Desde esse (des)governo federal (2019),
                 a população de rua aumentou consideravelmente, estima-se que só em Belo Horizonte
                 são aproximadamente 9 mil pessoas em situação de rua (levantamento feito pela UFMG).
                 Tendo em vista o descaso do governo (federal, estadual e municipal) em fazer garantir o direito a moradia,
                 que é um direito de todos e que está na constituição (constituição essa que eles juraram cumprir), resolvi
                 recolher e entregar doações de cobertores, agasalhos e recursos financeiros para combater o frio, e ajudar 
                 minimamente essas pessoas que hoje estão em situação de rua.
                 <br></br>
                 <br></br>
                 Para melhor organização, fiz essa pagina para acompanhamento das doações e das entregas. 
                 Por aqui, é possível acompanhar quais itens foram arrecadados e quais já foram doados, 
                 o dinheiro arrecadado, o que foi comprado com o dinheiro, e quantas pessoas aproximadamente foram ajudadas.
                 <br></br>
                 <br></br>
                 A atualização dessa pagina será feita sempre que recebermos qualquer doação e fizermos qualquer entrega.
                 <br></br>
                 <br></br>
                 Lembrando que todo o processo está sendo feito por mim e por alguns voluntários, desde a arrecadação, 
                 a entrega dos itens arrecadados, a compra de agasalhos, 
                 atualização desta pagina, etc.
                 <p className="texto-destaque">Conto com sua ajuda!</p>
                 </p>
            </div>
    )
}
export default Sobre
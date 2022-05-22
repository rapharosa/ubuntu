import './arrecadados.css'
function Arrecadados(){
    return(
        <div className="lista">
            <h1>Arrecadados</h1>
            <h2>Arrecadamos até agora:</h2>
            <div className='categoria'>
                <p><strong>Cobertores:</strong></p><b> 6</b>
            </div>
            <div className='categoria'>
                <p><strong>Masculino</strong></p>
                <p>Blusas de frio:</p><b> 4</b>
                <p>Calças:</p><b> 2</b>
            </div>
            <div className='categoria'>
                <p><strong>Feminino</strong></p>
                <p>Blusas de frio:</p><b> 12</b>
                <p>Calças:</p><b> 1</b>
            </div>
            <div className='categoria'>
                <p><strong>Infantil</strong></p>
                <p>Blusas de frio:</p><b> 9</b>
                <p>Calças:</p><b> 6</b>
            </div>
            <div className='categoria'>
                <p><strong>Valor em Dinheiro</strong></p>
                <b>R$ 0,00</b>
                </div>
        </div>
    )
}
export default Arrecadados

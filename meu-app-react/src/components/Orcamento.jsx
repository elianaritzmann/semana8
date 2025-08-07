
import './Orcamento.css'
function orcamento(){
    return(
        <div>
            <h2 id='titulo'>Solicite seu orçamento</h2>
            <form action="">
                <input type="text" name="nome" id="nome" placeholder="seu nome"/>
                <input type="text" name="email" id="email"placeholder="Seu email" />
                <textarea name="descricao" id="descricao" placeholder="Descreva seu projeto(área, localização)"></textarea>
            </form>
        </div>
    )
}
export default orcamento
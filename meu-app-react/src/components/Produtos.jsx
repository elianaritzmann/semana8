import './Produtos.css'

function produtos(){
    return(
        <div id='divproduto'> 
            <section id='nossosprodutostexto'>
                <h2>Nossos Produtos</h2>
            </section>
            <section id='sectionproduto'> 
                <article className='produto'>
                    <img src="/painel_solar_sunova_550wp_1_.jpg" alt="placa solar" />
                    <h3>Placa Solar 400w</h3>
                    <p>Alta eficiência para uso residencial e comercial.</p>
                </article>
                 <article className='produto'>
                    <img src="\kit_gerador_solar_off_grid_1800wp_para_freezer_ventilador_lampadas_e_tomadas_1307_1_c4fe95493878d07c8d956191e0f0d6fb.webp" alt="placa solar" />
                    <h3>Kit solar completo</h3>
                    <p>Inclui placas, inversor, esrutura, cabos, e instalação.</p>
                </article>
                 <article className='produto'>
                    <img src="\canal-solar-Inversor-solar-o-que-e-e-pra-que-serve-1.jpg" alt="placa solar" />
                    <h3>Inversor solar</h3>
                    <p>Transforma energia solar em energia elétrica para sua casa.</p>
                </article>
            </section>
        </div>
    )
}
export default produtos
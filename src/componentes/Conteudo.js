import React from 'react'

const Conteudo = props=>{
    return(
        <div>
            <div className='conteudoPrincipal'> 
                <div className='container'>	
                    <div className='conteudoFilme'>
                        <div className='container'>
                            <div className='poster'>
                            {/* poster_path */}
                                <a href='interna.html' target='_blank'><img src='../img1.jpg' alt='Img Teste' /></a>
                            </div>
                            <div className='filme'>
                            {/* original_title */}    
                            <h3 className='titulo'>Thor: Ragnarok Thor: Ragnarok Thor: Ragnarok Thor: Ragnarok Thor: Ragnarok Thor: Ragnarok</h3>
                            {/* vote_average  */}
                            <p className='ratingValue'>72%</p>
                            {/* release_date */}
                                <p className='dateMovie'>11/08/2018</p>
                                {/* overview */}
                                <p className='descricaoFilme'>Após anos afastado, Thor retorna para casa e descobre 
                                    que seu pai Odin, rei de Asgard, está desaparecido. 
                                    Após encontra-lo, ele toma conhecimento de sua irmã 
                                    mais velha, Hela, a poderosa e implacável deusa da morte. 
                                    Com o auxílio de Loki, ele enfrenta Hela, mas durante a batalha,
                                    Thor acaba preso em…
                                    Aprisionado pelo demônio de fogo Surtur, Thor (Chris Hemsworth) 
                                    descobre que precisa retornar com urgência para Asgard e evitar o 
                                    Ragnarok - a destruição de seu lar e seu povo.
                                </p>

                            <button className='button1 button2'>Aventura</button>
                            <button className='button1 button2'>Aventura</button>
                            <button className='button1 button2'>Aventura</button>
                            <button className='button1 button2'>Ação</button>
                            </div>	
                        </div>			
                    </div>
                
               
                </div>		
            </div>
        </div>
    )
}

export default Conteudo
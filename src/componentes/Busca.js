import React from 'react'

const Busca = props=>{
    return(
        <div> 
        <div className='conteudoPrincipal'>
        
            <div className='container'>	
             <div className='barraBusca'>
                            <form className='buscarFilmes' action='/action_page.php'>
                                <input type='text' placeholder='Busque um filme por nome, ano ou gênero..' name='search' />
                            </form>
                    </div>
                    </div>
                    </div>
        </div>
    )
}
export default Busca
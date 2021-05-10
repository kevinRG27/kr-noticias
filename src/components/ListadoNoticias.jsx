import React from 'react'
import Noticia from './Noticia'

const ListadoNoticias = ({noticias}) => {

    
    return ( 
        <div className="row">
            {noticias.map(nnoticia => (
                <Noticia
                    key= {nnoticia.url}
                    noticia = {nnoticia}
                />
                ))}
        </div>
     );
}
 
export default ListadoNoticias;
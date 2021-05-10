import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelector'

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deportes'},
        {value:'tecnology', label:'Tecnologia'}
    ];

    //utilizar el custome hook
    const [categoria, SelectNoticias] = useSelect('general',OPCIONES);

    //submit al form pasar actegoria a app.js
    const buscarNoticas = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    }

    return ( 
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticas}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>

                    <SelectNoticias />

                    <div className=' input-field col s12' >
                        <input 
                        type="submit"
                        className={`btn-large amber darken-2 ${styles.btn_block}`}
                        value="Buscar"
                        />

                    </div>
                </form>
            </div>
        </div>

     );
}
 
export default Formulario;
import React,{Fragment,useState,useEffect}from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  //definir categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  //llamado a la API
  useEffect(() => {
      const consultarAPI = async () => {
        const API_KEY = '3f3d34c2d7294a9fb5fdafcf29d92167';
        const country = 'co';
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${categoria}&apiKey=${API_KEY}`;

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        guardarNoticias(noticias.articles);
      }
      consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header
      titulo= "Buscador de noticias"
      />

      <div className="container white "></div>
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias = {noticias}
        />
    </Fragment>
  );
}

export default App;

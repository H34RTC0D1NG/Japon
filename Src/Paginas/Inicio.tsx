import Gastronomia from '../Componentes/Atomos/Gastronomia'
import Desplazate from '../Componentes/Atomos/Desplazate'
import Explorar from '../Componentes/Atomos/Explorar'

import Banner from '../Componentes/Moleculas/Banner'
import { Img } from '../Datos'
import '../Css/Seccion_1.css'

function Inicio() {
    return (
        <section className = 'inicio' id = 'Tokio'>
            <div className = 'inicio-fondo'>
                <Banner
                Titulo = 'Japon'
                Imagen = {Img.Monte}
                />
            </div>

            <span className = 'kanji'>日本</span>

            <span className = 'petalo' style = {{ left: '0%', width: 8, height: 8, animationDelay: '0s', animationDuration: '9s' }}         />
            <span className = 'petalo' style = {{ left: '37%', width: 12, height: 12, animationDelay: '0.7s', animationDuration: '11s' }}   />
            <span className = 'petalo' style = {{ left: '74%', width: 16, height: 16, animationDelay: '1.4s', animationDuration: '13s' }}   />
            <span className = 'petalo' style = {{ left: '11%', width: 20, height: 20, animationDelay: '2.1s', animationDuration: '15s' }}   />
            <span className = 'petalo' style = {{ left: '48%', width: 8, height: 8, animationDelay: '2.8s', animationDuration: '9s' }}      />
            <span className = 'petalo' style = {{ left: '85%', width: 12, height: 12, animationDelay: '3.5s', animationDuration: '11s' }}   />
            <span className = 'petalo' style = {{ left: '22%', width: 16, height: 16, animationDelay: '4.2s', animationDuration: '13s' }}   />
            <span className = 'petalo' style = {{ left: '59%', width: 20, height: 20, animationDelay: '4.9s', animationDuration: '15s' }}   />

            <div className = 'wrap contenido'>
                <p className = 'etiqueta'> El Pais De Las Maravillas </p>

                <h1 className = 'titulo'>
                    <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>Tokio</span>
                    <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>/</span>
                    <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>Japón</span>
                </h1>

                <p className = 'sub'>
                    La ciudad que cambia la perspectiva de mucha gente con su cultura o dominio.
                </p>

                <div className = 'acciones'>
                    <Explorar />
                    <Gastronomia />
                </div>
            </div>

            <Desplazate />

        </section>
    )
} export default Inicio
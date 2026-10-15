import Imagenes from '../Componentes/Moleculas/Imagenes'
import { FaCloudSun } from 'react-icons/fa6'
import '../Css/Seccion_2.css'

function Estaciones() {
    return (
        <section className = 'seccion' id = 'Estacion'>
            <div className = 'wrap inverso'>
                <div className = 'texto'>

                    <h2 className = 'titulo'> <FaCloudSun /> Las Cuatro Estaciones </h2>
                    
                    <p>
                        Japón vive con una intensidad distinta cada estación, y buena parte
                        de viajar ahi es elegir cual se quiere ver. La primavera enciende de
                        rosa los parques con la floracion del bioma de Sakura, el verano tras
                        festivales, fuegos artificiales y un calor humedo que se combate con
                        hielo raspado.
                    </p>

                    <p>
                        El otoño pinta de rojo y ambar los bosques de arce -El Momiji-, y el
                        invierno cubre de nieve el norte mientras templos como los de Kioto 
                        ganan un silencio distinto. No hay una temporada equivocada para ir
                        hay una temporada para cada version del pais.
                    </p>

                    <div className = 'chips'>
                        <div className = 'chip'>
                            <span className = 'emoji'>🌸</span>
                            <strong>Primavera</strong>
                            <small>Sakura</small>
                        </div>
                        <div className = 'chip'>
                            <span className = 'emoji'>🎆</span>
                            <strong>Verano</strong>
                            <small>Festivales</small>
                        </div>
                        <div className = 'chip'>
                            <span className = 'emoji'>🍁</span>
                            <strong>Otoño</strong>
                            <small>Momiji</small>
                        </div>
                        <div className = 'chip'>
                            <span className = 'emoji'>❄️</span>
                            <strong>Invierno</strong>
                            <small>Nieve</small>
                        </div>
                    </div>
                </div>
                <div className = 'media'>
                    <Imagenes
                        Imagen = {'https://drive.google.com/thumbnail?id=1Wj4bbg-7ul70mQ6IWYAkEnRxAp80x8Ot&sz=w1000'}
                        Titulo = {'Estacion'}
                    />
                    <span className = 'etiqueta-marco'>Momiji, El Otoño Japonés</span>
                </div>
            </div>
        </section>
    )
} export default Estaciones
import { Link } from 'react-router-dom'
import {
  FaToriiGate, FaCloudSun, FaUtensils, FaImages, FaPlane,
  FaCalendar, FaYenSign, FaLanguage,
  FaInstagram, FaYoutube, FaGithub,
} from 'react-icons/fa6'

function Footer() {
    return (
        <footer>
            <div className="wrap">

                <div className="pie-grid">

                <div>
                    <span className="pie-marca"><FaToriiGate /> <em>Japón</em></span>

                    <p className="pie-texto">
                        Este es un proyecto de Fullstack II en el que tenemos que crear una página web de un caso semestral o uno propio
                        pero en este caso tenemos que migrarlo a REACT.
                    </p>

                    <div className="redes">
                    <a href="https://www.instagram.com/h34rtf1r3/" target="_blank">
                        <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com/@thehearthfirevevo" target="_blank">
                        <FaYoutube />
                    </a>
                    <a href="https://github.com/H34RTC0D1NG" target="_blank">
                        <FaGithub />
                    </a>
                    </div>
                </div>

                <div className="pie-col">
                    <h3>Explorar</h3>
                    <ul>
                    <li><a href="#japon"><FaToriiGate /> Japón en una mirada</a></li>
                    <li><a href="#estacion"><FaCloudSun /> Las cuatro estaciones</a></li>
                    </ul>
                </div>

                <div className="pie-col">
                    <h3>Descubre</h3>
                    <ul>
                        <li>
                            <Link to = '/Gastronomia'>
                                <FaUtensils /> 
                                Gastronomía
                            </Link>
                        </li>
                        <li>
                            <Link to = '/Galeria'>
                                <FaImages /> 
                                Galería
                            </Link>
                        </li>
                        <li>
                            <Link to = '/Viajar'>
                                <FaPlane /> 
                                Antes de viajar
                            </Link>
                        </li>
                        <li>
                            <Link to="/Vuelo">
                                <FaCalendar /> 
                                Reservar vuelo
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="pie-col">
                    <h3>Datos rápidos</h3>
                    <ul>
                    <li><FaToriiGate /> Capital: Tokio</li>
                    <li><FaYenSign /> Moneda: Yen (¥)</li>
                    <li><FaLanguage /> Idioma: Japonés</li>
                    </ul>
                </div>

                </div>

                <div className="pie-abajo">
                <span>Creado por Isam Mejias / Proy Fullstack II</span>
                <span>Sección 001D / React</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer
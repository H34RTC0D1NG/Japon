import { FaToriiGate } from 'react-icons/fa6'
import { Link } from "react-router-dom"
import '../../Css/Seccion_0.css'

function Navbar() {
    return (

        <nav className = 'navbar navbar-expand bg-dark fixed-top'>
            <div className = 'container'>
                
                <span className = 'marca navbar-brand text-white'>
                    <FaToriiGate /> 
                    <strong><em>Japón</em></strong>
                </span>

                <div className = 'navbar-nav'>
                    
                    <Link className = 'nav-link text-white' to = '/'>
                        Inicio
                    </Link>

                    <Link className = 'nav-link text-white' to = '/Estaciones'>
                        Estaciones
                    </Link>

                    <Link className = 'nav-link text-white' to = '/Galeria'>
                        Galeria
                    </Link>

                    <Link className = 'nav-link text-white' to = '/Gastronomia'>
                        Gastronomia
                    </Link>

                    <Link className = 'nav-link text-white' to = '/Vuelos'>
                        Vuelos
                    </Link>

                    <Link className = 'nav-link text-white' to = '/Contacto'>
                        Contacto
                    </Link>
                    
                </div>
            </div>
        </nav>
   
    )
} export default Navbar
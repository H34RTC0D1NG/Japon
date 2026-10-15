import { Link } from "react-router-dom"
import '../../Css/Seccion_0.css'

function Explorar() {
    return (
        <button className = 'btn btn-rojo'>
            <Link to = '/Vuelos'>
                Empezar a Explorar
            </Link>
        </button>
    )
} export default Explorar
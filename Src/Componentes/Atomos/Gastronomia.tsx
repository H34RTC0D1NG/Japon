import { Link } from "react-router-dom"
import '../../Css/Seccion_0.css'

function Gastronomia() {
    return (
        <button className = 'btn btn-borde'>
            <Link to = '/Gastronomia'>
                Ver Gastronomia
            </Link>
        </button>
    )
} export default Gastronomia
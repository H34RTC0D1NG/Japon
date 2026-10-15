import Boton from "../Atomos/Boton"

interface CardProps {
    
    Titulo          : string;
    Descripcion     : string;
    Precio          : number;
    Imagen          : string;
    ErrorImg        : string;

} function CardVuelos({ Titulo, Descripcion, Precio, Imagen, ErrorImg } : CardProps) {
    return (
        <div className = 'card' style = {{ width : '20rem' }}>
            <img
                className = 'card-img-top' 
                src = {Imagen}
                alt = {ErrorImg}
                style = {{ height : '200px' }} 
            />

            <div className = 'card-body d-flex flex-column'>
                <h1 className = 'card-title'> {Titulo}        </h1>
                <p className = 'card-text'>   {Descripcion}   </p>
                <p className = 'card-text'>  ${Precio}        </p>
                <div className = 'mt-auto'>
                    <Boton />
                </div>
            </div>

        </div>
    )
} export default CardVuelos
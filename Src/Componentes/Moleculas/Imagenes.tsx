interface ImgProp {
    Imagen : string;
    Titulo : string;
}

function Imagenes({ Imagen, Titulo } : ImgProp) {
    return (
        <div className = 'Caja'>
            <img 
                className = 'Cubo'
                src = {Imagen} 
                alt = {Titulo} 
            />
        </div>
    )
} export default Imagenes
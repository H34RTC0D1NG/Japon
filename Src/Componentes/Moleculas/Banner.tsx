import '../../Css/Seccion_0.css'

interface ImgProp {
    Imagen : string;
    Titulo : string;
}

function Banner({ Imagen, Titulo } : ImgProp) {
    return (
        <div className = 'Box'>
            <img
                className = 'Banner' 
                src = {Imagen} 
                alt = {Titulo} 
            />
        </div>
    )
} export default Banner
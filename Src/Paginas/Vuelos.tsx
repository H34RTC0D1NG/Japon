import CardVuelos from "../Componentes/Moleculas/CardVuelos"
import Banner from "../Componentes/Moleculas/Banner"

function Vuelos() {
    return (

        <div className = ''>
            <Banner
                Titulo = 'Japón'
                Imagen = 'https://drive.google.com/thumbnail?id=1TAKWp3_ctW9-pGjD__A05fTOfJfdMjxc&sz=w1000'
            />

            <div className = 'container mt-4'>
                <h1>Vuelos</h1>
                <div className = 'd-flex gap-5'>
                    <CardVuelos 
                        Titulo = 'Chile -> Japón/Osaka'
                        Descripcion = 'Vuelo Directo sin Intercambio'
                        Precio = {1200000}
                        ErrorImg = 'Imagen No Encontrada'
                        Imagen = '../../public/Img/01.jpg'
                    />
                    <CardVuelos 
                        Titulo = 'Chile -> Japón/Osaka'
                        Descripcion = 'Vuelo Directo sin Intercambio'
                        Precio = {1200000}
                        ErrorImg = 'Imagen No Encontrada'
                        Imagen = '../../public/Img/01.jpg'
                    />
                    <CardVuelos 
                        Titulo = 'Chile -> Japón/Osaka'
                        Descripcion = 'Vuelo Directo sin Intercambio'
                        Precio = {1200000}
                        ErrorImg = 'Imagen No Encontrada'
                        Imagen = '../../public/Img/01.jpg'
                    />
                    <CardVuelos 
                        Titulo = 'Chile -> Japón/Osaka'
                        Descripcion = 'Vuelo Directo sin Intercambio'
                        Precio = {1200000}
                        ErrorImg = 'Imagen No Encontrada'
                        Imagen = '../../public/Img/01.jpg'
                    />
                    <CardVuelos 
                        Titulo = 'Chile -> Japón/Osaka'
                        Descripcion = 'Vuelo Directo sin Intercambio'
                        Precio = {1200000}
                        ErrorImg = 'Imagen No Encontrada'
                        Imagen = '../../public/Img/01.jpg'
                    />
                </div>
            </div>
        </div>
    )
} export default Vuelos
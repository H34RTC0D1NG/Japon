import Navbar from '../Componentes/Organismos/Navbar'
import Footer from '../Componentes/Organismos/Footer'
import { Routes, Route } from 'react-router-dom'

import Estaciones from '../Paginas/Estaciones'
import Inicio from '../Paginas/Inicio'
import Vuelos from '../Paginas/Vuelos'

import '../Css/Seccion_0.css'

function App() {
    return (
        <>

            <Navbar />

            <Routes>

                <Route 
                    path = '/'
                    element = {<Inicio />}
                />
                <Route 
                    path = '/Estaciones'
                    element = {<Estaciones />}
                />
                <Route 
                    path = '/Vuelos'
                    element = {<Vuelos />}
                />

            </Routes>

            <Footer />

        </>
    )
} export default App
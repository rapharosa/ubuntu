import { Routes, Route, Navigate } from "react-router-dom"
import Arrecadados from "../componentes/arrecadados/Arrecadados"
import Doados from "../componentes/doados/Doados"
import Pagina from "../componentes/pagina/Pagina"
import Sobre from "../componentes/sobre/Sobre"
export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Pagina/>} />
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/arrecadados" element={<Arrecadados/>}/>
            <Route path="/doados" element={<Doados/>}/>
        </Routes>
    )
}
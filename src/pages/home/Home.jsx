
import { Header } from "../../components/header/header/Header"
import { InputBusqueda } from "../../components/input/InputBusqueda"

export const Home = () => {
    return (
        <>
            <Header 
            title="Bienvenidos al proyecto 5" 
            subtitle="Esto es una pagina web diseñada para el consumo de una API" 
            color="info" />

            <h2>Esta pagina se centra en llamar a una Api externa </h2>
            
            <div>
                <InputBusqueda />
            </div>
        </>
    )
}
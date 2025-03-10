import { Contador } from "../../components/header/contador/Contador"
import { Header } from "../../components/header/header/Header"

export const Home = () => {
    return (
        <>
            <Header 
            title="Bienvenidos al proyecto 5" 
            subtitle="ESto es una pagina web diseñada para el consumo de una API" 
            color="info" />

            <h2>Esto deberia borrarse despues</h2>
            <Contador />
        </>
    )
}
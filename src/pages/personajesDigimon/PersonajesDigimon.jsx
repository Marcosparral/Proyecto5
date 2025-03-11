import { useEffect, useState } from "react";
import { CardDigimon } from "../../components/card/CardDigimon";
import { getAllPersonajes } from "../../services/ApiDigimon"

export const PersonajesDigimon = () => {
    const [ personajes, setPersonajes ] = useState([]);
    
    useEffect(() => {
        const handleApiResponse = async () => {
            const personajesResponse = await getAllPersonajes();
            setPersonajes(personajesResponse.content);  
            
        }
        handleApiResponse();
    }, [])

   
    
    return (
        <>
            <h1>Lista de Personajes</h1>
            {personajes.map(personaje => (
                <CardDigimon key={personaje.id} personaje={personaje}/>
            ))
            }
        </>

    )   
}
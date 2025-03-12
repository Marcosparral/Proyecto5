import { useEffect, useState } from "react";
import { getAllPersonajes } from "../services/ApiDigimon";

export const useApiDigimon = () => {
    
    const [ personajes, setPersonajes ] = useState([]);

    useEffect(() => {
            const handleApiReponse = async () => {
        try {
                const personajesResponse = await getAllPersonajes();
                setPersonajes([...personajesResponse.content]);
            } catch (error) {
                console.error(error);
            }
        }
        handleApiReponse();
    }, [])
    
    return personajes
}
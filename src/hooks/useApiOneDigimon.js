import { useState } from "react";
import { getPersonajeByName } from "../services/ApiDigimon";
import { useEffect } from "react";

export const useApiOneDigimon = (request) => {
    const [personaje, setPersonaje] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleApiResponse = async () => {
    try {
            const personajeResponse = await getPersonajeByName(request);
            setPersonaje({ ...personajeResponse });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        
        }
    };

    handleApiResponse();

    }, [])
    return [ personaje, loading ]
}


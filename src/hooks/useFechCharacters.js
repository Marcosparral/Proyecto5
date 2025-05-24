import { useEffect, useState } from "react";
import { getAllCharacters, getCharacterByName } from "../services/fetchRick";

export const useFetchCharacters = () => {

    const [characters, setCharacters] = useState ([]);

    useEffect(() => {
        const handleApiResponse = async () => {
            try {
                const characterResponse = await getAllCharacters();
                setCharacters([...characterResponse.content]);
            } catch (error) {
            (error)
            };
            
        };

        handleApiResponse();

    }, []);

    return characters
}

export const useFetchCharacterByname = (nameOrId) => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleApiResponse = async () => {
            try {
                const characterResponse = await getCharacterByName(nameOrId);
                setCharacter({...characterResponse});
            } catch (error) {
                console.error('Error al obtener el personaje', error);
            } finally {
                setLoading(false);
            }

        };

        handleApiResponse()
    }, []);

    return [
        character,
        loading
    ]
}
                
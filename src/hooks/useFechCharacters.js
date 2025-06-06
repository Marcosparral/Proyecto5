import { useEffect, useState } from "react";
//import { getAllCharacters } from "../services/fetchRick";

export const useFetchCharacters = (page) => {

    const [characters, setCharacters] = useState ([]);
    const [totalPages, setTotalPages ] = useState(null)
    const [loading, setLoading] = useState(null)
    
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
                if (!response) throw new Error('Error al cargar los personajes')
                const data = await response.json()
            setCharacters(data.results);
            setTotalPages(data.info.pages)
            setLoading(false)
            } catch (error) {
            (error)
            setLoading(false)
            };
            
        };

        fetchCharacters();
        

    },[page]);

    return { characters, totalPages, loading }
}


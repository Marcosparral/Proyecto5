import { useEffect, useState } from "react";

const URL_BASE = 'https://rickandmortyapi.com/api/character';

export const useFetchCharacters = (page) => {

    const [characters, setCharacters] = useState ([]);
    const [totalPages, setTotalPages ] = useState(null)
    const [loading, setLoading] = useState(null)
    
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setLoading(true)
                const response = await fetch(`${URL_BASE}?page=${page}`)
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


export const useCharacterSearch = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
  
    const searchCharacters = async (name) => {
      if (!name) return;
  
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        if (!response.ok) {
          throw new Error('No se encontraron personajes');
        }
  
        const data = await response.json();
        setCharacters(data.results);
        setError(null);
      } catch (err) {
        setCharacters([]);
        setError(err.message);
      }
    };
  
    return { characters, error, searchCharacters };
  };
  
  
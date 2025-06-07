import { useEffect, useState } from "react";

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

export const useSearchCharacters = (searchTerm) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const search = async () => {
        if (!searchTerm) return;
  
        setLoading(true);
        setError(null);
  
        try {
          const response = await fetch(`${BASE_URL}?name=${searchTerm}`);
          if (!response.ok) {
            if (response.status === 404) {
              setResults([]); // No hay resultados
            } else {
              throw new Error('Error al buscar personajes');
            }
          } else {
            const data = await response.json();
            setResults(data.results);
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      search();
    }, [searchTerm]);
  
    return { results, loading, error };
  };

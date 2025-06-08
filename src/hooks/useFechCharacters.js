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
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [currentQuery, setCurrentQuery] = useState('');
  
    const searchCharacters = async (name, newPage = 1) => {
      if (!name) return;
  
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${name}&page=${newPage}`
        );
  
        if (!response.ok) {
          throw new Error('No se encontraron personajes');
        }
  
        const data = await response.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages);
        setError(null);
        setCurrentQuery(name);
        setPage(newPage);
      } catch (err) {
        setCharacters([]);
        setTotalPages(1);
        setError(err.message);
      }
    };
  
    const nextPage = () => {
      if (page < totalPages) {
        searchCharacters(currentQuery, page + 1);
      }
    };
  
    const prevPage = () => {
      if (page > 1) {
        searchCharacters(currentQuery, page - 1);
      }
    };
  
    return {
      characters,
      error,
      searchCharacters,
      page,
      totalPages,
      nextPage,
      prevPage,
    };
  };
  
  
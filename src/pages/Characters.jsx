import { useState } from 'react';
import { useFetchCharacters } from '../hooks/useFechCharacters.js';
import { CharacterCard } from '../components/card/characterCard.jsx';

import './Characters.css'


export const CharacterList = () => {
    const [page, setPage] = useState(1)
    const { characters, totalPages, loading } = useFetchCharacters(page)

    const nextPage = () => {
        if (page < totalPages) 
            setPage((prev) => prev + 1);
        };
    
      const prevPage = () => {
        if (page > 1) 
            setPage((prev) => prev - 1);
        };
    
      if (loading) return <p>Cargando...</p>;
    
    

    return (
        <>
        <main className='container'>
            <h1>Lista de personajes</h1>
                <div class='pagination'>
                    <button onClick={prevPage} disabled={page === 1} class='prev'>Anterior</button>
                        
                    <button onClick={nextPage} disabled={page === totalPages} class='next'>Siguiente</button>
                </div>
                <div className='card-container'>
                {characters.map((character) => (
                    <CharacterCard key={character.id}
                        id={character.id}
                        image={character.image}
                        name={character.name}
                        species={character.species}
                        status={character.status}
                        type={character.type} />
                ))}
                </div>
            <div class='pagination'>
                    <button onClick={prevPage} disabled={page === 1} class='prev'>Anterior</button>
                        
                    <button onClick={nextPage} disabled={page === totalPages} class='next'>Siguiente</button>
                </div>
        </main>
        </>
    )
}
    

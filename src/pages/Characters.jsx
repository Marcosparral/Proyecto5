import { useFetchCharacters } from '../hooks/useFechCharacters.js';
import { Pagination } from '../components/pagination.js/pagination.jsx';
import { CharacterCard } from '../components/card/characterCard.jsx';
import { useState } from 'react';

import './Characters.css'

export const CharacterList = () => {
    const characters = useFetchCharacters()
    const [page, setPage] = useState(1);

    

    return (
        <>
        <main className='container'>
            <h1>Lista de personajes</h1>
            <Pagination page={page} setPage={setPage + 1}/>
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
            <Pagination />
        </main>
        </>
    )
}
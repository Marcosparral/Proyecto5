import { useFetchCharacters } from '../hooks/useFechCharacters.js';

import { CharacterCard } from '../components/card/characterCard.jsx';

import './Characters.css'

export const CharacterList = () => {
    const characters = useFetchCharacters();

    return (
        <>
        <main className='container'>
            <h1>Lista de personajes</h1>
        
            <div className='card-container'>
                {characters.map((character) => (
                    <CharacterCard key={character.id}
                        name={character.name}
                        origin={character.origin}
                        image={character.image} />
                ))}
            </div>
        </main>
        </>
    )
}
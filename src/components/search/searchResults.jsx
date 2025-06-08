import React from "react";
import './SearchBar.css';
import { CharacterCard } from "../card/characterCard";


export const SearchResults = ({ characters, page, totalPages, onNext, onPrev }) => {
    return (
      <div>
        <div className="results">
        <div className="pagination">
          <button onClick={onPrev} disabled={page === 1}>Anterior</button>
          <button onClick={onNext} disabled={page === totalPages}>Siguiente</button>
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
        </div>
  
        <div className="pagination">
          <button onClick={onPrev} disabled={page === 1}>Anterior</button>
          <button onClick={onNext} disabled={page === totalPages}>Siguiente</button>
        </div>
      </div>
    );
  };
  
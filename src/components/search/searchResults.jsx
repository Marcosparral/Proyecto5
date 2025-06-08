import React from "react";
import './SearchBar.css';
import { CharacterCard } from "../card/characterCard";

export const SearchResults = ({ characters }) => {
    return (
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
    );
  };
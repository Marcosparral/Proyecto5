import React from 'react';
import {SearchBar} from '../components/search/SearchBar';
import {SearchResults} from '../components/search/searchResults';
import {useCharacterSearch} from '../hooks/useFechCharacters';

export const SearchPage = () => {
    const {
      characters,
      error,
      searchCharacters,
      page,
      totalPages,
      nextPage,
      prevPage,
    } = useCharacterSearch();
  
    return (
      <div className="page">
        <h1>¡Comienza la busqueda de tus personajes favoritos!</h1>
        <SearchBar onSearch={(name) => searchCharacters(name, 1)} />
  
        {error && <p className="error">{error}</p>}
  
        {characters.length > 0 && (
          <SearchResults
            characters={characters}
            page={page}
            totalPages={totalPages}
            onNext={nextPage}
            onPrev={prevPage}
          />
        )}
      </div>
    );
  };
  
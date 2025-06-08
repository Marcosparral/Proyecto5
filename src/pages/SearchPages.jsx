import React from 'react';
import {SearchBar} from '../components/search/SearchBar';
import {SearchResults} from '../components/search/searchResults';
import {useCharacterSearch} from '../hooks/useFechCharacters';

export const SearchPage = () => {
  const { characters, error, searchCharacters } = useCharacterSearch();

  return (
    <div className="page">
      <h1>¡Comienza la busqueda de tu personaje favorito!</h1>
      <SearchBar onSearch={searchCharacters} />
      {error && <p className="error">{error}</p>}
      <SearchResults characters={characters} />
    </div>
  );
};
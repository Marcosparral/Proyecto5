import React, { useState } from 'react';
import './SearchBar.css';


export const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
    };
  
    return (
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    );
  };
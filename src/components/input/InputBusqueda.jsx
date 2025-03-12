import { useState } from 'react';

export const InputBusqueda = ({placeholderText, onSearch}) => {
    const [ digimonBuscado, setDigimonBuscado ] = useState('');

    const handleSearch = (event) => {
        setDigimonBuscado(event.target.value);
        onSearch(event.target.value);

    }

    return (
        <>
            <input 
            type='text' 
            placeholder={placeholderText}
            value={digimonBuscado}
            onChange={handleSearch}
            />
            
        </>
    )
}
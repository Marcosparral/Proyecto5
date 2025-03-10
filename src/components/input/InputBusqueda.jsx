import { useState } from 'react';

export const InputBusqueda = () => {
    const [ textInput, setTextInput ] = useState('');

    const handleSubmit = (event) => {
        setTextInput(event.target.value);
        console.log(event.target.value);

    }

    return (
        <>
            <input 
            type='text' 
            placeholder='Buscar...'
            value={textInput}
            onChange={handleSubmit}
            />
            <button onClick={handleSubmit}>Buscar</button>

            <p>Escribiste: {textInput}</p>
        </>
    )
}
const URL_BASE = 'https://rickandmortyapi.com/api';

export const getAllCharacters = async () => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character`);
        if (!response.ok) 
            throw new Error('Error al obtener los personajes');

            const data = await response.json();
            console.log(data)
            return (data);
        
        
        } catch (error) {
            console.error('Error al buscar los personajes', error);
            throw new Error;
            
        };
};

export const getCharacterByName = async (request) => {
    try {
        const response = await fetch(`${URL_BASE}/character/${request}`);
        if (!response.ok) {
            throw new Error('Error al obtener el personaje');
        }
        const data = await response.json();
        return data;
        } catch (error) {
            console.error('Error al buscar el personaje', error);
            throw new Error;
        };
};



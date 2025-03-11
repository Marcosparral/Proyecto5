const URL_BASE = "https://digi-api.com/api/v1";

export const getAllPersonajes = async () => {
    try {
        const response = await fetch(`${URL_BASE}/digimon`);
        if (!response.ok) throw new Error('No se pudo obtener la información');
        
        const data = await response.json();
        return data;
    }   
    catch (error) {
        throw new Error('Error en la petición'(error));
    }
}


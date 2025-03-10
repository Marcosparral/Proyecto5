const URL_BASE = " https://www.dragonball-api.com/api";

export const getPersonajesDBZ = async () => {
    try {
        const response = await fetch(`${URL_BASE}/character`);
        if (!response.ok) throw new Error('No se pudo obtener la información');
        const data = await response.json();
        return data;
    }   
    catch (error) {
        throw new Error('Error en la petición'(error));
    }
}

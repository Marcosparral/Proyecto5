import { useEffect, useState } from "react";
import { CardDBZ } from "../../components/card/CardDBZ";
import { getPersonajesDBZ } from "../../services/ApiDBZ"

export const DbzPersonajes = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const handleApiResponse = async () => {
            const personajesResponse = await getPersonajesDBZ();
            const personajesArray = personajesResponse.content;
            setPersonajes(personajesArray);
           
        }
        handleApiResponse();
    }, [])

    return (
        <>
        <h1>Personajes de Dragon Ball Z</h1>
        <ul>
            {personajes.map((personaje) => (
                <CardDBZ key={personaje.id} personaje={personaje}/>
            ))}
        </ul>
        </>

    )
}
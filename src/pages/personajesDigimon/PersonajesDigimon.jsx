import { useState } from "react";
import { CardDigimon } from "../../components/card/CardDigimon";

import { useApiDigimon } from "../../hooks/useApiDigimon";
import { useApiOneDigimon } from "../../hooks/useApiOneDigimon";
import { DigimonDetails } from "../../components/card/digimonDetails/DigimonDetails";
import { InputBusqueda } from "../../components/input/InputBusqueda";

import './PersonajesDigimon.css';

export const PersonajesDigimon = () => {
    
    const [ busqueda, setBusqueda ] = useState('');
    const personajes = useApiDigimon();
    const [ personajeSelected, loading ] =useApiOneDigimon('2');
    
   
    

    return (
        <>
        <main className="container">
            <header>
            <h1>Lista de Personajes</h1>
            </header>

            <InputBusqueda onSearch={setBusqueda}/>
            <div className="card-container">
            {personajes.map((personaje) => (
                <CardDigimon key={personaje.id} personaje={personaje}/>
            ))
            }
            </div>
            
            <div>
               { loading ? <p>Cargando...</p> : <DigimonDetails personaje={personajeSelected} />}
            </div>
        </main>
        </>

    )   
}
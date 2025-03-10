import { useState } from 'react';

export const Contador = () => {
    
    const [ contador, setContador ] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1)
        //contador += 1
    }
    const decrementarContador = () => {
        setContador(contador - 1)
        //contador -= 1
    }
    return (
        <>
            <h2>Contador</h2>
            <h3>{contador}</h3>
            <button onClick={incrementarContador}>+</button>
            <button onClick={decrementarContador}>-</button>
        </>
    )
}
import { useState } from "react";

export const useContador = (initialValue) => {
   
    const [ contador, setContador ] = useState(initialValue);

    const handleIncrementarContador = () => {
        setContador(contador + 1)
    }

    const handleDecrementarContador = () => {
        setContador(contador - 1)
    }

    return { contador, handleIncrementarContador, handleDecrementarContador }
}
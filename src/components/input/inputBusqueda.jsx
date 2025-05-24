import { useState } from "react";

export const InputBusqueda = ({placeHoldertext, onSearch, buscado}) => {
    const [terminoBuscado, setTerminoBuscado] = useState('');

    const handleSearch = (event) => {
        setTerminoBuscado(event.target.value)
        onSearch(event.target.value)
    }

    return (
    <>
        <input
            type="text"
            value={terminoBuscado}
            onChange={handleSearch}
            placeholder={placeHoldertext}
        />

    </>
    )
}
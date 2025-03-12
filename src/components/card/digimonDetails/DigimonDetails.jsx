

export const DigimonDetails = ({personaje}) => {
    return (
        <div className="card">
            <div className="card_header">
                <img src={personaje.images[0].href} alt={personaje.name} />
                <h3>{personaje.name}</h3>
                <p><span>ID: </span>{personaje.id}</p>
            </div>

            <div className="card-body">
                <div>
                    <p><span>Nivel: </span>{personaje.levels[0].level}</p>
                    <p><span>Atributo: </span>{personaje.attributes[0].attribute}</p>
                    <p><span>Tipo: </span>{personaje.types[0].type}</p>
                    
                </div>

                <p>{personaje.descriptions[1].description}</p>
                
            </div>
        </div>
    )
}